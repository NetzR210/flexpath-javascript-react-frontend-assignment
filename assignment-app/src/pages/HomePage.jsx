function HomePage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Behavior Dataset</h1>

      <p className="lead">
        This dataset provides a comprehensive analysis of mobile device usage patterns
        and user behavior classification. It includes data from 700 anonymized user samples,
        capturing metrics such as app usage time, battery consumption, and data consumption.
        The goal is to classify users based on behavior patterns ranging from light to extreme usage.
      </p>    

      <h3 className="mt-5 mb-3">Key Features</h3>
      <ul className="mb-4 ps-3">
        <li><strong>Device ID:</strong> Unique identifier for each user</li>
        <li><strong>User Behavior:</strong> Type of user based on smartphone usage</li>
        <li><strong>Operating System:</strong> iOS or Android</li>
        <li><strong>App Usage Time:</strong> Daily time spent on apps (minutes)</li>
        <li><strong>Battery Drain Rate:</strong> Battery consumption during app usage</li>
        <li><strong>Data Consumption:</strong> Data used during app usage (MB)</li>
        <li><strong>Number of Apps Used:</strong> Total apps used by the user</li>
        <li><strong>Age Group:</strong> Age classification of the user</li>
        <li><strong>Gender:</strong> Male or Female</li>
        <li><strong>Usage Class:</strong> Behavior classification (e.g., 1 to 5)</li>
      </ul>

      <p>
        <a href="https://www.kaggle.com/datasets/valakhorasani/mobile-device-usage-and-user-behavior-dataset?resource=download" target="_blank" rel="noopener noreferrer">
          Sourced from the Kaggle Dataset
        </a>
      </p>
    </div>
  );
}

export default HomePage;
