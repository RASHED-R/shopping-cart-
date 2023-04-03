//setting default attribute to disabled of minus button

document.querySelector(".minus-butn").setAttribute("disabled", "disabled");

//taking value to increment input value

let valueCount;

//taking price value in variable

let price = document.getElementById("price").innerText;

//price calculation function 

function priceTotal() {
    let total = valueCount * price;
    document.getElementById("price").innerText = total;
}

//plus button

document.querySelector(".plus-btn").addEventListener("click", () => {
    //getting value of input

    valueCount = document.getElementById("quantity").value;

    //input value increment by 1
    valueCount++;

    //set increment input value

    document.getElementById("quantity").value = valueCount;
    if (valueCount > 0) {
        document.querySelector(".minus-butn").removeAttribute("disabled");
        document.querySelector(".minus-butn").classList.remove("disabled");
    }
    //taking price function 

    priceTotal()
});
//minus button

document.querySelector(".minus-butn").addEventListener("click", () => {

    //getting value of input

    valueCount = document.getElementById("quantity").value;

    //input value decrement by 1
    valueCount--;

    //set decrement input value

    document.getElementById("quantity").value = valueCount;
    if (valueCount == 0) {
        document.querySelector(".minus-butn").setAttribute("disabled", "disabled");
    }
    //taking price function 
    priceTotal()
});