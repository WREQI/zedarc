var r = require("../utils/tool.js"),
  t = require("../../../../../../common/vendor.js"),
  e = {
    props: {
      rankList: {
        type: Array,
        default: function () {
          return [];
        },
      },
    },
    setup: function () {
      return {
        cutString: function (t) {
          return r.cutStr(t, 6, 1);
        },
      };
    },
  },
  n = t._export_sfc(e, [
    [
      "render",
      function (r, e, n, a, i, s) {
        return t.e(
          { a: n.rankList && n.rankList.length > 0 },
          n.rankList && n.rankList.length > 0
            ? t.e(
                { b: n.rankList[1] },
                n.rankList[1]
                  ? {
                      c: n.rankList[1].headimgurl
                        ? n.rankList[1].headimgurl
                        : "https://wzq.tenpay.com/resources/mocktrade/default_avatar.png",
                      d: t.t(
                        n.rankList[1].nickname
                          ? a.cutString(n.rankList[1].nickname)
                          : "****"
                      ),
                      e: t.t((n.rankList[1].score / 1e4).toFixed(2)),
                      f: t.n(n.rankList[1].score > 0 ? "red" : "green"),
                      g: t.n(n.rankList[1].score > 0 ? "red" : "green"),
                    }
                  : {},
                { h: n.rankList[0] },
                n.rankList[0]
                  ? {
                      i: n.rankList[0].headimgurl
                        ? n.rankList[0].headimgurl
                        : "https://wzq.tenpay.com/resources/mocktrade/default_avatar.png",
                      j: t.t(
                        n.rankList[0].nickname
                          ? a.cutString(n.rankList[0].nickname)
                          : "****"
                      ),
                      k: t.t((n.rankList[0].score / 1e4).toFixed(2)),
                      l: t.n(n.rankList[0].score > 0 ? "red" : "green"),
                      m: t.n(n.rankList[0].score > 0 ? "red" : "green"),
                    }
                  : {},
                { n: n.rankList[2] },
                n.rankList[2]
                  ? {
                      o: n.rankList[2].headimgurl
                        ? n.rankList[2].headimgurl
                        : "https://wzq.tenpay.com/resources/mocktrade/default_avatar.png",
                      p: t.t(
                        n.rankList[2].nickname
                          ? a.cutString(n.rankList[2].nickname)
                          : "****"
                      ),
                      q: t.t((n.rankList[2].score / 1e4).toFixed(2)),
                      r: t.n(n.rankList[2].score > 0 ? "red" : "green"),
                      s: t.n(n.rankList[2].score / 1e4 > 0 ? "red" : "green"),
                    }
                  : {}
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-7a5646d1"],
  ]);
wx.createComponent(n);
