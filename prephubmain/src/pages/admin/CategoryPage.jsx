import { useEffect, useState } from "react";
import { useLocation, useOutletContext } from "react-router-dom";

const CategoryPage = () => {
  const { activeTab } = useOutletContext();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  const [items, setItems] = useState([]);

  const category = location.pathname.split("/").pop();

  useEffect(() => {
    fetch("http://localhost:8080/prephub-backend/admin/get_exam_content.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        role: user.role,
        category: category,
        section: activeTab,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setItems(data.content);
        } else {
          setItems([]);
        }
      });
  }, [activeTab, category]);

  return (
    <div className="category-page">
      {items.length === 0 ? (
        <p>No data added yet</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="content-item">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryPage;

