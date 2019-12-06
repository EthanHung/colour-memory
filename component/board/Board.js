import React, {Component} from 'react';
//import rect in our project
import {StyleSheet, View, FlatList, Image, Text} from 'react-native';
import Card from '../card/Card';

const BOARD_SIZE = 16;

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
      keyList: this.initCardKey(),
      cardNumber: -1,
    };
  }

  componentDidMount() {
    var that = this;
    let items = Array.apply(null, Array(BOARD_SIZE)).map((v, i) => {
      return {id: i, src: 'http://placehold.it/200x200?text=' + (i + 1)};
    });
    that.setState({
      dataSource: items,
    });
  }

  initCardKey() {
    const createRandomAry = () => {
      return Array.from(Array(BOARD_SIZE / 2).keys()).sort(() => Math.random() - 0.5);
    };

    let keyList = [...createRandomAry(), ...createRandomAry()];
    console.log('keyList', keyList)
    return keyList;
  }

  onChange(id, cardNumber) {
    console.log(`Data changes to ${id}, ${cardNumber} from board!`);
    let newState = {
      id: id,
      cardNumber: cardNumber,
    };
    this.setState(newState);
    this.props.onChangeValue(id, cardNumber);
  }

  render() {
    const {cardNumber} = this.props;

    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item, index}) => (
            <View style={styles.viewContainer}>
              {/*<Image style={styles.imageThumbnail} source={{uri: item.src}} />*/}
              <Card
                id={index}
                cardNumber={this.state.keyList[index]}
                data={cardNumber}
                onChangeValue={(id, cardNumber) =>
                  this.onChange(id, cardNumber)
                }
              />
            </View>
          )}
          //Setting the number of column
          numColumns={BOARD_SIZE / 4}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
    padding: 5,
    zIndex: 60,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
//    position: 'absolute',
//    top: 0,
//    left: 0,
//    right: 0,
//    bottom: 0,
//    borderRadius: 2,
  },
});
