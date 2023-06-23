import React from "react";
import { useHistory } from "react-router-dom";

const DeviceNavigationPage = () => {
  const history = useHistory();

  const handleImageClick = () => {
    // Redirect to the existing device page
    history.push("/device"); // Replace "/device" with the actual URL of the existing device page
  };

  return (
    <div className="device-navigation-page">
      <img
        src="./images/TextMagazine_p1.png"
        alt="Device Image"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default DeviceNavigationPage;
