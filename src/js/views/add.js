import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Add = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [info, setInfo] = useState({});

  const contact_setinator = (event) => {
    setInfo({ ...info, [event.target.id]: event.target.value });
    console.log(info);
  };
  useEffect(() => {
    if (params.id != 0) {
      actions.contact_current_getinator(params.id);
    }
  }, []);
  useEffect(() => {
    let current = store.current;
    console.log("currentinadd");
    console.log(current);
  }, [store.current]);

  return (
    <>
      <div className="mt-5 container ">
        <form
          className="my-5"
          onSubmit={(event) => {
            event.preventDefault();
            if (params.id != 0) {
              actions.contact_updatinator(params.id, info);
            } else {
              actions.contact_adinator(info);
            }
          }}
        >
          <div className="mb-3">
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
              defaultValue={
                params.id != 0 && typeof current !== "undefined"
                  ? current.full_name
                  : "asd"
              }
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
