/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./details.component.html";
import   "./details.component.styl";


class Controller {
    constructor($stateParams, $http,cartService) {
        console.log("App init!!");
        console.log($stateParams);

       this.detail = {};
       this.mainPhoto = "";
       this.images = "";

      this.cart = cartService
     //this.review = getReview()

      $http.get('http://localhost:4001/api/v1/phones/'+ $stateParams.id).then((resp) => {

        this.detail = resp.data;

       this.mainPhoto = this.detail.images[0];
        this.images = this.detail.images;
          console.log(this.detail)
         debugger;
        })
    }

  // getReview(review){
   //   console.log(review)
    //  return review


    addItemToCart(catalogItem) {
      debugger;
      console.log(catalogItem)
      this.cart.setItem(catalogItem)
    }

      changePhoto(url){
        console.log("almoset "+ url)
         this.mainPhoto = url
          debugger;
        }
}

const DetailsComponent = {
    template,
    controller: Controller
};

export {DetailsComponent};
