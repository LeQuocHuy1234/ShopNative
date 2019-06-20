import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

const { height, width } = Dimensions.get('window')

export default class ItemProductScreen extends React.Component {

  OnChangeScreen = () => {
    this.props.navigation.navigate('ProductDetail', {
      item: this.props.item
    });
  }

  render() {
    let imageProduct = {
      uri: this.props.item.image
    };    
    return (
      <View style = {styles.listItem}>
          <TouchableOpacity style = {styles.item} onPress = { this.OnChangeScreen }>
            <View>
              <Image
                source = { imageProduct }
                style = { styles.image }
              />
              <View style = { styles.title }>
                <Text>{ this.props.item.name }</Text>
              </View>
              <View style = { styles.title }>
                { this.ViewPrice() }
              </View>
            </View>
          </TouchableOpacity>
      </View>
    );
  }

  ViewPrice () {
    if (this.props.item.sale_price > 0) {
        return (
          <View style = {{ flex:1, flexDirection:'row' }}>
            <Text style = {{ fontWeight: '100', margin:2, color: 'red', flex:1 }}>{ this.props.item.sale_price }đ</Text>
            <Text style = {{ textDecorationLine: 'line-through', flex:1 }}>{ this.props.item.price }đ</Text>  
          </View>
        )
    }
    return (<Text style = {{ fontWeight: '100', margin:2, color: 'red', flex:1 }}>{ this.props.item.price }đ</Text>)
  }
}

const styles = StyleSheet.create({
    listItem: {
      width: width/2,
      height: height*1/3,
    },
    item: {
      flex:1,
      margin: 4,
      backgroundColor: 'white'
    },
    image: {
      height: height*2/9,
      width: '100%'
    },
    title: {
      padding: 2,
      flexDirection:'row',
    }
});

