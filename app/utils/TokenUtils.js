exports.storeToken = function (response) {
  localStorage.setItem("authToken", response.token);
  localStorage.setItem("currUserName", response.currUser.username);
  localStorage.setItem("currUserRole", response.currUser.role);
}

exports.getToken = function () {
  var token =  localStorage.getItem("authToken");
  return token;
}

exports.getCurrUserName = function () {
  return localStorage.getItem("currUserName");
}

exports.getCurrUserRole = function () {
  return localStorage.getItem("currUserRole");
}

exports.removeToken = function () {
  localStorage.removeItem("authToken");
}

exports.removeToken = function () {
  localStorage.clear();
}

exports.getByKey = function (key) {
  console.log("getFromStorage", key);
  return localStorage.getItem(key);
}

exports.removeByKey = function (key) {
  localStorage.removeItem(key);
}
