import './DashboardExam.css'
import { useNavigate } from "react-router-dom";
function formatCategoryTitle(key) {
  const map = {
    officer: "Officer-Level Entries",
    soldier: "Soldier-Level Entries",
    jco: "JCO & Education-based Entries",
    specialist: "Technical & Specialist Entries",

    sailor: "Agniveer / Sailor-Level Entries",
    technical: "Technical Apprentice & Training Entries",
    special: "Specialised Officer Streams",

    agniveer: "Airmen / Agniveer-Level Entries",
    music: "Special & Musician Entries",
    medical:"Medical & Professional Entries",
    
    constable:"Constable /Enlisted Level Entries",
    commando:"Special Forces & Commando Units",
    women:"Women-Specific & Regional Entries"
  };

  return map[key] || key.toUpperCase();
}

function getExamSlug(exam){
  const map={
    "NDA": "nda",
    "CDS (IMA)":"cdsima",
    "CDS (OTA)": "cdsota",
    "10+12 TES": "tes",
    "TGC":"tgc",
    "SSC (TECH)":"ssctech",
    "SSC (NON-TECH)":"sscnontech",
    "NCC Special Entry":"nccspcl",
    "Soldier GD":"soldiergd",
    "Soldier Technical":"soldiertech",
    "Soldier Clerk/ SKT":"soldierclerk",
    "Soldier Tradesman":"soldiertrades",
    "Havildar Education":"havildar",
    "Religious Teacher (JCO)":"jco",
    "Catering (JCO- Cook Assistant)":"catering",
    "Surveyor Auto Carto (SAC)":"surveyor",

    "NDA (Navy Wing)":"ndanavy",
    "CDS (INA)":"cdsina",
    "10+12 TES (Navy)":"tesnavy",
    "TGC (Navy)":"tgcnavy",
    "SSC Executive":"sscexe",
    "SSC IT":"sscit",
    "SSC Education":"sscedu",
    "SSC Logistics":"ssclog",
    "SSC Law":"ssclaw",
    "Artificer Apprentice":"artificer",
    "Agniveer SSR":"agniveerssr",
    "Agniveer MR":"agniveermr",
    "SSC Pilot":"sscopilot",
    "SSC Observer":"sscobs",
    "SSC Naval Armament":"sscnaval",

  };
  return map[exam] || exam.toLowerCase().replace(/\s+/g,"-");
}

function DashboardExam({ data }) {
  const navigate = useNavigate();

  if (!data || !data.exams) return null;

  return (
    <section className="exam-section">
      {Object.entries(data.exams).map(([categoryKey, exams]) => (
        <div key={categoryKey} className="exam-category">
          <h2 className="exam-title">{categoryKey.toUpperCase()}</h2>

          <div className="exam-grid">
            {exams.map((exam, index) => {
              const slug = getExamSlug(exam);

              return (
                <div
                  key={index}
                  className="exam-card"
                  onClick={() => {
                    console.log("Navigating to:", `/exam/${slug}`);
                    navigate(`/exam/${slug}`);   // 👈 BACKTICKS ONLY
                  }}
                >
                  {exam}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}

export default DashboardExam;















/*import "./DashboardExam.css";
import { useNavigate } from "react-router-dom";

function formatCategoryTitle(key) {
  const map = {
    officer: "Officer-Level Entries",
    soldier: "Soldier-Level Entries",
    jco: "JCO & Education-based Entries",
    specialist: "Technical & Specialist Entries",

    sailor: "Agniveer / Sailor-Level Entries",
    technical: "Technical Apprentice & Training Entries",
    special: "Specialised Officer Streams",

    agniveer: "Airmen / Agniveer-Level Entries",
    music: "Special & Musician Entries",
    medical:"Medical & Professional Entries",
    
    constable:"Constable /Enlisted Level Entries",
    commando:"Special Forces & Commando Units",
    women:"Women-Specific & Regional Entries"
  };

  return map[key] || key.toUpperCase();
}


function DashboardExam({ data }) {

  const navigate = useNavigate();
  if (!data || !data.exams) return null;

  return (
    <section className="exam-section">
      {Object.entries(data.exams).map(([categoryKey, exams]) => (
        <div key={categoryKey} className="exam-category">

          <h2 className="exam-title">
            {formatCategoryTitle(categoryKey)}
          </h2>

          <div className="exam-grid">
            {exams.map((exam, index) => {
            const slug =exam.toLowerCase().replace(/\s+/g, "-");
            return(
           
              <div 
              key={index} className="exam-card"
              onClick={()=>
                {
                  const slug= exam.toLowerCase().replace(/\s+/g,"-");
                  navigate(`/exam/${slug}`);

                }}>
                {exam}
              </div>
            );
          
            })}
          </div>

        </div>
      ))}
    </section>
  );
}

export default DashboardExam;






/*const DashboardExam = ({ data }) => {
  const navigate = useNavigate();

  const renderSection = (title, exams) => (
    <section className="exam-section">
      <h2>{title}</h2>
      <div className="exam-grid">
        {exams.map((exam, index) => (
          <div
            key={index}
            className="exam-card"
          >
            {exam}
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="exam-container">
      {renderSection("Officer-Level Entries", data.exams.officer)}
      {renderSection("Soldier-Level Entries", data.exams.soldier)}
      {renderSection("JCO & Education-based Entries", data.exams.jco)}
      {renderSection("Technical & Specialist Entries", data.exams.specialist)}
    </div>
  );
};*/



/*import './DashboardExam.css'
import { useNavigate, Link} from 'react-router-dom';

const DashboardExam = () => {
  const navigate = useNavigate(); 
  return (
    <div className="exam-container">

      {/* Officer-Level Entries 
      <section className="exam-section">
        <h2>Officer-Level Entries</h2>
        <div className="exam-grid">
          <button className="exam-card" onClick={() => navigate("/ExamPage")}>NDA</button>
          <div className="exam-card">CDS</div>
          <div className="exam-card">AFCAT</div>
          <div className="exam-card">CAPF</div>
          <div className="exam-card">OTA / IMA / INA</div>
        </div>
      </section>

      {/* Technical Entries 
      <section className="exam-section">
        <h2>Technical Entries</h2>
        <div className="exam-grid">
          <div className="exam-card">TGC</div>
          <div className="exam-card">SSC Tech</div>
          <div className="exam-card">UES</div>
          <div className="exam-card">AFCAT Technical</div>
        </div>
      </section>

      {/* Agniveer / Soldier Entries 
      <section className="exam-section">
        <h2>Agniveer / Soldier Entries</h2>
        <div className="exam-grid">
          <div className="exam-card">Agniveer GD</div>
          <div className="exam-card">Agniveer Technical</div>
          <div className="exam-card">Tradesman</div>
          <div className="exam-card">Clerk</div>
        </div>
      </section>

      {/* Special & Other Entries 
      <section className="exam-section">
        <h2>Special & Other Entries</h2>
        <div className="exam-grid">
          <div className="exam-card">NCC Entry</div>
          <div className="exam-card">JAG</div>
          <div className="exam-card">Territorial Army</div>
          <div className="exam-card">Women Entries</div>
        </div>
      </section>

    </div>
  );
};

export default DashboardExam;*/






