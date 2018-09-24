import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar } from 'react-native-elements';

type Props = {};
export default class Home extends Component<Props> {

  state = {
    data: []
  }

  componentWillMount() {
    this.populateData()
  }

  populateData() {
    this.setState({data: [
      {
        classNum: '15-151',
        name: 'Tangential',
        startTime: 18,
        endTime: 19
      },
      {
        classNum: '15-122',
        name: 'Conceptual',
        startTime: 20,
        endTime: 21
      }
    ]})
  }

  _renderItem = ({item}) => (
    <View style={styles.CellContainer}>
      <View style={styles.CellInnerCont}>
        <View style={styles.CellColumn}>
          <Text style={styles.CellNum}>
            {item.classNum} {item.name}
          </Text>
        </View>
        <View style={styles.CellColumn}>
          <Text style={styles.CellTime}>
            ({item.startTime}:00-{item.endTime}:00)
          </Text>
        </View>
      </View>

      <TouchableOpacity>
        <Icon style={styles.icon} name='add' size={30} color='black'/>
      </TouchableOpacity>

    </View>
  )

  _keyExtractor = (item, index) => item.startTime;


  render() {
    return (
      <View>
        <Header />
        <SearchBar
          round
          lightTheme
          placeholder = 'Search'
          />
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          navigation={this.props.navigation}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  CellContainer:{
    flex:1,
    flexDirection:'row',
    padding: 20,
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:'red'
  },
  CellNum:{
    fontSize:20,
    alignItems:'center',
    justifyContent:'center'
  },
  CellTime:{
    // fontSize:20,
    alignItems:'center',
    justifyContent:'center'
  },
  CellInnerCont:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  CellColumn:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  icon:{
    justifyContent:'center',
    alignItems:'center'
  }

});
