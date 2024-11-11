let text1, text2, text3

text1 = `Let be this text number 1`
text2 = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`
text3 = `Let be this text number 2`

document.write(

    text1 + text2 + text3

)

// Over den kommentar var det første delen.

// Under den kommentar er det andre delen.

let num1

num1 = -5

if (num1 < 0) {

    document.write(

        `<br><br> ${num1} er negativt`
    )
}

else {

    document.write(

        `<br><br> ${num1} er positivt`
    )
}

// Over den kommentar var det andre delen

// Under den komentar er det tredje delen

let num2, num3

num2 = 5

num3 = 10

if (num2 < num3) {

    document.write(

        `<br><br> ${num3} er største enn ${num2}`

    )

}

else {

    document.write(

        `<br><br> ${num3} er mindre enn ${num2}`

    )

}

// Over den kommentar var det tredje delen

// Under den kommentar er det fjerde delen

let num4, num5, num6

num4 = 101;

num5 = 100;

num6 = 119;

document.write("<br><br>")

if (num4 > num5 && num4 > num6) {

    document.write(`${num4} er storre enn ${num5} og ${num6}`)

} else if (num4 < num5 && num5 > num6) {

    document.write(`${num5} er storre enn ${num4} og ${num6}`)

} else if (num4 < num6 && num5 < num6) {

    document.write(`${num6} er storre enn ${num4} og ${num5}`)

}

// Over den kommentar var det fjerde delen

// Under den kommentar er det femte delen

let elev = 50;

document.write (`<br><br>`)

if (elev > 100) {

    document.write (`Skriv et gyldig tall`);

} else if (elev < 0) {

    document.write (`Skriv et gyldig tall`);

} else if (elev < 50) {

    document.write (`Ikke bestått`);

} else if (elev >= 50) {

    document.write (`Bestått`);

}

// Over den kommentar var det femte delen

// Under den kommentar er det sjette delen

let dag

dag = 1

document.write (`<br><br>`)

if (dag == 1) {

    document.write (`Det er Mandag i dag.`)

} else if (dag == 2) {

    document.write (`Det er Tirsdag i dag.`)

} else if (dag == 3) {

    document.write (`Det er Onsdag i dag.`)

} else if (dag == 4) {

    document.write (`Det er Torsdag i dag`)

} else if (dag == 5) {

    document.write (`Det er Fredag i dag.`)

} else if (dag == 6) {

    document.write (`Det er Lørdag i dag`)

} else if (dag == 7) {

    document.write (`Det er Søndag i dag.`)

} else {
    
    document.write (`Skriv et gyldig tall`)

}

// Over den kommentar var det sjette delen

// Under den kommentar er det syvende delen

let fahrenheit, antallGrader

antallGrader = 90

fahrenheit = (antallGrader * 9/5) + 32

document.write (`<br><br>`)

if (1 == 1) {

    document.write (`<br> Celsius = ${antallGrader}`)

    document.write (`<br> <br>Fahrenheit = ${fahrenheit}`)

}

// Over den kommentar ver det syvende delen

// Under den kommentar er det åttende delen

let karakter1, karakter2, karakter3, karakter4, karakter5, sum

karakter1 = 100
karakter2 = 40
karakter3 = 60
karakter4 = 20
karakter5 = 100

sum = (karakter1+karakter2+karakter3+karakter4+karakter5)/5

document.write (`<br><br>`)

if (sum >= 50) {

    document.write(`Bestått`)

} else if (sum < 0) {

    document.write(`Skriv et gyldig tall`)

} else {

    document.write(`Ikke bestått`)

}

// Over den kommentar var det åttende delen

// Under den kommentar er det niende delen

let tall1, tall2, tall3

tall1 = 20

tall2 = 20

tall3 = 20

document.write(`<br><br>`)

if (tall1 == tall2 && tall1 > tall3) {

    document.write(`Tall 1 og 2 er like men de store enn tall3`);

} else if (tall1 == tall3 && tall1 > tall2) {

    document.write(`Tall 1 og 3 er like men de store enn tall2`);

} else if (tall2 == tall3 && tall2 > tall1) {

    document.write(`Tall 2 og 3 er like men de store enn tall1`);

} else if (tall1 == tall2 && tall2 == tall3) {

    document.write(`Alle tallene er like`);

} else if (tall1 > tall2 && tall1 > tall3) {

    document.write(`Tall 1 er det største`);

} else if (tall2 > tall1 && tall2 > tall3) {

    document.write(`Tall 2 er det største`);

} else if (tall3 > tall1 && tall3 > tall2) {

    document.write(`Tall 2 er det største`);

}

// Over den kommentar var det niende delen

// Under den kommentar er det tiende delen

let bokstav, a, e, i, o, u, y, æ, ø, å, q, w, r, t, p, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m

a = 2
e = 2
i = 2
o = 2
u = 2
y = 2
æ = 2
ø = 2
å = 2

bokstav = a

document.write(`<br><br>`)

if (bokstav == 2) {

    document.write(`Du har skrevet vokal bokstav`);

} else {

    document.write(`Du har skrevet en annet bokstav, men ikke vokal bokstav`);

}

// Over den kommentar var det tiende delen

// Under den kommentar er det ellevte delen

function byteFarge(farge1, text){
    document.getElementsByClassName(farge1)[0].style.color = text;
}

var farge = ()=>{
    byteFarge("text","red"); // For å byte fargen til annet du måtte å skrive i sted av red en annet farge.
}