import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions, Button } from "react-native";
import { connect } from "react-redux";
import ItemCartScreen from "./Cart/ItemCartScreen";

const { height } = Dimensions.get('window');

class CartScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Giỏ hàng',
      headerStyle: {
        backgroundColor: '#008ae6',
      }
    }
  };

  Payment() {
    let tong = 0;
    this.props.cart.forEach(function(element) {
      tong = tong + (element.amount * element.qty)
    });
    return tong;
  }

  render() {
    return (
      <View style = { styles.container }>
        <FlatList
          data = { this.props.cart }
          renderItem = {({item}) => <ItemCartScreen item = { item } />}
          keyExtractor = {(item) => item.name}
        />
        {
          this.Payment() > 0 
          ?
          <View style = { styles.payment }>
          <Text style = { styles.content }>Tổng tiền: <Text style = {{ color: 'red' }}>{ this.Payment() } đ</Text></Text>
          <View style = { styles.content } >
            <Button
              title = "Mua Hàng"
              color = "red"
              onPress = { () => this.props.navigation.navigate('Payment', {
                amount: this.Payment()
              }) }
            />
          </View>
        </View>
        :
        <View></View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.reducerCart
  }
}

export default connect(mapStateToProps, null)(CartScreen);


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#d9d9d9'
  },
  payment: {
      backgroundColor:'white',
      height: height/10,
      flexDirection: 'row'
  },
  content: {
    flex:1,
    padding: 4,
    color: 'black',
    fontSize: 15,
    fontWeight: '100',
  }
})