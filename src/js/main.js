(function($) {
    var Navigation = {
        init: function() {
          },
        ClickContinueButton: function() {
            $(".content__main-button").click(function() {
              console.log(" button has been clicked");
              $(".container__about-us-text").hide();
            });
        }
    };
    $(document).ready(function(){
        console.log("We started our work");
        Navigation.ClickContinueButton();
    });
})(jQuery);
