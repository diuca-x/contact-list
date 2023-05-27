import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Add = () => {
  const { store, actions } = useContext(Context);

  const [info, setInfo] = useState({});

  const contact_setinator = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
    console.log(info);
  };

  return (
    <>
      <div className="mt-5 container ">
        <form className="my-5">
          <div className="mb-3">
            <label htmlFor="full_name" className="form-label ">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              aria-describedby="namelHelp"
              placeholder="Full Name"
              onChange={contact_setinator()}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={contact_setinator}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="phone"
              placeholder="Enter phone"
              onChange={contact_setinator}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Adress
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter Address"
              onChange={contact_setinator}
            />
          </div>
          <button type="submit" className="btn btn-primary add_btn">
            Save
          </button>
          <Link to={"/"}>or get back to contacts</Link>
        </form>
      </div>
    </>
  );
};

export default Add;
