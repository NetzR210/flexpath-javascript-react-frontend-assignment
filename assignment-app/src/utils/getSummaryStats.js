function getAverage(arr) {
  if (!arr.length) return 0;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

function getMedian(arr) {
  if (!arr.length) return 0;
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

export function getSummaryStats(results) {
  const age = results.map(r => r.age).filter(Number.isFinite);

  return {
    age: {
      average: getAverage(age),
      median: getMedian(age),
    },
    appUsage: {},        
    dataUsage: {},
    appsInstalled: {},
  };
}
