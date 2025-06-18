import React from "react";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import ListIcon from "@mui/icons-material/List";

const ToggleSwitch = ({ layout, toggleLayout }) => {
  return (
    <div
      className="px-5 pb-5 pt-3 mt-4"
      style={{ backgroundColor: "white", borderRadius: "15px" }}
    >
      <h1 className="mb-4 text-center">View Toggle</h1>
      <div className="  d-flex justify-content-center">
        <div class="btn-group " role="group">
          <button
            type="button"
            class={`btn ${
              layout === "vertical"
                ? "btn-success border font-weight-bold"
                : "btn-outline-light"
            }`}
            onClick={() => toggleLayout("vertical")}
          >
            <CreditCardIcon
              fontSize="large"
              sx={{ color: layout === "vertical" ? "white" : "black" }}
            />
          </button>

          <button
            type="button"
            class={`btn ${
              layout === "horizontal"
                ? "btn-success border font-weight-bold"
                : "btn-outline-light"
            }`}
            onClick={() => toggleLayout("horizontal")}
          >
            <ListIcon
              fontSize="large"
              sx={{ color: layout === "horizontal" ? "white" : "black" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
