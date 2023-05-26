import React from "react";

const Contact = () => {
  return (
    <>
      <div className="row border contact_container">
        <div className="col-3 ">
          <img
            className="contact_img my-3 border"
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
            alt="Avatar"
          />
        </div>
        <div className="col-6 contact_info border ps-5">
          <h4 className="fw-normal">Mike Anamendolla</h4>
          <p>
            <i className="fas fa-map-marker-alt me-3"></i>
            any direction
          </p>
          <p>
            <i className="fas fa-phone me-3"></i>
            600600600
          </p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            something@gmail.com
          </p>
        </div>
        <div className="col-3">
          <i className="fas fa-trash"></i>
          <i className="fas fa-pencil"></i>
        </div>
      </div>
    </>
  );
};

export default Contact;
