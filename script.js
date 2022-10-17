const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "&", "*", "(", ")", "{", "}", "[", "]", "+", "-", "+", "<", ">", "?","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const password_text = document.getElementById("password")


function generate() {
    let password = ""

    for (let i = 0; i<10; i++) {
        password += characters[Math.floor(Math.abs(Math.random() * 55))]
    }

    password_text.innerText = password
}