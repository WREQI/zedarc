var e = require("../../../../../../common/vendor.js"),
  t = require("../markdown-renderer/mp.js"),
  n = {
    name: "ToggleComponent",
    components: {},
    props: {
      pageName: { type: String, default: "" },
      newsId: { type: String, default: "" },
      data: { type: Object, default: {} },
      position: { type: Number, default: 0 },
      mdRuleFn: { type: Function, default: function () {} },
    },
    setup: function (n) {
      var a = e.StockBridge.ENV === e.EnvTypeEnum.MP,
        o = t.useLinkClickHooks(n),
        c = o.registerClickEvent,
        r = o.unRegisterClickEvent,
        i = o.handleHrefClickListener,
        l = e.ref(null),
        u = e.ref(null),
        s = e.ref(!1),
        d = e.ref(""),
        m = "expand_icon_".concat(n.position),
        p = e.ref([]),
        f = e.ref([]),
        v = 0,
        g = function () {
          s.value = !s.value;
          var e = a
            ? null
            : null == document
            ? void 0
            : document.getElementById(m);
          e
            ? (v && clearTimeout(v),
              (e.style.transition = ""),
              (e.style.transform = "rotate(".concat(s.value ? 0 : 180, "deg)")),
              (v = setTimeout(function () {
                var t = s.value ? 180 : 360;
                (e.style.transition = "transform 0.4s ease"),
                  (e.style.transform = "rotate(".concat(t, "deg)"));
              }, 10)))
            : (d.value = s.value ? "expand" : "");
        },
        y = function (e) {
          var t = e.target;
          if (t.closest(".toggle_tail")) g();
          else {
            var n = t.closest("a");
            if (n) {
              var a = n.getAttribute("href");
              i(a);
            } else g();
          }
        },
        k = null;
      e.watch(
        function () {
          return n.data;
        },
        function (e) {
          if (e) {
            k ||
              (function () {
                var e = {
                  componentPrefix: "card",
                  startMarker: ":::",
                  endMarker: ":::",
                  mdRuleFn: n.mdRuleFn,
                };
                k = t.createMarkdownParser(e);
              })();
            var a = e.detail,
              o = void 0 === a ? "" : a,
              c = e.summary,
              r = void 0 === c ? "" : c;
            try {
              var i = decodeURIComponent(o),
                l = decodeURIComponent(r);
              (p.value = k.parse(i || "")), (f.value = k.parse(l || ""));
            } catch (e) {}
          }
        },
        { immediate: !0 }
      ),
        e.onMounted(function () {
          a || (c(u), l.value && l.value.addEventListener("click", y));
        }),
        e.onUnmounted(function () {
          a || (r(u), l.value && l.value.removeEventListener("click", y));
        });
      var _ = e.computed(function () {
          return '<a class="toggle_tail">详解<img id="'
            .concat(m, '" class="expand_icon ')
            .concat(
              d.value,
              '" src="https://st.gtimg.com/design/c3c8881149ec6c792898fb4b33303de5.svg"></img></a>'
            );
        }),
        M = e.computed(function () {
          var e, t;
          if (0 == +(null == (e = f.value) ? void 0 : e.length)) return "";
          var n = '<blockquote class="_blockquote"><ol class="_ol">',
            a =
              null == (t = f.value)
                ? void 0
                : t
                    .map(function (e) {
                      return "content" === e.type && e.content;
                    })
                    .join(""),
            o = a.match(/<li[^>]*>[\s\S]*?<\/li>/g);
          return (
            (n += o
              ? o
                  .map(function (e, t) {
                    return t === o.length - 1
                      ? '<li class="_li">'
                          .concat(e.replace(/<\/?li[^>]*>/g, ""))
                          .concat(_.value, "</li>")
                      : e;
                  })
                  .join("")
              : '<li class="_li">'.concat(a).concat(_.value, "</li>")),
            (n += "</ol></blockquote>")
          );
        });
      return {
        isMp: a,
        summaryHtml: M,
        isExpand: s,
        contentRefs: u,
        summaryRef: l,
        detailContent: p,
      };
    },
  },
  a = e._export_sfc(n, [
    [
      "render",
      function (t, n, a, o, c, r) {
        return e.e(
          { a: !o.isMp },
          o.isMp ? {} : { b: o.summaryHtml },
          { c: o.isMp },
          o.isMp ? { d: o.summaryHtml } : {},
          {
            e: e.f(o.detailContent, function (t, n, a) {
              return e.e(
                { a: !o.isMp && "content" === t.type },
                o.isMp || "content" !== t.type ? {} : { b: t.content },
                { c: o.isMp && "content" === t.type },
                o.isMp && "content" === t.type ? { d: t.content } : {},
                { e: "render_".concat(n, "_").concat(t.id || "") }
              );
            }),
            f: o.isExpand,
          }
        );
      },
    ],
    ["__scopeId", "data-v-7cf98876"],
  ]);
wx.createComponent(a);
