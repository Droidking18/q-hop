/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {createContact, createUser} from '../services/user-service';

function Capture(): JSX.Element {
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const [userError, setUserError] = React.useState('');
  const [contactError, setContactError] = React.useState('');
  const [contactSuccess, setContactSuccess] = React.useState('');
  const [userSuccess, setUserSuccess] = React.useState('');

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const addUser = () => {
    // Validate input

    setUserError('');
    setUserSuccess('');

    if (!name && !surname) {
      setUserError('Name and surname are required');
      return;
    }

    if (!name) {
      setUserError('Name is required');
      return;
    }

    if (!surname) {
      setUserError('Surname is required');
      return;
    }

    setUserError('');
    createUser({name, surname});
    setUserSuccess('User added successfully');
  };

  useFocusEffect(
    React.useCallback(() => {
      setName('');
      setSurname('');
      setEmail('');
      setPhone('');
      setUserError('');
      setContactError('');
      setContactSuccess('');
      setUserSuccess('');

      // Clear input fields
    }, []),
  );

  const addContact = () => {
    // Validate input

    setContactError('');
    setContactSuccess('');

    if (!email && !phone) {
      setContactError('Email and phone are required');
      return;
    }

    if (!email) {
      setContactError('Email is required');
      return;
    }

    if (!phone) {
      setContactError('Phone is required');
      return;
    }

    const validPhone = /^\d+$/.test(phone);

    if (!validPhone) {
      setContactError('Phone is invalid');
      return;
    }

    const validEmail = /^\S+@\S+\.\S+$/.test(email);

    if (!validEmail) {
      setContactError('Email is invalid');
      return;
    }

    setContactError('');
    createContact({email, phone});
    setContactSuccess('Contact added successfully');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.flatList}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Add user</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>Name: </Text>
          <TextInput
            value={name}
            style={styles.inputContainer}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>Surname: </Text>
          <TextInput
            value={surname}
            style={styles.inputContainer}
            onChangeText={text => setSurname(text)}
          />
        </View>
        <Button title="Add" onPress={addUser} />

        {userError && <Text style={styles.error}>{userError}</Text>}

        {userSuccess && <Text style={styles.success}>{userSuccess}</Text>}
      </ScrollView>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.flatList}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Add contact</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>Email: </Text>
          <TextInput
            value={email}
            style={styles.inputContainer}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>Phone: </Text>
          <TextInput
            value={phone}
            style={styles.inputContainer}
            onChangeText={text => setPhone(text)}
          />
        </View>
        <Button title="Add" onPress={addContact} />

        {contactError && <Text style={styles.error}>{contactError}</Text>}

        {contactSuccess && <Text style={styles.success}>{contactSuccess}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 8,
    paddingHorizontal: 32,
    textAlign: 'center',
  },
  inputContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 8,
    paddingHorizontal: 8,
    height: 40,
  },
  dataContainer: {
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    height: '50%',
    borderColor: 'black',
    borderWidth: 1,
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  scrollToButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 50,
    height: 50,
    margin: 32,
    backgroundColor: 'black',
    color: 'white',
    padding: 8,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
  success: {
    color: 'green',
    textAlign: 'center',
  },
});

export default Capture;
