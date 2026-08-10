require("../../../../../../../@babel/runtime/helpers/Objectvalues");
var e = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  t = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  o = function (e, t, a) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[t] = a);
  },
  m = function (i, t) {
    for (var a in t || (t = {})) r.call(t, a) && o(i, a, t[a]);
    if (n) {
      var m,
        g = e(n(t));
      try {
        for (g.s(); !(m = g.n()).done; ) {
          a = m.value;
          s.call(t, a) && o(i, a, t[a]);
        }
      } catch (e) {
        g.e(e);
      } finally {
        g.f();
      }
    }
    return i;
  },
  g = function (e, i) {
    return t(e, a(i));
  },
  l = require("../../../../stock-community-base/utils/commentFilter.js"),
  h = require("../../../../../../../common/vendor.js"),
  c = {
    name: "itemImage",
    components: {
      BaseImage: function () {
        return "../baseImage/index.js";
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
        return "long" !== this.itemData.showType
          ? this.itemData.image_list
          : this.itemData.image_list &&
              this.itemData.image_list.length &&
              this.itemData.image_list.slice(0, 3);
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
      imageLoaded: function (e, i, t) {
        this.$set(i, "showStyle", this.imgShowStyle(i, t));
      },
      imageLoadedNew: function (e) {
        var i = e.index,
          t = this.imageList[i];
        this.$set(t, "showStyle", this.imgShowStyle(t, e));
      },
      litimg: function (e) {
        return e
          ? this.disableLitImag
            ? e
            : (-1 !== e.indexOf("gif123") &&
                Object.keys(l.gif2png).forEach(function (i, t) {
                  -1 !== e.indexOf(i) &&
                    (e = e.replace(i, Object.values(l.gif2png)[t]));
                }),
              "long" === this.itemData.showType ? e : e.replace(/\/0$/, "/300"))
          : "";
      },
      imgShowStyle: function (e) {
        var i = this.litimg(e.thumbnail),
          t = "&";
        -1 === i.indexOf("?") ? (t = "?") : i.endsWith("&") && (t = "");
        var a = {
          backgroundImage: "url(".concat(
            "".concat(i).concat(t, "id=").concat(this.itemData.id),
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
      setImageSize: function (e, i, t) {
        var a = (null == window ? void 0 : window.devicePixelRatio) || 1;
        a > 2 && (a = 2);
        var n = 360 / (a = 2),
          r = { iWidth: n, iHeight: n, maskWidth: n, maskHeight: n },
          s = {
            square: g(m({}, r), { me: e === i }),
            "horizontal-less": g(m({}, r), {
              me: e > i && e / i <= 3,
              iHeight: (i * n) / e,
              maskHeight: (i * n) / e,
            }),
            "horizontal-over": g(m({}, r), {
              me: e > i && e / i > 3,
              iWidth: (n * e) / i / 3,
              iHeight: n / 3,
              maskHeight: n / 3,
            }),
            "vertical-less": g(m({}, r), {
              me: i > e && i / e <= 3,
              iWidth: (e * n) / i,
              maskWidth: (e * n) / i,
            }),
            "vertical-over": g(m({}, r), {
              me: i > e && i / e > 3,
              iWidth: n / 3,
              iHeight: i / (e / (n / 3)),
              maskWidth: n / 3,
            }),
            "long-only": { me: !1, iWidth: 690, iHeight: 200 },
          },
          o = { type: "", style: t };
        return (
          Object.keys(s).forEach(function (e) {
            s[e].me &&
              (o = {
                type: e,
                style: g(m({}, t), {
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
        var i = this,
          t = e.currentTarget.dataset,
          a = t.imagesw,
          n = t.index,
          r = t.urls,
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
            o.push({ large: e, small: i.litimg(e) });
          }),
          this.$emit("tapImage", { currentIndex: n, urls: s, images: o });
      },
    },
  };
Array || h.resolveComponent("BaseImage")();
var u = h._export_sfc(c, [
  [
    "render",
    function (e, i, t, a, n, r) {
      return h.e(
        { a: r.imageList && r.imageList.length },
        r.imageList && r.imageList.length
          ? {
              b: h.f(r.imageList, function (e, i, a) {
                return h.e(
                  {
                    a: h.o(r.imageLoadedNew, 4330, i),
                    b: "a4624d99-0-" + a,
                    c: h.p({
                      src: r.litimg(e.thumbnail),
                      opacity: !0,
                      backgrounColor: "E9EBF0",
                      backgroundText: !0,
                      imageRefreshFlag: t.imageRefreshFlag,
                      imgIndex: i,
                    }),
                    d:
                      e.origin &&
                      -1 !== e.origin.indexOf("gif123") &&
                      !t.disableLitImag,
                  },
                  (e.origin &&
                    -1 !== e.origin.indexOf("gif123") &&
                    t.disableLitImag,
                  {}),
                  {
                    e: i,
                    f: h.n(
                      e.showStyle ? e.showStyle.type : r.imgShowStyle(e).type
                    ),
                    g: "img_" + i,
                    h: h.s(
                      e.showStyle ? e.showStyle.style : r.imgShowStyle(e).style
                    ),
                    i: h.o(
                      function () {
                        return (
                          r.previewImage && r.previewImage.apply(r, arguments)
                        );
                      },
                      4331,
                      i
                    ),
                    j: i,
                    k: r.litimg(e.thumbnail),
                  }
                );
              }),
              c: h.n(t.itemData.showType),
              d: r.imageList,
              e: t.itemData.imageList,
              f: t.itemData.imageListInfo,
              g: t.itemData.image_urls,
              h: h.n(r.itemImageClass),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-a4624d99"],
]);
wx.createComponent(u);
