"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type SupportedCurrency = "AED" | "USD" | "EUR";

type CurrencyContextValue = {
  currency: SupportedCurrency;
  setCurrency: (c: SupportedCurrency) => void;
  convertFromAED: (amountAED?: number | null) => number | null;
  formatFromAED: (amountAED?: number | null, opts?: { minimumFractionDigits?: number }) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

const DEFAULT_RATES: Record<SupportedCurrency, number> = {
  AED: 1,
  USD: 0.27, // approximate peg
  EUR: 0.25, // rough placeholder; replace with live rates if needed
};

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrency] = useState<SupportedCurrency>("AED");

  const rates = DEFAULT_RATES;

  const value: CurrencyContextValue = useMemo(() => {
    const convertFromAED = (amountAED?: number | null) => {
      if (amountAED == null || Number.isNaN(amountAED)) return null;
      const rate = rates[currency] ?? 1;
      return amountAED * rate;
    };

    const formatFromAED = (amountAED?: number | null, opts?: { minimumFractionDigits?: number }) => {
      const amount = convertFromAED(amountAED);
      if (amount == null) return "Price on request";
      const minimumFractionDigits = opts?.minimumFractionDigits ?? 0;
      const formatted = amount.toLocaleString(undefined, { minimumFractionDigits, maximumFractionDigits: minimumFractionDigits });
      if (currency === "AED") {
        // For AED, return just the numeric value (image symbol can be rendered in UI)
        return formatted;
      }
      const symbol = currency === "USD" ? "$" : "€";
      return `${symbol} ${formatted}`;
    };

    return { currency, setCurrency, convertFromAED, formatFromAED };
  }, [currency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrency must be used within CurrencyProvider");
  return ctx;
}


