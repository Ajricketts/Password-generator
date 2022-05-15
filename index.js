let asciiString = ""
let inputBox = document.getElementsByClassName("pwd-length")[0]
for(let i = 32; i <= 126; i++) {
    asciiString += String.fromCharCode(i);
}

function generatePass(passLength) {
    // let passLength = document.getElementsByClassName("pwd-length")[0].value
    let pwd = ""
    for (let i = 0; i < passLength; i++) {
        pwd += asciiString[Math.floor(Math.random() * asciiString.length)]
    }
    return pwd
}

function displayPass() {
    for (let i = 0; i < 4; i++) {
        let passEltemp = document.getElementsByClassName("pass")[i]
        if (inputBox.value != "" && inputBox.value >= 4 && inputBox.value <= 18) {
            passEltemp.textContent = generatePass(inputBox.value)
        }
        else {
            passEltemp.textContent = generatePass(15)
        }
    }
}

inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        displayPass()
    }
})