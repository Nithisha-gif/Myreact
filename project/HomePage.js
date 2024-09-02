import React from 'react';

function HomePage() {
  return (
    <div className="container homepage">
      <h1>Welcome to Inventory Management System</h1>
      <div>
        <button>Add New Item</button>
        <button>View Inventory</button>
        <button>Manage Orders</button>
      </div>
    </div>
  );
}

export default HomePage;