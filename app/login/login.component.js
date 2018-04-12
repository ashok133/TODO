System.register(['@angular/core', '@angular/router', '../_services/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(route, router, authenticationService, alertService) {
                    this.route = route;
                    this.router = router;
                    this.authenticationService = authenticationService;
                    this.alertService = alertService;
                    this.model = {};
                    this.loading = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    // reset login status
                    this.authenticationService.logout();
                    // get return url from route parameters or default to '/'
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.loading = true;
                    this.authenticationService.login(this.model.username, this.model.password)
                        .subscribe(function (data) {
                        _this.router.navigate([_this.returnUrl]);
                    }, function (error) {
                        _this.alertService.error(error);
                        _this.loading = false;
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        templateUrl: 'login.component.html'
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, index_1.AuthenticationService, index_1.AlertService])
                ], LoginComponent);
                return LoginComponent;
                var _a, _b;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map