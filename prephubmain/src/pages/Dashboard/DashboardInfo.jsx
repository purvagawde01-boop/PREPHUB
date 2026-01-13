import "./DashboardInfo.css";

const DashboardInfo = ({ data }) => {
  return (
    <section className="dashboard-info">
      {/* Official Websites */}
      <div className="info-card official-sites">
        <h3>Official Websites</h3>
        <ul>
          {data.officialSites.map((site, index) => (
            <li key={index}>
              <a href={site.url} target="_blank" rel="noreferrer">
                {site.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Notifications */}
      <div className="info-card notifications">
        <h3>Important Exam Updates</h3>
        <div className="notification-scroll">
          {data.notifications.map((note, index) => (
            <div className="notification-item" key={index}>
              {note}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardInfo;





/*import './DashboardInfo.css';

const DashboardInfo = () => {
  return (
    <section className="dashboard-info">

      {/* Official Websites 
      <div className="info-card official-sites">
        <h3>Official Websites</h3>
        <ul>
          <li><a href="#" target="_blank">Indian Army – Join Indian Army</a></li>
          <li><a href="#" target="_blank">UPSC – NDA / CDS</a></li>
          <li><a href="#" target="_blank">Agniveer Portal</a></li>
        </ul>
      </div>

      {/* Important Notifications 
      <div className="info-card notifications">
        <h3>Important Exam Updates</h3>

        <div className="notification-scroll">
          <div className="notification-item">
            NDA I 2025 – Notification Released
          </div>
          <div className="notification-item">
            CDS II – Exam on Sept 2025
          </div>
          <div className="notification-item">
            Agniveer Rally – July Batch
          </div>
        </div>
      </div>

    </section>
  );
};

export default DashboardInfo;*/


