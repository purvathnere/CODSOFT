//  Javascript clock

function updateTime() {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const m = hours > 12 ? "PM" : "AM";
  const f = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const formattedHours = f < 10 ? `0${f}` : f;

  const clock = document.getElementById("clock");
  clock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${m}`;

  const red = Math.round((255 / 12) * formattedHours).toString(16);
  const green = Math.round((255 / 60) * minutes).toString(16);
  const blue = Math.round((255 / 60) * seconds).toString(16);

  const color = `#${red}${green}${blue}`;

  clock.style.color = color;
}

setInterval(updateTime, 1000);


// typing animation 
const textToType = "I'am a Web Developer.";
const typingText = document.getElementById("typing-text");

function typeText() {
  typingText.textContent = textToType;
}

typeText();

