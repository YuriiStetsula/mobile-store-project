/**
 * Created by admin on 09.02.2017.
 */
import template from "./photo.component.html";

class Controller {
  constructor() {
    console.log("photo init!!");

  }
  change(data){
    debugger;
    console.log(data)
    this.onChange({url: data})


  }
}

const PhotoComponent = {
  template,
  controller: Controller,
  bindings: {
    componentImages: '<',
    onChange: '&',
    mainImage: '<'
  }
};

debugger;

export {PhotoComponent};
