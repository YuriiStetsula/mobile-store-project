/**
 * Created by IlyaLitvinov on 24.01.17.
 */
class CartService {
    constructor() {
        this.cartItems = [];
        this.total = 0 ;
        this.quantity = 0;

        this.enablePopup = true;


    }

    setItem(catalogItem) {
      debugger;
      catalogItem.num = catalogItem.num || 1
      let  equal = false
      if (this.cartItems.length > 0){
        for(let i = 0 ; i<this.cartItems.length ; i++ ){
          if (this.cartItems[i]._id === catalogItem._id){
            equal = true
            this.cartItems[i].num++
            this.total++ ;
          }
        }
      }

          if (this.cartItems.length === 0){
            this.cartItems.push(catalogItem)
            this.total++
          }else if (equal === false) {
            this.cartItems.push(catalogItem)
            this.total++
          }

      }

  removeCartItem(itemID){

    for(var i = 0; i<this.cartItems.length; i++) {
      debugger;
      if (this.cartItems[i]._id === itemID){
        this.cartItems[i].num = 1
        this.cartItems.splice(i,1)

      }

        }

    this.total--
    return this.cartItems
  }

  clearCart(){
    this.cartItems = [];
    this.total--;
  }

  getItems() {
        return this.cartItems;
    }

  getTotalSum(){
    let totalSum = 0
    this.cartItems.forEach((e)=>{
     totalSum += e.price * e.num
    })
    return totalSum
  }

  isEnablePopup(){
    return  this.enablePopup
  }
}

export {CartService}
