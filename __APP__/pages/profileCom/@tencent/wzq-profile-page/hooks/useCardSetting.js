var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, r, t) {
    return new Promise(function (n, o) {
      var c = function (e) {
          try {
            u(t.next(e));
          } catch (e) {
            o(e);
          }
        },
        a = function (e) {
          try {
            u(t.throw(e));
          } catch (e) {
            o(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(c, a);
        };
      u((t = t.apply(e, r)).next());
    });
  },
  t = require("../../../../../common/vendor.js"),
  n = (function (e) {
    return (
      (e.open = "open"), (e.deleted = "deleted"), (e.notopen = "notopen"), e
    );
  })(n || {}),
  o = "accountcard:openbefore",
  c = "暂无法添加，若手动关闭过卡片，可尝试在右上角-设置中打开",
  a = t.ref(!1),
  u = t.ref(!0),
  i = t.ref(!1);
(exports.AccoundCardState = n),
  (exports.useCardSetting = function () {
    var n = !1;
    function s() {
      return r(
        this,
        null,
        e().mark(function o() {
          var c;
          return e().wrap(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (
                      (o.prev = 0),
                      (o.next = 3),
                      (function () {
                        return r(
                          this,
                          null,
                          e().mark(function r() {
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      "return",
                                      new Promise(function (e, r) {
                                        t.wx$1.checkAccountCardAddState
                                          ? t.wx$1.checkAccountCardAddState({
                                              type: 5007,
                                              success: function (r) {
                                                e(r),
                                                  t.StockBridge.aegisReportEvent(
                                                    "ACCOUNT_CARD_CHECK_SUCC",
                                                    {
                                                      ext3: JSON.stringify(
                                                        r || {}
                                                      ),
                                                    }
                                                  );
                                              },
                                              fail: function (e) {
                                                r(e),
                                                  t.StockBridge.aegisReportEvent(
                                                    "ACCOUNT_CARD_CHECK_FAIL",
                                                    {
                                                      ext3: JSON.stringify(
                                                        e || {}
                                                      ),
                                                    }
                                                  );
                                              },
                                            })
                                          : r({
                                              errCode: "NOT_SUPPORT",
                                              errMsg:
                                                "请确认当前微信版本是否支持账号卡",
                                            });
                                      })
                                    );
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, r);
                          })
                        );
                      })()
                    );
                  case 3:
                    (c = o.sent),
                      (u.value = c.couldAdd),
                      (a.value = c.hasAdded),
                      (n = !0),
                      (o.next = 10);
                    break;
                  case 7:
                    (o.prev = 7), (o.t0 = o.catch(0)), (n = !0);
                  case 10:
                  case "end":
                    return o.stop();
                }
            },
            o,
            null,
            [[0, 7]]
          );
        })
      );
    }
    return {
      checkAccountCardAddState: s,
      openAccountCard: function () {
        return r(
          this,
          null,
          e().mark(function d() {
            var l;
            return e().wrap(
              function (d) {
                for (;;)
                  switch ((d.prev = d.next)) {
                    case 0:
                      if (
                        (t.StockBridge.report("base.card_setting.openclick"),
                        (d.prev = 1),
                        (i.value = !0),
                        (d.t0 = n),
                        d.t0)
                      ) {
                        d.next = 7;
                        break;
                      }
                      return (d.next = 7), s();
                    case 7:
                      if (!a.value) {
                        d.next = 9;
                        break;
                      }
                      throw {
                        errCode: "DUPLICATE_ADD",
                        errMsg: "开启失败，账户卡已开启过",
                      };
                    case 9:
                      if (u.value) {
                        d.next = 11;
                        break;
                      }
                      throw {
                        errCode: "ACCOUNT_CARD_COULD_NOT_ADD",
                        errMsg: c,
                      };
                    case 11:
                      return (
                        (d.next = 13),
                        (function () {
                          return r(
                            this,
                            null,
                            e().mark(function r() {
                              return e().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        new Promise(function (e, r) {
                                          t.wx$1.addAccountCard
                                            ? t.wx$1.addAccountCard({
                                                type: 5007,
                                                success: function (r) {
                                                  t.wx$1.showToast({
                                                    title: "已开启",
                                                    duration: 1500,
                                                  }),
                                                    e("已开启"),
                                                    t.StockBridge.aegisReportEvent(
                                                      "ACCOUNT_CARD_ADD_SUCC",
                                                      {
                                                        ext3: JSON.stringify(
                                                          r || {}
                                                        ),
                                                      }
                                                    );
                                                },
                                                fail: function (e) {
                                                  var t = "开启失败";
                                                  (null == e
                                                    ? void 0
                                                    : e.errMsg) &&
                                                  e.errMsg.indexOf(
                                                    "has been added"
                                                  ) > -1
                                                    ? (t =
                                                        "开启失败，账户卡已开启过")
                                                    : (null == e
                                                        ? void 0
                                                        : e.errMsg) &&
                                                      e.errMsg.indexOf(
                                                        "develop envVersion"
                                                      ) > -1
                                                    ? (t =
                                                        "开启失败，不支持开发环境体验")
                                                    : (null == e
                                                        ? void 0
                                                        : e.errMsg) &&
                                                      e.errMsg.indexOf(
                                                        "could not add"
                                                      ) > -1 &&
                                                      (t = c),
                                                    r({
                                                      errCode: "OPEN_FAIL",
                                                      errMsg: t,
                                                      originErr: e,
                                                    });
                                                },
                                              })
                                            : r({
                                                errCode: "NOT_SUPPORT",
                                                errMsg:
                                                  "请确认当前微信版本是否支持账号卡",
                                              });
                                        })
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, r);
                            })
                          );
                        })()
                      );
                    case 13:
                      t.StockBridge.report("base.card_setting.opensucc"),
                        (a.value = !0),
                        t.wx$1.setStorageSync(o, 1),
                        (d.next = 21);
                      break;
                    case 18:
                      (d.prev = 18),
                        (d.t1 = d.catch(1)),
                        t.StockBridge.report("base.card_setting.openfail"),
                        (null == (l = null == d.t1 ? void 0 : d.t1.errMsg)
                          ? void 0
                          : l.length) > 20
                          ? t.wx$1.showModal({
                              confirmText: "我知道了",
                              showCancel: !1,
                              content: d.t1.errMsg,
                            })
                          : t.wx$1.showToast({
                              title: d.t1.errMsg || "开启失败",
                              icon: "none",
                              duration: 1500,
                            }),
                        t.StockBridge.aegisReportEvent(
                          "ACCOUNT_CARD_OPENFAIL",
                          { ext3: JSON.stringify(d.t1 || {}) }
                        );
                    case 21:
                      return (d.prev = 21), (i.value = !1), d.finish(21);
                    case 24:
                    case "end":
                      return d.stop();
                  }
              },
              d,
              null,
              [[1, 18, 21, 24]]
            );
          })
        );
      },
      accountCardState: t.computed(function () {
        return a.value
          ? "open"
          : (function () {
              var e = t.wx$1.getStorageSync(o);
              return !(!e || 1 != +e);
            })()
          ? "deleted"
          : "notopen";
      }),
      accountCardIsOpen: a,
      accountCardCanOpen: u,
      opening: i,
    };
  });
