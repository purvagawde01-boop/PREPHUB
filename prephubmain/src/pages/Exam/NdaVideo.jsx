import React from "react";
import DashboardFooter from "../Dashboard/DashboardFooter";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import "./NdaVideo.css";

const NdaVideo = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="nda-videos-page">
        <div className="nda-videos-container">

          {/* Header */}
          <div className="videos-header">
            <h1>NDA Video Resources</h1>
            <p>Recommended video platforms and channels for NDA preparation</p>
          </div>

          {/* Mathematics Videos */}
          <section className="videos-section">
            <h2>Mathematics</h2>

            <div className="video-grid">
              <div className="video-card">
                <h3>Pathfinder NDA Mathematics</h3>
                <p>YouTube Channel</p>
              </div>

              <div className="video-card">
                <h3>Unacademy NDA Maths</h3>
                <p>Online Platform</p>
              </div>

              <div className="video-card">
                <h3>Defence Wallah – Maths</h3>
                <p>YouTube Channel</p>
              </div>
            </div>
          </section>

          {/* GAT Videos */}
          <section className="videos-section">
            <h2>General Ability Test (GAT)</h2>

            <h3>English</h3>
            <div className="video-grid">
              <div className="video-card">
                <h3>SP Bakshi English (NDA)</h3>
                <p>YouTube Playlist</p>
              </div>
            </div>

            <h3>General Knowledge</h3>
            <div className="video-grid">
              <div className="video-card">
                <h3>Defence Wallah – GK</h3>
                <p>YouTube Channel</p>
              </div>

              <div className="video-card">
                <h3>Unacademy NDA GAT</h3>
                <p>Online Platform</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <DashboardFooter />
    </>
  );
};

export default NdaVideo;
