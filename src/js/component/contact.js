import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contact = (props) => {
  const { contact_info } = props;
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="row border my-2 rounded contact_container">
        <div className="col-3 ">
          <img
            className="contact_img my-3 "
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
            alt="Avatar"
          />
        </div>
        <div className="col-6 contact_info  ps-5 pt-2">
          <h4 className="fw-normal">{contact_info.full_name}</h4>
          <p>
            <i className="fas fa-map-marker-alt me-3"></i>
            {contact_info.address}
          </p>
          <p>
            <i className="fas fa-phone me-3"></i>
            {contact_info.phone}
          </p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            {contact_info.email}
          </p>
        </div>
        <div className="col-3  d-flex contact_delpen">
          <Link to={`/add/${contact_info.id}`}>
          <i className="fas fa-pencil-alt mx-5"></i>
          </Link>
          <i className="fas fa-trash " onClick={() => {actions.contact_deletinator(contact_info.id)}}></i>
        </div>
      </div>
    </>
  );
};

export default Contact;
