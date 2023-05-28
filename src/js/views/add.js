import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Add = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [info, setInfo] = useState({});

  const contact_setinator = (event) => {
    setInfo({ ...info, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    actions.contact_current_getinator(params.id);
  }, []);

  useEffect(() => {
    setInfo(store.current);
  }, [store.current]);

  return (
    <>
      <div className="mt-5 container add_container">
        <form
          className="my-5"
          onSubmit={(event) => {
            event.preventDefault();
            if (params.id != 0) {
              console.log("info");
              console.log(info);
              actions.contact_updatinator(params.id, info);
            } else {
              actions.contact_adinator(info);
            }
          }}
        >
          <div className="mb-3 ">
            <label htmlFor="full_name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              aria-describedby="namelHelp"
              placeholder="Full Name"
              required
              onChange={contact_setinator}
              value={info.full_name}
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
              required
              onChange={contact_setinator}
              value={info.email}
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
              required
              onChange={contact_setinator}
              value={info.phone}
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
              required
              onChange={contact_setinator}
              value={info.address}
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
