import React from "react";
import { View, Text, StyleSheet, Image, Dimensions, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { addToCart } from '../../../actions/index';
import { connect } from "react-redux";

const { height, width } = Dimensions.get('window')

class DetailProductScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.getParam('item')
    }
  }

  PressAddToCart = () => {
    let dataCart = {
      id: this.state.item.id,
      image: this.state.item.image,
      name: this.state.item.name,
      amount: this.state.item.sale_price > 0 ? this.state.item.sale_price : this.state.item.price,
    }
    
    this.props.onAddToCart(dataCart);
    this.props.navigation.navigate('CartStack')
  }

  static navigationOptions = ({navigation}) => {
    let item = navigation.getParam('item');

    return {
      title: item.name,
      headerStyle: {
        backgroundColor: '#008ae6',
      },
      headerRight: (
        <Ionicons name="ios-cart" size={25} style= {{ margin: 4 }} color="white" onPress = { () => navigation.navigate('Cart') }/>
      )
    }
  };

  ViewPrice () {
    if (this.state.item.sale_price > 0) {
        return (
          <View style = {{ flex:1, flexDirection:'row' }}>
            <Text style = {{ fontWeight: '100', marginRight:5, color: 'red' }}>{ this.state.item.sale_price }đ</Text>
            <Text style = {{ textDecorationLine: 'line-through' }}>{ this.state.item.price }đ</Text>  
          </View>
        )
    }
    return (<Text style = {{ fontWeight: '100', margin:2, color: 'red', flex:1 }}>{ this.state.item.price }đ</Text>)
  }

  render() {
    let imageProduct = {
      uri: this.state.item.image
    };
    return (
      <View style = { styles.container }>
        <View style = { styles.content }>
          <Image
            source = { imageProduct }
            style = { styles.image }
          />
          <View style = { styles.title }>
              <Text style = { styles.font }>{ this.state.item.name }</Text>
          </View>
          <View style = { styles.title }>
                { this.ViewPrice() }
          </View>
          <View style = { styles.button }>
          <Button
            onPress={ this.PressAddToCart }
            title="CHỌN MUA"
            color="red"
            containerViewStyle={{width: '100%', marginLeft: 0}}
            accessibilityLabel="Learn more about this purple button"
          />
          </View>
        </View>
        <View style = {[ styles.content, { marginTop: 4, flex: 1 } ]}>
          <Text style = { styles.font }>
            { this.state.item.content }
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    flex: 1
  },
  font: {
    color: 'black'
  },
  content: {
    backgroundColor: 'white',
  },
  image: {
    height: height*1/3,
  },
  title: {
    padding: 2,
    flexDirection:'row',
  },
  button: {
    marginTop: 4
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (data) => {
      dispatch(addToCart(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(DetailProductScreen);