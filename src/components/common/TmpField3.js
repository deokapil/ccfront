import React from "react";

const TmpField3 = () => {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor="">
        Scan Policy
      </label>
      <div id="formGridCheckbox" class="mb-1 form-group">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" />
          <label title="" class="form-check-label">
            Enable scan behind login.
          </label>
        </div>
      </div>
      <div id="formGridCheckbox" class="mb-1 form-group">
        <div class="form-check">
          <input type="checkbox" class="form-check-input" />
          <label title="" class="form-check-label">
            Auto scan website every 24 hours.
          </label>
        </div>
      </div>
    </div>  
  );
};

export default TmpField3;
