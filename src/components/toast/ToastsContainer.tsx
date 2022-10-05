import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Toast from "./Toast";

type Props = {
  toasts: ToastT[];
};

const ToastContainer = ({ toasts }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return createPortal(
    <div className="fixed top-20 right-8 flex h-auto w-screen flex-col items-end gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast key={toast.id} toast={toast} />
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
};

export default ToastContainer;
