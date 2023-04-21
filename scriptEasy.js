window.onload = function loadCountry() {
    let countryList = ["albanien", "belarus", "belgien", "dänemark", "deutschland", "estland", "finnland", "frankreich", "großbrittanien", "griechenland", "holland", "irland", "island", "italien"];
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
    
    
    
        let countryImgOne = ["spanien.png", "österreich.png", "norwegen.png", "polen.png", "rumänien.png", "russland.png", "usa.png"];
        let countryImgTwo =  ["schweiz.png", "serbien.png", "slowakei.png", "slowenien.png", "tschechien.png", "ungarn.png", "brasilien.png"];
        let countryImgThree =  ["andorra.png", "bulgarien.png", "kroatien.png", "kosovo.png", "ukraine.png", "zypern.png", "kanada.png"];
        let countryImgFour = ["liechtenstein.png", "luxemburg.png", "lettland.png", "montenegro.png", "malta.png", "chile.png"]
            
        
        
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
