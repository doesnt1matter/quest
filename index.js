setTimeout(() => {
    document.querySelector(".loading").classList.add("_disabled")
}, [1300])

let button = document.querySelector(".main-code__button")
button.addEventListener("click", () => {
    checkCode()
})

function checkCode() {
    let inputValue = document.getElementById("1").value.toUpperCase()

    let success = document.querySelector(".container__success")
    let error = document.querySelector(".container__error")

    document.body.classList.add("_blur")

    if(inputValue === "2EW5RST0") {
        success.classList.add("_active")
    }
    else {
        error.classList.add("_active")

        setTimeout(() => {
            error.classList.remove("_active")
            document.body.classList.remove("_blur")
        } , [2000])
    }    
}