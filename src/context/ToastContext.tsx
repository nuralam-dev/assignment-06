"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type ToastContextType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(
  undefined
);

export const ToastProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [message, setMessage] = useState("");

  const showToast = (message: string) => {
    setMessage(message);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {message && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold uppercase text-black shadow-lg">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used inside ToastProvider");
  }

  return context;
};