/* Scroll to top arrow */
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $("#return-to-top").fadeIn(200);
  } else {
    $("#return-to-top").fadeOut(200);
  }
});
$("#return-to-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
});

/* Contact form submission without refresh */
$("form").on("submit", function (e) {
  // Form validation
  if ($("#_honeyinput").val().length != 0) {
    return false;
  }

  // Collect data
  var dataString = $(this).serialize();

  // Send mail
  $.ajax({
    type: "POST",
    url: "https://formsubmit.co/01f636dec2e5d780224f4c2fecb94ee8",
    data: dataString,
    dataType: "json",
  });

  document.querySelector("#success-message").innerHTML =
    '<i class="fas fa-check-circle"></i> Thanks for contacting Pracer!';
  document.querySelector("#success-message").style.marginLeft = "2%";
  e.preventDefault();
});
