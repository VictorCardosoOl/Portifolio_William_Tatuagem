import { useEffect, useCallback, Dispatch, SetStateAction } from 'react';

interface UseGalleryNavigationProps {
  activeImage: string | null;
  setActiveImage: Dispatch<SetStateAction<string | null>>;
  gallery: string[];
  onClose: () => void;
}

export function useGalleryNavigation({
  activeImage,
  setActiveImage,
  gallery,
  onClose
}: UseGalleryNavigationProps) {
  const handleNextImage = useCallback(() => {
    if (!activeImage || gallery.length === 0) return;
    const currentIndex = gallery.indexOf(activeImage);
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % gallery.length;
      setActiveImage(gallery[nextIndex]);
    }
  }, [activeImage, gallery, setActiveImage]);

  const handlePrevImage = useCallback(() => {
    if (!activeImage || gallery.length === 0) return;
    const currentIndex = gallery.indexOf(activeImage);
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + gallery.length) % gallery.length;
      setActiveImage(gallery[prevIndex]);
    }
  }, [activeImage, gallery, setActiveImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImage !== null) {
        if (e.key === 'Escape') {
          setActiveImage(null);
        } else if (e.key === 'ArrowRight') {
          handleNextImage();
        } else if (e.key === 'ArrowLeft') {
          handlePrevImage();
        }
      } else {
        if (e.key === 'Escape') {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, activeImage, handleNextImage, handlePrevImage]);

  return { handleNextImage, handlePrevImage };
}
