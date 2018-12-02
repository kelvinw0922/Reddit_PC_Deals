$(function() {
  var pathName = window.location.pathname;
  var product = window.location.pathname.split("/").pop();
  const limit = 20;
  var payload = { pageOffset: 1, pageLimit: limit };
  var initLoad = false;
  if (product === "ssd" || product === "hdd" || product === "monitor") {
    $.get(`result/${product}`, payload, function(data) {
      displayResult(data, product);
    });
  }
});

function displayResult(data, product) {
  var result = "";
  var resultDiv = document.getElementById(product);
  result += data;

  resultDiv.insertAdjacentHTML("beforeend", result);
}
