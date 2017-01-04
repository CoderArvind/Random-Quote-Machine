
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
var newQuote = function(data) {
  $(".quotes").text(data.quoteText);
  var tweet = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author :' + data.quoteAuthor ;
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".quote-author").text('-' + data.quoteAuthor);
  $(".twitter").attr("href", tweet);
};
$(document).ready(function() {
getData();
$("#get-quote-btn").click(getData);
});
function getData(){
  $.getJSON(url, newQuote, 'jsonp');
}
