import "./DetailedInformation.css";
function DetailedInformation() {
  const handleEditClick = () => {
    window.location.href = '/EditNumber'; 
  };

  return (
    <div className="main_container">
      <h2>Phone Number Details</h2>
      <span>Number:</span>
      <span>Price:</span>
      <span>Owner:</span>
      <span>Category:</span>
      <span>Description:</span>
      <button className="edit-button" onClick={handleEditClick}>Edit</button>
    </div>
  );
}

export { DetailedInformation };