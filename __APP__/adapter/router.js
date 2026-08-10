require("../app.js");
var r = require("./getApp.js");
(exports.route = function () {
  return r.getApp().$vm.$route;
}),
  (exports.router = function () {
    return r.getApp().$vm.$router;
  });
