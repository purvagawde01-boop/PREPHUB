import React, { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("eligibility");
  const location = useLocation();

  const isCategoryPage = [
    "/admin/army",
    "/admin/navy",
    "/admin/air-force",
    "/admin/paramilitary",
  ].includes(location.pathname);

  return (
    <div className="admin-container">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2 className="logo">PrepHub</h2>
          <p className="logo-subtitle">Admin Panel</p>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/admin" end className="nav-item">
            📊 Dashboard
          </NavLink>
          <NavLink to="/admin/users" className="nav-item">
            👥 Users
          </NavLink>
          <NavLink to="/admin/login-logs" className="nav-item">
            📋 Login Logs
          </NavLink>

          <p className="nav-section-title">Exam Categories</p>
          <NavLink to="/admin/army" className="nav-item">🎖️ Army</NavLink>
          <NavLink to="/admin/navy" className="nav-item">⚓ Navy</NavLink>
          <NavLink to="/admin/air-force" className="nav-item">✈️ Air Force</NavLink>
          <NavLink to="/admin/paramilitary" className="nav-item">🛡️ Paramilitary</NavLink>
        </nav>
      </aside>

      {/* Main */}
      <main className="admin-main">
        <header className="main-header">
          <h1 className="page-title">Admin Dashboard</h1>
        </header>

        {/* Tabs only for category pages */}
        {isCategoryPage && (
          <div className="category-tabs">
            {["eligibility", "exam", "selection", "syllabus", "pyqs", "books", "videos"].map(
              (tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              )
            )}
          </div>
        )}

        <div className="content-area">
          <Outlet context={{ activeTab }} />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
