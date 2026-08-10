var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../common/vendor.js"),
  i = require("../account/usePersonal.js"),
  r = require("../../config/enum.js"),
  o = t.ref([]);
exports.useStockSetting = function () {
  var s,
    u = i.usePersonal().setUserSetting,
    c = t.computed(function () {
      return o.value;
    }),
    a = t.computed(function () {
      var e;
      return null == (e = c.value)
        ? void 0
        : e.filter(function (e) {
            return r.FIXED_POSITION.indexOf(e.stock_shift) > -1;
          });
    }),
    l = t.computed(function () {
      var e;
      return null == (e = c.value)
        ? void 0
        : e.filter(function (e) {
            return -1 === r.FIXED_POSITION.indexOf(e.stock_shift);
          });
    });
  function f(e) {
    o.value = e;
  }
  return {
    fixedOpened: [
      { is_open: "1", stock_shift: "1" },
      { is_open: "1", stock_shift: "1/2" },
      { is_open: "1", stock_shift: "1/3" },
      { is_open: "1", stock_shift: "1/4" },
    ],
    setting: o,
    fixedSetting: a,
    notFixedSetting: l,
    handleInput:
      ((s = n(
        e().mark(function n(i, r) {
          var o, s, a, l;
          return e().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      ((a = t.cloneDeep(c.value)).find(function (e) {
                        return e.stock_shift === i;
                      }).is_open = r),
                      (l =
                        (null ==
                        (s =
                          null ==
                          (o =
                            null == a
                              ? void 0
                              : a.filter(function (e) {
                                  return "1" === e.is_open;
                                }))
                            ? void 0
                            : o.map(function (e) {
                                return e.stock_shift;
                              }))
                          ? void 0
                          : s.join("#")) || "close_all"),
                      (e.prev = 3),
                      t.index.showLoading({ mask: !0 }),
                      (e.next = 7),
                      u({ stocksettting: l })
                    );
                  case 7:
                    f(a), (e.next = 13);
                    break;
                  case 10:
                    (e.prev = 10),
                      (e.t0 = e.catch(3)),
                      t.index.showToast({
                        title: e.t0.retmsg || "服务器繁忙 请稍后再试",
                        icon: "none",
                      });
                  case 13:
                    t.index.hideLoading();
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            n,
            null,
            [[3, 10]]
          );
        })
      )),
      function (e, n) {
        return s.apply(this, arguments);
      }),
    setStockSetting: f,
  };
};
