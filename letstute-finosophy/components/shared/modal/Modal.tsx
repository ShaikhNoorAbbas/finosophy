import { useEffect, useState } from 'react';

interface ModalConfig {
  orientation: 'portrait' | 'landscape';
}

interface ModalProps {
  open: boolean;
  src: string;
  onClose: () => void;
  modalConfig: ModalConfig;
}

export default function Modal({ open, src, onClose, modalConfig }: ModalProps) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  // Calculate paddingBottom based on orientation
  const paddingBottom =
    modalConfig.orientation === 'portrait' ? (16 / 9) * 100 : (9 / 16) * 100;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80 p-8">
      <button
        className="mb-4 rounded bg-red-500 p-2 text-white"
        onClick={handleClose}
      >
        Close X
      </button>
      <div className="w-full max-w-4xl overflow-auto rounded-lg bg-white shadow-lg">
        <div
          className="relative"
          style={{ paddingBottom: `${paddingBottom}%` }}
        >
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
