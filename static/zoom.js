let currentMouseX;
let currentMouseY;

window.addEventListener("mousemove", (event) => {
    currentMouseX = event.pageX;
    currentMouseY = event.pageY;
})

window.addEventListener("wheel", (event) => {
    console.log(event);
    let currentZoom = parseInt(document.getElementById("canvas").style.width.split("%")[0]);
    let newZoom = currentZoom + Math.round((event.deltaY / 2));

    if (newZoom < 50)  newZoom = 50;
    if (newZoom > 500) newZoom = 500;

    document.getElementById("canvas").style.width = newZoom + "%";

    document.getElementById("container").scrollTop = document.getElementById("container").scrollTop * (1 + Math.round((event.deltaY / 2)));
    document.getElementById("container").scrollLeft = document.getElementById("container").scrollLeft * (1 + Math.round((event.deltaX / 2)));
}, { passive: false });