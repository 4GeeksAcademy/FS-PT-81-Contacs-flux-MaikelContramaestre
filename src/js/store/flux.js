const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URL: 'https://playground.4geeks.com/contact'
		},
		actions: {

			selectContact: (contact) => setStore({ selected: contact }),
			// busqueda de AGENDA
			busqAgenda: async () => {
				try {
					const response = await fetch(getStore().URL + '/agendas/nereus')
					if (response.status === 404) return getActions().addAgenda()
					if (!response.ok) throw new Error('Error buscando en la agenda ')
					const data = await response.json();
					setStore({ contacts: data.contacts });
				} catch (error) {
					console.error(error);
				}
			},
			// crear AGENDA
			addAgenda: async () => {
				try {
					const response = await fetch(getStore().URL + '/agendas/nereus', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						}
					});
					if (!response.ok) throw new Error("Error Buscando la agenda")
					return getActions().busqAgenda();
				} catch (error) {
					console.log(error);
				}
			},
			//creando al contacto en la agenda
			addUsuario: async (contact) => {
				try {
					const response = await fetch(getStore().URL + '/agendas/nereus/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
					if (!response.ok) throw new Error("Error agregando a la agenda")
					return getActions().busqAgenda()
				} catch (error) {
					console.log(error);
				}
			},

			deleteContacto: async (id) => {
				try {
					const response = await fetch(getStore().URL + '/agendas/nereus/contacts/' + id, {
						method: 'DELETE'
					})
					if (!response.ok) throw new Error("Error borrando al contacto");
					return getActions().busqAgenda()
				} catch (error) {
					console.log(error);
				}
			},
			editContacto: async (contact) => {
				try {
					const response = await fetch(getStore().URL + '/agendas/nereus/contacts/' + contact.id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
					if (!response.ok) throw new Error("Error borrando al contacto")
					return getActions().busqAgenda()
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
