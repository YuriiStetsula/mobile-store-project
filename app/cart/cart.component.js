/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./cart.component.html";
import "./cart.component.styl"

class Controller {
    constructor($state,$scope,cartService) {
        console.log("App init!!");
        this.cart = cartService;
        this.$state = $state;
        this.purchases = this.getPurchases();
        this.quantity = this.getQuantity
        this.totalPrice = this.getTotalPrice();
        this.disabled = this.isDisabled();
        // $scope.$watch(()=> {
        //   return this.cart.total
        // }, (newAmout, oldAmout) => {
        //   console.log(newAmout+" "+oldAmout)
        //   if(newAmout !== oldAmout) {
        //     this.totalPrice = this.getTotalPrice(this.cart.cartItems);
        //   }
        // })

      $scope.$watch(()=> {
        debugger;
        return this.quantity()
      }, (newAmout, oldAmout) => {
        console.log(newAmout+" "+oldAmout)
        if(newAmout !== oldAmout) {
          this.cart.total++
          this.totalPrice = this.getTotalPrice();

        }
      })

      $scope.$watch(()=> {

        return this.isDisabled()
      }, (newAmout, oldAmout) => {
        console.log(newAmout+" "+oldAmout)
        if(newAmout === false) {
          this.disabled = false
        }else if (newAmout === true){
          this.disabled = true
        }
      })

    }

    getPurchases() {
        return this.cart.getItems();
    }

    getTotalPrice(arrayOfItems) {
        // let total = 0;
        //
        // arrayOfItems.forEach((obj) => {
        //
        //     total += parseInt((+obj.price) * (+obj.num));
        // });
        //
        // return total;
      return this.cart.getTotalSum()
    }

    deleteItem(id){
      debugger;
      let returnedArr =  this.cart.removeCartItem(id);
      this.totalPrice = this.getTotalPrice();
    }

  getQuantity(){
    debugger;
    let numbers = null
    let items  = this.cart.cartItems
    for (let i = 0 ; i < items.length; i++){
      debugger;

        numbers += items[i].num

    }
    return numbers
  }

  isDisabled(){
    if (this.purchases.length > 0){
      return false
    }else {
      return true
    }
  }


  toCheckout(){
    this.$state.go("checkout")
  }
}

const CartComponent = {
    template,
    controller: Controller
};

export { CartComponent };
