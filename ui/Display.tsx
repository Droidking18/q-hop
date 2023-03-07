/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useFocusEffect} from '@react-navigation/native';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {FlatList} from 'react-native-gesture-handler';

import {getContacts, getUsers} from '../services/user-service';

function Display(): JSX.Element {
  const [users, setUsers] = React.useState([{name: '', surname: ''}]);
  const [contacts, setContacts] = React.useState([{email: '', phone: ''}]);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  useFocusEffect(
    React.useCallback(() => {
      getContacts().then(contactsList => {
        setContacts(contactsList);
      });

      getUsers().then(usersList => {
        setUsers(usersList);
      });
    }, []),
  );

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      {users.length !== 0 && contacts.length !== 0 && (
        <>
          <FlatList
            style={styles.flatList}
            ListHeaderComponent={
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Users</Text>
              </View>
            }
            stickyHeaderIndices={[0]}
            data={users}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {}}
                style={[styles.sectionContainer, styles.dataContainer]}>
                <Text style={styles.sectionDescription}>
                  Name: {item?.name}
                </Text>
                <Text style={styles.sectionDescription}>
                  Surname: {item?.surname}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />

          <FlatList
            style={styles.flatList}
            ListHeaderComponent={
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Contacts</Text>
              </View>
            }
            stickyHeaderIndices={[0]}
            data={contacts}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {}}
                style={[styles.sectionContainer, styles.dataContainer]}>
                <Text style={styles.sectionDescription}>
                  Email: {item?.email}
                </Text>
                <Text style={styles.sectionDescription}>
                  Phone: {item?.phone}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    // marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 32,
    textAlign: 'center',
    backgroundColor: 'offwhite',
  },
  dataContainer: {
    marginVertical: 8,
    paddingVertical: 0,
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
});

export default Display;
