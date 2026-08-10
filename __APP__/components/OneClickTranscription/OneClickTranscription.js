require("../../app.js");
var n = require("../../common/vendor.js"),
  e = {
    name: "OneClickTranscription",
    components: {
      Popup: function () {
        return "../../common/components/Popup/index.js";
      },
    },
    props: {
      confirmText: { required: !0, type: String },
      transcribeConfig: { required: !0, type: Object },
      warnTips: {
        type: String,
        default: "抄写内容有误，可点击“一键抄写”快速更正",
      },
    },
    setup: function (e, t) {
      var o = t.emit,
        r = n.getCurrentInstance().proxy,
        i = n.ref(""),
        c = e.transcribeConfig.content.join("\n"),
        a = e.transcribeConfig.protocols || [],
        u = n.computed(function () {
          return c === i.value;
        }),
        p = n.ref([]);
      p.value = (function (n) {
        for (var e = [], t = 0; t < n.length; t++) {
          for (
            var o = n[t],
              r = 0,
              i = [],
              c = function () {
                var n = o[u];
                if (/[《》]/.test(n))
                  if ("《" === n)
                    i.push({ type: "text", content: o.slice(r, u) }), (r = u);
                  else if ("》" === n) {
                    var e = o.slice(r, u + 1),
                      t = (
                        a.find(function (n) {
                          return n.name === e;
                        }) || {}
                      ).key;
                    i.push({ type: "protocol", content: e, key: t }),
                      (r = u + 1);
                  }
              },
              u = 0;
            u < o.length;
            u++
          )
            c();
          r < o.length - 1 && i.push({ type: "text", content: o.slice(r) }),
            e.push(i),
            (i = []);
        }
        return e;
      })(e.transcribeConfig.content || []);
      var s = n.ref(!1);
      n.onMounted(function () {
        r.$stat.click("trade.apply.apply.one_click_transcribe.brow");
      });
      var l = e.transcribeConfig && e.transcribeConfig.isHiddenLinkStyle;
      return {
        content: i,
        isSame: u,
        showWarnTip: s,
        templateContent: c,
        renderArr: p,
        isHiddenLinkStyle: l,
        copy: function () {
          r.$stat.click("trade.apply.apply.one_click_transcribe.click"),
            (s.value = !1),
            (i.value = c);
        },
        onClose: function () {
          (i.value = ""), o("close");
        },
        onConfirm: function () {
          r.$stat.click("trade.apply.apply.one_click_transcribe.confrim"),
            o("confirm");
        },
        onBlur: function () {
          u.value ? (s.value = !1) : (s.value = !0);
        },
        toProtocol: function (n) {
          n && r.$router.push({ name: "VProtocol", query: { key: n } });
        },
      };
    },
  };
Array || n.resolveComponent("popup")();
var t = n._export_sfc(e, [
  [
    "render",
    function (e, t, o, r, i, c) {
      return n.e(
        {
          a: n.o(function () {
            return r.onClose && r.onClose.apply(r, arguments);
          }),
          b: n.t(o.transcribeConfig.introduction),
          c: n.f(r.renderArr, function (e, t, o) {
            return {
              a: n.f(e, function (e, t, o) {
                return {
                  a: n.t(e.content),
                  b: t,
                  c: "protocol" !== e.type || r.isHiddenLinkStyle ? "" : 1,
                  d: n.o(function (n) {
                    return r.toProtocol(e.key);
                  }, t),
                };
              }),
              b: t,
            };
          }),
          d: n.o(function () {
            return r.onBlur && r.onBlur.apply(r, arguments);
          }),
          e: r.content,
          f: n.o(function (n) {
            return (r.content = n.detail.value);
          }),
          g: r.isSame,
          h: n.o(function () {
            return r.copy && r.copy.apply(r, arguments);
          }),
          i: r.showWarnTip,
        },
        r.showWarnTip ? { j: n.t(o.warnTips) } : {},
        {
          k: n.t(o.confirmText),
          l: !r.isSame,
          m: n.o(function () {
            return r.onConfirm && r.onConfirm.apply(r, arguments);
          }),
          n: n.o(e.maskClick),
          o: n.p({
            show: !0,
            center: !1,
            mask: !0,
            "z-index": 100,
            position: "bottom",
            "mask-closable": !1,
          }),
        }
      );
    },
  ],
  ["__scopeId", "data-v-7bb2a46b"],
]);
wx.createComponent(t);
