import { Display } from "rot-js";

let o = {
	width: 11,
	height: 5
}
let d = new Display(o);
let container = d.getContainer();
let documentElement = document.getElementById("map");

documentElement.appendChild(container);

for (let i=0; i<o.width; i++) {
	for (let j=0; j<o.height; j++) {
		if (!i || !j || i+1 == o.width || j+1 == o.height) {
			d.draw(i, j, "#", "gray");
		} else {
			d.draw(i, j, ".", "#666");

		}
	}
}
d.draw(o.width >> 1, o.height >> 1, "@", "goldenrod");