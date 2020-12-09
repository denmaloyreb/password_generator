const range = document.querySelector('.range');
const passWidth = document.querySelector('.range__value');
const geberateBtn = document.querySelector('.generate');
const result = document.querySelector('.result');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const lettersCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const special = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];
let outWidth = +range.value;

passWidth.innerHTML = range.value;

range.oninput = () => {
    passWidth.innerHTML = range.value;
    outWidth = +range.value;
}

geberateBtn.onclick = generatePass;


function generatePass() {
    let resultArr = [];
    if (document.getElementById('letters').checked) {
        resultArr = resultArr.concat(letters);
        console.log(resultArr);
    }
    if (document.getElementById('letters--caps').checked) {
        resultArr = resultArr.concat(lettersCaps);
        //console.log(resultArr);
    }
    if (document.getElementById('numbers').checked) {
        resultArr = resultArr.concat(numbers);
        //console.log(resultArr);
    }
    if (document.getElementById('special').checked) {
        resultArr = resultArr.concat(special);
        console.log(resultArr);
    }

    resultArr.sort(() => Math.random() - 0.5);
    console.log(resultArr);
    let password = '';
    for (let i = 0; i < outWidth; i++) {
        password += resultArr[i];
    }
    //console.log("generate");
    result.innerHTML = password;
}

copyBtn.onclick = function() {
    var ta = document.getElementById('result');
    var range = document.createRange();
    range.selectNode(ta);
    window.getSelection().addRange(range);
    //password.select();
    document.execCommand("copy");
}