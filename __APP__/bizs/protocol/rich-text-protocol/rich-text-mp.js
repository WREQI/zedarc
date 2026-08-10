var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("./html-parse.js"),
  n = require("../../../service/aegis/platform/not-wujie.js"),
  o = require("../../../common/vendor.js"),
  a = {
    props: { content: { type: String, required: !0 } },
    data: function () {
      return { renderContent: [] };
    },
    watch: {
      content: {
        immediate: !0,
        handler: function (e) {
          this.loadHtml(e);
        },
      },
    },
    methods: {
      loadHtml: function (o) {
        var a = this;
        return r(
          e().mark(function r() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    try {
                      o.length
                        ? (a.renderContent = t.parseWithCatchError(o))
                        : (a.renderContent = []);
                    } catch (e) {
                      n.aegisReporter.reportEvent("MONITOR-HTML-PARSE-ERROR", {
                        ext3: JSON.stringify(e),
                      });
                    }
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )();
      },
    },
  },
  i = o._export_sfc(a, [
    [
      "render",
      function (e, r, t, n, o, a) {
        return { a: o.renderContent };
      },
    ],
  ]);
wx.createComponent(i);
