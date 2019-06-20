import React from "react";
import { View, Text, Dimensions, StyleSheet, Image, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { addToCart, deleteToCart } from '../../../actions/index';

const { height, width } = Dimensions.get('window')

class ItemCartScreen extends React.Component {
  onChangeCart = (data) => {
    let dataCart = {
      id: this.props.item.id,
      image: this.props.item.image,
      name: this.props.item.name,
      amount: this.props.item.sale_price > 0 ? this.props.item.sale_price : this.props.item.price,
      qty: data,
    }
 
    this.props.onAddToCart(dataCart);
  }

  render() {
    let imageProduct = {
      uri: this.props.item.image
    };
    return (
      <View>
        <View style = {styles.container}>
          <View style = {styles.imageView}>
            <Image
                source = { imageProduct }
                style = {{ height: height/5 }}
              />
          </View>
          <View style = {styles.content}>
            <Text>{ this.props.item.name }</Text>
            <View style = {{ flex:2 }}>
              <TextInput
                keyboardType="numeric"
                returnKeyType="go"
                maxLength={3}
                value={`${this.props.item.qty}`} //here
                onChangeText={value => {this.onChangeCart(value)}}
              />
            </View>
            <View style = {{ flex:1 }}>
              <Button 
                title = "Xóa"
                color="red"
                onPress = {() => this.props.onDeleteCart({id: this.props.item.id })}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height/5,
    backgroundColor:'white',
    marginTop: 4,
    flexDirection:'row'
  },
  imageView: {
    flex: 1

  },
  content: {
    flex:2,
    padding: 4
  }
})

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCart: (data) => {
      dispatch(addToCart(data))
    },
    onDeleteCart: (data) => {
      dispatch(deleteToCart(data))
    }
  }
}

export default connect(null, mapDispatchToProps)(ItemCartScreen);