import PropTypes from 'prop-types';

const ResultsTable = ({ data, error, isLoading }) => {
  if (isLoading) return null;

  const headers = data?.length > 0 ? Object.keys(data[0]) : [];

  const formatHeader = (key) => {
    const labelMap = {
      user_id: "User ID",
      device_model: "Device Model",
      operating_system: "Operating System",
      app_usage_time: "App Usage Time (min/day)",
      screen_on_time: "Screen On Time (hours/day)",
      battery_drain: "Battery Drain (mAh/day)",
      apps_installed: "Number of Apps Installed",
      data_usage: "Data Usage (MB/day)",
      age: "Age",
      gender: "Gender",
      user_behavior_class: "Behavior Class"
    };
    return labelMap[key] || key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const isNumeric = (key) =>
    ["app_usage_time", "screen_on_time", "battery_drain", "apps_installed", "data_usage", "age"].includes(key);

  return (
    <div className="table-responsive" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
      <table className="table table-hover table-striped text-start" style={{ tableLayout: 'fixed' }}>
        <thead
          className="table-light"
          style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#f8f9fa' }}
        >
          {error && (
            <tr>
              <td colSpan={headers.length || 1} className="text-danger fw-bold text-center">
                {error}
              </td>
            </tr>
          )}
          <tr>
            {headers.map((key) => (
              <th key={key} className={isNumeric(key) ? "text-end" : ""}>
                {formatHeader(key)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length === 0 ? (
            <tr>
              <td colSpan={headers.length || 1} className="text-center text-muted">
                No results yet — run a search to see data
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index}>
                {headers.map((key) => (
                  <td key={key} className={isNumeric(key) ? "text-end" : ""}>
                    {row[key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

ResultsTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool
};

export default ResultsTable;
