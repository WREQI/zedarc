require("../../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../../app.js");
var e = require("../../../../common/vendor.js"),
  r = require("../../../../cgi/apply.js"),
  t = require("../../../../model/apply/usePreReview.js"),
  o = [
    {
      side: "front",
      label: "身份证人像面",
      src: r.applyCgi.getMediaSrcUrl(r.ACTION.IDCARD_DOWNLOAD_FRONT),
    },
    {
      side: "back",
      label: "身份证国徽面",
      src: r.applyCgi.getMediaSrcUrl(r.ACTION.IDCARD_DOWNLOAD_BACK),
    },
  ],
  n = e.defineComponent({
    name: "IdCardPhotoSwiper",
    props: { sides: { type: Array, default: void 0 } },
    setup: function (r) {
      var n = t.usePreReview().idcardPhotoSides;
      return {
        photos: e.computed(function () {
          var e,
            t = null !== (e = r.sides) && void 0 !== e ? e : n.value;
          return t.length
            ? o.filter(function (e) {
                return t.includes(e.side);
              })
            : o;
        }),
      };
    },
  }),
  i = e._export_sfc(n, [
    [
      "render",
      function (r, t, o, n, i, s) {
        return e.e(
          { a: r.photos.length },
          r.photos.length
            ? {
                b: e.f(r.photos, function (e, r, t) {
                  return { a: e.src, b: e.side };
                }),
                c: r.photos.length > 1,
                d: r.photos.length > 1,
                e: r.photos.length > 1,
              }
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-cc7e1663"],
  ]);
wx.createComponent(i);
