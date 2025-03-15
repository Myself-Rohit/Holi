document.addEventListener("click", function (event) {
	let colors = [
		"#ff1744",
		"#ff9100",
		"#ffea00",
		"#00e676",
		"#2979ff",
		"#d500f9",
	];
	document.body.style.background =
		colors[Math.floor(Math.random() * colors.length)];
	let greetings = [
		"🎨 Happy Holi!",
		"🌸 Celebrate with Colors!",
		"💛 Enjoy the Festival!",
		"🎊 Spread Joy & Love!",
		"🌈 Let's Play with Colors!",
	];

	let greeting = document.getElementById("greeting");
	greeting.textContent =
		greetings[Math.floor(Math.random() * greetings.length)];

	let splash = document.createElement("div");
	splash.classList.add("color-splash");

	let randomColor = colors[Math.floor(Math.random() * colors.length)];
	splash.style.backgroundColor = randomColor;

	splash.style.left = event.clientX + "px";
	splash.style.top = event.clientY + "px";

	document.getElementById("color-container").appendChild(splash);
	setTimeout(() => splash.remove(), 1500);

	for (let i = 0; i < 30; i++) {
		let shape = document.createElement("div");

		shape.classList.add("shape");
		shape.style.backgroundColor =
			colors[Math.floor(Math.random() * colors.length)];
		shape.style.left = Math.random() * window.innerWidth + "px";
		shape.style.top = event.clientY + "px";
		shape.style.animationDuration = Math.random() * 8 + "s";

		document.getElementById("shape-container").appendChild(shape);
		setTimeout(() => shape.remove(), 2000);
	}
});

let music = document.getElementById("holi-music");
let musicBtn = document.getElementById("music-btn");

musicBtn.addEventListener("click", function () {
	if (music.paused) {
		music.play();
		musicBtn.innerText = "⏸️ Pause Music";
	} else {
		music.pause();
		musicBtn.innerText = "🎵 Play Music";
	}
});

document.getElementById("wish-btn").addEventListener("click", function () {
	let wishes = [
		"🌈 Wishing you a Holi full of colors, joy, and happiness! 🎨🎉",
		"🎊 May this Holi bring vibrant colors of love, life, and laughter! 🌸💖",
		"🌸 Happy Holi! May your life be as colorful and joyful as this festival! 💛💙💚",
		"🥳 Splash into the colors of Holi and enjoy this beautiful festival! 🌈✨",
		"💖 Wishing you and your family a Holi filled with fun, color, and happiness! 🎨🎉",
	];

	let wishText = document.getElementById("wish");
	let copyBtn = document.getElementById("copy-btn");

	wishText.textContent = wishes[Math.floor(Math.random() * wishes.length)];

	copyBtn.style.display = "block";
});

document.getElementById("copy-btn").addEventListener("click", function () {
	let wishText = document.getElementById("wish").textContent;

	navigator.clipboard
		.writeText(wishText)
		.then(() => {
			alert("🎉 Wish copied to clipboard!");
		})
		.catch((err) => {
			console.error("Error copying text: ", err);
		});
});
