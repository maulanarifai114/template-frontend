export const formatNumber = (amount: number, locales: string = "id-ID") => {
  const formatted = new Intl.NumberFormat(locales, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return formatted;
};
