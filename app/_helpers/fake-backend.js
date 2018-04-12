System.register(['@angular/core', '@angular/common/http', 'rxjs/Observable', 'rxjs/add/observable/of', 'rxjs/add/observable/throw', 'rxjs/add/operator/delay', 'rxjs/add/operator/mergeMap', 'rxjs/add/operator/materialize', 'rxjs/add/operator/dematerialize'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var FakeBackendInterceptor, fakeBackendProvider;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {}],
        execute: function() {
            FakeBackendInterceptor = (function () {
                function FakeBackendInterceptor() {
                }
                FakeBackendInterceptor.prototype.intercept = function (request, next) {
                    // array in local storage for registered users
                    var users = JSON.parse(localStorage.getItem('users')) || [];
                    // wrap in delayed observable to simulate server api call
                    return Observable_1.Observable.of(null).mergeMap(function () {
                        // authenticate
                        if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                            // find if any user matches login credentials
                            var filteredUsers = users.filter(function (user) {
                                return user.username === request.body.username && user.password === request.body.password;
                            });
                            if (filteredUsers.length) {
                                // if login details are valid return 200 OK with user details and fake jwt token
                                var user = filteredUsers[0];
                                var body = {
                                    id: user.id,
                                    username: user.username,
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    token: 'fake-jwt-token'
                                };
                                return Observable_1.Observable.of(new http_1.HttpResponse({ status: 200, body: body }));
                            }
                            else {
                                // else return 400 bad request
                                return Observable_1.Observable.throw('Username or password is incorrect');
                            }
                        }
                        // get users
                        if (request.url.endsWith('/api/users') && request.method === 'GET') {
                            // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                                return Observable_1.Observable.of(new http_1.HttpResponse({ status: 200, body: users }));
                            }
                            else {
                                // return 401 not authorised if token is null or invalid
                                return Observable_1.Observable.throw('Unauthorised');
                            }
                        }
                        // get user by id
                        if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                            // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                                // find user by id in users array
                                var urlParts = request.url.split('/');
                                var id_1 = parseInt(urlParts[urlParts.length - 1]);
                                var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                                var user = matchedUsers.length ? matchedUsers[0] : null;
                                return Observable_1.Observable.of(new http_1.HttpResponse({ status: 200, body: user }));
                            }
                            else {
                                // return 401 not authorised if token is null or invalid
                                return Observable_1.Observable.throw('Unauthorised');
                            }
                        }
                        // create user
                        if (request.url.endsWith('/api/users') && request.method === 'POST') {
                            // get new user object from post body
                            var newUser_1 = request.body;
                            // validation
                            var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                            if (duplicateUser) {
                                return Observable_1.Observable.throw('Username "' + newUser_1.username + '" is already taken');
                            }
                            // save new user
                            newUser_1.id = users.length + 1;
                            users.push(newUser_1);
                            localStorage.setItem('users', JSON.stringify(users));
                            // respond 200 OK
                            return Observable_1.Observable.of(new http_1.HttpResponse({ status: 200 }));
                        }
                        // delete user
                        if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                            // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                            if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                                // find user by id in users array
                                var urlParts = request.url.split('/');
                                var id = parseInt(urlParts[urlParts.length - 1]);
                                for (var i = 0; i < users.length; i++) {
                                    var user = users[i];
                                    if (user.id === id) {
                                        // delete user
                                        users.splice(i, 1);
                                        localStorage.setItem('users', JSON.stringify(users));
                                        break;
                                    }
                                }
                                // respond 200 OK
                                return Observable_1.Observable.of(new http_1.HttpResponse({ status: 200 }));
                            }
                            else {
                                // return 401 not authorised if token is null or invalid
                                return Observable_1.Observable.throw('Unauthorised');
                            }
                        }
                        // pass through any requests not handled above
                        return next.handle(request);
                    })
                        .materialize()
                        .delay(500)
                        .dematerialize();
                };
                FakeBackendInterceptor = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FakeBackendInterceptor);
                return FakeBackendInterceptor;
            }());
            exports_1("FakeBackendInterceptor", FakeBackendInterceptor);
            exports_1("fakeBackendProvider", fakeBackendProvider = {
                // use fake backend in place of Http service for backend-less development
                provide: http_1.HTTP_INTERCEPTORS,
                useClass: FakeBackendInterceptor,
                multi: true
            });
        }
    }
});
//# sourceMappingURL=fake-backend.js.map