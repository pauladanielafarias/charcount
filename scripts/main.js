$(document).ready(function(){

    $("#textCharCount").on('keydown',function(event) { 
        var keyCode = event.which;
        var shift = event.shiftKey;

        // 13 es el código de tecla del enter
        if (keyCode == 13){
            if (!shift){
                $('#charCount').submit();
            }
        }
    }); 

    $("#textCharCount").on('keypress',function() { 

        var live_characters = $("#textCharCount").val().length;
        return $('#live_result').html('<h1 class="mt-5">'+live_characters + '</h1>');
    }); 

    $("#charCount").on('submit',function(){
        var total_characters = $("#textCharCount").val().length;
        var no_blank_spaces = $("#textCharCount").val().trim().length;

        if(total_characters == no_blank_spaces){
            $('#result').html('<h1 class="mt-5">'+total_characters + '</h1>');
        }else{
            var blank_spaces = total_characters-no_blank_spaces;
            $('#result').html('<h1 class="mt-5">'+no_blank_spaces + '</h1> <h6> You also have '+ blank_spaces + ' blank space/s at the end or begining of your text.</h6>');
        }


    });

}); //end document.ready