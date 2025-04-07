import React from 'react';

function GeneralDetails({ data, type }) {
  // Render content based on the "type"
  const renderContent = () => {
    if (type === 'longest' && data) {
      return (
        <div className = 'card'>
          <h2>Longest Recipe</h2>
          <p>{data.title} - {data.readyInMinutes} minutes</p>
        </div>
      );
    } else if (type === 'shortest' && data) {
      return (
        <div className = 'card'>
          <h2>Shortest Recipe</h2>
          <p>{data.title} - {data.readyInMinutes} minutes</p>
        </div>
      );
    } else if (type === 'avgTime' && data) {
      return (
        <div className = 'card'>
          <h2>Average Time</h2>
          <p>{data} minutes</p>
        </div>
      );
    } else if (type === 'avgHealth' && data) {
      return (
        <div className = 'card'>
          <h2>Average Health</h2>
          <p>{data}</p>
        </div>
      );
    } else {
      return <p>No data available</p>;
    }
  };

  return (
    <div className="card-container">
      {renderContent()}
    </div>
  );
}

export default GeneralDetails;
