import React, {Component} from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';

export default class Card extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.isTransition = false;
    this.animatedValue.addListener(({value}) => {
      this.value = value;
    });
  }

  clickCard(currentCard) {
    console.log('clickCard');
    if (!this.isTransition) {
      this.isTransition = true;

      this.props.onChangeValue(this.props.id, this.props.cardNumber);

      this.isTransition = false;
    }
  }

  getCardText() {
    return this.props.cardNumber === 0 ? 'o' : this.props.cardNumber;
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <Image
          source={{
            uri: 'http://placehold.it/200x200?text=' + this.getCardText(),
          }}
          style={[styles.imageStyle]}
        />
        <TouchableOpacity style={styles.card} onPress={() => this.clickCard(1)}>
          {/*<Text style={[styles.TextStyle]}>
            {this.props.id}, {this.props.cardNumber}
          </Text>*/}
          <Image
            source={{
              uri:
                'https://media.licdn.com/dms/image/C510BAQHThqGh3cTkAA/company-logo_400_400/0' +
                '?e=1583366400&v=beta&t=bDUC6XxslPiHjUxHJuVFfb74Aub_KGgE-wuFgwtwoyc',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 80,
    height: 120,
    zIndex: 80,
  },
  card: {
    //    backgroundColor: '#BAF5B5',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    borderRadius: 10,
  },
  TextStyle: {
    color: '#000',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    fontSize: 18,
  },
  //  activeCard: {
  //
  //  },
  //  activeCardText: {
  //    display: 'none',
  //  },
  //  deactiveCardText: {
  //    display: 'block',
  //  }
});
