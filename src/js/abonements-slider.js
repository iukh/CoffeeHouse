(function($) {
  let SelectAbonement = {
    init: function() {
    },

    ClickRightButton: function() {
      $(".button-right").click(function() {
        $(".slider-content").offset(function(i,val){
          return {left:val.left-393};
        });
      });
    },
    ClickLeftButton: function() {
      $(".button-left").click(function() {
        $(".slider-content").offset(function(i,val){
          return {left:val.left+393};
        });
      });
    },
    ClickBuyButton: function() {
      $(".item-button").click(function() {
        $(".order-form").removeClass("order-form-disabled");
      });
    },
    ClickSubmitFormButton: function() {
      $(".submit-form").click(function() {
        $(".order-success").removeClass("order-success-disabled");
      });
    },
    ClickCheckAbonementButton:  function() {
      $(".check-abonement").click(function() {
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
  };
  $(document).ready(function(){
    console.log("We started our work");
    SelectAbonement.ClickLeftButton();
    SelectAbonement.ClickRightButton();
    SelectAbonement.ClickBuyButton();
    SelectAbonement.ClickSubmitFormButton();
    SelectAbonement.ClickCheckAbonementButton();
  });
})(jQuery);
