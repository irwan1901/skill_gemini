import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#161029] border border-[#8b5cff] text-[#ece9f7] shadow-[0_8px_30px_rgba(139,92,255,0.45)] text-sm font-semibold animate-rise backdrop-blur-md">
      <CheckCircle2 className="w-4 h-4 text-[#3ecf8e]" />
      <span>{message}</span>
    </div>
  );
};
