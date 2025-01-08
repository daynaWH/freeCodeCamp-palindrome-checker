const checker = document.getElementById("checker");
const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    if (!input.value) {
        alert("Please input a value");
        return;
    } else {
        // Retrieve the input text and the reversed string, excluding special characters
        const regex = /[.,?!_\/\(\)\-\s]/g;
        let inputText = input.value;
        let str = inputText.replace(regex, "").toLowerCase();
        let strReversed = str.split("").reverse().join("");

        // Compare the strings and change the text of #result
        const isPalindrome = `${inputText} is a palindrome`;
        const notPalindrome = `${inputText} is not a palindrome`;
        result.textContent = str === strReversed ? isPalindrome : notPalindrome;
    }
    input.value = "";
});
