var check = document.querySelector('#check')
var textLength = document.querySelector('#textLength')
var maxPass = document.querySelector('#maxPass')
var pass = document.querySelector('#pass')
var setOfLetters = 'qwertyuiopasdfghjklzxcvbnm'
var setOfNumbers = '0123456789'
var setOfPunctuation = '~!@$%^:;&*()-_+=[]{?}.,/'

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

        for (h = 0; h < maxPass.value; h++) {
            var arrLetters = setOfLetters.split('')
            var resultingArray = []
                // console.log(arrLetters)
                // проверка чекбокса на чек
                //если да, добавление в массив случайным образом
            if (check.checked) { 
                var arrayOfNumbers = setOfNumbers.split('')
                for (var a = 0; a < (arrayOfNumbers.length); a++) {
                    var ss = Math.floor(Math.random(0, arrLetters.length) * arrLetters.length)
                    arrLetters.splice(ss, 0, arrayOfNumbers[a])
                }
            }
            // console.log(arrLetters)
            // проверка чекбокса на чек
            //если да, добавление в массив случайным образом
            if (punct.checked) {
                var arrayOfPunctuation = setOfPunctuation.split('')
                for (var b = 0; b < (arrayOfPunctuation.length); b++) {
                    var bb = Math.floor(Math.random(0, arrLetters.length) * arrLetters.length)
                    arrLetters.splice(bb, 0, arrayOfPunctuation[b])
                }
            }
            // console.log(arrLetters)
            for (let i = 0; i < textLength.value; i++) {
                let x = Math.floor(Math.random(0, arrLetters.length) * arrLetters.length)
                let q = Math.floor(Math.random() * 2)
                // добавление upperCase рандомно для каждого символа
                if (q > 0) {
                    resultingArray.unshift(arrLetters[x].toLocaleUpperCase())
                } else {
                    resultingArray.unshift(arrLetters[x])
                }
            }
            console.log(resultingArray)
            // создание нового тега с результатом
            $('.pass').append('<p class="newPass">' + resultingArray.join("") + '</p>')

        }
        return
    }

})