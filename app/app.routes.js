/**
 * Created by IlyaLitvinov on 30.10.16.
 */
const routerConfig = ($stateProvider, $urlRouterProvider, $locationProvider)  => {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('/', '/catalog');
    $urlRouterProvider.otherwise('/catalog');

    $stateProvider
        .state("catalog", {
            url: '/catalog',
            component: "appCatalog"//главный компонет
        })
        .state("cart", {
            url: '/cart',
            component: "appCart"//главный компонет
        })
        .state("checkout", {
          url: '/checkout',
          component: "appCheckout"//главный компонет
        })
        .state("details", {
            url: '/details/:id',
            component: "appDetails"//главный компонет
        })
};

export default routerConfig
