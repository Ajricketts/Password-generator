let asciiString = ""
for(let i = 32; i <= 126; i++) {
    asciiString += String.fromCharCode(i);
}

function generatePass() {
    let passLength = 15
    let pwd = ""
    for (let i = 0; i < passLength; i++) {
        pwd += asciiString[Math.floor(Math.random() * asciiString.length)]
    }
    return pwd
}

function displayPass() {
    for (let i = 0; i < 4; i++) {
        let passEl = document.getElementsByClassName("pass")[i]
        passEl.textContent = generatePass()
    }
}