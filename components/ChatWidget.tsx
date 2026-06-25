import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowRight } from 'lucide-react';
import { useChatEngine } from '../hooks/useChatEngine';
import { useFocusTrap } from '../hooks/useFocusTrap';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);
  
  const { messages, isTyping, processInput, generateWhatsAppLink, isComplete } = useChatEngine();

  // Trap focus inside the chat widget when it's open
  useFocusTrap(widgetRef, isOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping, isOpen]);

  // Focus the input reactively without timeout when opened
  useEffect(() => {
    if (isOpen && !isComplete) {
      inputRef.current?.focus();
    }
  }, [isOpen, isComplete]);

  // Escape key handler for closing the chat dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    processInput(inputValue);
    setInputValue('');
  };

  const handleOpen = () => {
      setIsOpen(true);
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON */}
      <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 z-[60] bg-ink-black dark:bg-paper-light text-paper-light dark:text-ink-black p-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        aria-label="Abrir Chat de Atendimento"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <MessageSquare className="w-6 h-6" strokeWidth={1.5} />
      </button>

      {/* CHAT WINDOW */}
      <div 
        ref={widgetRef}
        role="dialog"
        aria-label="Assistente de Atendimento Virtual"
        aria-modal="true"
        className={`fixed bottom-6 right-6 z-[70] w-[90vw] md:w-[400px] bg-paper-light dark:bg-paper-dark border border-ink-light dark:border-white/10 shadow-2xl rounded-sm overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col origin-bottom-right
        ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-12 pointer-events-none'}`}
        style={{ height: 'min(600px, 80vh)' }}
        tabIndex={-1}
      >
        
        {/* HEADER - Editorial Style */}
        <div className="bg-paper-warm dark:bg-black/40 text-ink-black dark:text-paper-light p-4 flex justify-between items-center border-b border-ink-light dark:border-white/5">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-700 dark:bg-green-500 rounded-full animate-pulse"></div>
                <div>
                    <h3 className="font-serif italic text-lg leading-none">W. Siqueira</h3>
                    <p className="font-sans text-[9px] uppercase tracking-widest opacity-60">Concierge</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-ink-medium transition-colors" aria-label="Fechar Chat">
                <X size={20} strokeWidth={1} />
            </button>
        </div>

        {/* MESSAGES AREA */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-ink-light dark:scrollbar-thumb-ink-dark">
            {messages.map((msg) => (
                <div 
                    key={msg.id} 
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                    <div 
                        className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${
                            msg.sender === 'user' 
                            ? 'bg-ink-black text-paper-light rounded-sm font-sans' 
                            : 'bg-white dark:bg-white/5 text-ink-black dark:text-gray-200 rounded-sm border border-ink-light dark:border-white/5 font-serif italic'
                        }`}
                    >
                        {msg.text}
                    </div>
                    <span className="text-[9px] text-ink-medium mt-2 uppercase tracking-wider">
                        {msg.sender === 'user' ? 'Você' : 'Atelier'}
                    </span>
                </div>
            ))}

            {isTyping && (
                <div className="flex items-start">
                    <div className="bg-white dark:bg-white/5 p-4 rounded-sm border border-ink-light dark:border-white/5 flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-ink-medium rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-ink-medium rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-ink-medium rounded-full animate-bounce delay-200"></span>
                    </div>
                </div>
            )}
            
            <div ref={messagesEndRef} />
        </div>

        {/* FOOTER / INPUT */}
        <div className="p-4 bg-paper-light dark:bg-black/20 border-t border-ink-light dark:border-white/5">
            {!isComplete ? (
                <form onSubmit={handleSubmit} className="flex gap-2 relative">
                    <input 
                        ref={inputRef}
                        type="text" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Digite sua resposta..."
                        className="w-full bg-transparent border-none focus:ring-0 text-sm font-sans text-ink-black dark:text-white placeholder:text-ink-medium px-0"
                    />
                    <button 
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="p-2 text-ink-black dark:text-white disabled:opacity-30 hover:text-ink-medium transition-colors"
                        aria-label="Enviar mensagem"
                    >
                        <Send size={18} />
                    </button>
                </form>
            ) : (
                <a 
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-ink-black hover:bg-ink-dark text-paper-light py-3 px-4 rounded-sm flex items-center justify-center gap-2 font-sans text-xs font-bold uppercase tracking-widest transition-all duration-300"
                >
                    Continuar no WhatsApp
                    <ArrowRight size={14} />
                </a>
            )}
        </div>

      </div>
    </>
  );
};

export default ChatWidget;