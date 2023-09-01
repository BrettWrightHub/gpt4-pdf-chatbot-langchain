// pages/settings.tsx

import React, { useState } from 'react';

const Settings = () => {
  const [namespace, setNamespace] = useState('');

  const handleUpdateNamespace = async () => {
    const response = await fetch('/api/updateNamespace', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ newNamespace: namespace })
    });

    if (response.ok) {
      alert('Namespace updated successfully');
    } else {
      alert('Failed to update namespace');
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <div>
        <label>
          Pinecone Namespace:
          <input type="text" value={namespace} onChange={(e) => setNamespace(e.target.value)} />
        </label>
        <button onClick={handleUpdateNamespace}>Update</button>
      </div>
    </div>
  );
};

export default Settings;
