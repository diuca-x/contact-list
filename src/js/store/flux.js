const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				]
		},



		actions: {
			
			loadSomeData: (contact_list) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				const store = getStore()
				setStore({"contacts" : [...store["contacts"], contact_list]})
			},

			contact_adinator: (contact_info) =>{


			}
			


			
		}
	};
};

export default getState;
