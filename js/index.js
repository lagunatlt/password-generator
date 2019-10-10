let check = document.querySelector('#check');
let textLength = document.querySelector('#textLength');
let maxPass = document.querySelector('#maxPass');
let pass = document.querySelector('#pass');
let setOfLetters = 'qwertyuiopasdfghjklzxcvbnm';
let setOfNumbers = '0123456789';
let setOfPunctuation = '~!@$%^:;&*()-_+=[]{?}.,/';

document.querySelector('#button').addEventListener('click', function() {
    // console.log(button)
    // очистка добавляемых тегов
    $('.newPass').remove()
    $('.error').remove()
        // -----------
        // проверка инпутов на корректное значение
    if ((!textLength.validity.valid) || (textLength.value == "")) {
        $('.inputLength').append('<p class="error">' + 'введите число от 8 до 20' + '</p>')
    }
    if ((!maxPass.validity.valid) || (maxPass.value == "")) {
        $('.inputMaxPass').append('<p class="error">' + 'введите число от 1 до 10' + '</p>')
    }
    // ----------
    // цикл генерации пароля
    while (((+textLength.max >= +textLength.value) && (+textLength.min <= +textLength.value)) && ((+maxPass.max >= +maxPass.value) && (+maxPass.max >= +maxPass.value))) {

        for (let h = 0; h < maxPass.value; h++) {
            let arrLetters = setOfLetters.split('');
            let resultingArray = [];
                // console.log(arrLetters)
                // проверка чекбокса на чек
                //если да, добавление в массив случайным образом
            if (check.checked) { 
                let arrayOfNumbers = setOfNumbers.split('');
                for (let a = 0; a < (arrayOfNumbers.length); a++) {
                    let ss = Math.floor(Math.random(0, arrLetters.length) * arrLetters.length);
                    arrLetters.splice(ss, 0, arrayOfNumbers[a]);
                }
            }
            // console.log(arrLetters)
            // проверка чекбокса на чек
            //если да, добавление в массив случайным образом
            if (punct.checked) {
                let arrayOfPunctuation = setOfPunctuation.split('');
                for (let b = 0; b < (arrayOfPunctuation.length); b++) {
                    let bb = Math.floor(Math.random(0, arrLetters.length) * arrLetters.length);
                    arrLetters.splice(bb, 0, arrayOfPunctuation[b])
                }
            }
            // console.log(arrLetters)
            for (let i = 0; i < textLength.value; i++) {
                let x = Math.floor(Math.random(0, arrLetters.length) * arrLetters.length);
                let q = Math.floor(Math.random() * 2);
                // добавление upperCase рандомно для каждого символа
                if (q > 0) {
                    resultingArray.unshift(arrLetters[x].toLocaleUpperCase());
                } else {
                    resultingArray.unshift(arrLetters[x]);
                }
            }
            // console.log(resultingArray)
            // создание нового тега с результатом
            $('.pass').append('<p class="newPass">' + resultingArray.join("") + '</p>');

        }
        return;
    }

});