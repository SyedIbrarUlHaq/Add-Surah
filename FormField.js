import React from "react";

const FormField = ({ label, type = "text", placeholder, options = [], search = false }) => {
  return (
    <div className="form-group flex-fill">
      <label className="form-label">{label}</label>

      {/* Search box agar select hai aur search true hai */}
      {search && type === "select" && (
        <input type="text" placeholder="Search..." className="form-control mb-1" />
      )}

      {type === "select" ? (
        <select className="form-select">
          <option value="">Select</option>
          {options.map((opt, index) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} className="form-control" placeholder={placeholder} />
      )}
    </div>
  );
};

export default FormField;
