import angular from "angular";
import uiRouter from 'angular-ui-router';

import routerConfig from "./app.routes";

import { CatalogComponent } from "./catalog/catalog.component";
import { AppComponent } from "./app/app.component";
import { CartComponent } from "./cart/cart.component";
import { DetailsComponent } from "./details/details.component";
import { CheckoutComponent } from "./checkout/checkout.component"

import { NavbarComponent } from "./components/navbar/navbar.component";
import { CatalogItemComponent } from "./components/catalog-item/catalog-item.component";
import { PhotoComponent } from "./components/details-components/app-photo.component";
import { PhoneDescription } from "./components/details-components/phonedescription.component";
import { CommentComponent } from "./components/comments/comment.component";
import { FooterComponent } from "./components/footer/footer.component";

import { CartService } from "./app/app.cart.service";
import { CommentService } from "./app/app.comment.service";

import "./variables.styl";
import "./app.styl";


angular.module("client", [uiRouter])
    .constant("enums", {
        baseUrl: "http://localhost:4001/api/v1"
    })
    .config(routerConfig)
    .component("app", AppComponent)
    .component("appCatalog", CatalogComponent)
    .component("appCart", CartComponent)
    .component("appNavbar", NavbarComponent)
    .component("appDetails", DetailsComponent)
    .component("appCheckout", CheckoutComponent)
    .component("appCatalogItem", CatalogItemComponent)
    .component("photoComp", PhotoComponent)
    .component("phoneDescription", PhoneDescription)
    .component("commentComponent", CommentComponent)
    .component("footerComponent", FooterComponent)
    .service("cartService", CartService)
    .service("commentService", CommentService)
    .run();
