    $(document).ready(function(){


        // on input
        $("#textCharcount").on('input',function(event) { 
            //toma el length del input y lo inserta en el html en #live_result
            var live_characters = $("#textCharcount").val().length;
            var result_html = $('#live_result').html('<h1 class="text-end">'+live_characters + '</h1>');
            
            if(live_characters == 0) 
            result_html.css('color','black');
            if(live_characters > 0 && live_characters < 50)
            result_html.css('color','#263bad');
            if(live_characters >= 50 && live_characters < 100)
            result_html.css('color','#404099');
            if(live_characters >= 100 && live_characters < 150)
            result_html.css('color','#594585');
            if(live_characters >= 150 && live_characters < 200)
            result_html.css('color','#734a70');
            if(live_characters >= 200 && live_characters < 250)
            result_html.css('color','#8c4f5c');
            if(live_characters >= 250 && live_characters < 300)
            result_html.css('color','#a65447');
            if(live_characters >= 300 && live_characters < 350)
            result_html.css('color','#b2573d');
            if(live_characters >= 350 && live_characters < 400)
            result_html.css('color','#bf5933');
            if(live_characters >= 400 && live_characters < 450)
            result_html.css('color','#cc5c29');
            if(live_characters >= 500 && live_characters < 600)
            result_html.css('color','#d95e1f');
            if(live_characters >= 600 && live_characters < 700)
            result_html.css('color','#e66114');
            if(live_characters >= 700 && live_characters < 800)
            result_html.css('color','#f2630a');
            if(live_characters >= 800 && live_characters < 900)
            result_html.css('color','#ff6600');
            if(live_characters >= 900 && live_characters < 1000)
            result_html.css('color','#f24f56');
            if(live_characters >= 1000)
            result_html.css('color','#ff5050');

            //toma el valor del input(target) 
            var target = $(event.target);
            var input_value = target.val();

            //si el valor del input es distinto del valor del input con espacios en blanco (al final o al principio del texto)
            if(input_value != input_value.trim()){
                //toma el valor de los espacios y lo inserta en el html en #blank_spaces
                var blank_spaces = live_characters - input_value.trim().length
                $('#blank_spaces').html('<h4> You have '+ blank_spaces + ' blank space/s at the end or begining of your text. </h4>');
        
            }else{
                $('#blank_spaces').html('')
            }

        }); 

        /* 
        $("#textCharcount").on('keydown',function(event) { 
            var keyCode = event.which;
            var shift = event.shiftKey;

            // 13 es el código de tecla del enter
            if (keyCode == 13){
                if (!shift){
                    $('#charcount').submit();
                }
            }
        }); 

        $("#charcount").on('submit',function(){
            var total_characters = $("#textCharcount").val().length;
            var no_blank_spaces = $("#textCharcount").val().trim().length;

            if(total_characters == no_blank_spaces){
                $('#result').html('<h1 class="mt-5">'+total_characters + '</h1>');
            }else{
                var blank_spaces = total_characters-no_blank_spaces;
                $('#result').html('<h1 class="mt-5">'+no_blank_spaces + '</h1> <h6> You also have '+ blank_spaces + ' blank space/s at the end or begining of your text.</h6>');
            }


        });
        */
    }); //end document.ready