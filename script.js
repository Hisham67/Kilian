$(document).ready(function(){

    $( "#bloc1, #bloc2"  ).mouseleave(function(){
        $( "#btn1, #btn2" ).hide();
    });

    $( "#bloc1" ).mouseenter(function(){
        $( "#btn1" ).show();
    });

    $( "#bloc2" ).mouseenter(function(){
        $( "#btn2" ).show();
    });
    


    $( "#bloc1" ).click(function(){
        $( "#modal1" ).modal( "show" );
    });

    $( "#bloc2" ).click(function(){
        $( "#modal2" ).modal( "show" );
    });



    $("#modal1").on('hidden.bs.modal', function (e) {
        $("#modal1 iframe").attr("src", $("#modal1 iframe").attr("src"));
    });

    
    




});


  




