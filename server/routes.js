
/**
 * Module dependencies.
 */

var domain = 'http://dantat.herokuapp.com/api/isopen';
var host = 'http://yo-dantat.herokuapp.com/isopen';
var thunkify = require('thunkify-wrap');
var render = require('../lib/render');
var request = require('request');
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
  var get = thunkify(request.get);
  var isOpen = yield get(domain);
  var link = host + '/?message=';
  if (isOpen)
    link += 'Open'
  this.body = yield Yo.yo_link(username, link);
};

/**
 * Show results.
 */

Routes.showRes = function *showRes() {
  var data = this.request.query;
  this.body = yield render('result', { message: data.message });
};

/**
 * Expose `Routes`.
 */

module.exports = Routes;
