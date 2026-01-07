import { useEffect, useState } from "react";

const LoginLogs = () => {
  const [logs, setLogs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetch("http://localhost:8080/prephub-backend/admin/get_login_logs.php", {
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
        console.log("LOGIN LOGS RESPONSE:", data);

        if (data.success === true && Array.isArray(data.logs)) {
          setLogs(data.logs);
        } else {
          setLogs([]);
        }
      })
      .catch(() => {
        setLogs([]);
      });
  }, []);

  return (
    <div className="login-logs-page">
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>IP</th>
              <th>Device</th>
              <th>Login Time</th>
            </tr>
          </thead>
          <tbody>
            {logs.length === 0 ? (
              <tr>
                <td colSpan="5" className="empty-state">
                  Failed to load data
                </td>
              </tr>
            ) : (
              logs.map((log, index) => (
                <tr key={index}>
                  <td>{log.email}</td>
                  <td>{log.role}</td>
                  <td>{log.ip_address}</td>
                  <td>{log.user_agent}</td>
                  <td>{log.login_time}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoginLogs;
