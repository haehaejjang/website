"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export function Modal({ open, onClose, title, children }: ModalProps) {
  // ESC 닫기 + 열려 있는 동안 배경 스크롤 잠금
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = original;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink/40 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            className="relative my-auto w-full max-w-3xl rounded-2xl border border-line bg-surface shadow-xl"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="닫기"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition hover:text-ink"
            >
              <X size={18} />
            </button>
            <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-10">
              {children}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
