import "./DashboardHeader.css";

const quotes = [
  "Discipline is the bridge between goals and accomplishment.",
  "Success is built on self-discipline.",
  "Push yourself, because no one else will do it for you.",
  "Great things never come from comfort zones.",
  "Dream big. Train hard. Stay focused.",
  "Winners are not born, they are made through discipline.",
  "Consistency beats motivation every single day.",
];

const DashboardHeader = ({ data }) => {
  
  const userName = localStorage.getItem("user_name") || "Cadet";

  const today = new Date().getDate();
  const quoteOfTheDay = quotes[today % quotes.length];

  return (
    <section className={`dashboard-header ${data.key}-bg`}>
      <h1>Welcome back, {userName} 👋</h1>

      <p className="quote">"{quoteOfTheDay}"</p>

      <span className="stream-badge">
        Current Stream: {data.name} Force
      </span>
    </section>
  );
};

export default DashboardHeader;
