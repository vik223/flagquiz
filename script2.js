window.onload = function loadCountry() {
    let countryList = ["vietnam", "philippinen", "honduras", "ghana", "armenien", "indonesien", "frankreich", "rumänien", "tschechien", "dänemark", "mongolei", "taiwan", "kasachstan", "malediven", "serbien"];
    let countryLine = document.getElementById('country');
    let rndCountry = countryList[Math.floor(Math.random() * countryList.length)];

    let imageOne = document.getElementById("flagOne");
    let imageTwo = document.getElementById("flagTwo");

    countryLine.innerHTML = rndCountry

    let allFlags = [imageOne, imageTwo, imageOne, imageTwo ,imageOne, imageTwo];
    let rndFlag = allFlags[Math.floor(Math.random() * allFlags.length)];

    imageOne.src = rndCountry + " fake.png"
    imageTwo.src = rndCountry + " fake.png"
    rndFlag.src = rndCountry + ".png"

    
    rndFlag.addEventListener("click", function changeBackground() {
        let body = document.getElementById('body');
        let h1 = document.getElementById('h1');
        let footer = document.getElementById('footer');
        let timer = document.getElementById('timer');
        body.style.backgroundColor = "green";
        h1.style.color = "white";
        footer.style.color = "white";
        countryLine.style.color = "white";
        timer.style.color = "white";
        canExecute = false;
        timer.innerHTML = "Richtig!"

        setTimeout(()=>{
            document.location.reload();
        },1500)
    })

    imageOne.addEventListener("click", function changeBackground() {
        if (imageOne.src !== rndFlag.src) {
            body.style.backgroundColor = "red"
            h1.style.color = "black"
        } else {
            body.style.backgroundColor = "green"
            h1.style.color = "white"
        }

        canExecute = false;

        setTimeout(()=>{
            document.location.reload();
        },2000)
    })

    
imageTwo.addEventListener("click", function changeBackground() {
    if (imageTwo.src !== rndFlag.src) {
        body.style.backgroundColor = "red"
        h1.style.color = "black"
    } else {
        body.style.backgroundColor = "green"
        h1.style.color = "white"
    }

    canExecute = false;

    setTimeout(()=>{
        document.location.reload();
    },2000)
})

var timeLeft = 11;
var canExecute = true;

function countdown() {
	if (canExecute) {
		timeLeft--;
		document.getElementById("timer").innerHTML = String(timeLeft);
		if (timeLeft > 0) {
			setTimeout(countdown, 1000);
		}

		if (timeLeft == 0) {
			footer.innerHTML = "Zeit abgelaufen!!!"
			body.style.backgroundColor = "red"
			h1.style.color = "black"

			setTimeout(() => {
				document.location.reload();
			}, 3000)
		}
	} else {
		// Timer is currently inactive
		setTimeout(() => {
			canExecute = true;
			countdown();
		}, 3000);
	}
};

setTimeout(countdown, 1);







}
