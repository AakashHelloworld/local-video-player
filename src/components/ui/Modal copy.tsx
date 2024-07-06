'use client';
// @ts-nocheck
import { XIcon } from 'lucide-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Label } from '@radix-ui/react-select';
interface ModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 grid place-content-center w-[100vw] h-[100vh] overflow-scroll">
      <div className="absolute top-0 left-0 w-full min-h-full py-6 grid place-items-center">
        <div className="bg-white rounded-md w-fit z-50">
          <div className=" flex justify-between items-center pt-5 pb-6 px-6 border-b border-neutral-cool-300">
            <Label className="text-lg font-bold" >
              {title}
            </Label>
            <XIcon onClick={onClose} className="cursor-pointer" />
          </div>
          <div className="pt-4 p-6">{children}</div>
        </div>
        <div
          className="absolute top-0 left-0 w-full min-h-full bg-neutral-cool-700 opacity-60 z-40"
          onClick={onClose}
        ></div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
