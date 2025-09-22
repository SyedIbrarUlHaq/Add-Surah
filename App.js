import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import FormField from "./components/FormField";

const App = () => {
  // Array me saare fields ka data
  const fields = [
    
    { label: "Surah Name", type: "text", placeholder: "ex: XYZ..." },
    { label: "Total Verses", type: "number", placeholder: "ex: 2..." },
    { label: "Starting Page", type: "number", placeholder: "ex: 2..." },
    { label: "Ending Page", type: "number", placeholder: "ex: 2..." },
    { label: "Select Chapter", type: "select", search: true, options: ["Chapter no 1", "Chapter no 2"] },
    { label: "Select Book", type: "select", search: true, options: ["Book 1", "Book 2"] }
    
  ];

  return (
    <div>
      {/* HEADER */}
      <header className="header d-flex justify-content-between align-items-center sticky-top">
        <div className="header-left d-flex align-items-center gap-2">
          <i className="bi bi-arrow-left back-icon"></i>
          <p>Book / Surah / Add Surah</p>
        </div>

        <div className="header-right d-flex align-items-center gap-3">
          <i className="bi bi-search"></i>
          <div className="notification position-relative">
            <i className="bi bi-bell"></i>
            <span className="badge">13</span>
          </div>
          <img src="/assets/images/pkFlag1.svg" alt="Flag" className="flag" />
          <img src="/assets/images/profile.svg" alt="Profile" className="profile" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="container">
        <h1 className="page-title">Add Surah</h1>
        <p className="page-description">
          Fill in the details below to add a new Surah to the database.
        </p>

        {/* FORM */}
        <form className="form-card">
          {/* Loop through fields in chunks of 2 for side-by-side layout */}
          {fields.reduce((rows, field, index) => {
            if (index % 2 === 0) {
              rows.push(fields.slice(index, index + 2));
            }
            return rows;
          }, []).map((row, rowIndex) => (
            <div key={rowIndex} className="form-row d-flex gap-3 mb-4 mt-2">
              {row.map((field, i) => (
                <FormField key={i} {...field} />
              ))}
            </div>
          ))}

          <div className="form-footer d-flex justify-content-between align-items-center mt-15">
            <a href="#" className="back-link">Back</a>
            <button type="submit" className="btn-submit">Add</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default App;
