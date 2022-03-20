//----- VARs AND CONSTs -----
let word_amount = 0;
//regex matches: char. or char! or char? or char, or char  or char \n or char
const word_regex = /([A-Z]|[a-z]|[À-ÿ])+(\.|!|\?|,| |\n|)/g;

let num_amount = 0;
//regex matches: any num
const num_regex = /(\d)/g;

let blank_spaces =0;
const url = "https://charcount.com.ar";

//----- APP (VUE v2.6.14) -----
const app = new Vue({
    el: '#app',
    data: {
        input_text: this.input_text || "", //comes from v-model
        language: "english", //changes language
        social_media_share:{
            facebook_share: `https://www.facebook.com/sharer/sharer.php?u="${url}`,
            twitter_share: `https://twitter.com/intent/tweet?url=${url}&text=Hello world! Try Charcount to count the characters, words and numbers of a text.`,
            linkedin_share: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            whatsapp_share: `https://wa.me/?text= Hey! Try Charcount to count the characters, words and numbers of a text. https://charcount.com.ar`,
            telegram_share: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent("Hey! Try Charcount to count the characters, words and numbers of a text.")}`

        }

    },
    methods: {
        //----- LIVE RESULTS METHODS -----
        live_characters: function (input_value) {
            //toma el length del input
            let chars = input_value.length;
            return chars;
        },
        live_words: function (input_value) {
            //if input_value is a blank space or if it's a number
            if (input_value.trim() == "" || !isNaN(parseInt(input_value))) {
                word_amount = 0;
            }
            //if input_value is in regex 
            else if (input_value.match(word_regex) != null) {
                let regex_arr = input_value.match(word_regex);
                word_amount = regex_arr.length;
            }

            return word_amount;
        },
        live_numbers: function (input_value) {
            //if input_value is a blank space
            if (input_value.trim() == "") {
                num_amount = 0;
            }
            //if input_value is a number
            else if (input_value.match(num_regex) != null) {
                let num_regex_arr = input_value.match(num_regex);
                num_amount = num_regex_arr.length;
            }

            return num_amount;
        },
        live_blank_spaces: function (input_value) { 
            //si el valor del input es distinto del valor del input con espacios en blanco (al final o al principio del texto) 
            if(input_value != input_value.trim()) {
                blank_spaces = input_value.length - input_value.trim().length;              
            }
            else{
                blank_spaces = 0;
            }
            return blank_spaces;
        }

    }

})

/*
$(document).ready(function () {

    //setup before functions
    let typingTimer; //timer identifier
    let doneTypingInterval = 1000; //time in ms, 1 second

    //on keyup, start the countdown
    $("#textCharcount").on("keyup", function () {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    });

    //on keydown, clear the countdown
    $("#textCharcount").on("keydown", function () {
        clearTimeout(typingTimer);
    });



    /* 
      $("#textCharcount").on('keydown',function(event) { 
          let keyCode = event.which;
          let shift = event.shiftKey;
  
          // 13 es el código de tecla del enter
          if (keyCode == 13){
              if (!shift){
                  $('#charcount').submit();
              }
          }
      }); 
  
      $("#charcount").on('submit',function(){
          let total_characters = $("#textCharcount").val().length;
          let no_blank_spaces = $("#textCharcount").val().trim().length;
  
          if(total_characters == no_blank_spaces){
              $('#result').html('<h1 class="mt-5">'+total_characters + '</h1>');
          }else{
              let blank_spaces = total_characters-no_blank_spaces;
              $('#result').html('<h1 class="mt-5">'+no_blank_spaces + '</h1> <h6> You also have '+ blank_spaces + ' blank space/s at the end or begining of your text.</h6>');
          }
  
  
      });
      
}); //end document.ready

//----- METHOD onKeyup()  -----
const onKeyup = (event) => {
    doneTyping()
}



$("#textCharcount").on("input", (event) => {
    // colores characters
    if (live_characters > 0 && live_characters < 50)
        $(".characters span").css("color", "#263bad");
    if (live_characters >= 50 && live_characters < 100)
        $(".characters span").css("color", "#404099");
    if (live_characters >= 100 && live_characters < 150)
        $(".characters span").css("color", "#594585");
    if (live_characters >= 150 && live_characters < 200)
        $(".characters span").css("color", "#734a70");
    if (live_characters >= 200 && live_characters < 250)
        $(".characters span").css("color", "#8c4f5c");
    if (live_characters >= 250 && live_characters < 300)
        $(".characters span").css("color", "#a65447");
    if (live_characters >= 300 && live_characters < 350)
        $(".characters span").css("color", "#b2573d");
    if (live_characters >= 350 && live_characters < 400)
        $(".characters span").css("color", "#bf5933");
    if (live_characters >= 400 && live_characters < 450)
        $(".characters span").css("color", "#cc5c29");
    if (live_characters >= 450 && live_characters < 500)
        $(".characters span").css("color", "#d95e1f");
    if (live_characters >= 500 && live_characters < 600)
        $(".characters span").css("color", "#e66114");
    if (live_characters >= 600 && live_characters < 750)
        $(".characters span").css("color", "#f2630a");
    if (live_characters >= 750 && live_characters < 900)
        $(".characters span").css("color", "#ff6600");
    if (live_characters >= 900 && live_characters < 1000)
        $(".characters span").css("color", "#f24f56");
    if (live_characters >= 1000) $(".characters span").css("color", "#ff5050");

    //colores words
    if (live_words > 0) $(".words span").css("color", "#263bad");
});

//---------- GENERAL FUNCTIONS ---------- 


//----- FUNCTION doneTyping() -----
//user has finished typing
const doneTyping = () => {
    //toma el valor del input
    let input_value = $("#textCharcount").val();
    //toma el length del input
    let live_characters = input_value.length;

    //si el valor del input es distinto del valor del input con espacios en blanco (al final o al principio del texto)
    if (input_value != input_value.trim()) {
        //toma el valor de los espacios y lo inserta en el html en #blank_spaces
        let blank_spaces = live_characters - input_value.trim().length;
        return $("#blank_spaces").html(
            "<h4> You have " +
            blank_spaces +
            " blank space/s at the end or begining of your text. </h4>"
        );
    }
    else {
        return $("#blank_spaces").html("");
    }

}

*/