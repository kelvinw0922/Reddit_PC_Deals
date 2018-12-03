import helperFn from "./parseBrandName.js";

$(function() {
  // Retrieve product's name
  var product = window.location.pathname.split("/").pop();

  let deals_data;

  // Check if product is any invalid name
  if (
    product === "ssd" ||
    product === "hdd" ||
    product === "monitor" ||
    product === "mouse" ||
    product === "gpu" ||
    product === "cpu"
  ) {
    $.get(`result/${product}`, function(data) {
      console.log(data);
      deals_data = data;
      displayResult(deals_data, product);
    });
  }
});

function displayResult(data, product) {
  var resultDiv = document.getElementById(product);

  // Remove the Spinner
  $(".spinner").remove();

  for (let i = 0; i < data.length; i++) {
    let thumbnail = "";
    let out_of_stock = false;
    let expired = false;
    let hot_deal = false;

    // Check if there's any invalid thumbnail
    if (data[i].thumbnail === "default" || data[i].thumbnail === "self") {
      // Parse Each Post's title to see if there's a major brand name of the product
      thumbnail = helperFn.parseBrandName(data[i].title, false);
    } else if (data[i].thumbnail === "nsfw") {
      // Check if the product is NSFW(meaning SUPER GOOD DEAL)
      thumbnail = helperFn.parseBrandName(data[i].title, true);
      hot_deal = true;
    } else if (data[i].thumbnail === "spoiler") {
      // Check if the product is Expired
      thumbnail = `<img src="/img/expired.jpg" class="thumbnail">`;
      expired = true;
    } else if (data[i].link_flair_text === "Out Of Stock") {
      // Check if the product is Out Of Stock
      thumbnail = `<img src="/img/out_of_stock.jpg" class="thumbnail">`;
      out_of_stock = true;
    } else {
      thumbnail = `<img src="${data[i].thumbnail}" class="thumbnail">`;
    }

    // Write Each Post in HTML Format as a String
    var newPost = `
    <div class="col s12 m12 l12 xl12">
        <div class="card horizontal">
            <div class="card-image">
                <a href="${data[i].url}" target="_blank">${thumbnail}</a>
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <h5><a href="${directToReadMore(
                  data[i]
                )}" target="_blank" ${checkProduct(
      out_of_stock,
      expired,
      hot_deal
    )}>${data[i].title}</a></h5>
                </div>
                <div class="card-action">
                  <span class="badge">Score: ${data[i].score}</span>
                  ${badgeHotDeal(hot_deal)}
                  ${badgeExpiredDeal(expired, out_of_stock)}
                  <span class="left badge">${getSubmissionTime(
                    data[i].created_utc
                  )} by ${data[i].author}</span>
                </div>
            </div>
        </div>
    </div>
  `;

    // Append each post to the result class's div
    resultDiv.insertAdjacentHTML("beforeend", newPost);
  }
}

function directToReadMore(post) {
  let newURL = "http://www.reddit.com" + post.permalink;
  return newURL;
}

function checkProduct(out_of_stock, expired, hot_deal) {
  if (out_of_stock || expired) {
    return `class="out-of-stock"`;
  } else if (hot_deal) {
    return `class="hot-deal"`;
  } else {
    return `class="default-title"`;
  }
}

function badgeHotDeal(hot_deal) {
  if (hot_deal) {
    return `<span class="new badge red" data-badge-caption="NSFW"></span>`;
  } else return "";
}

function badgeExpiredDeal(expired, out_of_stock) {
  if (expired || out_of_stock) {
    return `<span class="new badge grey" data-badge-caption="Expired"></span>`;
  } else return "";
}

function diff_hours(dt1) {
  var now_date = new Date(Date.now());
  var post_date = new Date(dt1 * 1000);
  var diff = (now_date.getTime() - post_date.getTime()) / 1000;
  diff /= 60 * 60;
  var result = Math.abs(Math.floor(diff));
  if (diff < 1) {
    return `Submitted ${(diff * 60).toFixed(0)} minutes ago`;
  } else if (diff < 24) {
    return `Submitted ${result} hours ago`;
  } else {
    if (Math.abs(Math.floor(result / 24)) === 1) {
      return "Submitted 1 day ago";
    } else {
      return `Submitted ${Math.abs(Math.floor(result / 24))} days ago`;
    }
  }
}

// Retrieve Each Post's Submission Time and Convert it to (x hours ago)
function getSubmissionTime(post_utc) {
  // Calculate time difference in hours from the submission time to current time
  return diff_hours(post_utc);
}
