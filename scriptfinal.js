function ferrari(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("ferrari");
    ctx.drawImage(img, 0.1, 0.1, 600, 400);
    }
    function cerveza(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("cerveza");
    ctx.drawImage(img, 0.1, 0.1, 600, 400);
    }
    function playa(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("playa");
    ctx.drawImage(img, 0.1, 0.1, 600, 400);
    }
    function perrito(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("perrito");
    ctx.drawImage(img, 0.1, 0.1, 600, 400);
    }
    function kotel(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("kotel");
    ctx.drawImage(img, 0.1, 0.1, 600, 400);
    }
    function Desierto(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("Desierto");
    ctx.drawImage(img, 0.1, 0.1, 600, 400);
    }
    function bandera(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("bandera");
    ctx.drawImage(img, 0.1, 0.1, 600, 400);
    }
    
    function hello(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "60px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    var d = document.getElementById("agregatxt").value
    ctx.fillText(d, 250, 70);
    }
    function rotar() {
      var checkBox = document.getElementById("myCheck");
      var element = document.getElementById("myCanvas");
      if (checkBox.checked == true){
        element.classList.add("rotar");
      } else {
        element.classList.remove("rotar");
      }
    }
    function sombra() {
      var checkBox = document.getElementById("myCheck1");
      var element = document.getElementById("myCanvas");
      if (checkBox.checked == true){
        element.classList.add("sombra");
      } else {
        element.classList.remove("sombra");
      }
    }
    function invertir() {
      var checkBox = document.getElementById("myCheck2");
      var element = document.getElementById("myCanvas");
      if (checkBox.checked == true){
        element.classList.add("invertir");
      } else {
        element.classList.remove("invertir");
      }
    }
    function opacity() {
      var checkBox = document.getElementById("myCheck3");
      var element = document.getElementById("myCanvas");
      if (checkBox.checked == true){
        element.classList.add("opacidad");
      } else {
        element.classList.remove("opacidad");
      }
    }
    function saturate() {
      var checkBox = document.getElementById("myCheck4");
      var element = document.getElementById("myCanvas");
      if (checkBox.checked == true){
        element.classList.add("saturacion");
      } else {
        element.classList.remove("saturacion");
      }
    }
    function sepia() {
      var checkBox = document.getElementById("myCheck5");
      var element = document.getElementById("myCanvas");
      if (checkBox.checked == true){
        element.classList.add("sepia");
      } else {
        element.classList.remove("sepia");
      }
    }
    function contraste() {
      var checkBox = document.getElementById("myCheck6");
      var element = document.getElementById("myCanvas");
      if (checkBox.checked == true){
        element.classList.add("contraste");
      } else {
        element.classList.remove("contraste");
      }
    }
    function brillo() {
      var checkBox = document.getElementById("myCheck7");
      var element = document.getElementById("myCanvas");
      if (checkBox.checked == true){
        element.classList.add("brillo");
      } else {
        element.classList.remove("brillo");
      }
    }
    function bn() {
      var checkBox = document.getElementById("myCheck9");
      var element = document.getElementById("myCanvas");
      if (checkBox.checked == true){
        element.classList.add("blancoynegro");
      } else {
        element.classList.remove("blancoynegro");
      }
    }
    
    // Pruebas
    
    document.getElementById('inp').onchange = function(e) {
      var img = new Image();
      img.onload = draw;
      img.onerror = failed;
      img.src = URL.createObjectURL(this.files[0]);
    };
    function draw() {
      var canvas = document.getElementById('myCanvas');
      
      var ctx = canvas.getContext('2d');
      ctx.drawImage(this, 0.1, 0.1, 600, 400);
    }
    function failed() {
      console.error("The provided file couldn't be loaded as an Image media");
    }
    