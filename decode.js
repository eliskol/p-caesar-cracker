/*
Geppetto, I want to be a real function.
To use parameters for this function:
• delete var shift = ...;
• delete var text = ...;
pass in shift and text into the function, so it should look like function decode(shift, text){...}
done
*/

function decode() {


  var text = document.getElementById("text").value;
  let x = []; //empty array to hold output
  let all = [];

var common = 0;
var common1 = 0;

for(var shift = 0; shift < 26; shift++){
    for (var i = 0; i < text.length; i++) {

      if ((text.charCodeAt(i) <= 122 && text.charCodeAt(i) >= 97) || (text.charCodeAt(i) <= 90 && text.charCodeAt(i) >= 65)) { //checks that the input is a letter, only shift if the input is a letter
        
        x[i] = text.charCodeAt(i) - shift;
        //shifts

        if (x[i] > 122) { //if the shifted charcode is greater than the charcode for z, loop back to the beginning of the alphabet
          x[i] -= 26;
        }

        else if ((x[i] < 97 && (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122))) { //if the shifted character isn't a lowercase letter like the input
          x[i] += 26;
        }

        else if (x[i] > 90 && (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) {
          //if the shifted character isn't a capital letter, if the shifted charcode is greater than the charcode for Z

          x[i] -= 26;
        }

        else if (x[i] < 65 && (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90)) {
          //if the shifted character is not a capital letter, if the shifted charcode is less than the charcode for A
          x[i] += 26;
        }
      }

      else {
        //if the input isn't a letter, don't shift it
        x[i] = text.charCodeAt(i);
      }
    }
  //check for common words
  all[shift] = String.fromCharCode.apply(null, x);
  //all is the array of all the possibilities
}
  /*

*/
//console.log(all);
let as = [];
for(var j = 0; j < all.length; j++){
  as[j] = all[j].split(" ");

for(var s = 0; s < as[j].length; s++){
var common1 = 0;
for(var k = 0; k < words.length; k++){
//console.log(as[j][k]);
    if(as[j][s] == words[k]){
    console.log('common word found: ' + words[k]);
    common1++;
  }
  if(common1 > common){
    common = common1;
    var best = j;
    console.log(all[best]);
    console.log(best);
  }
}


}



}

//console.log(as[0]);
//console.log(as[25]);

  var ea = document.getElementsByTagName('p')[1]; //this is the first p element after the description ones

  //create a heading for the decoded text
  var dc = document.createElement('p');
  dc.innerText = "Decoded text:";
  document.body.insertBefore(dc, ea);

  //push the decoded text to the DOM
  var decstring = all[best];
  var p = document.createElement('p');
  p.innerText = decstring;
  p.id = "dectext"
  document.body.insertBefore(p, ea);

  var sp = document.createElement('p');
  sp.innerText = "The shift was " + best + "!";
  document.body.insertBefore(sp, ea);
}