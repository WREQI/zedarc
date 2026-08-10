require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../../common/vendor.js"),
  n = require("../../hooks/useHome.js"),
  r = require("../../hooks/useScroll.js"),
  o = require("../../utils/dealData.js"),
  s = "75",
  u = {
    components: {
      customEntryItem: function () {
        return "../../components/custom/customEntryItem.js";
      },
      messageEmpty: function () {
        return "../../components/empty/index.js";
      },
    },
    setup: function () {
      var u = t.inject("stockBridge"),
        c = t.inject("skin"),
        a = n.useHome(),
        i = a.customEntryList,
        m = a.clearOneCountStatus,
        p = a.getDealerInfo,
        l = a.bindBroker,
        d = a.bindBrokerList,
        _ = r.useScroll().setCustomHover,
        y = t.computed(function () {
          return ["mpwzq", "wzqlight"].includes("mpweapp");
        });
      return (
        _(!1),
        i.value.forEach(function (e) {
          e.unread_num > 0 &&
            u.report("yy.message_box.".concat(e.sub_type, "_red_brow"), {
              msg_num: e.unread_num,
            });
        }),
        {
          customEntryList: i,
          clickCustomEntry: function (n) {
            return (
              (r = this),
              null,
              (c = e().mark(function r() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          u.report(
                            "yy.message_box.".concat(n.sub_type, "_entry_click")
                          ),
                          n.unread_num > 0 &&
                            u.report(
                              "yy.message_box.".concat(
                                n.sub_type,
                                "_red_click"
                              ),
                              { msg_num: n.unread_num }
                            ),
                          (e.next = 4),
                          p()
                        );
                      case 4:
                        m({
                          msg_box_type: n.msg_box_type,
                          sub_type: n.sub_type,
                          dealer_code: l.value,
                          dealer_codes: d.value,
                        }),
                          setTimeout(function () {
                            if (
                              ("mp" === t.StockBridge.ENV || t._default().env,
                              "customer" === n.sub_type)
                            ) {
                              var e = "",
                                r = s;
                              ["stock", "wzqlight"].includes("mpweapp")
                                ? (e =
                                    "https://wzq.tenpay.com/wzq/aics-cloud/xiaomi/page.do?channel=".concat(
                                      r,
                                      "&entry=wzq_search&tochat=1"
                                    ))
                                : "mp" === u.ENV &&
                                  (e =
                                    "https://wzq.tenpay.com/wzq/aics-cloud/xiaomi/page.do?channel=".concat(
                                      r,
                                      "&entry=zxg_applet&tochat=1"
                                    )),
                                u.openExtraWebview(e);
                            } else [o.BACK_END_MESSAGE_ID.feedback, o.BACK_END_MESSAGE_ID.platformNotify].includes(n.sub_type) && t.StockRouter.routeTo({ name: n.routename });
                          }, 200);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, r);
              })),
              new Promise(function (e, t) {
                var n = function (e) {
                    try {
                      s(c.next(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  o = function (e) {
                    try {
                      s(c.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  },
                  s = function (t) {
                    return t.done
                      ? e(t.value)
                      : Promise.resolve(t.value).then(n, o);
                  };
                s((c = c.apply(r, null)).next());
              })
            );
            var r, c;
          },
          setCustomHover: _,
          isSimpleMode: y,
          skin: c,
        }
      );
    },
  };
Array ||
  (
    t.resolveComponent("messageEmpty") + t.resolveComponent("customEntryItem")
  )();
var c = t._export_sfc(u, [
  [
    "render",
    function (e, n, r, o, s, u) {
      return t.e(
        { a: 0 === o.customEntryList.length },
        0 === o.customEntryList.length
          ? {}
          : t.e(
              {
                b: t.f(o.customEntryList, function (e, n, r) {
                  return {
                    a: t.o(
                      function (t) {
                        return o.clickCustomEntry(e);
                      },
                      1254,
                      n
                    ),
                    b: "02fc5416-1-" + r,
                    c: t.p({ "entry-data": e }),
                    d: n,
                  };
                }),
                c: o.isSimpleMode,
              },
              (o.isSimpleMode || o.isSimpleMode || o.skin, {}),
              { d: !o.isSimpleMode && "dark" === o.skin }
            )
      );
    },
  ],
  ["__scopeId", "data-v-02fc5416"],
]);
wx.createComponent(c);
