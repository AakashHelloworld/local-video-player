'use client';
// @ts-nocheck
import { XIcon } from 'lucide-react';
import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  title?: string
  isOpen?: boolean
  onClose?: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="fixed top-0 border left-0 grid place-content-center w-[100vw] h-[100vh]  overflow-y-scroll z-[400000]">
      <div className="absolute top-0 left-0 w-full min-h-full py-6 grid place-items-center">
        <div className="bg-white w-[90%] sm:w-[90%] rounded-md w-fit z-50 border border-1 border-[black]">
          <div className=" flex justify-between items-center pt-3 pb-3 px-3 border-b border-neutral-cool-300">
            <h1 className="text-lg font-bold">{title}</h1>
            <XIcon onClick={onClose} className="cursor-pointer" />
          </div>
          <div className="pt-2 p-6  ">{children}</div>
        </div>
        <div
          className="absolute top-0 left-0 w-full min-h-full bg-[black] opacity-40  z-40"
          onClick={onClose}
        ></div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
