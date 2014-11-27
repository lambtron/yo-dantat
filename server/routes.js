
/**
 * Module dependencies.
 */

var render = require('../lib/render');
var Yo = require('../lib/yo');

/**
 * Define `Routes`.
 */

var Routes = {};

/**
 * Render index html page.
 */

Routes.index = function *index() {
  this.body = yield render('index');
};

/**
 * Get `yo` from user.
 */

Routes.getYo = function *getYo() {
  var username = this.request.query.username;
  var link = '';
  this.body = yield Yo.yo_link(username, link);
};

/**
 * Show results.
 */

Routes.showRes = function *showRes() {
  var message = this.request.query;
  this.body = yield render('result', { message: message });
};

/**
 * Expose `Routes`.
 */

module.exports = Routes;
