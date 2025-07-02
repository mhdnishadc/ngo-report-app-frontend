import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [month, setMonth] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    if (!month) return;
    try {
      const res = await axios.get(`http://localhost:5000/dashboard?month=${month}`);
      setData(res.data);
    } catch (err) {
      setData(null);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <input
        className="form-control mb-3"
        type="month"
        onChange={(e) => setMonth(e.target.value)}
      />
      <button className="btn btn-success mb-4" onClick={fetchData}>Fetch Data</button>

      {data ? (
        <div>
          <p>Total NGOs Reporting: {data.totalNGOs}</p>
          <p>Total People Helped: {data.totalPeople}</p>
          <p>Total Events Conducted: {data.totalEvents}</p>
          <p>Total Funds Utilized: ₹{data.totalFunds}</p>
        </div>
      ) : <p>No data to show.</p>}
    </div>
  );
}

export default AdminDashboard;
