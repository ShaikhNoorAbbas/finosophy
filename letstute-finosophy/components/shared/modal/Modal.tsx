import { useEffect, useState } from 'react';

interface ModalProps {
  open: boolean;
  src: string;
  onClose: () => void;
}

export default function Modal({ open, src, onClose }: ModalProps) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-h-full max-w-xl overflow-auto rounded-lg bg-white p-6 shadow-lg">
        <button
          className="mb-4 rounded bg-red-500 p-2 text-white"
          onClick={handleClose}
        >
          Close
        </button>
        <iframe
          src={src}
          width="100%"
          height="500px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
