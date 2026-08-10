require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/defineProperty"),
  o = require("../../../../../common/vendor.js"),
  r = {
    maintain: "maintain",
    continue: "continue",
    verify: "verify",
    recover: "recover",
    unsupport: "unsupport",
    oem: "oem",
    loadfail: "loadfail",
    downgrade: "downgrade",
  },
  n = {
    props: {
      type: { type: String, default: "init" },
      isCurrentBroker: { type: Boolean, default: !1 },
      broker: {
        type: Object,
        default: function () {
          return {};
        },
      },
      showMore: { type: Boolean, default: !1 },
      showBrokerBg: { type: Boolean, default: !1 },
    },
    setup: function (n, t) {
      var a,
        i,
        c,
        l = t.emit,
        u =
          (e((a = {}), r.maintain, "券商系统维护，服务暂停使用"),
          e(a, r.continue, "您还未完成开户"),
          e(a, r.verify, "您的资料在审核中，请耐心等待"),
          e(
            a,
            r.recover,
            '您的资料审核<span style="color: #E63535">未通过</span>，需重新提交'
          ),
          e(a, r.unsupport, "该券商暂不支持展示，请前往交易页"),
          e(a, r.oem, "该券商暂不支持展示，请前往交易页"),
          e(a, r.loadfail, "数据加载失败，请稍候重试"),
          e(a, r.downgrade, "查看账户，请前往交易页"),
          e(a, r.init, ""),
          a),
        d =
          (e((i = {}), r.continue, "继续开户"),
          e(i, r.recover, "去查看"),
          e(i, r.unsupport, "去查看"),
          e(i, r.oem, "去查看"),
          e(i, r.loadfail, "去查看"),
          e(i, r.verify, "去查看"),
          e(i, r.downgrade, "去查看"),
          i),
        p =
          (e((c = {}), r.continue, "normal"),
          e(c, r.recover, "normal"),
          e(c, r.unsupport, "normal"),
          e(c, r.oem, "normal"),
          e(c, r.loadfail, "normal"),
          e(c, r.verify, "normal"),
          e(c, r.downgrade, "normal"),
          c),
        s = [
          r.oem,
          r.continue,
          r.unsupport,
          r.recover,
          r.loadfail,
          r.verify,
          r.downgrade,
        ],
        f = [r.oem, r.unsupport, r.loadfail, r.downgrade];
      return {
        platform: "mp",
        showCorTag: !1,
        showDetailBtn: o.computed(function () {
          return s.includes(n.type);
        }),
        brokerName: o.computed(function () {
          var e;
          return (null == (e = n.broker) ? void 0 : e.name) || "";
        }),
        brokerCode: o.computed(function () {
          var e;
          return (null == (e = n.broker) ? void 0 : e.code) || "";
        }),
        TYPE_TEXT: u,
        BTN_TEXT: d,
        BTN_STYLE: p,
        clickDetailHandle: function () {
          l("clickDetailBtn");
        },
        clickTopHandle: function () {
          f.includes(n.type) && l("clickTop");
        },
        clickMoreHandle: function () {
          o.StockRouter.routeTo({ name: "brokerAccount" }),
            o.StockBridge.report("profile.accountbanner-broker.click");
        },
      };
    },
  },
  t = o._export_sfc(n, [
    [
      "render",
      function (e, r, n, t, a, i) {
        return o.e(
          { a: n.showMore },
          n.showMore
            ? {
                b: o.o(function () {
                  return (
                    t.clickMoreHandle && t.clickMoreHandle.apply(t, arguments)
                  );
                }, 670),
              }
            : {},
          { c: n.isCurrentBroker && !n.showMore },
          (n.isCurrentBroker && n.showMore, {}),
          {
            d: o.n("broker-logo-".concat(t.brokerCode)),
            e: o.t(t.brokerName),
            f: t.showCorTag,
          },
          (t.showCorTag, {}),
          { g: n.isCurrentBroker && n.showMore },
          (n.isCurrentBroker && n.showMore, {}),
          {
            h: o.o(function () {
              return t.clickTopHandle && t.clickTopHandle.apply(t, arguments);
            }, 671),
            i: t.TYPE_TEXT[n.type] || "",
            j: t.showDetailBtn,
          },
          t.showDetailBtn
            ? {
                k: o.t(t.BTN_TEXT[n.type] || "去查看"),
                l: o.n(t.BTN_STYLE[n.type]),
                m: o.o(function () {
                  return (
                    t.clickDetailHandle &&
                    t.clickDetailHandle.apply(t, arguments)
                  );
                }, 672),
              }
            : {},
          {
            n: o.n("container-".concat(t.brokerCode)),
            o: o.n(
              n.showBrokerBg
                ? "container-bg-".concat(t.brokerCode, " container-shadow")
                : ""
            ),
            p: o.n(t.platform),
          }
        );
      },
    ],
    ["__scopeId", "data-v-8810be75"],
  ]);
wx.createComponent(t);
