/* 
Resize du logo dans le nav
*/

const logoBrand = document.querySelector(".logo-brand");

function logoResize() {
	let y = window.scrollY;

	if (y > 0) {
		logoBrand.classList.add("logo-small");
		logoBrand.classList.remove("logo-normal");
	} else {
		logoBrand.classList.remove("logo-small");
		logoBrand.classList.add("logo-normal");
	}
}

window.addEventListener("scroll", logoResize);

/* 
Nav mobile
*/

const mobileHamburger = document.querySelector(".mobile-hamburger");
const navMobile = document.querySelector(".mobile-nav");
const mobileCross = document.querySelector(".mobile-cross");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links");
const logoMobile = document.querySelector(".logo-brand-mobile-nav");

mobileHamburger.addEventListener("click", responsiveMenu);

function responsiveMenu() {
	navMobile.style.display = "flex";
	mobileNavLinks.forEach((e) =>
		e.addEventListener("click", closeResponsiveMenu)
	);
	logoMobile.addEventListener("click", closeResponsiveMenu);
}

mobileCross.addEventListener("click", closeResponsiveMenu);

function closeResponsiveMenu() {
	navMobile.style.display = "none";
}

/* 
Carroussel hero background
*/

/* let images = document.querySelectorAll(".carousel-element");

window.onload = function start() {
	slide();
};
function slide() {
	let num = 0,
		style = document.querySelector(".carousel-container").style;
	window.setInterval(function () {
		// increase by num 1, reset to 0 at 4
		num = (num + 1) % 4;

		// -600 * 1 = -600, -600 * 2 = -1200, etc
		style.marginLeft = -600 * num + "rem";
	}, 3000); // repeat forever, polling every 3 seconds
}
 */
/* 
Scale up and down des cartes voyages
*/
// const tripCard = document.querySelectorAll(".trip-card");
//
// tripCard.forEach((el) =>
// 	el.addEventListener("click", (event) => {
// 		if (window.innerWidth > 600) {
// 			tripCard.forEach((el) => el.classList.remove("scale-up"));
// 			if (event.target.classList.contains("scale-up")) {
// 				event.target.classList.remove("scale-up");
// 			} else {
// 				event.target.classList.add("scale-up");
// 			}
// 		}
// 	})
// );
