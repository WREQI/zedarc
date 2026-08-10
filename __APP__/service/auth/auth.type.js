require("../../app.js");
var E = (function (E) {
    return (
      (E.Login = "Login"),
      (E.PluginCompLogin = "PluginCompLogin"),
      (E.TRADE = "TRADE"),
      (E.TRADE_CANCEL = "TRADE_CANCEL"),
      (E.DEBT_TRADE = "DEBT_TRADE"),
      (E.DEBT_TRADE_CANCEL = "DEBT_TRADE_CANCEL"),
      (E.NEW_STOCK_SUB = "NEW_STOCK_SUB"),
      (E.ETF_SUB = "ETF_SUB"),
      (E.WSSLogin = "WSSLogin"),
      E
    );
  })(E || {}),
  i = (function (E) {
    return (E.Password = "Password"), (E.Biometrics = "Biometrics"), E;
  })(i || {});
(exports.BiometricsScene = E), (exports.LoginType = i);
