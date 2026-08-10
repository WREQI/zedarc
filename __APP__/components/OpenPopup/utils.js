var e = require("../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = function (e, r, n) {
    return new Promise(function (t, o) {
      var u = function (e) {
          try {
            c(n.next(e));
          } catch (e) {
            o(e);
          }
        },
        s = function (e) {
          try {
            c(n.throw(e));
          } catch (e) {
            o(e);
          }
        },
        c = function (e) {
          return e.done ? t(e.value) : Promise.resolve(e.value).then(u, s);
        };
      c((n = n.apply(e, r)).next());
    });
  },
  t = require("../../common/vendor.js"),
  o = "/pages/index/trade",
  u = { ANIM: "anim", INFO_DETAIL: "infodetail", MY: "my" },
  s = [
    "YSp34yJ0fukT6iIaDwi4qWBOkw2QFQLas6V5vrzmyhw",
    "Z3vR_zd8qIKaNOaNyzu1_FTiCVKKd175EwdoEeiRpio",
    "3XYWk6wgd2QLktsYo1nrYgiXt603pkDQJ7bUlA-zdzs",
  ],
  c = function (e) {
    return (
      e.userstate === t.USERSTATE.HASACCOUNT ||
      e.userstate === t.USERSTATE.HASBUNDLE
    );
  },
  i = function (e, o) {
    t.wxComm.request({
      url: "/cgi-bin/msg_subscribe.fcgi",
      data: e,
      success: function (e) {
        return n(
          exports,
          null,
          r().mark(function n() {
            return r().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    "0" !== e.retcode ? o(!1) : o(!0);
                  case 1:
                  case "end":
                    return r.stop();
                }
            }, n);
          })
        );
      },
      fail: function () {
        return n(
          exports,
          null,
          r().mark(function e() {
            return r().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    o(!1);
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      },
    });
  };
(exports.OPEN_ACCOUT_NOT_POPUP_AGAIN = "open_account_not_popup_again"),
  (exports.OPEN_MESSAGE_PATH = o),
  (exports.OPEN_MESSAGE_PATH_PARAM = u),
  (exports.SUBCRIBE_COUNT_FLAG = "mpwebapp/subscribe_count_flag"),
  (exports.TEMP_IDS = s),
  (exports.constructChatPath = function () {
    var r,
      n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.ANIM,
      t = arguments.length > 1 ? arguments[1] : void 0;
    n.split("_").length > 1 && ((r = n.split("_")), (n = e(r, 1)[0]));
    var s = c(t) ? 1 : 0,
      i = "1" === t.subscribe;
    return ""
      .concat(o, "?openfrom=")
      .concat(n, "_")
      .concat(s, "_")
      .concat(i ? 1 : 0);
  }),
  (exports.hasAccount = c),
  (exports.isShowOpenAnimation = function () {
    return !t.wx$1.getStorageSync("open_adv_closed");
  }),
  (exports.requestSubscibe = function () {
    return n(
      exports,
      null,
      r().mark(function e() {
        return r().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return e.abrupt(
                  "return",
                  new Promise(function (e) {
                    t.wx$1.requestSubscribeMessage &&
                      t.wx$1.requestSubscribeMessage({
                        tmplIds: s,
                        success: function (t) {
                          return n(
                            exports,
                            null,
                            r().mark(function n() {
                              var o, u, s;
                              return r().wrap(function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        (o = !1),
                                        (r.next = 3),
                                        (function (e) {
                                          var r = [];
                                          for (var n in e)
                                            if ("accept" === e[n]) {
                                              var t = {
                                                  channel: 0,
                                                  bid: 8e5,
                                                  oper: 3,
                                                  tmpl_id: n,
                                                },
                                                o = new Promise(function (
                                                  e,
                                                  r
                                                ) {
                                                  i(t, e);
                                                });
                                              r.push(o);
                                            }
                                          return Promise.all(r);
                                        })(t).catch(function () {
                                          o = !0;
                                        })
                                      );
                                    case 3:
                                      if (((u = r.sent), !o)) {
                                        r.next = 6;
                                        break;
                                      }
                                      return r.abrupt("return", void e(-1));
                                    case 6:
                                      (s = u.filter(function (e) {
                                        return !0 === e;
                                      })),
                                        e(s.length);
                                    case 8:
                                    case "end":
                                      return r.stop();
                                  }
                              }, n);
                            })
                          );
                        },
                        fail: function () {
                          return n(
                            exports,
                            null,
                            r().mark(function n() {
                              return r().wrap(function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      e(-1);
                                    case 1:
                                    case "end":
                                      return r.stop();
                                  }
                              }, n);
                            })
                          );
                        },
                      });
                  })
                );
              case 1:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  });
