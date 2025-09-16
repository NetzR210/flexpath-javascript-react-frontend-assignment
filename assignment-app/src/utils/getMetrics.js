export function getMetrics(results) {
  const modelCounts = {};
  const genderCounts = {};
  const osCounts = {};
  const behaviorClassCounts = {};

  results.forEach((item) => {
    modelCounts[item.Model] = (modelCounts[item.Model] || 0) + 1;
    genderCounts[item.Gender] = (genderCounts[item.Gender] || 0) + 1;
    osCounts[item.OperatingSystem] = (osCounts[item.OperatingSystem] || 0) + 1;
    behaviorClassCounts[item.BehaviorClass] = (behaviorClassCounts[item.BehaviorClass] || 0) + 1;
  });

  return {
    modelCounts,
    genderCounts,
    osCounts,
    behaviorClassCounts,
  };
}
