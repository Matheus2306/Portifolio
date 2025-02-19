$(document).ready(function () {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let textArray = "0123456789abcdefghijklmnopqrstuvwxyz".split('');
  let fontSize = 16;
  let columns = canvas.width / fontSize;
  let drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }
  draw = () => {
    ctx.fillStyle = "rgb(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px arial";
    for (let i = 0; i < drops.length; i++) {
      let text = textArray[Math.floor(Math.random() * textArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > canvas.height || Math.random() > 0.95) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };
  setInterval(draw, 33);
  menunav = $('#menu-nav');
  menunav.hide();
  menu = () => {
    menunav.slideToggle();
  }
});
