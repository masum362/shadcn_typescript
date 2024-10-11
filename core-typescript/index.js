var appMode;
(function (appMode) {
    appMode["development"] = "DEV";
    appMode["production"] = "PROD";
})(appMode || (appMode = {}));
var mode = appMode.development;
// console.log(mode)
var tuple = ["masum", 10, 'ahmed'];
console.log(tuple);
