//this is for when I want this to be more advanced

/*var i = 0;
function word() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var rO = JSON.parse(this.responseText);

      console.log(rO[0].word);
      

      var quote = document.createElement('div');
      quote.innerText = rO[0].word;
      document.body.appendChild(quote);

      i++;


  }
};

  xhttp.open("GET", "https://api.dictionaryapi.dev/api/v2/entries/en/hello", true);
  xhttp.send();
} */
