$(document).ready(() => {
  const $cart = $("#cart")
  const $account = $("#account")
  const $help = $("#help")

  $cart.on('mouseenter', ()=>{
    $("#cartMenu").show();
  })

  $account.on('mouseenter', ()=>{
    $("#accountMenu").show();
  })

   $help.on('mouseenter', ()=>{
    $("#helpMenu").show();
  })

  $(".dropdown-menu").on("mouseleave", ()=>{
    $(".dropdown-menu").hide()
  })
}
)