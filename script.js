                // ----- Text to Hex -----


let toHexBtn = document.getElementById("toHex");
toHexBtn.addEventListener("click", function () {
  let textBox = document.getElementById("inputText");
  let outputBox = document.getElementById("outputText");
  let text = textBox.value;

  if (text === "") {
    alert("Please enter some text!");
    return;
  }

  let hex = "";
  for (let i = 0; i < text.length; i++) {
     // get ASCII number of each letter
    let code = text.charCodeAt(i);
    // convert number to hexadecimal
    let hexCode = code.toString(16);
    // add it to the final string
    hex = hex + hexCode;
  }

  outputBox.value = hex;
});

                // ----- Hex to Text -----

let toTextBtn = document.getElementById("toText");
toTextBtn.addEventListener("click", function () {
  let inputBox = document.getElementById("inputText");
  let outputBox = document.getElementById("outputText");
  let hex = inputBox.value;

  if (hex === "") {
    alert("Please enter a hex value!");
    return;
  }

  let text = "";
  for (let i = 0; i < hex.length; i = i + 2)
  {
    
    let hexPair = hex.substr(i, 2);
    let number = parseInt(hexPair, 16);
    let letter = String.fromCharCode(number);
    text = text + letter;
  }

  outputBox.value = text;
});

              // ---- Reset Button ----

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function () {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
});
