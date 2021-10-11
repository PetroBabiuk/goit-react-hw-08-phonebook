import axios from 'axios';

export async function fetchContacts() {
    const { data } = await axios.get('/contacts');
    return data;
}

export async function postContact(contact) {
    return await axios.post('/contacts', {
        name: contact.name,
        number: contact.number
    });
}

export async function deleteContact(contactId) {
    return await axios.delete(`/contacts/${contactId}`);
}

export async function fetchContactById(contactId) {
    const { data } = await axios.get(`/contacts/${contactId}`);
    return data;
}