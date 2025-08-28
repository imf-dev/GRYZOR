import React from "react";

function ChioProfile() {
  return (
    <div style={{ width: '100%', height: '100vh', border: 'none' }}>
      <iframe
        src="/chio-profile.html"
        style={{
          width: '100%',
          height: '100vh',
          border: 'none',
          overflow: 'hidden'
        }}
        title="Chio's Profile"
      />
    </div>
  );
}

export default ChioProfile;