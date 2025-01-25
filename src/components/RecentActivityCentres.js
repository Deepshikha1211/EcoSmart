import React from 'react';


const RecentActivityCentres = () => {
  const activities = [
    { type: 'Electronics', items: 2, points: 50, date: '2025-01-22' },
    { type: 'Plastics', items: 5, points: 25, date: '2025-01-21' },
    { type: 'Glass', items: 3, points: 15, date: '2025-01-20' },
  ];

  const centers = [
    { name: 'City Center Recycling', distance: '0.5 km', status: 'Open', priority: 'High' },
    { name: 'Westside Collection Point', distance: '1.2 km', status: 'Open', priority: 'Medium' },
    { name: 'Green Park Facility', distance: '2.3 km', status: 'Closed', priority: 'Low' },
  ];

  return (
    <div className="RecentActivityCentres">
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Items</th>
              <th>Points</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.type}</td>
                <td>{activity.items}</td>
                <td>{activity.points}</td>
                <td>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="nearby-recycling-centers">
        <h3>Nearby Recycling Centers</h3>
        <ul>
          {centers.map((center, index) => (
            <li key={index} className={`center ${center.status.toLowerCase()}`}>
              <div className="center-details">
                <strong>{center.name}</strong>
                <span className="distance">{center.distance}</span>
              </div>
              <div className="center-status">
                <span className={`status ${center.status.toLowerCase()}`}>{center.status}</span>
                <span className={`priority ${center.priority.toLowerCase()}`}>{center.priority}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentActivityCentres;
