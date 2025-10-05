// --- TEXT TO HEX ---
// Ye button click hone par kaam karega
document.getElementById("toHex").addEventListener("click", function () {
  // Input box se text le rahe hain
  let text = document.getElementById("inputText").value;

  // Agar text empty ho to alert dikhayen
  if (text === "") {
    alert("Please enter some text!");
    return;
  }

  // Hex string banane ke liye empty variable
  let hex = "";

  // Har letter ko ASCII number me convert kar ke hex me badalte hain
  for (let i = 0; i < text.length; i++) {
    let ascii = text.charCodeAt(i); // letter ka ASCII code
    let hexCode = ascii.toString(16); // ASCII ko hex me convert
    hex += hexCode; // final string me add kar do
  }

  // Hex value output box me dikhayen
  document.getElementById("outputText").value = hex;
});

// --- HEX TO TEXT ---
document.getElementById("toText").addEventListener("click", function () {
  // Input box se hex value le rahe hain
  let hex = document.getElementById("inputText").value;

  if (hex === "") {
    alert("Please enter a hex value!");
    return;
  }

  let text = "";

  // 2 hex digits ek saath le kar unko character me convert karte hain
  for (let i = 0; i < hex.length; i += 2) {
    let hexPair = hex.substr(i, 2); // 2 digits
    let num = parseInt(hexPair, 16); // hex ko number me convert
    let letter = String.fromCharCode(num); // number ko character me convert
    text += letter; // final string me add karo
  }

  // Result output box me dikhayen
  document.getElementById("outputText").value = text;
});

// --- RESET BUTTON ---
document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("inputText").value = ""; // input clear
  document.getElementById("outputText").value = ""; // output clear
  document.getElementById("copiedMsg").classList.remove("show"); // copied message hide
});

// --- COPY BUTTON ---
document.getElementById("copyBtn").addEventListener("click", function () {
  let output = document.getElementById("outputText").value;

  if (output === "") {
    alert("No text to copy!");
    return;
  }

  // Clipboard me text copy karte hain
  navigator.clipboard.writeText(output).then(function () {
    // Copy success message dikhayen
    let msg = document.getElementById("copiedMsg");
    msg.classList.add("show");

    // 1.5 second ke baad message hide kar do
    setTimeout(function () {
      msg.classList.remove("show");
    }, 1500);
  });
});
