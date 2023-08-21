


function eachCardPrice(cardId){
    const cardElement = document.getElementById(cardId);
    const cardPriceString =cardElement.innerText;
    const cardPrice = parseFloat(cardPriceString);
    return cardPrice;
}

function setTotalPrice(totalPriceId, newTotal){
    const totalElement = document.getElementById(totalPriceId);
    totalElement.innerText = newTotal
}

function eachItemName(nameId){
    const itemElement = document.getElementById(nameId);
    const itemName = itemElement.innerText;
    const parent = document.getElementById("items")
    const li = document.createElement("li");
    li.innerText = itemName;
    parent.appendChild(li);
}

document.getElementById("first").addEventListener("click", function(){
    const itemName = eachItemName("first-name");
    const firstCardPrice = eachCardPrice("first-price");
    const totalPriceELement = document.getElementById("total-price");
    const totalPriceString = totalPriceELement.innerText;
    const totalPrice = parseFloat(totalPriceString);

    const newTotalPrice = totalPrice + firstCardPrice;

    setTotalPrice("total-price",newTotalPrice);

    if(newTotalPrice > 0){
        document.getElementById("btn-purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-purchase").setAttribute("disabled", true);
    }
    
    if(newTotalPrice >= 200){
        document.getElementById("apply-btn").removeAttribute("disabled")
        document.getElementById("apply-btn").addEventListener("click", function(){
            const inputElement = document.getElementById("input-field");
            const inputValue = inputElement.value;
            inputElement.value = "";
            if(inputValue === "SELL200"){
                const discountFloat = newTotalPrice * 0.2;
                const discount = discountFloat.toFixed(2);
            
                setTotalPrice("discount",discount);
                const total = newTotalPrice - discount;
                setTotalPrice("total",total);
            }
            else{
                setTotalPrice("total", newTotalPrice)
            }

        })
    }
    else{
        document.getElementById("apply-btn").setAttribute("disabled", true) 
        setTotalPrice("total", newTotalPrice)   
    }

})
document.getElementById("second").addEventListener("click", function(){
    const itemName = eachItemName("second-name");
    const secondCardPrice = eachCardPrice("second-price");
    const totalPriceELement = document.getElementById("total-price");
    const totalPriceString = totalPriceELement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newTotalPrice = totalPrice + secondCardPrice;

    setTotalPrice("total-price",newTotalPrice);
    if(newTotalPrice > 0){
        document.getElementById("btn-purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-purchase").setAttribute("disabled", true);
    }
    if(newTotalPrice >= 200){
        document.getElementById("apply-btn").removeAttribute("disabled")
        document.getElementById("apply-btn").addEventListener("click", function(){
            const inputElement = document.getElementById("input-field");
            const inputValue = inputElement.value;
            inputElement.value = "";
            if(inputValue === "SELL200"){
                const discountFloat = newTotalPrice * 0.2;
                const discount = discountFloat.toFixed(2);
            
                setTotalPrice("discount",discount);
                const total = newTotalPrice - discount;
                setTotalPrice("total",total);
            }
            else{
                setTotalPrice("total", newTotalPrice)
            }

        })
    }
    else{
        document.getElementById("apply-btn").setAttribute("disabled", true)
        setTotalPrice("total", newTotalPrice)    
    }

})
document.getElementById("third").addEventListener("click", function(){
    const itemName = eachItemName("third-name");
    const thirdCardPrice = eachCardPrice("first-price");
    const totalPriceELement = document.getElementById("total-price");
    const totalPriceString = totalPriceELement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    const newTotalPrice = totalPrice + thirdCardPrice;

    setTotalPrice("total-price",newTotalPrice);
    if(newTotalPrice > 0){
        document.getElementById("btn-purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-purchase").setAttribute("disabled", true);
    }
    if(newTotalPrice >= 200){
        document.getElementById("apply-btn").removeAttribute("disabled")
        document.getElementById("apply-btn").addEventListener("click", function(){
            const inputElement = document.getElementById("input-field");
            const inputValue = inputElement.value;
            inputElement.value = "";
            if(inputValue === "SELL200"){
                const discountFloat = newTotalPrice * 0.2;
                const discount = discountFloat.toFixed(2);
            
                setTotalPrice("discount",discount);
                const total = newTotalPrice - discount;
                setTotalPrice("total",total);
            }
            else{
                setTotalPrice("total", newTotalPrice)
            }

        })
    }
    else{
        document.getElementById("apply-btn").setAttribute("disabled", true)
        setTotalPrice("total", newTotalPrice)    
    }

})
document.getElementById("fourth").addEventListener("click", function(){
    const itemName = eachItemName("fourth-name");
    const fourthCardPrice = eachCardPrice("fourth-price");
    const totalPriceELement = document.getElementById("total-price");
    const totalPriceString = totalPriceELement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    
    const newTotalPrice = totalPrice + fourthCardPrice;

    setTotalPrice("total-price",newTotalPrice);
    if(newTotalPrice > 0){
        document.getElementById("btn-purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-purchase").setAttribute("disabled", true);
    }
    if(newTotalPrice >= 200){
        document.getElementById("apply-btn").removeAttribute("disabled")
        document.getElementById("apply-btn").addEventListener("click", function(){
            const inputElement = document.getElementById("input-field");
            const inputValue = inputElement.value;
            inputElement.value = "";
            if(inputValue === "SELL200"){
                const discountFloat = newTotalPrice * 0.2;
                const discount = discountFloat.toFixed(2);
            
                setTotalPrice("discount",discount);
                const total = newTotalPrice - discount;
                setTotalPrice("total",total);
            }
            else{
                setTotalPrice("total", newTotalPrice)
            }

        })
    }
    else{
        document.getElementById("apply-btn").setAttribute("disabled", true)
        setTotalPrice("total", newTotalPrice)    
    }

})
document.getElementById("fifth").addEventListener("click", function(){
    const itemName = eachItemName("fifth-name");
    const fifthCardPrice = eachCardPrice("fifth-price");
    const totalPriceELement = document.getElementById("total-price");
    const totalPriceString = totalPriceELement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    
    const newTotalPrice = totalPrice + fifthCardPrice;

    setTotalPrice("total-price",newTotalPrice);
    if(newTotalPrice > 0){
        document.getElementById("btn-purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-purchase").setAttribute("disabled", true);
    }
    if(newTotalPrice >= 200){
        document.getElementById("apply-btn").removeAttribute("disabled")
        document.getElementById("apply-btn").addEventListener("click", function(){
            const inputElement = document.getElementById("input-field");
            const inputValue = inputElement.value;
            inputElement.value = "";
            if(inputValue === "SELL200"){
                const discountFloat = newTotalPrice * 0.2;
                const discount = discountFloat.toFixed(2);
            
                setTotalPrice("discount",discount);
                const total = newTotalPrice - discount;
                setTotalPrice("total",total);
            }
            else{
                setTotalPrice("total", newTotalPrice)
            }

        })
    }
    else{
        document.getElementById("apply-btn").setAttribute("disabled", true)
        setTotalPrice("total", newTotalPrice)    
    }

})
document.getElementById("sixth").addEventListener("click", function(){
    const itemName = eachItemName("sixth-name");
    const sixthCardPrice = eachCardPrice("sixth-price");
    const totalPriceELement = document.getElementById("total-price");
    const totalPriceString = totalPriceELement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    
    const newTotalPrice = totalPrice + sixthCardPrice;

    setTotalPrice("total-price",newTotalPrice);
    if(newTotalPrice > 0){
        document.getElementById("btn-purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-purchase").setAttribute("disabled", true);
    }
    if(newTotalPrice >= 200){
        document.getElementById("apply-btn").removeAttribute("disabled")
        document.getElementById("apply-btn").addEventListener("click", function(){
            const inputElement = document.getElementById("input-field");
            const inputValue = inputElement.value;
            inputElement.value = "";
            if(inputValue === "SELL200"){
                const discountFloat = newTotalPrice * 0.2;
                const discount = discountFloat.toFixed(2);
            
                setTotalPrice("discount",discount);
                const total = newTotalPrice - discount;
                setTotalPrice("total",total);
            }
            else{
                setTotalPrice("total", newTotalPrice)
            }

        })
    }
    else{
        document.getElementById("apply-btn").setAttribute("disabled", true)
        setTotalPrice("total", newTotalPrice)    
    }

})
document.getElementById("seventh").addEventListener("click", function(){
    const itemName = eachItemName("seventh-name");
    const seventhCardPrice = eachCardPrice("seventh-price");
    const totalPriceELement = document.getElementById("total-price");
    const totalPriceString = totalPriceELement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    
    const newTotalPrice = totalPrice + seventhCardPrice;

    setTotalPrice("total-price",newTotalPrice);
    if(newTotalPrice > 0){
        document.getElementById("btn-purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-purchase").setAttribute("disabled", true);
    }
    if(newTotalPrice >= 200){
        document.getElementById("apply-btn").removeAttribute("disabled")
        document.getElementById("apply-btn").addEventListener("click", function(){
            const inputElement = document.getElementById("input-field");
            const inputValue = inputElement.value;
            inputElement.value = "";
            if(inputValue === "SELL200"){
                const discountFloat = newTotalPrice * 0.2;
                const discount = discountFloat.toFixed(2);
            
                setTotalPrice("discount",discount);
                const total = newTotalPrice - discount;
                setTotalPrice("total",total);
            }
            else{
                setTotalPrice("total", newTotalPrice)
            }

        })
    }
    else{
        document.getElementById("apply-btn").setAttribute("disabled", true)
        setTotalPrice("total", newTotalPrice)    
    }

})
document.getElementById("eighth").addEventListener("click", function(){
    const itemName = eachItemName("eighth-name");
    const eighthCardPrice = eachCardPrice("eighth-price");
    const totalPriceELement = document.getElementById("total-price");
    const totalPriceString = totalPriceELement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    
    const newTotalPrice = totalPrice + eighthCardPrice;

    setTotalPrice("total-price",newTotalPrice);
    if(newTotalPrice > 0){
        document.getElementById("btn-purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-purchase").setAttribute("disabled", true);
    }
    if(newTotalPrice >= 200){
        document.getElementById("apply-btn").removeAttribute("disabled")
        document.getElementById("apply-btn").addEventListener("click", function(){
            const inputElement = document.getElementById("input-field");
            const inputValue = inputElement.value;
            inputElement.value = "";
            if(inputValue === "SELL200"){
                const discountFloat = newTotalPrice * 0.2;
                const discount = discountFloat.toFixed(2);
            
                setTotalPrice("discount",discount);
                const total = newTotalPrice - discount;
                setTotalPrice("total",total);
            }
            else{
                setTotalPrice("total", newTotalPrice)
            }

        })
    }
    else{
        document.getElementById("apply-btn").setAttribute("disabled", true)
        setTotalPrice("total", newTotalPrice)    
    }

})
document.getElementById("ninth").addEventListener("click", function(){
    const itemName = eachItemName("ninth-name");
    const ninthCardPrice = eachCardPrice("ninth-price");
    const totalPriceELement = document.getElementById("total-price");
    const totalPriceString = totalPriceELement.innerText;
    const totalPrice = parseFloat(totalPriceString);
    
    const newTotalPrice = totalPrice + ninthCardPrice;

    setTotalPrice("total-price",newTotalPrice);
    if(newTotalPrice > 0){
        document.getElementById("btn-purchase").removeAttribute("disabled");
    }
    else{
        document.getElementById("btn-purchase").setAttribute("disabled", true);
    }
    if(newTotalPrice >= 200){
        document.getElementById("apply-btn").removeAttribute("disabled")
        document.getElementById("apply-btn").addEventListener("click", function(){
            const inputElement = document.getElementById("input-field");
            const inputValue = inputElement.value;
            inputElement.value = "";
            if(inputValue === "SELL200"){
                const discountFloat = newTotalPrice * 0.2;
                const discount = discountFloat.toFixed(2);
            
                setTotalPrice("discount",discount);
                const total = newTotalPrice - discount;
                setTotalPrice("total",total);
            }
            else{
                setTotalPrice("total", newTotalPrice)
            }

        })
    }
    else{
        document.getElementById("apply-btn").setAttribute("disabled", true)
        setTotalPrice("total", newTotalPrice)    
    }

})

document.getElementById("btn-home").addEventListener("click", function(){
    window.location.href = "index.html"
})