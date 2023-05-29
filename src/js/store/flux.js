const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      current: [],
    },

    actions: {
      loadSomeData: (contact_list) => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

        const store = getStore();
        setStore({ contacts: [contact_list] });
      },

      contact_adinator: (contact_info) => {
        contact_info.agenda_slug = "diuca_agenda";
        fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          body: JSON.stringify(contact_info),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => getActions().contact_getinator())
          .catch((error) => console.log("error", error));
      },

      contact_deletinator: (id) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.text())
          .then((result) => {
            getActions().contact_getinator();
          })
          .catch((error) => console.log("error", error));
      },

      contact_getinator: () => {
        fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/diuca_agenda",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((result) => getActions().loadSomeData(result))
          .catch((error) => console.log("error", error));
      },

      contact_updatinator: (current_id, contact_info) => {
        contact_info.agenda_slug = "diuca_agenda";
        fetch(`https://assets.breatheco.de/apis/fake/contact/${current_id}`, {
          method: "PUT",
          body: JSON.stringify(contact_info),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((result) => getActions().contact_getinator())
          .catch((error) => console.log("error", error));
      },

      contact_current_getinator: (current_id) => {
        if (current_id == 0) {
          setStore({ current: {} });
        } else {
          fetch(`https://assets.breatheco.de/apis/fake/contact/${current_id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((result) => {
              setStore({ current: result });
            })
            .catch((error) => console.log("error", error));
        }
      },
    },
  };
};

export default getState;
