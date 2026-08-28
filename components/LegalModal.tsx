"use client";

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { TEXTOS_GERAIS, WHATSAPP_PHONE } from '@/config/data';

interface LegalModalProps {
  isOpen?: boolean;
  initialTab?: 'privacy' | 'terms';
  onClose?: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen: controlledIsOpen,
  initialTab: controlledInitialTab = 'privacy',
  onClose: controlledOnClose,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  // Controlado vs Não-controlado (escuta evento global para abrir de qualquer lugar)
  const isModalOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;

  useEffect(() => {
    if (controlledInitialTab) {
      setActiveTab(controlledInitialTab);
    }
  }, [controlledInitialTab]);

  useEffect(() => {
    const handleOpenEvent = (e: CustomEvent<{ tab?: 'privacy' | 'terms' }>) => {
      if (e.detail?.tab) {
        setActiveTab(e.detail.tab);
      }
      setInternalOpen(true);
    };

    window.addEventListener('open-legal-modal' as any, handleOpenEvent);
    return () => {
      window.removeEventListener('open-legal-modal' as any, handleOpenEvent);
    };
  }, []);

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        handleClose();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-paper-light dark:bg-[#141414] text-ink-black dark:text-gray-200 border border-ink-black/10 dark:border-white/10 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do Modal */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-ink-black/10 dark:border-white/10 shrink-0">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-bold text-ink-medium dark:text-gray-400 block mb-1">
              {TEXTOS_GERAIS.marca} • Transparência
            </span>
            <h2 id="legal-modal-title" className="font-serif italic text-2xl md:text-3xl font-light text-ink-black dark:text-white">
              {activeTab === 'privacy' ? 'Política de Privacidade & LGPD' : 'Termos de Uso & Propriedade'}
            </h2>
          </div>

          <button
            onClick={handleClose}
            className="p-2.5 rounded-full hover:bg-ink-black/5 dark:hover:bg-white/10 transition-colors text-ink-black dark:text-white"
            aria-label="Fechar janela"
            type="button"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Tabs de Seleção */}
        <div className="flex border-b border-ink-black/10 dark:border-white/10 shrink-0 bg-[#EFECE6] dark:bg-[#0d0d0d]">
          <button
            onClick={() => setActiveTab('privacy')}
            type="button"
            className={`flex-1 py-3.5 px-6 font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === 'privacy'
                ? 'border-ink-black dark:border-white text-ink-black dark:text-white bg-paper-light dark:bg-[#141414]'
                : 'border-transparent text-ink-medium dark:text-gray-500 hover:text-ink-black dark:hover:text-gray-300'
            }`}
          >
            <ShieldCheck size={16} />
            Privacidade & LGPD
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            type="button"
            className={`flex-1 py-3.5 px-6 font-sans text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 border-b-2 transition-colors ${
              activeTab === 'terms'
                ? 'border-ink-black dark:border-white text-ink-black dark:text-white bg-paper-light dark:bg-[#141414]'
                : 'border-transparent text-ink-medium dark:text-gray-500 hover:text-ink-black dark:hover:text-gray-300'
            }`}
          >
            <FileText size={16} />
            Termos de Uso
          </button>
        </div>

        {/* Conteúdo com Scroll */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 font-sans text-sm md:text-base leading-relaxed text-ink-dark dark:text-gray-300 font-light">
          {activeTab === 'privacy' ? (
            <>
              <section className="space-y-2">
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">1. Controlador dos Dados</h3>
                <p>
                  O estúdio de tatuagem privado <strong>William Siqueira Tattoo</strong> (Rua Baltazar Carrasco, 70 - Pinheiros, São Paulo - SP) atua como controlador de dados nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">2. Dados Coletados e Finalidade</h3>
                <p>
                  • <strong>Navegação:</strong> Nosso site utiliza cookies analíticos por meio do <strong>Google Analytics 4 (GA4)</strong> para fins exclusivamente estatísticos (volume de visitas, páginas populares e desempenho técnico). Nenhum dado que identifique você diretamente é comercializado.
                </p>
                <p>
                  • <strong>Atendimento e Orçamentos:</strong> Ao entrar em contato voluntariamente via WhatsApp ou E-mail, você fornece dados como nome, telefone e referências visuais da tatuagem desejada. Esses dados são utilizados unicamente para elaboração de orçamento, briefing e agendamento da sua sessão.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">3. Armazenamento e Segurança</h3>
                <p>
                  Adotamos medidas técnicas para manter suas informações protegidas contra acessos não autorizados. Não compartilhamos, vendemos ou alugamos suas informações pessoais a terceiros.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">4. Seus Direitos (Art. 18 da LGPD)</h3>
                <p>
                  Você tem o direito de solicitar a qualquer momento a confirmação da existência de tratamento, a correção de dados incompletos ou a exclusão definitiva dos seus dados de atendimento através do nosso e-mail oficial: <a href="mailto:willtintamais@gmail.com" className="underline font-medium hover:text-ink-black dark:hover:text-white">willtintamais@gmail.com</a> ou pelo WhatsApp oficial (+{WHATSAPP_PHONE}).
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">1. Direitos Autorais e Propriedade Intelectual</h3>
                <p>
                  Todas as tatuagens, ilustrações, fotografias de portfólio, projetos e textos exibidos neste site são criações 100% autorais e propriedade intelectual exclusiva de <strong>William Siqueira</strong>. É expressamente proibida a reprodução, cópia comercial ou reutilização não autorizada de qualquer arte aqui exposta.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">2. Política de Agendamento e Sessões</h3>
                <p>
                  • Os atendimentos no estúdio são realizados estritamente com horário pré-agendado.
                </p>
                <p>
                  • A reserva de data pode exigir sinal financeiro para garantia de agenda e início da criação do desenho autoral personalizado.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">3. Responsabilidade no Ritual de Cicatrização</h3>
                <p>
                  O estúdio segue rigorosos padrões sanitários e de biossegurança durante a aplicação. O resultado final e a longevidade da tatuagem dependem do cumprimento estrito dos cuidados pré e pós-sessão descritos em nosso protocolo oficial ("O Ritual da Cicatrização").
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">4. Idade Mínima</h3>
                <p>
                  Os serviços de tatuagem são prestados exclusivamente a pessoas com idade igual ou superior a 18 anos completos na data da sessão.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Footer do Modal */}
        <div className="p-4 md:p-6 border-t border-ink-black/10 dark:border-white/10 bg-[#EFECE6] dark:bg-[#0d0d0d] flex justify-end shrink-0">
          <button
            onClick={handleClose}
            type="button"
            className="bg-ink-black dark:bg-white text-paper-light dark:text-ink-black px-6 py-2.5 font-sans text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
