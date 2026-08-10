require("../app.js"),
  (exports.checkKCBAndGrowthLayerPermission = function (r, e) {
    if (e) {
      if (!r.authorities.kc)
        return {
          hasPermission: !1,
          errorCode: "no_kc_auth",
          errorMsg:
            "交易科创成长层股票需在开通科创板权限的基础上开通科创成长层权限，您当前无科创板权限，请确认是否开通?",
        };
      if (!r.authorities.kc_growth)
        return {
          hasPermission: !1,
          errorCode: "no_kc_growth_auth",
          errorMsg:
            "交易科创成长层股票需在开通科创板权限的基础上开通科创成长层权限，您当前无科创成长层权限，请确认是否开通?",
        };
    } else if (!r.authorities.kc)
      return {
        hasPermission: !1,
        errorCode: "no_kc_auth",
        errorMsg:
          "当前未开通科创板交易权限。请开通权限后，继续交易科创板股票。",
      };
    return { hasPermission: !0, errorCode: "", errorMsg: "" };
  });
