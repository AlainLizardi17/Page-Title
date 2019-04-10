$("button").click(function(){
  var yourName=$("input").val();
  var InputTwo=$(".input2").val();
  var InputThree=$(".input3").val();
  
    $("p").text("Hey "+ yourName +" I know that " + InputTwo + " is very good." + " But if you keep eating that " + InputThree + " times a week you would eaten " +  parseInt(InputThree) * 800  + " calories. "  );
});

