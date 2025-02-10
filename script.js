function randomiseGIF(){
    const GIFs = [
        'gif1', 'gif2'
    ];

    GIFs.forEach(gifId => {
        document.getElementById(gifId).style.display = 'none';
    });

    const randomGIFIndex = Math.floor(Math.random() * GIFs.length);
    const randomGIF = GIFs[randomGIFIndex];

    document.getElementById(randomGIF).style.display = 'block';
}

function redirectAndClose(){
    const youtubeLinks = [
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "https://youtu.be/nZXRV4MezEw?t=83",
        "https://www.youtube.com/watch?v=Wmc8bQoL-J0"
    ]

    const randomIndex = Math.floor(Math.random() * youtubeLinks.length);
    const randomYTVid = youtubeLinks[randomIndex];

    window.location.href = randomYTVid;
}

function maybeClose(){
    const dontTouchMe = "https://www.youtube.com/watch?v=SvIQaIgKiO4";
    window.location.href = dontTouchMe;
}


window.onload = function() {
    setTimeout(randomiseGIF, 1000); 
}

// Make the GIF follow the cursor with a slight delay for trailing effect
let gif = document.querySelector('.moving-gif img');
let delay = 10; // Delay in milliseconds
let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;

// Function to update the position of the GIF with a slight delay
function moveGif() {
    let distX = targetX - currentX;
    let distY = targetY - currentY;

    // Smooth the movement by gradually updating the position
    currentX += distX * 0.05;  // Controls the speed of trailing (lower value = slower movement)
    currentY += distY * 0.05;  // Controls the speed of trailing (lower value = slower movement)

    // Apply the new position to the GIF
    gif.style.left = currentX + 'px';
    gif.style.top = currentY + 'px';

    // Call the moveGif function repeatedly for smooth animation
    setTimeout(moveGif, delay);
}

moveGif();


document.addEventListener('mousemove', function(event) {
    targetX = event.pageX;
    targetY = event.pageY;
});


function moveRandomEl(elm){
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 10) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 10) + "%";
}

const moveRandom = document.querySelector("#move-random");
moveRandom.addEventListener("click", function (){
    moveRandomEl(moveRandom);
});

