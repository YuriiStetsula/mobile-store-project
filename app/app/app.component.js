/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./app.component.html";


class Controller {
    constructor($state,$scope, cartService) {
        console.log("App init!!");
        this.$state = $state;
          console.log(this.$state+ " state")

        this.cart = cartService;

        this.isCartEnable = true;

        this.itemsInCart = this.getItemsInCart()
        this.mainLogo = "http://webdevcodes.com/wp-content/themes/shopperpress/themes/Mobile-Phone-Store/images/logo.png"
       debugger;

      $scope.$watch(()=> {
        return this.cart.total
        }, (newAmout, oldAmout) => {
           console.log(newAmout+" "+oldAmout)
            if(newAmout !== oldAmout) {
                this.totalPrice = this.getTotalPrice();
                this.itemsInCart = this.getItemsInCart()
            }
        })

      $scope.$watch(()=>{
        return this.getState()
      },(n,o)=>{
      console.log("old state: " + o)
      console.log("new state "+ n)
        if(n === true){
          this.isCartEnable = false
        }else if (n === false ) {
          this.isCartEnable = true

        }
      })

    }

    getState(){

      if(this.$state.is('checkout')){
        return true
      }else {
        return false
      }
    }

    getTotalPrice() {
      debugger;
      //   let total = 0;
      //
      //   arrayOfItems.forEach((obj) => {
      //       total += parseInt((+obj.price) * (+obj.num));
      //   });
      //
      //   return total;
      return this.cart.getTotalSum()
    }

    getItemsInCart (){
     return this.cart.getItems()
    }

    removeItemsFromCart(idItem){
      debugger;
     return this.cart.removeCartItem(idItem)
    }
}

const AppComponent = {
    template,
    controller: Controller
};

export {AppComponent};
