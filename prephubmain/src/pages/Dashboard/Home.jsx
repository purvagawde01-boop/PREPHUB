import { useEffect, useState } from "react";
import forceConfig from "../../config/forceConfig";
import DashboardFooter from "./DashboardFooter";
import DashboardHeader from "./DashboardHeader";
import DashboardNavbar from "./DashboardNavbar";
import DashboardInfo from "./DashboardInfo";
import DashboardPlanner from "./DashboardPlanner";
import DashboardExam from "./DashboardExam";
import { useParams,useNavigate } from "react-router-dom";

function Home() {
  
  const {force} =useParams();
  const navigate = useNavigate();
  const [selectedForce, setSelectedForce] = useState("army");
/*
  useEffect(() => {
    const storedForce = localStorage.getItem("force");

    
    if (!storedForce) {
      navigate("/");
      return;
    }
      setSelectedForce(storedForce);
    
  }, []);

*/
  const forceData = forceConfig[selectedForce];

 // console.log("Current Force:", selectedForce);
 // console.log("Force Data:", forceData);

  if (!forceData) return <div>Loading...</div>;

  return (
    <>
      <DashboardNavbar
        data={forceData}
        selectedForce={selectedForce}
        onForceChange={(force) => {
          localStorage.setItem("force", force);
          setSelectedForce(force);
        }}
      />
      <DashboardHeader data={forceData} />
      <DashboardInfo data={forceData} />
      <DashboardPlanner data={forceData} />
      <DashboardExam data={forceData} />
      <DashboardFooter />
    </>
  );
}

export default Home;
