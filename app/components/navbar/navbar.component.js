/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./navbar.component.html";
import './navbar.component.styl';

class Controller {
    constructor($state,$scope) {
        console.log("Navbar init!!");
        this.$state = $state;
      console.log(this.$state)

        this.popup = false;


    }




  remove(id){
      this.removeFromCart({idItem: id})
    }

  toDetails(id) {
    debugger;
    this.$state.go('details', {id});
  }

  showCartPopup(){
    this.popup = !this.popup
  }



 }



const NavbarComponent = {
    template,
    controller: Controller,
    bindings: {
        totalPrice: '<',
        itemsInCart: '<',
        removeFromCart: '&',
        mainLogo: '<',
        showCart: '<'
    }
};

export {NavbarComponent};
