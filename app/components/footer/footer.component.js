import template from "./footer.component.html"
import "./footer.component.styl"

class Controller{
  constructor(){

  }


}

const FooterComponent = {
  template,
  controller: Controller,
  bindings: {
    mainLogo: '<'
  }
}

export {FooterComponent}
