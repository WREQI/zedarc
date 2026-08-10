var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  a = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  u = function (e, r, n) {
    return r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[r] = n);
  },
  i = require("../../../../../../common/vendor.js"),
  s = {
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (t) {
      var s = i.inject("stockBridge"),
        l = i.computed(function () {
          return (function () {
            var i,
              s = (null == t ? void 0 : t.itemData) || {},
              l = [
                { name: "咨询问题", value: s.user_feedback_content },
                { name: "咨询时间", value: s.createdtime },
                { name: "客服回复", value: s.respond_content },
              ];
            return (
              (i = (function (t, r) {
                for (var n in r || (r = {})) a.call(r, n) && u(t, n, r[n]);
                if (o) {
                  var i,
                    s = e(o(r));
                  try {
                    for (s.s(); !(i = s.n()).done; ) {
                      n = i.value;
                      c.call(r, n) && u(t, n, r[n]);
                    }
                  } catch (e) {
                    s.e(e);
                  } finally {
                    s.f();
                  }
                }
                return t;
              })({}, s)),
              r(i, n({ showContents: l }))
            );
          })();
        });
      return {
        stockBridge: s,
        msgItem: l,
        dealRechText: function (e) {
          return e;
        },
        gotoFeedbackDetail: function (e) {
          s.report("yy.message_box.feedbacklist_item_click", {
            record_id: e.record_id,
          }),
            setTimeout(function () {
              i.StockRouter.routeTo({
                name: "feedbackdetail-message",
                query: { id: e.record_id },
              });
            }, 100);
        },
      };
    },
  },
  l = i._export_sfc(s, [
    [
      "render",
      function (e, t, r, n, o, a) {
        return i.e(
          { a: n.msgItem && n.msgItem.user_feedback_content },
          n.msgItem && n.msgItem.user_feedback_content
            ? {
                b: i.t(n.msgItem.respondtime),
                c: i.f(n.msgItem.showContents, function (e, t, r) {
                  return i.e(
                    { a: i.t(e.name) },
                    "mp" === n.stockBridge.ENV
                      ? {
                          b: n.dealRechText(e.value),
                          c: i.n(
                            "咨询问题" === e.name
                              ? "value-txt value-txt-ellipsis-1"
                              : "value-txt"
                          ),
                        }
                      : {
                          d: n.dealRechText(e.value),
                          e: i.n(
                            "咨询问题" === e.name
                              ? "value-txt value-txt-ellipsis-1"
                              : "value-txt"
                          ),
                        },
                    {
                      f: t,
                      g: i.o(
                        function (e) {
                          return n.gotoFeedbackDetail(n.msgItem);
                        },
                        2484,
                        t
                      ),
                    }
                  );
                }),
                d: "mp" === n.stockBridge.ENV,
                e: i.o(function (e) {
                  return n.gotoFeedbackDetail(n.msgItem);
                }, 2485),
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-d3a5910c"],
  ]);
wx.createComponent(l);
