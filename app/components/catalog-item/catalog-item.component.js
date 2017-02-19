/**
 * Created by IlyaLitvinov on 20.01.17.
 */
import template from "./catalog-item.component.html";
import './catalog-item.component.styl';

class Controller {
    constructor() {
        console.log("Catalog item init!!");
    }

    add() {
        debugger;
        this.onAdd({catalogItem:this.componentItem});
    }

    goToState(event) {
        if(event.target.classList.contains('btn')) {
            event.stopPropagation();
            return;
        }
        debugger;
        this.toState({id: this.componentItem._id});
    }

}

const CatalogItemComponent = {
    template,
    controller: Controller,
    bindings: {
        componentItem: '<',
        onAdd: '&',
        toState: '&'
    }

};

export {CatalogItemComponent};
