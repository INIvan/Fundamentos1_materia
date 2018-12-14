
$(document).ready( () => {

    
   alert("ALERTAAAAA!! VAMOS A MORIRRR")

colores_fondo(250,["#3465fa","purple","black","yellow","lime","orange"])

imgLiquid()

} )


function suma(valor1=1,valor2=1) {
  return valor1 + valor2
}

function mul(valor1,valor2=10) {

  return valor1*valor2
}

function imprime(parametro) {

  return $('.participantes_item_text h2').html(parametro)
}

function regresa() {

  var x = $('.participantes_item_text h4').html()

  return alert(x)

}

function fondo(color) {

  $('body').css('background-color', color)
   $('body').css({'':''})

}


function colores_fondo(time=1000,colorArray=['purple','red']) {

  var i = 0;
  var size = colorArray.length;

  setInterval(()=> {
    if(i == size-1) {
      i=0
    } else {
      i++
    }
    $('body').css('background-color',colorArray[i])
  },time)
}
  
  function imgLiquid() {
    $(".imgLiquid.imgLiquidFill").imgLiquid()
$(".imgLiquid.imgLiquidNoFill").imgLiquid({
    fill:false
})

$(".imgLiquid.imgLiquidNoFillLeft").imgLiquid({
    fill:false, 
    horizontalAling: "left"
})

$(".imgLiquid.imgLiquidNoFillRight").imgLiquid({
    fill:false, 
    horizontalAling: "right"
})
}