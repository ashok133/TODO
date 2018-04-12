System.register(['@angular/core', '../_services/index'], function(exports_1, context_1) {
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
    var core_1, index_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(userService) {
                    this.userService = userService;
                    this.users = [];
                    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.loadAllUsers();
                };
                HomeComponent.prototype.deleteUser = function (id) {
                    var _this = this;
                    this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
                };
                HomeComponent.prototype.loadAllUsers = function () {
                    var _this = this;
                    this.userService.getAll().subscribe(function (users) { _this.users = users; });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        moduleId: module.id,
                        templateUrl: 'home.component.html'
                    }), 
                    __metadata('design:paramtypes', [index_1.UserService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map