var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../../../config/enum/condition.js"),
  r = require("../../../common/vendor.js"),
  o = require("../../../model/debt/useDebtAutoOrder.js"),
  a = require("../../../service/stat/mp-weixin.js"),
  i = {
    components: {
      CondActionSheetBase: function () {
        return "../../../components/ConfirmActionSheet/index.js";
      },
      ConditionCard: function () {
        return "../../../components/DetailCard/index.js";
      },
      ConditionDetailHeader: function () {
        return "../../../components/DetailHeader/index.js";
      },
      ConditionDetailRow: function () {
        return "../../../components/DetailRow/index.js";
      },
    },
    emits: ["click", "changeVisble", "confirm"],
    props: {
      data: {
        type: Object,
        default: function () {
          return {};
        },
      },
    },
    setup: function (i, c) {
      var d,
        u = c.emit,
        l = r.inject("debtAutoOrderHook"),
        s = l.selectedData,
        m = l.selectedValToCfg,
        p = l.triggerTime,
        v = l.getAutoEndTime,
        f = l.isModify,
        T = r.reactive({
          type_desc: t.CondTags.DEBT,
          code: "",
          name: "",
          condText: "",
          rateName: "",
          priceName: "",
          endTime: "",
        });
      return (
        r.onBeforeMount(function () {
          n(
            e().mark(function n() {
              var r, a, i, c, d, u, l, f, C, _;
              return e().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (c =
                          null == (r = s.value)
                            ? void 0
                            : r[o.FORM_KEY_LIST.PRODUCT]),
                        (d =
                          null == (a = s.value)
                            ? void 0
                            : a[o.FORM_KEY_LIST.RATE]),
                        (u =
                          null == (i = s.value)
                            ? void 0
                            : i[o.FORM_KEY_LIST.PRICE]),
                        (l = m({
                          key: o.FORM_KEY_LIST.PRODUCT,
                          type: null == c ? void 0 : c.type,
                        })),
                        (f =
                          m({
                            key: o.FORM_KEY_LIST.RATE,
                            type: null == d ? void 0 : d.type,
                          }).name || ""),
                        (null == d ? void 0 : d.type) ===
                          o.DEBT_RATE_TYPE.LEAST &&
                          (f = "≥".concat(
                            (null == d ? void 0 : d.value) || "-",
                            "%"
                          )),
                        (C =
                          m({
                            key: o.FORM_KEY_LIST.PRICE,
                            type: null == u ? void 0 : u.type,
                          }).name || ""),
                        (null == u ? void 0 : u.type) ===
                          o.DEBT_PRICE_TYPE.SAVE &&
                          (C = "保留".concat(
                            (null == u ? void 0 : u.value) || "-",
                            "元，其余下单"
                          )),
                        (e.next = 7),
                        v()
                      );
                    case 7:
                      (_ = e.sent),
                        Object.assign(T, {
                          type_desc: t.CondTags.DEBT,
                          scode: l.scode,
                          name: l.name,
                          market: l.market,
                          condText: p.value,
                          rateName: f,
                          priceName: C,
                          endTime: _,
                        });
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, n);
            })
          )();
        }),
        {
          emit: u,
          renderData: T,
          onConfirm:
            ((d = n(
              e().mark(function n() {
                return e().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        a.stat.click(
                          "trade.debt.auto_order.submit_confirm_click" +
                            (f.value ? "_modify" : "")
                        ),
                          u("confirm");
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, n);
              })
            )),
            function () {
              return d.apply(this, arguments);
            }),
        }
      );
    },
  };
Array ||
  (
    r.resolveComponent("ConditionDetailHeader") +
    r.resolveComponent("ConditionDetailRow") +
    r.resolveComponent("ConditionCard") +
    r.resolveComponent("CondActionSheetBase")
  )();
var c = r._export_sfc(i, [
  [
    "render",
    function (e, n, t, o, a, i) {
      return {
        a: r.p({
          name: o.renderData.name,
          "type-text": o.renderData.type_desc,
          market: o.renderData.market,
          code: o.renderData.scode,
          "show-arrow": !1,
        }),
        b: r.p({ label: "触发条件", value: o.renderData.condText }),
        c: r.p({ label: "委托价格", value: o.renderData.rateName }),
        d: r.p({ label: "委托金额", value: o.renderData.priceName }),
        e: r.p({ last: !0, label: "有效期至", value: o.renderData.endTime }),
        f: r.o(function (e) {
          return o.emit("click");
        }),
        g: r.p({ "show-border-top": !0 }),
        h: r.o(function (e) {
          return o.emit("changeVisble", !1);
        }),
        i: r.o(o.onConfirm),
        j: r.p({ title: "订单确认" }),
      };
    },
  ],
  ["__scopeId", "data-v-e1d5d59b"],
]);
wx.createComponent(c);
