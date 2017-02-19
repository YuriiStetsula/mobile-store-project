/**
 * Created by admin on 09.02.2017.
 */
import template from "./phonedescription.component.html";

class Controller {
  constructor() {
    console.log("phonedescription init!!");


  }

  add() {
    debugger;
    this.onAdd({catalogItem: this.phoneDescription});
  }


}

const  PhoneDescription = {
  template,
  controller: Controller,
  bindings: {
    phoneDescription: "<",
    onAdd: '&'
  }

  }


debugger;

export {PhoneDescription};
