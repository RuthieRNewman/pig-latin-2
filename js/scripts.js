$(document).ready(function() {
  $("form#engToPig").submit(function(event){
    event.preventDefault();
    const userString = ($("input#userString").val());
    const vowelArray = ["A","a","E","e","I","i","O","o","U","u"]
    const translatedOutput= pigLatin(userString)

    function pigLatin(userString) {
      userArray = userString.split("");
      console.log(userArray)

      if (userArray.length <= 1) {
        console.log(true);
        let singleLetterWord= userArray.concat ("way");
        singleLetterWordString = singleLetterWord.join("");
        $('#userString').val(singleLetterWordString);

      } else if (userArray === "A", "a","E","e","I","i","O","o","U","u"){
        console.log(true)
      }
    } 
    });
  });