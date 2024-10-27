export const formatCurrency = (amount: number, locales: string = "id-ID", currency: string = "IDR") => {
  const formatted = new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);

  return formatted;
};
