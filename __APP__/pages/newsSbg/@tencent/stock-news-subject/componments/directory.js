var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  e = Object.defineProperty,
  n = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  i = Object.prototype.propertyIsEnumerable,
  r = function (t, n, o) {
    return n in t
      ? e(t, n, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (t[n] = o);
  },
  a = require("../../../../../common/vendor.js"),
  c = {
    name: "Dirctory",
    options: { styleIsolation: "shared" },
    props: {
      subjectData: {
        type: Object,
        default: function () {
          return {};
        },
      },
      wzqConfig: {
        type: Object,
        default: function () {
          return {
            Helper: { navigateTo: function () {} },
            stat: { click: function () {} },
            openStock: function () {},
          };
        },
      },
      isShare: { type: Boolean, default: !1 },
    },
    data: function () {
      return { navIcon: [1, 2, 3], isShowContent: !1 };
    },
    computed: {
      contentList: function () {
        return (this.subjectData && this.subjectData.id_list) || [];
      },
    },
    mounted: function () {
      this.handleDataReport({
        eventName: "news.subject.detail.directory_index_show",
      });
    },
    methods: {
      onNavBtn: function () {
        this.showContent(),
          this.handleDataReport({
            eventName: "news.subject.detail.directory_list_show",
          });
      },
      showContent: function () {
        this.isShowContent = !0;
      },
      hideContent: function () {
        this.isShowContent = !1;
      },
      gotoSection: function (t, e) {
        this.$emit("scrolltoSection", t, e),
          this.hideContent(),
          this.handleDataReport({
            eventName: "news.subject.detail.directory_item_click",
          });
      },
      handleDataReport: function (e) {
        var a = e.eventName,
          c = e.dataObject,
          s = void 0 === c ? {} : c;
        a &&
          (function (e, a) {
            for (var c in a || (a = {})) o.call(a, c) && r(e, c, a[c]);
            if (n) {
              var s,
                u = t(n(a));
              try {
                for (u.s(); !(s = u.n()).done; ) {
                  c = s.value;
                  i.call(a, c) && r(e, c, a[c]);
                }
              } catch (t) {
                u.e(t);
              } finally {
                u.f();
              }
            }
          })({ news_id: this.subjectData.news_id }, s);
      },
    },
  };
Array || a.resolveComponent("transition")();
var s = a._export_sfc(c, [
  [
    "render",
    function (t, e, n, o, i, r) {
      return a.e(
        {
          a: a.f(i.navIcon, function (t, e, n) {
            return { a: t };
          }),
          b: a.n(n.isShare ? "isShare" : ""),
          c: a.o(function () {
            return r.onNavBtn && r.onNavBtn.apply(r, arguments);
          }, 4038),
          d: i.isShowContent,
        },
        i.isShowContent
          ? {
              e: a.o(function () {}, 4039),
              f: a.o(function () {
                return r.hideContent && r.hideContent.apply(r, arguments);
              }, 4040),
            }
          : {},
        { g: a.p({ name: "fade" }), h: i.isShowContent },
        i.isShowContent
          ? {
              i: a.f(r.contentList, function (t, e, n) {
                return {
                  a: a.t(t.section),
                  b: e,
                  c: a.o(
                    function (n) {
                      return r.gotoSection(t, e);
                    },
                    4041,
                    e
                  ),
                };
              }),
            }
          : {},
        { j: a.p({ name: "animation" }) }
      );
    },
  ],
  ["__scopeId", "data-v-985867d1"],
]);
wx.createComponent(s);
