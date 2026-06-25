import React, { createContext, useContext, useState, useCallback } from 'react';

interface LiveAnnouncerContextType {
  announce: (message: string) => void;
}

const LiveAnnouncerContext = createContext<LiveAnnouncerContextType>({
  announce: () => {},
});

export const useLiveAnnouncer = () => useContext(LiveAnnouncerContext);

export const LiveAnnouncerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [announcement, setAnnouncement] = useState('');

  const announce = useCallback((message: string) => {
    setAnnouncement(message);
    setTimeout(() => setAnnouncement(''), 1000);
  }, []);

  return (
    <LiveAnnouncerContext.Provider value={{ announce }}>
      {children}
      <div 
        role="status" 
        aria-live="polite" 
        style={{
          clip: 'rect(0, 0, 0, 0)',
          margin: '-1px',
          padding: '0',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          position: 'absolute',
          border: '0',
          whiteSpace: 'nowrap'
        }}
      >
        {announcement}
      </div>
    </LiveAnnouncerContext.Provider>
  );
};
export default LiveAnnouncerProvider;
