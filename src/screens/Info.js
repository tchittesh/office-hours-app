import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {};
export default class Home extends Component<Props> {

  render() {
    <View style = {styles.BackButton}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
        <Icon style={styles.icon} name='arrow-back' size={30} color='black'/>
      </TouchableOpacity>
    </View>
  }
}

const styles = StyleSheet.create({
  BackButton: {
    flexDirection: 'column',

  },
  icon: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});
