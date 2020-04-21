const kFormatter = (num: number, fixed: number): string => {
  return Math.abs(num) > 999
    ? String(Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(fixed))) +
        "k"
    : String(Math.sign(num) * Math.abs(num));
};
export default kFormatter;
