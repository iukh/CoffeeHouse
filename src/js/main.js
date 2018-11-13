(function($) {
    var Navigation = {
        init: function() {
          },
        ClickBuyAbonnementButton: function() {
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
        },
        ClickMainTab: function() {
          $("#main-tab").click(function() {
            $.ajax({
                 url: "/",
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
        Navigation.ClickBuyAbonnementButton();
        Navigation.ClickMainTab();
    });
})(jQuery);
