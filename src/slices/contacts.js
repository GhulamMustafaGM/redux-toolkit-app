import { createSlice } from "@reduxjs/toolkit";
import contactsInitialState from "../data/contacts";
import contactsReducer from "../reducers/contacts";

//slice = part of state
var contactsSlice = createSlice({
    name: "contacts-list",
    initialState: contactsInitialState,
    reducers: contactsReducer
});

export default contactsSlice;
