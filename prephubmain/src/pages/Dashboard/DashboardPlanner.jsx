import "./DashboardPlanner.css";

const DashboardPlanner = ({ data }) => {
  return (
    <section className="dashboard-planner">
      {/* To-Do List */}
      <div className="planner-card">
        <div className="planner-header">
          <h3>To-Do List</h3>
          <button className="edit-btn">Edit</button>
        </div>

        <ul className="todo-list">
          {data.planner.todo.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>

      {/* Schedule Maker */}
      <div className="planner-card">
        <div className="planner-header">
          <h3>Schedule Maker</h3>
          <button className="edit-btn">Edit</button>
        </div>

        <ul className="schedule-list">
          {data.planner.schedule.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DashboardPlanner;
