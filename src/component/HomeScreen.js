import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { fetchProducts } from '../../actions/index';
import { connect } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemProductScreen from "./Product/ItemProductScreen";

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {

    return {
      title: 'Trang chủ',
      headerStyle: {
        backgroundColor: '#008ae6',
      },
      headerRight: (
        <Ionicons name="ios-cart" size={25} style= {{ margin: 4 }} color="white" onPress = { () => navigation.navigate('Cart') }/>
      )
    }
  };
  
  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data = {this.props.products}
          renderItem = {({item}) => <ItemProductScreen item = { item } navigation = { this.props.navigation }/>}
          keyExtractor = {(item) => item.name}
          numColumns = '2'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d9d9d9'
    }
})

const mapStateToProps = (state) => {
  return {
    products: state.reducerProducts
  }   
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: () => {
      dispatch(fetchProducts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
