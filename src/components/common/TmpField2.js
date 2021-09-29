import React from "react";

const TmpField2 = () => {
  return (
    <div>
      <div className="mb-4 form-group">
        <label className="form-label" for="">
          Location Intelligence
        </label>
        <select className="custom-select" disabled>
          <option>Global (Default)</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default TmpField2;
