'use client';

import Link from 'next/link';
import Modal from '../modal/Modal';
import { useState } from 'react';

interface ButtonProps {
  href: string;
  text: string;
  style?: string;
  modal?: boolean;
}

export default function Button({ href, text, style, modal }: ButtonProps) {
  const [isModal, setIsModal] = useState(false);

  const handleBtnClick = () => setIsModal(true);
  const handleCloseModal = () => setIsModal(false);

  return (
    <>
      {!modal ? (
        <Link href={href} className={`button ${style}`}>
          {text}
        </Link>
      ) : (
        <button onClick={handleBtnClick} className={`button ${style}`}>
          {text}
        </button>
      )}

      {isModal && (
        <Modal
          open
          src="https://creations.letstute.com/articulate/level-1/game/story.html"
          onClose={handleCloseModal}
          modalConfig={{ orientation: 'portrait' }}
        />
      )}
    </>
  );
}
