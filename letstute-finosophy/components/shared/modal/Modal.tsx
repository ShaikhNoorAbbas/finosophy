import { useEffect, useState } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  modalConfig: any;
}

export default function Modal({ open, onClose, modalConfig }: ModalProps) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  // Adjust paddingBottom based on orientation
  const paddingBottom =
    modalConfig.orientation === 'portrait' ? '177.78%' : '56.25%';

  // Adjust width based on orientation
  const modalWidth =
    modalConfig.orientation === 'portrait'
      ? 'w-full max-w-[380px]'
      : 'w-full max-w-4xl';

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-80 p-8">
      <button
        className="bg-secondary button mb-4 px-4 py-1 text-lg font-medium text-white"
        onClick={handleClose}
      >
        Close X
      </button>
      <div
        className={`overflow-auto rounded-lg bg-white shadow-lg ${modalWidth}`}
      >
        <div className="relative" style={{ paddingBottom }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={modalConfig.iframeSrc}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
