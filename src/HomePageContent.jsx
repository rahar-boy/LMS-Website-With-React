import React from "react";
import './Homepage.css';

function HomePageContent() {
  return (
    <div className="content" id="home">
      <div className="h1">
        <h1>The <span style={{ color: 'green' }}>Smart</span></h1>
        <h1>Choose Your<span style={{ color: 'green' }}> Future</span> </h1>
      </div>
      <p>
        Elearn is a global training provider based across the UK that <br />
        specialises in accredited and bespoke training courses. We crush <br />
        that....
      </p>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter your email"
          className="email-input"
        />
        <button className="submit-btn">Continue</button>
      </div>
    </div>
  );
}

export default HomePageContent;
