const userEmail = document.getElementById("mail-input");
const check = document.getElementById("calculate-button");
const emailList = ["giorgio.belardelli@gmail.com", "peppe.achuck@libero.it", "buzio.sergio@hotmail.com"];


check.addEventListener("click", 

    function(){

        let emailToCheck = userEmail.value;
        document.getElementById("verifica").innerHTML = "Non sei nella lista bitch";

        for( let i=0; i<emailList.length; i++ ){

            if( emailList[i] === emailToCheck){
                document.getElementById("verifica").innerHTML = "Sei nella lista bello mio";
            }
        }
    }
);
