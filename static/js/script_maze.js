setTimeout(function() {
    const begin = document.getElementById('begin');
   
    document.body.style.overflow = "hidden"
    begin.style.background = "black";
    begin.style.transition = "background-color 0.2s ease";
    begin.style.position = "absolute";
    begin.style.zIndex = "1000000";
    begin.style.display = "block";
    begin.style.width = "400vh";
    begin.style.height = "400vh";
    begin.style.pointerEvents = "none";
    begin.style.top = "0";
    
    setTimeout(function() {
       begin.style.backgroundColor = "transparent";
    }, 250);
   
    setTimeout(function() {
       begin.style.display = "none";
     }, 400);
   },);

   const cursor = document.querySelector("#cursor");

document.addEventListener("mousemove", function(event) {
  const x = event.clientX;
  const y = event.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  const element = document.elementFromPoint(x, y);
});

const lunetteButton = document.getElementById("lunetteuse");
const lunetteText = document.querySelector("#lunetteuse h4");
const canvas1 = document.getElementById("canvas1");
const imgmaze = document.getElementById("imgmaze");
let lunetteActive = false;

lunetteButton.addEventListener("click", () => {
  if (lunetteActive) {
    // Retirez vos lunettes
    lunetteText.textContent = "Mettre vos lunettes";
    // Remettre les propriétés initiales
    lunetteButton.style.backgroundColor = "";
    lunetteText.style.color = "";
    cursor.style.display = "none";
    canvas1.style.display = "none";
    imgmaze.style.display = "block";
    lunetteActive = false;
  } else {
    // Mettre vos lunettes
    lunetteText.textContent = "Retirez vos lunettes";
    // Changer les propriétés
    lunetteButton.style.backgroundColor = "yellowgreen";
    lunetteText.style.color = "#292929";
    cursor.style.display = "block";
    canvas1.style.display = "block";
    imgmaze.style.display = "none";
    lunetteActive = true;
  }
});
