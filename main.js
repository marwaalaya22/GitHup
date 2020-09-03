function piramide()
{
console.log("Salut, bienvenue dans ma super pyramide! Combien d'étages veux-tu ?")
var ligne= prompt(" ");
if (ligne<25)
    for (let i = 0; i < ligne; i++) {
        var piram = '';
        for (var j =1; j < ligne - i; j++) piram += ' ';
        for (var k = 1; k <= i; k++) piram += '*';
        for (var l = 0; l <= i; l++) piram += '*';
console.log(piram);
    } 
}

piramide()