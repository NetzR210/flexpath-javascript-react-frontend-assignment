import PropTypes from 'prop-types';

const ResultsTable = ({ data, isLoading, error }) => {
  if (isLoading) {
    return (
      <div className="text-center text-muted fw-bold mt-4">
        Loading Records...
      </div>
    );
  }

  return (
    <div className="table-responsive" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      {error && (
        <div className="text-danger fw-bold mb-3">
          Error retrieving search results: {error}
        </div>
      )}
      <table className="table table-striped table-sm mt-4">
        <thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
          <tr>
            <th className="text-start">User ID</th>
            <th className="text-start">Device Model</th>
            <th className="text-start">Operating System</th>
            <th className="text-start">App Usage Time (min/day)</th>
            <th className="text-start">Screen On Time (hours/day)</th>
            <th className="text-start">Battery Drain (mAh/day)</th>
            <th className="text-start">Number of Apps Installed</th>
            <th className="text-start">Data Usage (MB/day)</th>
            <th className="text-start">Age</th>
            <th className="text-start">Gender</th>
            <th className="text-start">User Behavior Class</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="text-start">{row.user_id}</td>
              <td className="text-start">{row.device_model}</td>
              <td className="text-start">{row.operating_system}</td>
              <td className="text-start">{row.app_usage_time}</td>
              <td className="text-start">{row.screen_on_time}</td>
              <td className="text-start">{row.battery_drain}</td>
              <td className="text-start">{row.apps_installed}</td>
              <td className="text-start">{row.data_usage}</td>
              <td className="text-start">{row.age}</td>
              <td className="text-start">{row.gender}</td>
              <td className="text-start">{row.user_behavior_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ResultsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      user_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      device_model: PropTypes.string,
      operating_system: PropTypes.string,
      app_usage_time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      screen_on_time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      battery_drain: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      apps_installed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      data_usage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      gender: PropTypes.string,
      user_behavior_class: PropTypes.string
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default ResultsTable;
