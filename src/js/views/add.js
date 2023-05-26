import React from "react";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <>
      <div className="mt-5 container ">
        <form className="my-5">
          <div class="mb-3">
            <label for="name" class="form-label ">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              aria-describedby="namelHelp"
              placeholder="Full Name"
            />
          </div>
          <div class="mb-3">
            <label for="Email1" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="Email1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Phone
            </label>
            <input
              type="number"
              class="form-control"
              id="phone"
              placeholder="Enter phone"
            />
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">
              Adress
            </label>
            <input
              type="text"
              class="form-control"
              id="adress"
              placeholder="Enter Adress"
            />
          </div>
          <button type="submit" class="btn btn-primary add_btn">
            Save
          </button>
          <Link to={"/"}>or get back to contacts</Link>
        </form>
      </div>
    </>
  );
};

export default Add;
