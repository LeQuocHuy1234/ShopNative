import React from "react";
import { View, Text, Dimensions, StyleSheet, Image, Button, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { sendToOrder } from '../../../actions/index';
import { StackActions, NavigationActions } from 'react-navigation';
import { store } from '../../../index';

class PaymentScreen extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         name: '',
         address: '',
         phone: '',
         email: '',
         amount: this.props.navigation.getParam('amount'),
      }
   }

   static navigationOptions = ({navigation}) => {

      return {
        title: 'Đặt hàng',
        headerStyle: {
          backgroundColor: '#008ae6',
        },
      }
   };
   
   componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps.order !== this.props.order) {
         if(this.props.order.success) {
            const resetAction = StackActions.reset({
               index: 0,
               actions: [NavigationActions.navigate({ routeName: 'Home' })],
             });
             this.props.navigation.dispatch(resetAction);
         }
      }
   }
   
   // componentWillUpdate(nextProps, nextState) {
   //    if(this.props.order !== nextProps.order) {
   //       if(nextProps.order.success) {
   //          const resetAction = StackActions.reset({
   //             index: 0,
   //             actions: [NavigationActions.navigate({ routeName: 'Home' })],
   //           });
   //           this.props.navigation.dispatch(resetAction);
   //       }
   //    }
   //  }

   onSubmitOrder = async () => {
      let data = {
         name: this.state.name,
         address: this.state.address,
         phone: this.state.phone,
         email: this.state.email,
         amount: this.state.amount,
         orderDetail: this.props.cart,
      }
      await this.props.onAddToOrder(data);
  }

   ShowViewError(params) {
     if(params) {
        return (<View>
           <Text style = { styles.error }>{ params }</Text>
        </View>)
     }
   }

   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               placeholder = "Tên"
               autoCapitalize = "none"
               onChangeText = { (text) => this.setState({ name: text }) }/>
            {
               this.ShowViewError(this.props.order ? this.props.order.name ? this.props.order.name[0] : '' : '')
            }
            <TextInput style = {styles.input}
               placeholder = "Địa chỉ"
               autoCapitalize = "none"
               onChangeText = { (text) => this.setState({ address: text }) }/>
            {
               this.ShowViewError(this.props.order ? this.props.order.address ? this.props.order.address[0] : '' : '')
            }
            <TextInput style = {styles.input}
               placeholder = "Số  điện thoại"
               keyboardType = 'phone-pad'
               autoCapitalize = "none"
               onChangeText = { (text) => this.setState({ phone: text }) }/>
            {
               this.ShowViewError(this.props.order ? this.props.order.phone ? this.props.order.phone[0] : '' : '')
            }
            <TextInput style = {styles.input}
               placeholder = "Email"
               autoCapitalize = "none"
               onChangeText = { (text) => this.setState({ email: text }) }/>
            {
               this.ShowViewError(this.props.order ? this.props.order.email ? this.props.order.email[0] : '' : '')
            }

            <TouchableOpacity
               style={styles.button}
               onPress={this.onSubmitOrder}
            >
               <Text style = { styles.submitButtonText }> Mua hàng </Text>
            </TouchableOpacity>
         </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {
     paddingTop: 23
   },
      error: {
      marginLeft: 15,
      color: 'red'
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'black',
      borderWidth: 1
   },
   button: {
      margin: 15,
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      backgroundColor: 'red'
   },
   submitButtonText: {
      color: 'white'
   }
})

const mapStateToProps = (state) => {
   return {
     cart: state.reducerCart,
     order: state.reducerOrder
   }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToOrder: (data) => {
      dispatch(sendToOrder(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentScreen);