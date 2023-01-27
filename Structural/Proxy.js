var WebAccess = /** @class */ (function () {
    function WebAccess() {
    }
    WebAccess.prototype.signIn = function () {
        console.log('Open user page');
    };
    WebAccess.prototype.logout = function () {
        console.log('Logout');
    };
    return WebAccess;
}());
;
var Verification = /** @class */ (function () {
    function Verification(page) {
        this.page = page;
    }
    Verification.prototype.signIn = function (login, password) {
        if (this.authenticate(login, password)) {
            this.page.signIn();
        }
        else {
            console.log('Access denied!');
        }
    };
    Verification.prototype.authenticate = function (login, password) {
        return login === 'admin' && password === '1111';
    };
    Verification.prototype.logout = function () {
        this.page.logout();
    };
    return Verification;
}());
;
var page = new Verification(new WebAccess());
page.signIn('User', 1111);
page.signIn('admin', '1111');
page.logout();
