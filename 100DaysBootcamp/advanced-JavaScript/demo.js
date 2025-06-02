//   const formInputElement = document.getElementById("product-name");
//   const pElement = document.getElementById("text-remain");

//   // pElement.innerText = 1;

//   function checkedTextLength(event) {
//     const remainlength = event.target.value.length;
//     console.log(remainlength);
//     const remainText = pElement;
//     remainText.innerText = 60 - remainlength;

//     if(event.target.readOnly == true && event.target.key ==="Backspace"){
//         event.target.readOnly = false;
//         console.log("input is again")
//     }

//     if(remainText.innerText <1){
//       event.target.readOnly = true;
//       event.target.style.backgroundColor = "grey";
//     }else if (remainText.innerText <= 10) {
//       formInputElement.style.backgroundColor = "red";
//     }else if(remainText.innerText <= 30) {
//       formInputElement.style.backgroundColor = "orange";
//     }

//   }
//   formInputElement.addEventListener("input", checkedTextLength);
//  ========== 나의 답 =============

const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maximumTextLength = productNameInputElement.maxLength;
const inputStyle = productNameInputElement.style;

console.dir(inputStyle);

function updateRemainingCharacters(event) {
  const enteredText = event.target.value;
  const enteredTextLength = enteredText.length;

  const remainingCharacters = maximumTextLength - enteredTextLength;
  console.log(remainingCharacters);

  remainingCharsElement.innerText = remainingCharacters;

  if (remainingCharacters < 1) {
    inputStyle.backgroundColor = "grey";
  } else if (remainingCharacters <= 10) {
    productNameInputElement.classList.add("error");
    remainingCharsElement.classList.add("error");
  } else if (remainingCharacters <= 30) {
    productNameInputElement.classList.add("warning");
    remainingCharsElement.classList.add("warning");
  } else if (remainingCharacters > 30) {
    productNameInputElement.classList.remove("warning");
    remainingCharsElement.classList.remove("warning");
    
    productNameInputElement.classList.remove("error");
    remainingCharsElement.classList.remove("error");
  }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);
