import React, { useState } from 'react';

const VnetForm = () => {
  const [formData, setFormData] = useState({
    vnetName: '',
    addressSpace: '',
    resourceGroup: '',
    location: '',
    projectName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>VNET Name:</label>
        <input type="text" name="vnetName" value={formData.vnetName} onChange={handleChange} />
      </div>
      <div>
        <label>Address Space:</label>
        <input type="text" name="addressSpace" value={formData.addressSpace} onChange={handleChange} />
      </div>
      <div>
        <label>Resource Group:</label>
        <input type="text" name="resourceGroup" value={formData.resourceGroup} onChange={handleChange} />
      </div>
      <div>
        <label>Location:</label>
        <input type="text" name="

location

" value={formData.location} onChange={handleChange} />
      </div>
      <div>
        <label>Project Name:</label>
        <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default VnetForm;