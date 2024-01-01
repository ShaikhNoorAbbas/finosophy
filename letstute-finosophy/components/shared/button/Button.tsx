'use client';

import Link from 'next/link';
import Modal from '../modal/Modal';
import { useState } from 'react';

interface ModalConfig {
  orientation: string;
  iframeSrc: string;
}

interface ButtonProps {
  href: string;
  text: string;
  style?: string;
  modalConfig?: ModalConfig;
}

export default function Button({
  href,
  text,
  style,
  modalConfig,
}: ButtonProps) {
  const [isModal, setIsModal] = useState(false);

  const handleBtnClick = () => setIsModal(true);
  const handleCloseModal = () => setIsModal(false);

  return (
    <>
      {!modalConfig ? (
        <Link href={href} className={`button ${style}`}>
          {text}
        </Link>
      ) : (
        <button onClick={handleBtnClick} className={`button ${style}`}>
          {text}
        </button>
      )}

      {isModal && (
        <Modal open onClose={handleCloseModal} modalConfig={modalConfig} />
      )}
    </>
  );
}
