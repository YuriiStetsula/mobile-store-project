/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./catalog.component.html";
import './catalog.component.styl';

class Controller {
    constructor($http, cartService, $state) {
        console.log("Catalog init!!");
      this.cart = cartService;
      this.$state = $state;

      this.orderValue = ""
      this.filteredBy = ""

      this.limit = 9;
        $http.get('http://localhost:4001/api/v1/phones').then((resp) => {
            this.items = resp.data;
          debugger;
        });


    }



    sortBy(value){
      debugger;
      this.orderValue = value
      if ( value === "price" ||value === "-price"){
        this.showAll()
        this.filteredBy = "price"

      }else if(value === ""){
        this.filteredBy = ""
      }

    }

    addItemToCart(catalogItem) {
        debugger;

        this.cart.setItem(catalogItem)
    }

    toDetails(id) {
        debugger;
        this.$state.go('details', {id});
    }


    showMore(){
      let itemsLength = this.items.length
      if (this.limit !== itemsLength ){
        this.limit += 6
      }
    }

    showAll(){
      this.limit = this.items.length
    }
}

const CatalogComponent = {
    template,
    controller: Controller
};

export {CatalogComponent};
