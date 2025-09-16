import PropTypes from 'prop-types';

const getAverage = (arr, key) => {
  const values = arr.map(item => Number(item[key])).filter(n => !isNaN(n));
  if (!values.length) return '0.00';
  const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
  return avg.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const getMedian = (arr, key) => {
  const values = arr.map(item => Number(item[key])).filter(n => !isNaN(n)).sort((a, b) => a - b);
  if (!values.length) return '0.00';
  const mid = Math.floor(values.length / 2);
  const median = values.length % 2 === 0
    ? (values[mid - 1] + values[mid]) / 2
    : values[mid];
  return median.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const MetricCard = ({ title, average, median, unit }) => (
  <div className="card text-center w-100 h-100">
    <div className="card-body d-flex flex-column justify-content-center">
      <h5 className="card-title">{title}</h5>
      <p className="card-text mb-1"><strong>Average:</strong> {average} {unit}</p>
      <p className="card-text"><strong>Median:</strong> {median} {unit}</p>
    </div>
  </div>
);

MetricCard.propTypes = {
  title: PropTypes.string.isRequired,
  average: PropTypes.string.isRequired,
  median: PropTypes.string.isRequired,
  unit: PropTypes.string.isRequired
};

const MetricCards = ({ results }) => {
  const metrics = [
    { key: 'app_usage_time', label: 'App Usage Time (min/day)', unit: 'Minutes' },
    { key: 'screen_on_time', label: 'Screen On Time (hours/day)', unit: 'Hours' },
    { key: 'apps_installed', label: 'Number of Apps Installed', unit: 'Apps' },
    { key: 'age', label: 'Age', unit: 'Years Old' }
  ];

  return (
    <div className="row mt-8 gx-8 gy-8 justify-content-center">
      {metrics.map(({ key, label, unit }) => (
        <div key={key} className="col-md-3 d-flex">
          <MetricCard
            title={label}
            average={getAverage(results, key)}
            median={getMedian(results, key)}
            unit={unit}
          />
        </div>
      ))}
    </div>
  );
};

MetricCards.propTypes = {
  results: PropTypes.array.isRequired
};

export default MetricCards;
