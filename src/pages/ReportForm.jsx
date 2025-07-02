import React, { useState } from 'react';
import axios from 'axios';
import server_url from '../services/ServerUrl';


function ReportForm() {
  const [formData, setFormData] = useState({
    ngoId: '',
    month: '',
    peopleHelped: '',
    eventsConducted: '',
    fundsUtilized: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${server_url}/report`, formData);
      setMessage('✅ Report submitted successfully!');
      setFormData({
        ngoId: '',
        month: '',
        peopleHelped: '',
        eventsConducted: '',
        fundsUtilized: ''
      });
    } catch (error) {
      setMessage('❌ Submission failed. Try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="text-center mb-4">📝 NGO Monthly Report</h3>

        {message && <div className="alert alert-info text-center">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="ngoId" className="form-label">NGO ID</label>
            <input type="number" className="form-control" name="ngoId" value={formData.ngoId} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="month" className="form-label">Month</label>
            <input type="month" className="form-control" name="month" value={formData.month} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="peopleHelped" className="form-label">People Helped</label>
            <input type="number" className="form-control" name="peopleHelped" value={formData.peopleHelped} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="eventsConducted" className="form-label">Events Conducted</label>
            <input type="number" className="form-control" name="eventsConducted" value={formData.eventsConducted} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="fundsUtilized" className="form-label">Funds Utilized (₹)</label>
            <input type="number" className="form-control" name="fundsUtilized" value={formData.fundsUtilized} onChange={handleChange} required />
          </div>

          <button className="btn btn-primary w-100 mt-2">Submit Report</button>
        </form>
      </div>
    </div>
  );
}

export default ReportForm;
