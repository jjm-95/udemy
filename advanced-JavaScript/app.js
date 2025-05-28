let paragraphElement = document.getElementById("click");

function changeParagraphText(){
    paragraphElement.innerText = "Clicked!";
    console.log("clicked!")
}

paragraphElement.addEventListener("click",changeParagraphText);

let inputElement = document.getElementById("inputText");

function checkedInputText(event) {
    //  const enteredText = inputElement.value;
    const enteredText = event.target.value;
    // const enteredText = event.data;
     console.log(enteredText);
     console.log(event);

}

inputElement.addEventListener("input", checkedInputText);