export const calculateStats = (data, field) => {
  const values = data
    .map((item) => Number(item[field]))
    .filter((val) => !isNaN(val));

  if (values.length === 0) return { average: null, median: null };

  const average = values.reduce((sum, val) => sum + val, 0) / values.length;

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 0
      ? (sorted[mid - 1] + sorted[mid]) / 2
      : sorted[mid];

  return {
    average: average.toLocaleString('en-US', { maximumFractionDigits: 2 }),
    median: median.toLocaleString('en-US', { maximumFractionDigits: 2 }),
  };
};
