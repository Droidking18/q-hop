// This file contains the user service, which is responsible for
// handling user-related requests.

import AsyncStorage from '@react-native-community/async-storage';

const dummyUsers = [
  {
    name: 'Michael',
    surname: 'Baker',
  },
];

const dummyContacts = [
  {
    email: 'michael@test.com',
    phone: '0825558364',
  },
];

export const createUser = async user => {
  // Creates a new user saves to local async storage
  // eg {name: 'Michael', surname: 'Myers'}

  const users = await getUsers(true);

  users.push(user);

  await AsyncStorage.setItem('users', JSON.stringify(users));
};

export const createContact = async contact => {
  // Creates a new contact saves to local async storage
  // eg {email: 'michael@test.com', phone: '0825558364'}

  const contacts = await getContacts(true);

  contacts.push(contact);

  await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
};

export const getUsers = async isGettingFromCreate => {
  // Gets all users from local async storage

  const users = await AsyncStorage.getItem('users');

  if (!users || users.length === 0) {
    if (isGettingFromCreate) {
      return [];
    }
    createUser(dummyUsers[0]);
  }

  return users ? JSON.parse(users) : dummyUsers;
};

export const getContacts = async isGettingFromCreate => {
  // Gets all contacts from local async storage

  const contacts = await AsyncStorage.getItem('contacts');

  if (!contacts || contacts.length === 0) {
    if (isGettingFromCreate) {
      return [];
    }

    createContact(dummyContacts[0]);
  }

  return contacts ? JSON.parse(contacts) : dummyContacts;
};
