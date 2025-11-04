"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-card shadow-lg p-4 border-t border z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/80">
          Usamos cookies para melhorar sua experiência. Ao continuar, você
          aceita nossa{" "}
          <a
            href="/politica-de-privacidade"
            className="text-primary font-medium hover:underline"
          >
            política de privacidade e cookies
          </a>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={rejectCookies}
            className="px-4 py-2 text-sm rounded-lg border hover:bg-accent"
          >
            Rejeitar
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm rounded-lg bg-gradient-to-br from-[#6d60ff] to-[#4b3db8] text-white shadow-[0_10px_30px_-12px_#4b3db8] hover:from-[#7a70ff] hover:to-[#4b3db8]"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
