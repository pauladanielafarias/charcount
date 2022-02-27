    $(document).ready(function(){

        // on input
        $("#textCharcount").on('input',function(event) { 
            //toma el valor del input(target) 
            let target = $(event.target);
            let input_value = target.val();

            //toma el length del input
            let live_characters = input_value.length;
            let live_words = countWords(input_value);

 
            //inserta en el html en #live_result
            $('#live_result').html('\
                    <div class="d-flex justify-content-center">\
                        <h1 class="characters mx-4">Characters: <span>'+live_characters + '</span></h1>\
                        <h1 class="words mx-4">Words: <span>'+ live_words + '</span></h1>\
                    </div>\
                '
            );


            // colores characters
            if(live_characters > 0 && live_characters < 50)
            $('.characters span').css('color','#263bad');
            if(live_characters >= 50 && live_characters < 100)
            $('.characters span').css('color','#404099');
            if(live_characters >= 100 && live_characters < 150)
            $('.characters span').css('color','#594585');
            if(live_characters >= 150 && live_characters < 200)
            $('.characters span').css('color','#734a70');
            if(live_characters >= 200 && live_characters < 250)
            $('.characters span').css('color','#8c4f5c');
            if(live_characters >= 250 && live_characters < 300)
            $('.characters span').css('color','#a65447');
            if(live_characters >= 300 && live_characters < 350)
            $('.characters span').css('color','#b2573d');
            if(live_characters >= 350 && live_characters < 400)
            $('.characters span').css('color','#bf5933');
            if(live_characters >= 400 && live_characters < 450)
            $('.characters span').css('color','#cc5c29');
            if(live_characters >= 450 && live_characters < 500)
            $('.characters span').css('color','#d95e1f');
            if(live_characters >= 500 && live_characters < 600)
            $('.characters span').css('color','#e66114');
            if(live_characters >= 600 && live_characters < 750)
            $('.characters span').css('color','#f2630a');
            if(live_characters >= 750 && live_characters < 900)
            $('.characters span').css('color','#ff6600');
            if(live_characters >= 900 && live_characters < 1000)
            $('.characters span').css('color','#f24f56');
            if(live_characters >= 1000)
            $('.characters span').css('color','#ff5050');

            //colores words
            if(live_words > 0)
            $('.words span').css('color','#263bad');
        });
        
        // function that counts the words of a given text
        const countWords = (text) =>{
            let amount = 0;
            if (text.trim() =="") {
                amount = 0;
            } else if ((text.substring(text.length - 1, text.length) == "?") || (text.substring(text.length - 1, text.length) == "!") || (text.substring(text.length - 1, text.length) == " ") || (text.substring(text.length - 1, text.length) == ".")||(text.substring(text.length - 1, text.length) == /[\n\w]/g)) {
                amount = text.replace(/(\.|!|\?| |\n\w)+|(\.|!|\?| |\n\w)+$|(\.|!|\?| |\n\w)+/g, "#").split("#").length - 1;
            } 
              else if(typeof text  == "number"){
                amount = 0;
            }
            else {
                amount = text.replace(/(\.|!|\?| |\n\w)+|(\.|!|\?| |\n\w)+$|(\.|!|\?| |\n\w)+/g, "#").split("#").length;
            }
            
            return amount;
            
        }

        //setup before functions
        let typingTimer;                //timer identifier
        let doneTypingInterval = 5000;  //time in ms, 5 seconds
        
        //on keyup, start the countdown
        $('#textCharcount').on('keyup', function () {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        });

        //on keydown, clear the countdown 
        $('#textCharcount').on('keydown', function () {
            clearTimeout(typingTimer);
        });

        //user is "finished typing," do something
        function doneTyping () {
            //toma el valor del input 
            let input_value = $('#textCharcount').val();
            //toma el length del input
            let live_characters = input_value.length;

             //si el valor del input es distinto del valor del input con espacios en blanco (al final o al principio del texto)
            if(input_value != input_value.trim()){
                //toma el valor de los espacios y lo inserta en el html en #blank_spaces
                let blank_spaces = live_characters - input_value.trim().length
                return $('#blank_spaces').html('<h4> You have '+ blank_spaces + ' blank space/s at the end or begining of your text. </h4>');
        
            }else{
                return $('#blank_spaces').html('')
            }
        }

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
        */
    }); //end document.ready