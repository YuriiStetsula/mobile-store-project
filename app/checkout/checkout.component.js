/**
 * Created by admin on 18.02.2017.
 */
import template from "./checkout.component.html"
import "./checkout.component.styl"

class Controller {
  constructor(cartService) {
    this.cart = cartService;

    this.totalForCheckout = this.getTotal();
    this.itemsForCheckout = this.cart.getItems();
    this.success = false;



  }



  getTotal() {
    return this.cart.getTotalSum()
  }

  createNewOrder() {
    debugger;
    this.orderObject = {
      userFirstName: this.user.firstName,
      userLastName: this.user.lastName,
      userEmail: this.user.email,
      userPhone: this.user.phone,
      totalPrice: this.totalForCheckout,
      order: this.itemsForCheckout
    }
    this.success = true;
    this.clearOrder()
    console.log(this.orderObject)
  }

  clearOrder(){
    this.user.firstName = ""
    this.user.lastName = ""
    this.user.email = ""
    this.user.phone = ""
    this.cart.clearCart()
    this.totalForCheckout = 0;
    this.itemsForCheckout = "";
  }

  getError (err) {
    if (angular.isDefined(err)){
      if(err.required){
        return "This is required field"
      }else if (err.email){
        return "Please enter correct email@email.com"
      }
    }
  }

}

const CheckoutComponent = {
  template,
  controller: Controller,

}


export {CheckoutComponent}
