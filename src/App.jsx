
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ReportForm from "./pages/ReportForm";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">NGO Reporting</Link>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Submit Report</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">Admin Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ReportForm />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
