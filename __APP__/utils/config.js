var e = { appid: 0, secretid: "", secretkey: "", openConsole: !0 };
module.exports = {
  SetQCloudSecret: function (t, o, r, n, c) {
    (e.appid = t),
      (e.secretid = o),
      (e.secretkey = r),
      (e.openConsole = n),
      (e.token = c);
  },
  GetQCloudSecret: function () {
    return e;
  },
};
