var t = require("../../../../../../common/vendor.js"),
  i = {
    methods: {
      handleChartShare: function () {
        var i,
          e,
          h,
          l,
          n,
          s,
          a,
          o,
          r =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : function () {};
        if (this.noData) r();
        else {
          var d =
              (null == (i = this.$refs.chart) ? void 0 : i.elem) ||
              (null == (e = this.$refs.chart) ? void 0 : e.contentElem),
            u = null == (h = this.$refs.chart) ? void 0 : h.view.layout.width,
            v =
              (null ==
              (n = null == (l = this.$refs.chart) ? void 0 : l.view.layout)
                ? void 0
                : n.chart) || {},
            c = v.height,
            f = v.width,
            w = v.y,
            m = v.top,
            $ = void 0 === m ? 0 : m,
            g = f / u,
            p =
              (c +
                w +
                $ +
                ((null ==
                (o =
                  null ==
                  (a = null == (s = this.$refs.chart) ? void 0 : s.view.layout)
                    ? void 0
                    : a.xAxis)
                  ? void 0
                  : o.height) || 0)) /
              f;
          t.wx$1.canvasToTempFilePath({
            height: this.width * p * g,
            width: this.width * g,
            destHeight: 282,
            destWidth: 432,
            canvas: d,
            success: function (t) {
              var i = t.tempFilePath;
              null == r || r(i);
            },
            fail: function () {
              null == r || r("");
            },
          });
        }
      },
    },
  };
exports.Share = i;
