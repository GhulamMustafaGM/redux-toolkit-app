let contactsReducer = {

    //case reducer:  contacts-list/add
    add: (state, action) => {
        state.push(action.payload);
    },

    //case reducer:  contacts-list/remove
    remove: (state, action) => {
        let index = state.findIndex(contact => contact.id === action.payload);
        state.splice(index, 1);
    }
};

export default contactsReducer;
