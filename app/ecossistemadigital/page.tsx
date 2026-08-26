import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecossistema Digital | William Siqueira',
  description: 'Links e Ecossistema Digital',
};

export default function EcossistemaDigital() {
  return (
    <div style={{ margin: 0, padding: 0, height: '100dvh', overflow: 'hidden' }}>
      <iframe 
        src="/ecossistema_digital_assets/index.html" 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Ecossistema Digital"
      />
    </div>
  );
}
