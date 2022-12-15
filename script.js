const wrapper = document.querySelector(".wrapper");
const qrInput = document.querySelector(".form input");
const generateBtn = document.querySelector(".form button");
const qrImg = document.querySelector(".qr-code img");

generateBtn.addEventListener("click", (e) => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerText = "Criando QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
    qrImg.addEventListener("load", () => {
        wrapper.classList.add('active')
        generateBtn.innerText = "Insira o texto ou a URL"
    })
})