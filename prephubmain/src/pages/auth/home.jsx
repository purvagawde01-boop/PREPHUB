import { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setName(user.full_name); // 🔥 MUST be full_name
    }
  }, []);

  return (
    <div>
      <h1>Hello {name ? name : "User"} 👋</h1>
    </div>
  );
};

export default Home;
