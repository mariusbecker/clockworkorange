function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	angleMode(DEGREES);
	colorMode(HSL);
}

window.setInterval(draw, 1000);

function draw() {

	var s = second();
	var m = minute();
	var h = hour();

	var sek = map(s, 0, 60, 0, 360)
	var min = map(m, 0, 60, 0, 360)
	var hr = map(h, 0, 12, 0, 360)



	background(0);
	noStroke();
	// Lauf-Variable x definiert
	var x = 0;
	// Führe den Loop solange aus, solange x kleiner als die Breite
	// des Ausgabe-Fenster ist
	while (x < 361) {
		arc(width/2, height/2, 500,500, 270+x, 271+x, PIE,);
 		fill(x+1,100,50);
			// Addiere 11 zu x
			x += 1;
			// Ausgabe des x Wertes in der Konsole, mit Begleit-Text
			console.log("x hat den Wert " + x);

	}


	noLoop();


		fill(sek+1,100,50);
		ellipse(width/2, height/2, 400,400, 400, 360);

}
