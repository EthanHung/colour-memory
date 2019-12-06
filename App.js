/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  Alert,
  Component,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Header from './component/header/Header';
import Board from './component/board/Board';
//import {AsyncStorage} from 'react-native';

const FLIPPED_DELAY = 1000;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      highScore: 0,
      clickedCard: -1,
    };
  }

  componentDidMount() {
    this.getHighScore().done();
  }

  async getHighScore() {
    try {
      const value = await AsyncStorage.getItem('@Cache:highScore');
      if (value !== null) {
        console.log(value);
        this.updateState({highScore: value}).then();
      }
    } catch (error) {
      console.log(error);
    }
  }

  setHighScore(score) {
    console.log('score', JSON.stringify(score));
    AsyncStorage.setItem('@Cache:highScore', JSON.stringify(score));
  }

  onChange(id, cardNumber) {
    console.log(`Data changes to ${id}, ${cardNumber} from app!`);
    console.log(id, cardNumber, this.state.clickedCard);

    if (this.state.clickedCard === -1) {
      this.updateState({clickedCard: cardNumber}).then();
    } else {
      console.log('setTimeout', cardNumber, this.state.clickedCard);
      if (this.state.clickedCard === cardNumber) {
        //  add 5 pt
        //  remove the card
        //  >= high score update the alert and update high score
        this.delay(() => {
          Alert.alert('add 5pt');
          this.updateState({score: this.state.score + 5}).then();
        });
      } else {
        //  deduce 1 pt
        this.delay(() => {
          Alert.alert('deduce 1pt');
          this.updateState({score: this.state.score - 1}).then();
        });
      }

      console.log('setTimeout', cardNumber, this.state.clickedCard);

      //  reset the clicked card
      this.updateState({clickedCard: -1}).then();
    }
  }

  delay(callback) {
    setTimeout(() => {
      callback();
    }, FLIPPED_DELAY);
  }

  async updateState(data) {
    await this.setState(data);
  }

  render() {
    const {data, clickedCard} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header score={this.state.score} highScore={this.state.highScore}/>
            {/*{global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}*/}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Board
                  data={clickedCard}
                  onChangeValue={this.onChange.bind(this)}
                />
                {/*<Button title="setHighScore" onPress={this.setHighScore()}/>*/}
                {/*<Button title="getHighScore" onPress={this.getHighScore()}/>*/}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}


//const App: () => React$Node = () => {
//  return (
//    <>
//      <StatusBar barStyle="dark-content" />
//      <SafeAreaView>
//        <ScrollView
//          contentInsetAdjustmentBehavior="automatic"
//          style={styles.scrollView}>
//          <Header score="22"/>
//          {/*{global.HermesInternal == null ? null : (
//            <View style={styles.engine}>
//              <Text style={styles.footer}>Engine: Hermes</Text>
//            </View>
//          )}*/}
//          <View style={styles.body}>
//            <View style={styles.sectionContainer}>
//
//              <Button
//                title="Press me"
//                onPress={() => test()}
//              />
//              {/*<Board />*/}
//            </View>
//          </View>
//        </ScrollView>
//      </SafeAreaView>
//    </>
//  );
//};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;
