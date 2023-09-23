const getcolor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomColor = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomColor;
    document.getElementById("color-code").innerText = randomColor;
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor()