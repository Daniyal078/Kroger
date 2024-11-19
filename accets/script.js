(function () {
    document.querySelectorAll(".quantity").forEach(function (quantityContainer) {
        const minusBtn = quantityContainer.querySelector(".minus");
        const plusBtn = quantityContainer.querySelector(".plus");
        const inputBox = quantityContainer.querySelector(".input-box");

        updateButtonStates();

        quantityContainer.addEventListener("click", handleButtonClick);
        inputBox.addEventListener("input", handleQuantityChange);

        function updateButtonStates() {
            const value = parseInt(inputBox.value);
            minusBtn.disabled = value <= 1;
            plusBtn.disabled = value >= parseInt(inputBox.max);
        }

        function handleButtonClick(event) {
            if (event.target.classList.contains("minus")) {
                decreaseValue();
            } else if (event.target.classList.contains("plus")) {
                increaseValue();
            }
        }

        function decreaseValue() {
            let value = parseInt(inputBox.value);
            value = isNaN(value) ? 1 : Math.max(value - 1, 1);
            inputBox.value = value;
            updateButtonStates();
            handleQuantityChange();
        }

        function increaseValue() {
            let value = parseInt(inputBox.value);
            value = isNaN(value) ? 1 : Math.min(value + 1, parseInt(inputBox.max));
            inputBox.value = value;
            updateButtonStates();
            handleQuantityChange();
        }

        function handleQuantityChange() {
            let value = parseInt(inputBox.value);
            value = isNaN(value) ? 1 : value;

            console.log("Quantity changed:", value);
        }
    });
})();



let flag = 0
document.querySelector('.shop-btn').addEventListener('click', () => {
    if (flag == 0) {
        document.querySelector('.shop-dropdown').style.top = "20%"
        document.body.style.overflowY = "hidden"
        flag = 1
    } else {
        document.querySelector('.shop-dropdown').style.top = "-1000%"
        document.body.style.overflowY = "scroll"
        flag = 0
    }
})


document.querySelector('.shop-dropdown-cut').addEventListener('click', () => {
    document.querySelector('.shop-dropdown').style.top = "-1000%"
    document.body.style.overflowY = "scroll"
})

document.querySelector('.mob-search-tog').addEventListener('click', () => {
    document.querySelector('.mob-search').style.top = '0'
    document.querySelector('.mask').style.display = 'block'
})
document.querySelector('.mob-search-cut').addEventListener('click', () => {
    document.querySelector('.mob-search').style.top = '-100%'
    document.querySelector('.mask').style.display = 'none'
})


document.querySelector('.side-nav-tog').addEventListener('click', function () {
    document.querySelector('.mob-sidebar').style.left = 0;
    document.querySelector('.mask').style.display = "block";
    document.body.style.overflowY = "hidden";
})

document.querySelector('.mob-sidebar-close').addEventListener('click', () => {
    document.querySelector('.mob-sidebar').style.left = "-100%";
    document.querySelector('.mask').style.display = 'none'
    document.body.style.overflowY = "scroll";
})


document.querySelector('.cart-tog').addEventListener('click', function () {
    document.querySelector('.cart-sidebar').style.right = 0;
    document.querySelector('.cart-releated-product').style.right = "350px";
    document.querySelector('.mask').style.display = "block";
    document.body.style.overflowY = "hidden";
})

document.querySelector('.sideNavClose').addEventListener('click', function () {
    document.querySelector('.cart-sidebar').style.right = "-1000%";
    document.querySelector('.cart-releated-product').style.right = "-200%";
    document.querySelector('.mask').style.display = "none";
    document.body.style.overflowY = "scroll";
})

document.querySelector('.cart-releated-product-close').addEventListener('click', function () {
    document.querySelector('.cart-releated-product').style.right = "-200%";
})


document.querySelector('.mask').addEventListener('click', () => {
    document.querySelector('.cart-releated-product').style.right = "-200%";
    document.querySelector('.cart-sidebar').style.right = "-1000%";
    document.querySelector('.mob-sidebar').style.left = "-100%";
    document.querySelector('.mask').style.display = "none";
    document.querySelector('.mob-search').style.top = '-100%'
    document.body.style.overflowY = "scroll";
})











