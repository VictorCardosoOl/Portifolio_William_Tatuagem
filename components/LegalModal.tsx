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
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">1. Políticas de Privacidade e Conformidade com a LGPD</h3>
                <p className="font-bold mt-4">1.1. Coleta e Tratamento de Dados</p>
                <p>
                  Nosso compromisso com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) é rigoroso. Coletamos apenas os dados estritamente necessários para o funcionamento das aplicações e para a prestação dos serviços contratados.
                </p>
                <p className="font-bold mt-4">1.2. Gerenciamento de Cookies e Scripts de Terceiros</p>
                <p>
                  Para garantir a sua privacidade e a conformidade técnica com a LGPD, nossa plataforma utiliza um sistema de gerenciamento de consentimento rígido. Nenhum script de terceiros (como ferramentas de analytics, rastreadores de marketing ou pixels de conversão) é carregado ou executado na aplicação antes que o usuário forneça seu consentimento explícito através do nosso banner de cookies. O usuário pode, a qualquer momento, revogar esse consentimento acessando as configurações de privacidade no rodapé do site.
                </p>
                <p className="font-bold mt-4">1.3. Segurança e Limitação de Responsabilidade sobre Vazamentos</p>
                <p>
                  Empregamos as melhores práticas de desenvolvimento, criptografia e estruturação de banco de dados para garantir a segurança das informações. No entanto, nenhum sistema é imune a ameaças externas. Em caso de ataques cibernéticos de proporções imprevistas, falhas oriundas da infraestrutura dos provedores de hospedagem terceirizados ou vulnerabilidades exploradas por força maior que resultem em vazamento de dados, a responsabilidade do desenvolvedor e da plataforma é limitada às obrigações de notificação tempestiva aos usuários e à Autoridade Nacional de Proteção de Dados (ANPD), não cabendo responsabilização civil ou financeira por danos indiretos decorrentes de atos criminosos de terceiros.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-2">
                <h3 className="font-serif italic text-lg font-normal text-ink-black dark:text-white">2. Termos de Serviço e Uso da Aplicação</h3>
                <p className="font-bold mt-4">2.1. Disponibilidade do Sistema e SLA</p>
                <p>
                  Buscamos manter nossos sistemas e sites operacionais com a maior taxa de disponibilidade possível. Contudo, para garantir a segurança da infraestrutura e responder a eventuais ataques cibernéticos (como ataques DDoS), manutenções emergenciais ou instabilidades nos servidores de hospedagem e nuvem, reservamo-nos o direito de manter a plataforma indisponível por um período de até 72 (setenta e duas) horas consecutivas. Esta janela de tempo é considerada aceitável e necessária para a contenção de danos e restauração segura dos serviços, não configurando quebra de contrato, falha na prestação de serviço ou motivo para reembolso/multa.
                </p>
                <p className="font-bold mt-4">2.2. Propriedade Intelectual e Funcionalidades Sob Medida</p>
                <p>
                  Todo o código-fonte, arquitetura, design visual e estruturação dos sistemas desenvolvidos são de propriedade intelectual exclusiva do desenvolvedor titular.
                  Caso o cliente solicite o desenvolvimento de funcionalidades sob medida, integrações específicas ou módulos personalizados, o código e a lógica de programação subjacentes a essas novas funcionalidades permanecem como propriedade intelectual exclusiva do desenvolvedor. O cliente recebe uma licença de uso irrevogável (enquanto durar o contrato) para operar a funcionalidade em seu projeto, mas não detém os direitos autorais para revenda, redistribuição ou reaproveitamento do código em outras plataformas não autorizadas, a menos que uma cessão total de direitos seja expressamente acordada e precificada em contrato apartado.
                </p>
                <p className="font-bold mt-4">2.3. Atualizações destes Termos</p>
                <p>
                  Reservamo-nos o direito de atualizar estes Termos e Políticas periodicamente para refletir mudanças tecnológicas ou legais. Recomendamos a revisão constante desta página.
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
