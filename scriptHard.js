window.onload = function loadCountry() {
    let countryList = ["kirgistan", "angola", "argentinien", "armenien", "aserbaidschan", "äthiopien", "bangladesch", "brasilien", "el salvador", "ghana", "haiti", "honduras", "indien", "indonesien", "irak", "benin", "botsuana", "burkina faso", "burundi", "dschibuti", "eritrea", "eswatini", "gabun", "gambia", "komoren", "liberia", "mauretanien", "mauritius", "burkina faso", "abchasien", "afghanistan", "bahrein"];
    let countryLine = document.getElementById('country');
    let rndCountry = countryList[Math.floor(Math.random() * countryList.length)];
    body.style.backgroundColor = "white";
    h1.style.color = "red";
    

    
    var counterTrue = localStorage.getItem('counterTrue');
    if (counterTrue === null) {
        counterTrue = 0;
      }
    console.log(counterTrue)
     

    var counterGeneral = localStorage.getItem('counterGeneral');
    if (counterGeneral === null) {
        counterGeneral = 0;
      }
    console.log(counterGeneral)

    
     
        countryLine.innerHTML = rndCountry
    
    
    
        let countryImgOne = ["uganda.png", "togo.png", "tansania.png", "bhutan.png", "brunei darussalam.png", "vanuatu.png", "tuvalu.png", "tonga.png", "samoa.png", "palau.png", "papua neuguinea.png", "osttimor.png"];
        let countryImgTwo =  ["sao-tome-und-principe.png", "ruanda.png", "niger.png", "georgien.png", "tadschikistan.png", "usa.png", "anguilla.png", "bolivien.png", "chile.png", "ecuador.png", "guyana.png"];
        let countryImgThree =  ["komoren.png", "gabun.png", "gambia.png", "eswatini.png", "neuseeland.png", "nauru.png", "marshall inseln.png", "panama.png", "st-lucia.png", "vanuatu.png", "suriname.png", "peru.png"];
        let countryImgFour = ["mauretanien.png", "liberia.png","ägypten.png", "elfenbeinkuste.png", "somalia.png", "simbabwe.png", "islamisches-emirat-afghanistan.png", "sudan.png", "syrien.png", "paraguay.png"]
            
        
        
        let imageOne = document.getElementById("flagOne");
        let imageTwo = document.getElementById("flagTwo");
        let imageThree = document.getElementById("flagThree");
        let imageFour = document.getElementById("flagFour");
        
        imageOne.src = countryImgOne[Math.floor(Math.random() * countryImgOne.length)];
        imageTwo.src = countryImgTwo[Math.floor(Math.random() * countryImgTwo.length)];
        imageThree.src = countryImgThree[Math.floor(Math.random() * countryImgThree.length)];
        imageFour.src = countryImgFour[Math.floor(Math.random() * countryImgFour.length)];
    


        // Passende Flagge wird an einer der vier Stellen generiert
        let allFlags = [imageOne, imageTwo, imageThree, imageFour];
        let rndFlag = allFlags[Math.floor(Math.random() * allFlags.length)];
        rndFlag.src = countryLine.innerHTML + ".png";
    
    
    rndFlag.addEventListener("click", function changeBackground() {
        let body = document.getElementById('body');
        let h1 = document.getElementById('h1');
        body.style.backgroundColor = "green";
        h1.style.color = "black";

        counterTrue++;
        localStorage.setItem('counterTrue', counterTrue);

        setTimeout(()=>{
            document.location.reload();
        },1000)
})


    imageOne.addEventListener("click", function wrongGuess() {
        if (imageOne.src !== rndFlag.src) {
            body.style.backgroundColor = "red"
            h1.style.color = "white"
            rndFlag.style.border = "10px solid green";
        } else {
            body.style.backgroundColor = "green"
            h1.style.color = "black"
        }

        counterGeneral++;
        localStorage.setItem('counterGeneral', counterGeneral);

        setTimeout(()=>{
            document.location.reload();
        },2000)
    })

    imageTwo.addEventListener("click", function wrongGuess() {
        if (imageTwo.src !== rndFlag.src) {
            body.style.backgroundColor = "red"
            h1.style.color = "white"
            rndFlag.style.border = "10px solid green";
        } else {
            body.style.backgroundColor = "green"
            h1.style.color = "black"
        }

        counterGeneral++;
        localStorage.setItem('counterGeneral', counterGeneral);

        setTimeout(()=>{
            document.location.reload();
        },2000)
    })

    imageThree.addEventListener("click", function wrongGuess() {
        if (imageThree.src !== rndFlag.src) {
            body.style.backgroundColor = "red"
            h1.style.color = "white"
            rndFlag.style.border = "10px solid green";
        } else {
            body.style.backgroundColor = "green"
            h1.style.color = "black"
        }

        counterGeneral++;
        localStorage.setItem('counterGeneral', counterGeneral);

        setTimeout(()=>{
            document.location.reload();
        },2000)
    })

    imageFour.addEventListener("click", function wrongGuess() {
        if (imageFour.src !== rndFlag.src) {
            body.style.backgroundColor = "red"
            h1.style.color = "white"
            rndFlag.style.border = "10px solid green";
        } else {
            body.style.backgroundColor = "green"
            h1.style.color = "black"
        }

        counterGeneral++;
        localStorage.setItem('counterGeneral', counterGeneral);

        setTimeout(()=>{
            document.location.reload();
        },2000)
    })
        
    

    var resetButton = document.getElementById('resetButton');

    resetButton.addEventListener('click', function resetCounter() {
        counterGeneral = 0;
        counterTrue= 0;
        localStorage.setItem('counterGeneral', counterGeneral);
        localStorage.setItem('counterTrue', counterTrue);

        document.location.reload();
    })

    var counter = document.getElementById('counter');
    counter.innerHTML = counterGeneral;

    var resultButton = document.getElementById('ergebnisButton');

    resultButton.addEventListener('click',function showResult() {
        window.alert("Du hast " + counterTrue + " Flaggen von " + counterGeneral + " richtig!")
    })
    
}


