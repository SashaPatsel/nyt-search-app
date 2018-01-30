function giveMeArticles() {

  var userQuery = $(".form-control").val();
  var userBeginDate = $(".begin-date").text();
  var userEndDate = $(".end-date").text();

  console.log("This is userQ: ", userQuery);

  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  url += '?' + $.param({
      'api-key': "d8c2d0802f4c43b9ab44f43a1f9ea163",
      'q': userQuery,
      // 'begin_date': userBeginDate + "0101",
      // 'end_date': userEndDate + "0101",

      // 'q': "trump",
      'begin_date': "20160101",
      'end_date': "20170101",
  });

  $.ajax({
      url: url,
      method: 'GET',
  }).then(function(response) {
      var results = response.response.docs;
      console.log(response.response.docs);

      for (var i = 0; i < results.length; i++) {
          var articleLink = results[i].web_url;
          var header = results[i].snippet;
          $(".articles").append('<div>' + '<br>' + '<a target="_blank" href="' + articleLink + '" <h2>' + header + '</h2>' + '</a>')


      }


  }).fail(function(err) {
      throw err;
  });
  $(".articles").empty();
}
// if ($(".begin-date").text("")) {

// }
$(document).on("click", ".search", giveMeArticles);