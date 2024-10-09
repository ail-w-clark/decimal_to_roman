const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const decimalToRoman = (decimal) => {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    function convert(decimal, index=0) {
        if (decimal === 0) {
            return '';
        }
        
        if (decimal >= romanNumerals[index].value) {
            return romanNumerals[index].numeral + convert(decimal - romanNumerals[index].value, index);
        } else {
            return convert(decimal, index + 1);
        }
    }

    return convert(decimal);
} 

const checkUserInput = () => {
  const inputInt = parseInt(number.value);
  if (!number.value || isNaN(inputInt)) {
    result.textContent = "Please enter a valid number"
    return result.textContent;
  } else if (inputInt < 0) {
    result.textContent = "Please enter a number greater than or equal to 1";
    return result.textContent
  } else if (inputInt > 3999) {
    result.textContent = "Please enter a number less than or equal to 3999";
    return result.textContent;
  }
  result.textContent = decimalToRoman(inputInt);
  number.value = "";
}
convertBtn.addEventListener("click", checkUserInput);

number.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
})
