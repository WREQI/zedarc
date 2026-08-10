var e = require("../../../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../../app.js");
var t = require("../../../../common/vendor.js"),
  o = require("../../../../model/transfer/useHistory.js"),
  i = require("../../../../config/enum/transfer.js");
require("../../../../service/broker.js");
var a = require("../../../../config/key.js"),
  c = require("../../../../config/broker/11100/index.js"),
  u = {
    components: {
      Loading: function () {
        return "../../../../common/components/Loading/index.js";
      },
    },
    props: { scrollWrapperHeight: { type: Number, default: 0 } },
    setup: function (u) {
      var s,
        f = t.getCurrentInstance().proxy,
        l = o.useHistory(),
        T = l.records,
        d = l.init,
        E = l.setFold,
        p = l.fetchData,
        R = t.ref(!0);
      return (
        t.watch(
          function () {
            return T.value;
          },
          function () {
            f.$nextTick(function () {
              t.index
                .createSelectorQuery()
                .in(f)
                .selectAll(".list-group")
                .boundingClientRect(function (e) {
                  var r = [];
                  if (e.length) {
                    var n = 0;
                    r.push(n);
                    for (var t = 0; t < e.length; t++)
                      (n += e[t].height), r.push(n);
                    f.listHeight = r;
                  }
                })
                .exec();
            });
          }
        ),
        t.onMounted(
          n(
            r().mark(function e() {
              return r().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), d();
                    case 2:
                      R.value = !1;
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )
        ),
        {
          records: T,
          TRANSFER_STATE: i.TRANSFER_STATE,
          TRANSFER_TYPE_TEXT: i.TRANSFER_TYPE_TEXT,
          onClickAnchor: function (e) {
            var r = T.value[e];
            E({ index: e, fold: !r.fold }), r.fold || p(e);
          },
          onScroll: function (e) {
            var r = e.detail,
              n = f.listHeight,
              t = r.scrollTop + (u.scrollWrapperHeight || 0),
              o = (function (e, r) {
                for (
                  var n,
                    t = T.value.filter(function (e) {
                      return !1 === e.fold;
                    }),
                    o = function () {
                      var n = t[i],
                        o = T.value.findIndex(function (e) {
                          return e === n;
                        }),
                        a = e[o];
                      if (r < e[o + 1] && r >= a) return { v: o };
                    },
                    i = t.length - 1;
                  i > -1;
                  i--
                )
                  if ((n = o())) return n.v;
                return -1;
              })(n, t);
            -1 !== o && t > n[o + 1] - 120 && p(o);
          },
          onClickItem: function (r) {
            f.$router.push({ name: "TransferRecordsDetails", query: e({}, r) }),
              f.$stat.click("trade.transfer.to_transfer_detail_click");
          },
          init: d,
          initLoading: R,
          transferTypeText: function (e) {
            return e.type === i.TRANSFER_TYPE.DIVIDEND
              ? i.TRANSFER_TYPE_TEXT[e.type] +
                  ((e.stock_name && "(".concat(e.stock_name, ")")) || "")
              : i.TRANSFER_TYPE_TEXT[e.type] || e.oper_name || "其它类型";
          },
          formatTransferTime: function (e) {
            var r = c.brokerConfig.transfer.detailTimeSupportSecond;
            return t.dayjs(e).format(r ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD");
          },
          handleShow:
            ((s = n(
              r().mark(function e() {
                return r().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((e.t0 =
                            "1" ===
                            t.index.getStorageSync(
                              a.TRANSFER_DETAIL_CANCE_ORDER
                            )),
                          !e.t0)
                        ) {
                          e.next = 7;
                          break;
                        }
                        return (
                          (R.value = !0),
                          t.index.setStorageSync(
                            a.TRANSFER_DETAIL_CANCE_ORDER,
                            "0"
                          ),
                          (e.next = 6),
                          d()
                        );
                      case 6:
                        R.value = !1;
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )),
            function () {
              return s.apply(this, arguments);
            }),
        }
      );
    },
  };
Array || (t.resolveComponent("Loading") + t.resolveComponent("Empty"))(), Math;
var s = t._export_sfc(u, [
  [
    "render",
    function (e, r, n, o, i, a) {
      return t.e(
        { a: o.records.length || o.initLoading },
        o.records.length || o.initLoading
          ? t.e(
              { b: o.initLoading },
              o.initLoading ? { c: t.p({ size: "28px" }) } : {},
              {
                d: t.f(o.records, function (e, r, n) {
                  return {
                    a: t.t(e.name),
                    b: t.n(e.fold ? "icon-arrow-up" : "icon-arrow-down"),
                    c: t.o(function (e) {
                      return o.onClickAnchor(r);
                    }, r),
                    d: t.f(e.items, function (r, n, i) {
                      return t.e(
                        {
                          a: t.t(o.transferTypeText(r)),
                          b: r.state === o.TRANSFER_STATE.WIP,
                        },
                        (r.state, o.TRANSFER_STATE.WIP, {}),
                        {
                          c: t.t(
                            o.formatTransferTime(
                              1e3 * r.transferredTime || 1e3 * r.transferTime
                            )
                          ),
                          d: t.t(r.money),
                          e: t.n(r.money < 0 ? "text-color-1" : "blue"),
                          f: r.state === o.TRANSFER_STATE.PRE_TRANSFER_SUCC,
                        },
                        (r.state, o.TRANSFER_STATE.PRE_TRANSFER_SUCC, {}),
                        { g: r.state === o.TRANSFER_STATE.PRE_TRANSFER_CANCEL },
                        (r.state, o.TRANSFER_STATE.PRE_TRANSFER_CANCEL, {}),
                        {
                          h: n,
                          i: r,
                          j: t.o(function (r) {
                            return o.onClickItem(e.items[n]);
                          }, n),
                        }
                      );
                    }),
                    e: !e.fold,
                    f: r,
                  };
                }),
                e: t.o(function () {
                  return o.onScroll && o.onScroll.apply(o, arguments);
                }),
              }
            )
          : { f: t.p({ text: "暂无资金明细" }) }
      );
    },
  ],
]);
wx.createComponent(s);
