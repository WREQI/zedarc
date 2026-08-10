var e = require("../../node-modules/@tencent/st-tools/dist/mpDetect.js"),
  t = require("../../../../../../common/vendor.js"),
  n = e.detect().env.IS_ZXG_XCX_ALLH5,
  r = {
    components: {
      Supporter: function () {
        return "../Supporter.js";
      },
    },
    props: {
      flashList: {
        type: Array,
        default: function () {
          return [];
        },
      },
      loadAll: { type: Boolean, default: !1 },
    },
    data: function () {
      return { isInMpZxg: n };
    },
    methods: {
      openDetail: function (e) {
        this.$emit("openDetail", e);
      },
    },
  };
Array || t.resolveComponent("Supporter")();
var o = t._export_sfc(r, [
  [
    "render",
    function (e, n, r, o, i, s) {
      return t.e(
        {
          a: t.f(r.flashList, function (e, n, r) {
            return {
              a: t.t(e.formatedTime),
              b: t.t(e.title),
              c: t.n(e.is_red ? "red" : ""),
              d: t.t(e.content),
              e: e.title ? "" : 1,
              f: e.is_red && !e.title ? 1 : "",
              g: t.o(
                function (t) {
                  return s.openDetail(e);
                },
                3483,
                n
              ),
              h: n,
            };
          }),
          b: !i.isInMpZxg && r.flashList.length,
        },
        !i.isInMpZxg && r.flashList.length
          ? { c: t.p({ loadAll: r.loadAll }) }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-14be881e"],
]);
wx.createComponent(o);
