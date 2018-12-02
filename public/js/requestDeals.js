$(function() {
  var product = window.location.pathname.split("/").pop();
  let deals_data;
  let spinner = `
    <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
            <div class="circle"></div>
            </div><div class="gap-patch">
            <div class="circle"></div>
            </div><div class="circle-clipper right">
            <div class="circle"></div>
            </div>
        </div>
    </div>
  `;
  if (product === "ssd" || product === "hdd" || product === "monitor") {
    $(".spinner").append(spinner);
    $.get(`result/${product}`, function(data) {
      console.log(data);
      deals_data = data;
      displayResult(deals_data, product);
    });
  }
});

function displayResult(data, product) {
  var result = "";
  var resultDiv = document.getElementById(product);

  for (let i = 0; i < data.length; i++) {
    let thumbnail = "";
    if (
      data[i].thumbnail != "default" &&
      data[i].thumbnail != "nsfw" &&
      data[i].thumbnail != "self" &&
      data[i].thumbnail != "spoiler"
    ) {
      thumbnail = `<img src="${
        data[i].thumbnail
      }" style="height: 200px; padding: 1rem; width: 200px; margin: auto;">`;
    } else {
      thumbnail = `<img src="/img/deals.png" style="height: 200px; width: 200px; padding: 1rem; margin: auto;">`;
    }
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
                    )}" target="_blank">${data[i].title}</a></h5>
                </div>
                <div class="card-action">
                    <span class="badge">Score: ${data[i].score}</span>
                </div>
            </div>
        </div>
    </div>
  `;
    result += newPost;
  }

  //   data.forEach(post => {
  //     result += post.title;
  //     result += ", <br>";
  //   });
  $(".spinner").remove();
  resultDiv.insertAdjacentHTML("beforeend", result);
}

function directToReadMore(post) {
  let newURL = "http://www.reddit.com" + post.permalink;
  return newURL;
}
