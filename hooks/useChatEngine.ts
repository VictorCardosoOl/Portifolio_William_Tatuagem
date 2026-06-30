import { useState, useCallback, useRef, useEffect } from 'react';
import { WHATSAPP_PHONE } from '@/data';

export interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
}

interface ChatState {
  name: string;
  placement: string;
  idea: string;
}

export const useChatEngine = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Olá. Bem-vindo ao estúdio W. Siqueira.', sender: 'bot' },
    { id: '2', text: 'Sou o assistente virtual. Para começarmos, qual é o seu nome?', sender: 'bot' }
  ]);
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [userData, setUserData] = useState<ChatState>({ name: '', placement: '', idea: '' });
  
  // Track mounted state to prevent state updates after unmount
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const processInput = useCallback((rawText: string) => {
    const sanitized = rawText.trim().slice(0, 300);
    if (!sanitized) return;

    const userMsg: Message = { id: crypto.randomUUID(), text: sanitized, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      let nextBotMsg = '';
      let nextStep = step + 1;

      if (step === 0) {
        setUserData(prev => ({ ...prev, name: sanitized }));
        nextBotMsg = `Prazer, ${sanitized}. Em qual parte do corpo você imagina sua tatuagem?`;
      } else if (step === 1) {
        setUserData(prev => ({ ...prev, placement: sanitized }));
        nextBotMsg = 'Perfeito. E qual é a ideia principal ou conceito?';
      } else if (step === 2) {
        setUserData(prev => ({ ...prev, idea: sanitized }));
        nextBotMsg = 'Excelente. Tenho o que preciso. Vou gerar um link direto para o WhatsApp oficial com esse resumo.';
      }

      if (nextBotMsg) {
        setMessages(prev => [...prev, { id: crypto.randomUUID(), text: nextBotMsg, sender: 'bot' }]);
      }
      
      setIsTyping(false);
      setStep(nextStep);
    }, 1200);
  }, [step]);

  const generateWhatsAppLink = useCallback(() => {
    const text = `*Nova Solicitação via Site*%0A%0A*Nome:* ${userData.name}%0A*Local:* ${userData.placement}%0A*Ideia:* ${userData.idea}%0A%0AGostaria de orçar esse projeto.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${text}`;
  }, [userData]);

  return {
    messages,
    isTyping,
    step,
    processInput,
    generateWhatsAppLink,
    isComplete: step > 2
  };
};