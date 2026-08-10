require("../../../../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = Object.defineProperty,
  i = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  o = function (e, i, a) {
    return i in e
      ? t(e, i, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[i] = a);
  },
  m = function (t, i) {
    for (var a in i || (i = {})) r.call(i, a) && o(t, a, i[a]);
    if (n) {
      var m,
        g = e(n(i));
      try {
        for (g.s(); !(m = g.n()).done; ) {
          a = m.value;
          s.call(i, a) && o(t, a, i[a]);
        }
      } catch (e) {
        g.e(e);
      } finally {
        g.f();
      }
    }
    return t;
  },
  g = function (e, t) {
    return i(e, a(t));
  },
  l = require("../../../stock-community-base/utils/commentFilter.js"),
  c = require("../../../../../../common/vendor.js"),
  h = {
    name: "itemImage",
    components: {
      BaseImage: function () {
        return "../../../../../communitySbg/@tencent/stock-community-ui/components/baseImage/index.js";
      },
    },
    props: {
      itemData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      isTurnBox: { type: Boolean, default: !1 },
      imageRefreshFlag: { default: 0 },
      disableSimpleImg: { default: !1 },
      disableLitImag: { default: !1 },
    },
    data: function () {
      return {};
    },
    computed: {
      imageList: function () {
        return (
          this.itemData.image_list &&
          this.itemData.image_list.length &&
          this.itemData.image_list.slice(0, 1)
        );
      },
      isSimpleImg: function () {
        return !(
          1 !== this.itemData.image_list.length ||
          this.disableSimpleImg ||
          (this.itemData.image_list[0].origin &&
            -1 !== this.itemData.image_list[0].origin.indexOf("gif123"))
        );
      },
      itemImageClass: function () {
        return [
          "mod-item-image",
          this.isTurnBox ? "turn-box" : "",
          1 === this.itemData.image_list.length ? "only-one" : "",
          4 === this.itemData.image_list.length ? "only-four" : "",
        ];
      },
    },
    methods: {
      imageLoaded: function (e, t, i) {
        this.$set(t, "showStyle", this.imgShowStyle(t, i));
      },
      imageLoadedNew: function (e) {
        var t = e.index,
          i = this.imageList[t];
        this.$set(i, "showStyle", this.imgShowStyle(i, e));
      },
      litimg: function (e) {
        return e
          ? this.disableLitImag
            ? e
            : (-1 !== e.indexOf("gif123") &&
                Object.keys(l.gif2png).forEach(function (t, i) {
                  -1 !== e.indexOf(t) &&
                    (e = e.replace(t, Object.values(l.gif2png)[i]));
                }),
              "long" === this.itemData.showType ? e : e.replace(/\/0$/, "/300"))
          : "";
      },
      imgShowStyle: function (e) {
        var t = this.litimg(e.thumbnail),
          i = "&";
        -1 === t.indexOf("?") ? (i = "?") : t.endsWith("&") && (i = "");
        var a = {
          backgroundImage: "url(".concat(
            ""
              .concat(t)
              .concat(i, "id=")
              .concat(this.itemData.id)
              .replace(/^http:/, "https:"),
            ")"
          ),
          backgroundSize: "cover",
        };
        if (!e.origin_prop || !this.isSimpleImg) return { type: "", style: a };
        if (this.isSimpleImg) {
          var n = e.origin_prop.split(","),
            r = +n[0],
            s = +n[1];
          return this.setImageSize(r, s, a);
        }
      },
      setImageSize: function (e, t, i) {
        var a = (null == window ? void 0 : window.devicePixelRatio) || 1;
        a > 2 && (a = 2);
        var n = 360 / (a = 2),
          r = { iWidth: n, iHeight: n, maskWidth: n, maskHeight: n },
          s = {
            square: g(m({}, r), { me: e === t }),
            "horizontal-less": g(m({}, r), {
              me: e > t && e / t <= 3,
              iHeight: (t * n) / e,
              maskHeight: (t * n) / e,
            }),
            "horizontal-over": g(m({}, r), {
              me: e > t && e / t > 3,
              iWidth: (n * e) / t / 3,
              iHeight: n / 3,
              maskHeight: n / 3,
            }),
            "vertical-less": g(m({}, r), {
              me: t > e && t / e <= 3,
              iWidth: (e * n) / t,
              maskWidth: (e * n) / t,
            }),
            "vertical-over": g(m({}, r), {
              me: t > e && t / e > 3,
              iWidth: n / 3,
              iHeight: t / (e / (n / 3)),
              maskWidth: n / 3,
            }),
            "long-only": { me: !1, iWidth: 690, iHeight: 200 },
          },
          o = { type: "", style: i };
        return (
          Object.keys(s).forEach(function (e) {
            s[e].me &&
              (o = {
                type: e,
                style: g(m({}, i), {
                  width: parseInt(s[e].maskWidth, 10)
                    ? "".concat(parseInt(s[e].maskWidth, 10), "px")
                    : "",
                  height: parseInt(s[e].maskHeight, 10)
                    ? "".concat(parseInt(s[e].maskHeight, 10), "px")
                    : "",
                }),
              });
          }),
          o
        );
      },
      previewImage: function (e) {
        var t = this,
          i = e.currentTarget.dataset,
          a = i.imagesw,
          n = i.index,
          r = i.urls,
          s = [],
          o = [];
        r
          ? r.split(",").forEach(function (e) {
              s.push(e);
            })
          : a[0].origin
          ? a.forEach(function (e) {
              s.push(e.url || e.origin);
            })
          : Array.isArray(a) && a.length > 0
          ? a.forEach(function (e) {
              s.push(e);
            })
          : a.split(",").forEach(function (e) {
              s.push(e);
            }),
          s.forEach(function (e) {
            o.push({ large: e, small: t.litimg(e) });
          }),
          this.$emit("tapImage", { currentIndex: n, urls: s, images: o });
      },
    },
  };
Array || c.resolveComponent("BaseImage")();
var u = c._export_sfc(h, [
  [
    "render",
    function (e, t, i, a, n, r) {
      return c.e(
        { a: r.imageList && r.imageList.length },
        r.imageList && r.imageList.length
          ? {
              b: c.f(r.imageList, function (e, t, a) {
                return c.e(
                  {
                    a: c.o(r.imageLoadedNew, 5574, t),
                    b: "5769b6c5-0-" + a,
                    c: c.p({
                      src: r.litimg(e.origin),
                      opacity: !0,
                      backgrounColor: "E9EBF0",
                      backgroundText: !0,
                      imageRefreshFlag: i.imageRefreshFlag,
                      imgIndex: t,
                    }),
                    d: e.origin && -1 !== e.origin.indexOf("gif123"),
                  },
                  (e.origin && e.origin.indexOf("gif123"), {}),
                  {
                    e: t,
                    f: c.n(
                      e.showStyle ? e.showStyle.type : r.imgShowStyle(e).type
                    ),
                    g: "img_" + t,
                    h: c.s(
                      e.showStyle ? e.showStyle.style : r.imgShowStyle(e).style
                    ),
                    i: c.o(
                      function () {
                        return (
                          r.previewImage && r.previewImage.apply(r, arguments)
                        );
                      },
                      5575,
                      t
                    ),
                    j: t,
                    k: r.litimg(e.origin),
                  }
                );
              }),
              c: c.n(i.itemData.showType),
              d: r.imageList,
              e: i.itemData.imageList,
              f: i.itemData.imageListInfo,
              g: i.itemData.image_urls,
              h: c.n(r.itemImageClass),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-5769b6c5"],
]);
wx.createComponent(u);
