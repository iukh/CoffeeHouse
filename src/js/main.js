(function($) {
    var Navigation = {
        init: function() {
          },
        ClickContinueButton: function() {
            $(".buy_abonnement").click(function() {
              $(".menu__item").removeClass("menu__item_active");
              $("#abonnement-tab").toggleClass("menu__item_active");
              $.ajax({
                   url: "/blocks/about-us.html",
                   dataType: "html",
                   success: function(data) {
                       $(".container").html(data);
                   },
                   error: function() {
                       alert("Not OK");
                   }
                 });
            });
        }
    };
    $(document).ready(function(){
        console.log("We started our work");
        Navigation.ClickContinueButton();
    });
})(jQuery);
