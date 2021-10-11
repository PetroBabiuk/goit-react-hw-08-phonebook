import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactShelfAPI from '../../services/contactshelf-api';
import * as contactsActions from './contacts-actions';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await contactShelfAPI.fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, { rejectWithValue }) => {
        try {
            await contactShelfAPI.deleteContact(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({name, number}, { rejectWithValue }) => {    
        try {
            const { data } = await contactShelfAPI.postContact({
                name,
                number,
            });
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const changeFilter = (value) => dispatch => {
    dispatch(contactsActions.changeFilter(value));
}