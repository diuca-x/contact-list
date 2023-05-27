import React, { useContext } from "react";
import Contact from "../component/contact";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="text-center mt-5 container">
        {store.contacts[0]
          ? store.contacts[0].map((x, index) => {
              return <Contact contact_info={x} key={index} />;
            })
          : ""}
      </div>
    </>
  );
};

export default Home;
