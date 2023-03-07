/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  number: number;
}>;

function Section({number = 0}: SectionProps): JSX.Element {
  let title = number.toString();

  if (number % 100 === 0 && number !== 0) {
    title = `beep boop (${number})`;
  } else if (number % 20 === 0 && number !== 0) {
    title = `boop (${number})`;
  } else if (number % 5 === 0 && number !== 0) {
    title = `beep (${number})`;
  }

  return (
    <View key={title} style={styles.sectionContainer}>
      <Text key={`${title}-text`} style={styles.sectionTitle}>
        {title}
      </Text>
    </View>
  );
}

function Home(): JSX.Element {
  const [scrollValue, setScrollValue] = React.useState(0);

  const scrollHandler = (event: any) => {
    setScrollValue(event.nativeEvent.contentOffset.y);
  };

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const scrollTo = () => {
    // If we're not on the top of the screen, scroll to the top
    if (scrollValue > 0) {
      flatlistRef.current?.scrollToIndex({animated: true, index: 0});
    } else {
      flatlistRef.current?.scrollToEnd({
        animated: true,
      });
    }
  };

  let flatlistRef = React.useRef<FlatList>(null);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        ref={flatlistRef}
        contentInsetAdjustmentBehavior="automatic"
        getItemLayout={(data, index) => ({
          length: 25 + 16, // height + margin
          offset: (25 + 16) * index,
          index,
        })}
        data={[...Array(1000).keys()]}
        renderItem={({item}) => <Section number={item + 1} />}
        keyExtractor={(item, index) => `${index}-section`}
      />
      <TouchableOpacity style={styles.scrollToButton} onPress={scrollTo}>
        <Text style={styles.buttonText}>{scrollValue > 0 ? '↑' : '↓'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: 25,
    marginVertical: 8,
    paddingHorizontal: 32,
    textAlign: 'center',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
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

export default Home;
