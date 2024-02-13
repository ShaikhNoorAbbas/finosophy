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
  text: any;
  targetBlank?: boolean;
  style?: string;
  modalConfig?: ModalConfig;
}

export default function Button({
  href,
  targetBlank,
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
        targetBlank ? (
          <Link href={href} target="blank" className={`button ${style}`}>
            {text}
          </Link>
        ) : (
          <Link href={href} className={`button ${style}`}>
            {text}
          </Link>
        )
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
