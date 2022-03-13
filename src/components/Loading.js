import React from "react";

function Loading() {
  return (
    <div>
      <div
        className="spinner-border"
        role="status"
        style={{ height: "80px", width: "80px", marginTop:"100px" }}
      >
      </div>
    </div>
  );
}

export default Loading;
