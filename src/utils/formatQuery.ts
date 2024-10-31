export const formatQuery = (query?: object, prefix: string = "?") => {
  const formatted = Object.entries(query ?? {})
    .map(([key, value]) => (value ? `${key}=${value}` : ""))
    .filter((item) => item)
    .join("&");
  return prefix + formatted;
};
