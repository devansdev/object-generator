export const calculateByteSize = (text) => {
  return new Blob([text]).size;
};
export const generateAlphabet = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const generatedCharts = [];
  const wordLength = Math.random() * 100;
  for (var index = 0; index <= wordLength; index++) {
    generatedCharts.push(alphabet[Math.floor(Math.random() * alphabet.length)]);
  }
  return generatedCharts.join("");
};
export const generateRealNumber = () => {
  const randomNumberInt = Math.random().toString().replace(".", "").slice(0,(Math.floor(Math.random() * 1000)));
  const randomNumberDecimal = Math.random().toString().replace(".", "").slice(0,(Math.floor(Math.random() * 1000)));
    const randomNumber = (Math.floor(Math.random() * 100) < 50 ? "-" : "") +
        randomNumberInt +
        "." +
        randomNumberDecimal;
    return randomNumber / 2;
};
export const generateInteger = () => {
  return Number(Math.random().toString().replace(".", ""));
};
export const generateAlphaNumberic = () => {
  var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var length = Math.floor(Math.random() * 100);
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};
export const generationTypeFunctions = [
    generateAlphabet,
    generateRealNumber,
    generateInteger,
    generateAlphaNumberic
];
export const generateTypes = [
    "alphabatic",
    "realNumber",
    "integer",
    "alphanumeric"
];
export const getNextObject = () => {
    const functionIndex = Math.floor(Math.random() * 4);
    return [generationTypeFunctions[functionIndex](),generateTypes[functionIndex]] ;
}

export const generateObjects = (fileSize) => {
    var output = "";
    var info = {
      alphabatic: 0,
      realNumber: 0,
      integer: 0,
      alphanumeric: 0,
    };
    while (calculateByteSize(output) <= fileSize) {
        const [generatedObj, type] = getNextObject();
        output += generatedObj + ",";
        info[type] = info[type] + 1;
    }
    return [output, info];
}

export const saveData = (function () {
  var a = document.createElement("a");
  return function (data, fileName) {
      var blob = new Blob([data], { type: "text/plain" }),
      url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
})();
