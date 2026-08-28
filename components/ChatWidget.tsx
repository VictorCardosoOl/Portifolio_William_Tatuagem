"use client";

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/data';

const ChatWidget: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl('Olá, William! Gostaria de fazer um orçamento para minha tatuagem.');

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] bg-ink-black dark:bg-paper-light text-paper-light dark:text-ink-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Falar no WhatsApp"
      data-tracking="chat-widget-whatsapp-direct"
    >
      <MessageSquare className="w-6 h-6" strokeWidth={1.5} />
    </a>
  );
};

export default ChatWidget;
