import { useState } from "react";
//import './style.css';

function AboutWidget() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="widget">
      <div className="tabs">
        {["about", "experiences", "recommended"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === "about" && <p>Hello! I'm Dave, your sales rep...</p>}
        {activeTab === "experiences" && <p>I’ve been working at Salesforce...</p>}
        {activeTab === "recommended" && <p>Clients recommend me for...</p>}
      </div>
    </div>
  );
}

export default AboutWidget;
