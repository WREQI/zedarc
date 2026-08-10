require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/classCallCheck"),
  t = require("../../../../../../@babel/runtime/helpers/createClass"),
  r = require("../../../../../../common/vendor.js"),
  n = (function () {
    function r(t) {
      e(this, r), (this.adapter = t);
    }
    return (
      t(r, [
        {
          key: "setItem",
          value: function (e, t) {
            return this.adapter.setItem(e, JSON.stringify(t));
          },
        },
        {
          key: "getItem",
          value: function (e) {
            var t = this.adapter.getItem(e);
            try {
              return JSON.parse(t);
            } catch (e) {
              return t;
            }
          },
        },
        {
          key: "hasOwnProperty",
          value: function (e) {
            return this.adapter.hasOwnProperty(e);
          },
        },
        {
          key: "hasItem",
          value: function (e) {
            return this.hasOwnProperty(e);
          },
        },
        {
          key: "removeItem",
          value: function (e) {
            this.adapter.removeItem(e);
          },
        },
        {
          key: "clear",
          value: function () {
            this.adapter.clear();
          },
        },
        {
          key: "key",
          value: function (e) {
            return JSON.parse(this.adapter.key(e));
          },
        },
        {
          key: "length",
          get: function () {
            return this.adapter.length;
          },
        },
      ]),
      r
    );
  })(),
  a = {
    setItem: function (e, t) {
      r.wx$1.setStorageSync(e, t);
    },
    getItem: function (e) {
      return r.wx$1.getStorageSync(e);
    },
    hasOwnProperty: function (e) {
      var t = r.wx$1.getStorageInfoSync().keys;
      return (void 0 === t ? [] : t).includes(e);
    },
    hasItem: function (e) {
      var t = r.wx$1.getStorageInfoSync().keys;
      return (void 0 === t ? [] : t).includes(e);
    },
    removeItem: function (e) {
      r.wx$1.removeStorageSync(e);
    },
    clear: function () {
      r.wx$1.clearStorage();
    },
    key: function (e) {
      var t = r.wx$1.getStorageInfoSync().keys;
      return (void 0 === t ? [] : t)[e];
    },
    length: function () {
      var e = r.wx$1.getStorageInfoSync().keys;
      return (void 0 === e ? [] : e).length;
    },
  },
  o = !1;
try {
  o = !0;
} catch (e) {}
var s = new n(o ? a : window.sessionStorage),
  i = !1;
try {
  i = !0;
} catch (e) {}
var u = new n(i ? a : window.localStorage);
(exports.sessionStorage = s), (exports.sls = u);
