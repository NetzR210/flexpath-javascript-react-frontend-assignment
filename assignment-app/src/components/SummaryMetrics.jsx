import PropTypes from 'prop-types';

function SummaryMetrics({ count }) {
  return (
    <>
      <h5 className="mt-4">Summary</h5>
      <p>Found {count} matching records.</p>
    </>
  );
}

SummaryMetrics.propTypes = {
  count: PropTypes.number.isRequired,
};

export default SummaryMetrics;
