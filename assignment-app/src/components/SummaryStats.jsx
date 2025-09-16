import PropTypes from 'prop-types';

function renderCard(title, rawValue, unit) {
  const value =
    typeof rawValue === 'number' && isFinite(rawValue)
      ? rawValue.toFixed(2)
      : '—';
  return (
    <div className="card m-2 p-3 text-center">
      <h5>{title}</h5>
      <p>{value} {unit}</p>
    </div>
  );
}

function SummaryStats({ stats }) {
  const age = stats?.age ?? {};

  return (
    <div className="d-flex flex-wrap justify-content-center mb-4">
      {renderCard('Age (Avg)', age.average, 'years')}
      {renderCard('Age (Median)', age.median, 'years')}
    </div>
  );
}

SummaryStats.propTypes = {
  stats: PropTypes.shape({
    age: PropTypes.shape({
      average: PropTypes.number,
      median: PropTypes.number,
    }),
  }).isRequired,
};

export default SummaryStats;
