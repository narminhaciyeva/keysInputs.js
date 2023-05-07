function save() {
    let area = document.querySelector("#playArea");
    let inp = document.getElementsByTagName("input");
    let circle = document.querySelector("ball");
    let play = document.querySelector(".play");
    play.outerHTML = ` <div id="playArea" style="background-color: ${inp[1].value};width:${inp[0].value}px;height:${inp[0].value}px;">
    <div id="ball" style="margin-top:${inp[0].value / 2 - inp[2].value / 2}px;  margin-left:${inp[0].value / 2 - inp[2].value / 2}px; margin-right:${inp[0].value / 2 - inp[2].value / 2}px; margin-bottom:${inp[0].value / 2 - inp[2].value / 2}px; border-radius: 50%;width:${inp[2].value}px;height:${inp[2].value}px;background-color: ${inp[3].value};"></div></div>`

}

function Left() {
    document.getElementById("ball")
    ball.style.marginTop = "(inp[0].value/2-inp[2].value/2)px"
    ball.style.marginLeft = "0px"
}

function Right() {
    document.getElementById("ball")
    ball.style.marginRight = "0px"
    ball.style.marginBottom = "(inp[0].value/2-inp[2].value/2)px"


}
function Center() {
    document.getElementById("ball")
    ball.style.marginTop = "(inp[0].value/2-inp[2].value/2)px"
    ball.style.marginLeft = "(inp[0].value/2-inp[2].value/2)px"


}

function Down() {
    document.getElementById("ball")
    ball.style.marginRight = "(inp[0].value/2-inp[2].value/2)px"
    ball.style.marginBottom="0px"
  }
  
  function Up() {
    document.getElementById("ball")
    ball.style.marginLeft="(inp[0].value/2-inp[2].value/2)px"
    ball.style.marginTop="0px"
  }