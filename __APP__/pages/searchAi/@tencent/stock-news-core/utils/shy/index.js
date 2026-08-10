var t = require("../../../../../../common/vendor.js"),
  e = {
    theme: "blue",
    flucShowMode: "redup",
    fontSize: "smallFont",
    devId: "1",
    os: "iOS",
    osVersion: "12.6",
    dev: "iphoneX",
    appVersion: "6.0.0",
    sdk: "3.x",
    idfa: "设备idfa（iOS有效）",
    idfv: "设备idfv（iOS有效）",
    imei: "设备imei（Android有效）",
    imsi: "设备imsi（Android有效）",
    omgid: "设备omgid",
  },
  n = {
    init_time: 0,
    mod_num: 0,
    load_num: 0,
    mod: {},
    data: {
      page_load_time: 0,
      dom_ready_time: 0,
      accept_time: 0,
      accept_name: "",
      response_name: "",
      response_time: 0,
    },
  },
  o = function (t, e, n, o) {
    var r = !0;
    return (
      Object.prototype.toString.call(t) !== "[object ".concat(e, "]")
        ? (r = !1)
        : ("Array" === e && t.length < 1 && (r = !1),
          "String" === e && "" === t && n && (r = !1),
          "Object" === e &&
            n.forEach(function (e) {
              (Object.prototype.hasOwnProperty.call(t, e) && "" !== t[e]) ||
                (r = !1);
            })),
      r
    );
  },
  r = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    t && "[object Function]" === Object.prototype.toString.call(t) && t(e);
  };
var i = {
  reportAnalytics: function (t) {},
  getNetworkStatus: function (t) {
    var e = {
      status: "success",
      errMsg: "",
      isConnected: !navigator || navigator.onLine,
      networkType: "4G",
    };
    r(t, e, "getNetworkStatus");
  },
  getStorage: function (e, n) {
    if (!o(e, "String", !0)) return !1;
    var i = t.wx$1.getStorageSync(e);
    r(
      n,
      {
        status: "success",
        errMsg: "",
        data: i,
        devInfo: "浏览器中请参考Application/localStorage值的改变",
      },
      "getStorage"
    );
  },
  getSystemInfo: function (t) {
    r(t, e, "getSystemInfo");
  },
  getUserInfo: function (t) {
    r(
      t,
      {
        status: "success",
        errMsg: "error msg",
        type: "qq",
        nickName: "qqFit",
        headUrl: "",
        appid: "",
        accessToken: "",
        openid: "",
        fskey: "",
        gOpenid: "",
      },
      "getUserInfo"
    );
  },
  login: function (t) {
    r(
      t,
      {
        status: "success",
        errMsg: "error msg",
        type: "qq",
        nickName: "qqFit",
        headUrl: "",
        appid: "",
        accessToken: "",
        openid: "",
        fskey: "",
        gOpenid: "",
      },
      "login"
    );
  },
  navigateTo: function (t) {
    if (!o(t, "Object", ["url"])) return !1;
    /^http/.test(t.url)
      ? (window.location.href = t.url)
      : App.render
      ? App.render(t.url)
      : App.push(t.url);
  },
  onFlucShowChange: function (t) {
    (e.flucShowMode = "greenup"),
      r(
        t,
        { state: "success", flucShowMode: e.flucShowMode },
        "onFlucShowChange"
      );
  },
  onLoginStateChange: function (t) {
    r(
      t,
      {
        state: "success",
        errMsg: "error msg",
        type: "qq",
        nickName: "qqFit",
        headUrl: "",
        appid: "",
        accessToken: "",
        openid: "",
        fskey: "",
        gOpenid: "",
      },
      "onLoginStateChange"
    );
  },
  onNetworkStatusChange: function (t) {
    var e = {
      status: "success",
      isConnected: !navigator || navigator.onLine,
      networkType: "4G",
    };
    r(t, e, "onNetworkStatusChange");
  },
  openShareView: function (t, e, n) {
    if (
      !o(t, "Array", "") ||
      !o(e, "String", !0) ||
      !o(n, "Object", ["title", "summary", "url"])
    )
      return !1;
  },
  redirectTo: function (t) {
    if (!o(t, "Object", ["url"])) return !1;
    /^http/.test(t.url)
      ? (window.location.href = t.url)
      : App.render
      ? App.render(t.url)
      : App.push(t.url);
  },
  reportFrontEndError: function (t) {
    window.$Raven && window.$Raven.captureException(t);
    var e = t.stack.split(/\sat\s/);
    encodeURIComponent("(".concat(e[0], ")-").concat(e[1] || ""));
  },
  reportQos: {
    registry: function (t, e, o) {
      n.mod[t] || (n.mod_num++, (n.mod[t] = { m: 0, h: o, name: e }));
    },
    log: function (t, e, o) {
      var r = o - n.init_time;
      if (("init_time" == e && (n[e] = o), n.mod[t] && 0 != n.init_time)) {
        switch (e) {
          case "dom_ready_time":
            r > n.data[e] && (n.data[e] = r), n.mod[t].m++;
            break;
          case "accept_time":
            (r = o - n.mod[t].h) > n.data[e] &&
              ((n.data[e] = r), (n.data.accept_name = n.mod[t].name));
            break;
          case "response_time":
            (r = o - n.mod[t].h) > n.data[e] &&
              ((n.data[e] = r), (n.data.response_name = n.mod[t].name)),
              n.mod[t].m++;
        }
        (r = o - n.init_time) > n.data.page_load_time &&
          (n.data.page_load_time = r),
          1 == n.mod[t].m && n.load_num++;
      }
      0 != n.init_time &&
        0 != n.load_num &&
        n.load_num >= n.mod_num &&
        (n.data,
        StockJSBridge.notify(
          "shy_finish_render",
          { h5_render_begin: n.init_time, h5_render_end: Date.now() },
          function () {}
        ),
        (n.init_time = 0));
    },
  },
  setBottomBar: function (t, e, n) {
    if (!o(t, "String", "")) return !1;
  },
  setBounces: function (t, e) {
    if (!o(t, "Boolean", "")) return !1;
    r(e, { status: "success", errMsg: "", bounces: t }, "setBounces");
  },
  setFunctionButton: function (t, e) {
    if (!o(t, "String", "")) return !1;
    r(e, { status: "success", errMsg: "", data: t }, "setFunctionButton");
  },
  subscribeNotification: function (t, e, n, i) {
    return (
      !!o(t, "String", !0) &&
      !!o(e, "String", !0) &&
      void r(n, { status: "success", errMsg: "" }, "subscribeNotification")
    );
  },
  setStorage: function (e, n, i) {
    if (!o(e, "String", !0)) return !1;
    null === n ? t.wx$1.removeStorageSync(e) : t.wx$1.setStorageSync(e, n),
      r(
        i,
        {
          status: "success",
          errMsg: "",
          devInfo: "浏览器中请参考Application/localStorage值的改变",
        },
        "setStorage"
      );
  },
  setSystemInfo: function (t, n) {
    if (!o(t, "String", "")) return !1;
    (e.fontSize = t), r(n, { status: "success", errMsg: "" }, "setSystem");
  },
  setTitle: function (e, n, i) {
    if (!o(e, "String", "")) return !1;
    t.wx$1.setNavigationBarTitle({ title: e }),
      r(i, { status: "success", errMsg: "" }, "setTitle");
  },
  share: function (t, e, n, r) {
    if (
      !o(t, "String", "") ||
      !o(e, "String", "") ||
      !o(n, "Object", ["title", "summary", "url"])
    )
      return !1;
  },
  showToast: function (t, e, n) {
    if (!o(t, "String", !0) || !o(e, "String", "")) return !1;
    if (document.getElementById("toast")) {
      var i = document.getElementById("toast");
      (i.style.top = "top" === t ? "20px" : "45%"),
        (i.style.display = "block"),
        (i.innerHTML = e);
    }
    r(n, { status: "success", errMsg: "" }, "showToast");
  },
  subscribe: function (t, e) {
    if (!o(t, "String", !0)) return !1;
    r(e, {}, "subscribe");
  },
  onShowAlert: function (t) {
    r(t, { status: "success", errMsg: "" }, "onShowAlert");
  },
  showAlert: function (t) {
    if (!o(t, "Object", !0)) return !1;
    r(callback, { status: "success", errMsg: "" }, "showAlert");
  },
  copyToPasteboard: function (t, e) {
    r(e, { status: "success", errMsg: "" }, "copyToPasteboard");
  },
  on: function (t, e) {},
  _emptyFunction: function () {},
};
exports.shy = i;
