export function formatVND(num: number, { symbol = true, space = true } = {}) {
  if (num == null || isNaN(Number(num))) return "";
  const n = Math.round(Number(num));

  const parts = n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return symbol ? parts + (space ? " " : "") + "đ" : parts;
}
