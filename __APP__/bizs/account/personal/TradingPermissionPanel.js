var e = require("../../../@babel/runtime/helpers/toConsumableArray");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  i = require("../../../model/biz/permission/types.js"),
  s = require("../../../model/biz/permission/constants.js"),
  o = require("../../../stores/app/context.js"),
  t = require("../../../model/biz/permission/usePermissionNavigate.js"),
  r = require("../../../stores/app/useMode.js"),
  a = require("../../../service/stat/mp-weixin.js"),
  l = n.defineComponent({
    name: "TradingPermissionPanel",
    props: {
      iconPermissions: {
        type: Array,
        default: function () {
          return [];
        },
      },
      loading: { type: Boolean, default: !1 },
      isKeChuangOpened: { type: Boolean, default: !1 },
      hasNqHolder: { type: Boolean, default: !1 },
    },
    components: {
      MpDialog: function () {
        return "../../../common/components/Dialog/Dialog.js";
      },
    },
    options: { styleIsolation: "shared" },
    emits: ["collapseCard"],
    setup: function (l, u) {
      var c = u.emit,
        d = (0, o.useAppContext().useRouter)(),
        p = r.useModeStore(),
        m = n.storeToRefs(p).simpleMode,
        f = t.usePermissionNavigate({
          router: d,
          simpleMode: m,
          isKeChuangOpened: n.toRef(l, "isKeChuangOpened"),
          hasNqHolder: n.toRef(l, "hasNqHolder"),
        }),
        P = f.navigateOpened,
        g = f.toPermissionPage,
        y = n.computed(function () {
          return (
            l.loading || !l.iconPermissions || 0 === l.iconPermissions.length
          );
        }),
        h = function (e) {
          return e === i.OPEN_STATUS.OPENED;
        },
        O = n.computed(function () {
          return l.iconPermissions && 0 !== l.iconPermissions.length
            ? e(l.iconPermissions).sort(function (e, n) {
                return e.key === s.PERMISSION_KEY.ALL
                  ? 1
                  : n.key === s.PERMISSION_KEY.ALL
                  ? -1
                  : (h(e.status) ? 0 : 1) - (h(n.status) ? 0 : 1);
              })
            : [];
        }),
        _ = function (e) {
          var n = e.key,
            i = h(e.status);
          try {
            i ? P(n) : g(n);
          } catch (e) {
          } finally {
            c("collapseCard");
          }
        };
      return {
        SKELETON_COUNT: 8,
        isLoading: y,
        sortedIconPermissions: O,
        isPermissionOpened: h,
        handlePermissionClick: function (e) {
          a.stat.click(
            "trade.account.tradingpermission_".concat(e.key, "_click")
          ),
            y.value || _(e);
        },
        handleViewAll: function () {
          a.stat.click("trade.account.tradingpermission_view_all_click"),
            _({
              key: "all",
              status: i.OPEN_STATUS.OPENED,
              title: "全部",
              icon: "",
            });
        },
      };
    },
  });
Array || n.resolveComponent("mp-dialog")();
var u = n._export_sfc(l, [
  [
    "render",
    function (e, i, s, o, t, r) {
      return {
        a: n.o(function () {
          return e.handleViewAll && e.handleViewAll.apply(e, arguments);
        }),
        b: n.f(e.sortedIconPermissions, function (i, s, o) {
          return n.e(
            { a: !e.isPermissionOpened(i.status) },
            (e.isPermissionOpened(i.status), {}),
            {
              b: n.n(
                e.isPermissionOpened(i.status)
                  ? ""
                  : "trading-permission-panel__icon--lock"
              ),
              c: n.n(i.key),
              d: "url(".concat(i.icon, ")"),
              e: n.t(i.title),
              f: n.n(i.title && i.title.length >= 7 ? " text-small" : ""),
              g: i.key,
              h: n.o(function (n) {
                return e.handlePermissionClick(i);
              }, i.key),
            }
          );
        }),
        c: n.p({ id: "mp-dialog" }),
      };
    },
  ],
  ["__scopeId", "data-v-9b0b5dd8"],
]);
wx.createComponent(u);
