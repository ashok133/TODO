System.register(['@angular/router', './home/index', './login/index', './register/index', './_guards/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, index_1, index_2, index_3, index_4;
    var appRoutes, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: index_1.HomeComponent, canActivate: [index_4.AuthGuard] },
                { path: 'login', component: index_2.LoginComponent },
                { path: 'register', component: index_3.RegisterComponent },
                // otherwise redirect to home
                { path: '**', redirectTo: '' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map