const userNumber= Math.floor(Math.random()*5) +1;
const pcNumber= Math.floor(Math.random()*5) +1;

if (userNumber > pcNumber){
    console.log("Hai vinto!");
} else if (userNumber < pcNumber){
    console.log("Hai perso!");
}else {
    console.log("Parita'");
}