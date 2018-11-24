(function($) {
  let Navigation = {
    init: function() {
    },
    MenuItems: {
      ClickBuyAbonnementButton: function() {
        $(".buy_abonnement").click(function() {
          $(".menu__item").removeClass("menu__item_active");
          $("#abonnement-tab").toggleClass("menu__item_active");
          $.ajax({
            url: "/blocks/abonements.html",
            dataType: "html",
            success: function(data) {
              $(".container").html(data);
            },
            error: function() {
              alert("Sorry, server is not available right now. Please try again later.");
            }
          });
        });
      },
      ClickMainTab: function() {
        $("#main-tab").click(function() {
          $(".menu__item").removeClass("menu__item_active");
          $("#main-tab").toggleClass("menu__item_active");
          $.ajax({
            url: "/",
            dataType: "html",
            success: function(data) {
              console.log($(data).filter(".container"));
              $(".container").html($(data).filter("div.container"));
            },
            error: function() {
              alert("Sorry, server is not available right now. Please try again later.");
            }
          });
        });
      },
      ClickAboutAbonemenetTab:  function() {
        $("#about-abonement-tab").click(function() {
          $(".menu__item").removeClass("menu__item_active");
          $("#about-abonement-tab").toggleClass("menu__item_active");
          $.ajax({
            url: "/blocks/about-my-abonement.html",
            dataType: "html",
            success: function(data) {
              $(".container").html(data);
            },
            error: function() {
              alert("Sorry, server is not available right now. Please try again later.");
            }
          })
        });
      }
    },
    HeaderItems: {

    }
  };
  $(document).ready(function(){
    console.log("We started our work");
    Navigation.MenuItems.ClickBuyAbonnementButton();
    Navigation.MenuItems.ClickMainTab();
    Navigation.MenuItems.ClickAboutAbonemenetTab();
  });
})(jQuery);
