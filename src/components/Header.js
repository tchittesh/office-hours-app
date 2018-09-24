import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.title}>
          Office Hours
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:65,
    padding:8,
    paddingHorizontal:12,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:'steelblue'
  },
  title: {
    color: 'white',
    fontSize: 20
  }

});
