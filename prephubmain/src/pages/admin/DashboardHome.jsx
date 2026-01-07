import { useEffect, useState } from "react";

const DashboardHome = () => {
  const [stats, setStats] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("http://localhost:8080/prephub-backend/admin/get_dashboard_stats.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        role: user?.role,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStats(data.stats);
        }
      });
  }, []);

  if (!stats) return null;

  return (
    <div className="dashboard-home">
      <div className="stats-grid">
        <div className="stat-card">
          <h3 className="stat-value">{stats.totalUsers}</h3>
          <p className="stat-title">Total Users</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-value">{stats.totalAdmins}</h3>
          <p className="stat-title">Total Admins</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-value">{stats.totalLogins}</h3>
          <p className="stat-title">Total Logins</p>
        </div>

        <div className="stat-card">
          <h3 className="stat-value">{stats.loginsToday}</h3>
          <p className="stat-title">Logins Today</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
