/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';
import type {Node} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import React from 'react';

//export default class Header extends React.Component {
//  render() {
//    const { data } = this.props;
//    console.log('this.props', this.props)
//    return (
//      <View style={styles.container}>
//        <Image
//          style={styles.logo}
//          source={{
//            uri:
//              'https://media.licdn.com/dms/image/C510BAQHThqGh3cTkAA/company-logo_400_400/0' +
//              '?e=1583366400&v=beta&t=bDUC6XxslPiHjUxHJuVFfb74Aub_KGgE-wuFgwtwoyc',
//          }}
//        />
//        <Text style={styles.text}>Score: {this.props.data}</Text>
//      </View>
//    );
//  }
//}

const Header = ({score, highScore}): Node => (
  <View style={styles.container}>
    <Image
      style={styles.logo}
      source={{
        uri:
          'https://media.licdn.com/dms/image/C510BAQHThqGh3cTkAA/company-logo_400_400/0' +
          '?e=1583366400&v=beta&t=bDUC6XxslPiHjUxHJuVFfb74Aub_KGgE-wuFgwtwoyc',
      }}
    />
    <Text style={styles.text}>Score: {score}</Text>
    <Text style={styles.text}>High Score: {highScore}</Text>
  </View>
);

const styles = StyleSheet.create({
  logo: {
    padding: 10,
    width: 80,
  },
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    fontSize: 20,
    padding: 10,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  score: {
    textAlign: 'right',
    color: 'black',
  },
});

export default Header;
