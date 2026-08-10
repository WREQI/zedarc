var i = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../../../common/vendor.js"),
  e = require("../api/index.js"),
  n = {
    inject: ["hqBridge"],
    components: {},
    props: ["isZhonJing"],
    data: function () {
      return {
        publishing: 0,
        willPublish: 0,
        publishingEtf: "",
        willPublishingEtf: "",
        loading: !0,
        isLite: !1,
      };
    },
    computed: {
      isMp: function () {
        return t.StockBridge.ENV === t.EnvTypeEnum.MP;
      },
    },
    created: function () {
      this.getETFBarData();
    },
    mounted: function () {
      this.hqBridge.report("hq.etfpage.newpubetf_brow");
    },
    methods: {
      getETFBarData: function () {
        return (
          (t = this),
          null,
          (n = i().mark(function () {
            var t, n, r, u, l, s;
            return i().wrap(
              function (i) {
                for (;;)
                  switch ((i.prev = i.next)) {
                    case 0:
                      return (i.next = 2), e.api.getSummary(this.hqBridge);
                    case 2:
                      if ((t = i.sent) && 0 === t.code) {
                        i.next = 5;
                        break;
                      }
                      return i.abrupt("return");
                    case 5:
                      (n = t.data || {}),
                        (r = n.willPublishing),
                        (u = n.publishing),
                        (l = n.publishingEtf),
                        (s = n.willPublishingEtf),
                        (this.publishing = u),
                        (this.publishingEtf = l),
                        (this.willPublish = r),
                        (this.willPublishingEtf = s),
                        (this.loading = !1);
                    case 7:
                    case "end":
                      return i.stop();
                  }
              },
              u,
              this
            );
          })),
          new Promise(function (i, e) {
            var r = function (i) {
                try {
                  l(n.next(i));
                } catch (i) {
                  e(i);
                }
              },
              u = function (i) {
                try {
                  l(n.throw(i));
                } catch (i) {
                  e(i);
                }
              },
              l = function (t) {
                return t.done
                  ? i(t.value)
                  : Promise.resolve(t.value).then(r, u);
              };
            l((n = n.apply(t, null)).next());
          })
        );
        var t, n;
      },
      gotoDetail: function () {
        this.hqBridge.report("hq.etfpage.newpubetf_click");
        var i = this.willPublish > 0 && this.publishing <= 0 ? 0 : 1;
        t.StockRouter.routeTo({
          name: this.isMp ? "newpubETF" : "newpubETFPage",
          query: {
            tab: i,
            from: this.isLite ? "mini" : "",
            type: this.isMp ? "" : "h5",
          },
        });
      },
    },
  },
  r = t._export_sfc(n, [
    [
      "render",
      function (i, e, n, r, u, l) {
        return t.e(
          {
            a: !n.isZhonJing && !u.loading && u.publishing + u.willPublish > 0,
          },
          !n.isZhonJing && !u.loading && u.publishing + u.willPublish > 0
            ? t.e(
                { b: u.publishing > 0 },
                u.publishing > 0
                  ? { c: t.t(u.publishingEtf), d: t.t(u.publishing) }
                  : {},
                { e: !u.publishing && u.willPublish > 0 },
                !u.publishing && u.willPublish > 0
                  ? { f: t.t(u.willPublishingEtf), g: t.t(u.willPublish) }
                  : {},
                {
                  h: t.o(function () {
                    return l.gotoDetail && l.gotoDetail.apply(l, arguments);
                  }, 3573),
                  i: t.n(u.isLite ? "lite" : ""),
                }
              )
            : {}
        );
      },
    ],
    ["__scopeId", "data-v-fd716c32"],
  ]);
wx.createComponent(r);
