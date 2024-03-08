function kalk() {
    let num1 = parseFloat(document.getElementById("num1-input").value);
    let num2 = parseFloat(document.getElementById("num2-input").value);
    let arithmetika = document.getElementById("arithmetika-input").value;
    let result;
  
    if (isNaN(num1) || isNaN(num2)) {
      alert("გთხოვთ შეავსოთ ორივე ველი");
      return;
    }
    switch (arithmetika) {
      case "plus":
        result = num1 + num2;
        break;
      case "minus":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num1 / num2;
        break;
    }
    alert("პასუხია: " + result);
  }