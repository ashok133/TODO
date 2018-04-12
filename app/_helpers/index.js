System.register(['./jwt.interceptor', './fake-backend'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (jwt_interceptor_1_1) {
                exportStar_1(jwt_interceptor_1_1);
            },
            function (fake_backend_1_1) {
                exportStar_1(fake_backend_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=index.js.map