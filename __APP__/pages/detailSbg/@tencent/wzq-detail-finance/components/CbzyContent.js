require("../../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../../common/vendor.js"),
  t = function (e, t, o, l, n) {
    var r = !1;
    return (
      (e = parseFloat(e || 0)) < 0 && ((r = !0), (e = -e)),
      (t = parseInt(t || 1, 10)),
      (o = parseInt(o || 0, 10)),
      (l = parseInt(l || 2, 10)),
      (n = n || ""),
      (e =
        e < 1e4 * t
          ? e.toFixed(o)
          : e >= 1e4 * t && e < 1e8
          ? "".concat((e / 1e4).toFixed(l), "万")
          : "".concat((e / 1e8).toFixed(l), "亿")),
      r && (e = "-".concat(e)),
      e + n
    );
  },
  o = function (e) {
    var o,
      l,
      n,
      r = [];
    if (
      (null == e ? void 0 : e.yysr_tb) &&
      "--" !== (null == e ? void 0 : e.yysr_tb) &&
      "--" !== (null == e ? void 0 : e.yysr)
    ) {
      var a = parseFloat(null == e ? void 0 : e.yysr_tb) > 0,
        c = {
          title: "营收",
          color: "",
          value: "营业收入"
            .concat(t(null == e ? void 0 : e.yysr, 10, 2, 2) || "--")
            .concat(
              Math.abs(null == e ? void 0 : e.yysr) < 1e4 ? "元" : "",
              "，"
            ),
        };
      0 === parseFloat(null == e ? void 0 : e.yysr_tb)
        ? ((c.color = "gray"), (c.value = "".concat(c.value, "同比持平")))
        : ((c.color = a ? "red" : "green"),
          (c.value = ""
            .concat(c.value, "同比")
            .concat(a ? "+" : "-")
            .concat(
              (null == (o = Math.abs(null == e ? void 0 : e.yysr_tb))
                ? void 0
                : o.toFixed(2)) || "--",
              "%"
            ))),
        r.push(c);
    }
    if (
      (null == e ? void 0 : e.jrl) &&
      "--" !== (null == e ? void 0 : e.jlr_tb) &&
      "--" !== (null == e ? void 0 : e.jrl)
    ) {
      var u = parseFloat(null == e ? void 0 : e.jrl_tb) > 0,
        i = {
          title: "利润",
          color: "",
          value: "归母净利润"
            .concat(t(null == e ? void 0 : e.jrl, 10, 2, 2) || "--")
            .concat(
              Math.abs(null == e ? void 0 : e.jrl) < 1e4 ? "元" : "",
              "，"
            ),
        };
      0 === parseFloat(null == e ? void 0 : e.jrl_tb)
        ? ((i.color = "gray"), (i.value = "".concat(i.value, "同比持平")))
        : ((i.color = u ? "red" : "green"),
          (i.value = ""
            .concat(i.value, "同比")
            .concat(u ? "+" : "-")
            .concat(
              (null == (l = Math.abs(null == e ? void 0 : e.jrl_tb))
                ? void 0
                : l.toFixed(2)) || "--",
              "%"
            ))),
        r.push(i);
    }
    if (
      (null == e ? void 0 : e.roe_weighted_tb) &&
      "--" !== (null == e ? void 0 : e.roe_weighted_tb) &&
      "--" !== (null == e ? void 0 : e.roe_weighted)
    ) {
      var d = parseFloat(null == e ? void 0 : e.roe_weighted_tb) > 0,
        v = {
          title: "ROE",
          color: "",
          value: "净资产收益率".concat(
            (null == e ? void 0 : e.roe_weighted) || "--",
            "，"
          ),
        };
      0 === parseFloat(null == e ? void 0 : e.roe_weighted_tb)
        ? ((v.color = "gray"), (v.value = "".concat(v.value, "同比持平")))
        : ((v.color = d ? "red" : "green"),
          (v.value = ""
            .concat(v.value, "同比")
            .concat(d ? "+" : "-")
            .concat(
              (null == (n = Math.abs(null == e ? void 0 : e.roe_weighted_tb))
                ? void 0
                : n.toFixed(2)) || "--",
              "%"
            ))),
        r.push(v);
    }
    return r;
  },
  l = e.defineComponent({
    props: {
      data: {
        type: Object,
        default: function () {
          return {};
        },
        required: !0,
      },
    },
    setup: function (t) {
      return {
        content: e.computed(function () {
          return o(t.data);
        }),
      };
    },
  }),
  n = e._export_sfc(l, [
    [
      "render",
      function (t, o, l, n, r, a) {
        return {
          a: e.f(t.content, function (t, o, l) {
            return {
              a: e.t(t.title),
              b: e.n("detail-value-".concat(t.color)),
              c: e.t(t.value),
              d: o,
            };
          }),
        };
      },
    ],
    ["__scopeId", "data-v-3b3f1c0f"],
  ]);
wx.createComponent(n);
