var e = require("../common/vendor.js"),
  t = getApp(),
  u = {
    "pages/noaccount/": [
      "pages/zhaoshang/",
      "pages/hualin/",
      "pages/guojin/",
      "pages/guoxin/",
      "pages/zhongjincaifu/",
      "pages/guangfa/",
      "pages/zhongxinjiantou/",
    ],
  },
  a = "timeout",
  o = "before_reload",
  g = "after_reload",
  s = {
    data: function () {
      return {
        subpkgName: "",
        pluginSubpkgName: "",
        subpkgReady: !0,
        subpkgReloading: !0,
        subpkgCheckTimer: null,
        pageSubpkgMounted: !1,
        pluginSubpkgMounted: !1,
      };
    },
    computed: {
      subpkgMounted: function () {
        var e = !u[this.subpkgName] || this.pluginSubpkgMounted;
        return this.pageSubpkgMounted && e;
      },
      subpkgStatus: function () {
        return this.subpkgReloading
          ? e.COMMON_PAGE_STATUS.LOADING
          : this.subpkgReady
          ? ""
          : e.COMMON_PAGE_STATUS.ERROR;
      },
    },
    onShow: function () {
      try {
        if (this.subpkgName) {
          if (this.subpkgMounted) return;
          if (
            (t.globalData.subpkgloadInfo || (t.globalData.subpkgloadInfo = {}),
            !this.getSubpkgLoadStatus("default").done)
          )
            return (
              e.mpReporter.log("onshow时检测到分包加载失败，开始重试"),
              (this.subpkgReady = !1),
              void this.reloadSubpkg(!1)
            );
          this.ensureNoBlank(!0), this.createLoadFailChecker(!1);
        }
      } catch (t) {
        e.mpReporter.log("subpkg_reload err: ".concat(t.message));
      }
    },
    onHide: function () {
      this.destroyLoadFailChecker();
    },
    methods: {
      onPageSubpkgMounted: function () {
        (this.pageSubpkgMounted = !0),
          (t.globalData.subpkgloadInfo[this.subpkgName] = !0),
          e.mpReporter.log("页面分包[".concat(this.subpkgName, "]渲染完成")),
          this.updateSubpkgLoadedStatus();
      },
      onPluginSubpkgMounted: function () {
        var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.pluginSubpkgMounted ||
          ((this.pluginSubpkgMounted = !0),
          u[this.subpkgName] &&
            (this.pluginSubpkgName
              ? (t.globalData.subpkgloadInfo[this.pluginSubpkgName] = !0)
              : u[this.subpkgName].forEach(function (e) {
                  t.globalData.subpkgloadInfo[e] = !0;
                })),
          e.mpReporter.log(
            "插件分包["
              .concat(this.pluginSubpkgName || this.subpkgName, "]渲染完成[")
              .concat(a, "]")
          ),
          this.updateSubpkgLoadedStatus());
      },
      createLoadFailChecker: function () {
        var t = this,
          u = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this.subpkgCheckTimer = setTimeout(function () {
          if (((t.subpkgCheckTimer = null), !t.subpkgMounted)) {
            if (!t.getSubpkgLoadStatus(a).done)
              return (
                e.mpReporter.log(
                  ""
                    .concat(u ? 10 : 5, "s后检测到分包加载失败，[")
                    .concat(t.subpkgName, "]展示异常界面")
                ),
                (t.subpkgReady = !1),
                void (t.subpkgReloading = !1)
              );
            if (!t.subpkgMounted) {
              if (!u) return void t.createLoadFailChecker(!0);
              e.mpReporter.log(
                "10s后未检测到分包加载失败，分包未渲染，[".concat(
                  t.subpkgName,
                  "]展示异常界面"
                )
              ),
                (t.subpkgReady = !1),
                (t.subpkgReloading = !1),
                e.mpReporter.reportEvent("SUBPACKAGE_LOAD_UNCOMPLETED");
            }
          }
        }, 5e3);
      },
      destroyLoadFailChecker: function () {
        this.subpkgCheckTimer &&
          (clearTimeout(this.subpkgCheckTimer), (this.subpkgCheckTimer = null));
      },
      getSubpkgLoadStatus: function (e) {
        var a = !1 !== t.globalData.subpkgloadInfo[this.subpkgName],
          o = !0,
          g = "",
          s = u[this.subpkgName];
        if (s && s.length > 0)
          if (this.pluginSubpkgName)
            (o = !1 !== t.globalData.subpkgloadInfo[this.pluginSubpkgName]),
              (g = this.pluginSubpkgName);
          else {
            var n = s.find(function (e) {
              return !1 === t.globalData.subpkgloadInfo[e];
            });
            n && ((o = !1), (g = n));
          }
        return {
          done: a && o,
          page: { name: this.subpkgName, success: a },
          plugin: { name: g, success: o },
        };
      },
      reloadSubpkg: function () {
        var u = this,
          a =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
        try {
          this.subpkgReloading = !0;
          var s = this.getSubpkgLoadStatus(o),
            n = s.page,
            p = s.plugin,
            i = this.subpkgName;
          n.success && !p.success && (i = p.name);
          var r = setTimeout(function () {
              e.mpReporter.reportEvent("SUBPACKAGE_RELOAD_TIMEOUT");
            }, 1e4),
            k = e.fetcher,
            b = k.retry,
            l = k.RETRY_TYPES;
          b.call(e.fetcher, i, a ? l.MANUAL : l.AUTO).then(function (a) {
            (clearTimeout(r), (u.subpkgReloading = !1), a) &&
              ((t.globalData.subpkgloadInfo[i] = !0),
              u.getSubpkgLoadStatus(g).done &&
                ((u.subpkgReady = !0), u.ensureNoBlank()));
            e.mpReporter.reportEvent(
              "SUBPACKAGE_RECOVER_" + (a ? "SUCCESS" : "FAIL"),
              { ext3: i }
            );
          });
        } catch (e) {}
      },
      ensureNoBlank: function () {
        var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (this.subpkgReady && !this.subpkgMounted) {
          var o = u[this.subpkgName];
          o &&
            o.some(function (e) {
              return !0 === t.globalData.subpkgloadInfo[e];
            }) &&
            (a && e.mpReporter.reportEvent("SUBPACKAGE_MATCH_BLANK"),
            this.onPluginSubpkgMounted(!0));
        }
      },
      updateSubpkgLoadedStatus: function () {
        this.subpkgMounted &&
          ((this.subpkgReady = !0), this.destroyLoadFailChecker());
      },
    },
  };
exports.SubpkgReloadMixin = s;
