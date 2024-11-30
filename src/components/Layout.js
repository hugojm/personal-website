import React from 'react';

function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <h1 className="logo">Hugo Jimenez</h1>
      </header>
      <main>{children}</main>
      {/* Consider adding a custom footer with streetwear styling */}
    </div>
  );
}

export default Layout;