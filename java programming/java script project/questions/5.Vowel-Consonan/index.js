document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let alpha = document.getElementById("alphabet").value;

    let result = document.getElementById("result");

    if (alpha == "a" || alpha == "A" ||
        alpha == "e" || alpha == "E" ||
        alpha == "i" || alpha == "I" ||    // or get 
        alpha == "o" || alpha == "O" ||
        alpha == "u" || alpha == "U"
    ) {
        result.textContent = `${alpha} is Vowel`
    } else if
        (alpha.length == 1 && (alpha >= "a" && alpha <= "z" || alpha >= "A" && alpha <= "Z")
    ) {
        result.textContent = `${alpha} is consonant`
    } else {
        result.textContent = `${alpha} is not Alphabet, plz Enter alphabet`
    }
});