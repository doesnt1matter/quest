document.getElementById("button").addEventListener("click", (e) => {
    const code = document.getElementById("input").value.toUpperCase();

    const result = document.getElementById("result")

    console.log(code);
    
    if(code === "3840DA886UY77823KB967BX286E31099IL")
    {
        result.innerHTML = "ПОДАРОК В ШКАФУ НА ВЕРХНЕЙ ПОЛКЕ!"
        
    }
    else {
        result.innerHTML = "НЕПРАВИЛЬНЫЙ КОД"
    }
})