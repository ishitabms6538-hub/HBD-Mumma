window.onload = function () {

    let intro = document.getElementById("introScreen");
    let main = document.getElementById("mainScreen");
    let result = document.getElementById("resultScreen");

    let startBtn = document.getElementById("startLove");
    let music = document.getElementById("bgMusic");

    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");
    let caption = document.getElementById("caption");

    let captions = [
        "Whattttttttt? You want a gift?",
        "Reallyyyyy?",
        "Oh shit, now this is serious...",
        "This YES button is just for decoration😂",
	"Say NO!! Please click NO",
	"Still trying YES? You are very persistent",
	"But we didn't get you anything !!",
	"Stoppppp",
	"Seems like we really should've got you a gift"
    ];

    let index = 0;
    let yesSize = 1;

    // Start Love
    startBtn.onclick = function () {

        music.play();

        intro.classList.add("hidden");
        main.classList.remove("hidden");
    };

    // Move NO button


let lastX = window.innerWidth / 2;
let lastY = window.innerHeight / 2;

noBtn.onmouseover = function () {

    let x, y;
    let minDistance = 200; // distance from last position

    do {
        let marginTop = 120;        // avoid heading
let marginBottom = 120;     // avoid caption
let marginSide = 50;

x = Math.random() * (window.innerWidth - 150 - marginSide);
y = Math.random() * (window.innerHeight - marginTop - marginBottom) + marginTop;


    } while (Math.hypot(x - lastX, y - lastY) < minDistance);

    lastX = x;
    lastY = y;

    document.body.appendChild(noBtn);
noBtn.style.position = "absolute";

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    caption.textContent = captions[index];
    index = (index + 1) % captions.length;

    yesSize += 0.2;
    yesBtn.style.transform = "scale(" + yesSize + ")";
};


    // YES clicked
yesBtn.onclick = function () {

    noBtn.style.display = "none";   // hides NO button

    main.classList.add("hidden");
    result.classList.remove("hidden");
};
    

};
