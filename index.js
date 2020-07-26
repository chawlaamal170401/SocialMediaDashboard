
$('input[type="checkbox"]').click(function(){
       if($(this).prop("checked") == true){
      
          $(".container-fluid").addClass("dark");
          $(".section-headings").addClass("dark");
          $(".crd").addClass("dark1");
          $(".inner").addClass("dark1");
          $(".p").addClass("dark-p");
          $("#title").css("background-color","hsl(232, 19%, 15%)");
       }
       else if($(this).prop("checked") == false){
          $(".container-fluid").removeClass("dark");
          $(".section-headings").removeClass("dark");
          $(".crd").removeClass("dark1");
          $(".inner").removeClass("dark1");
          $(".p").removeClass("dark-p");
       }
 });