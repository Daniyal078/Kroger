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




document.querySelector('.cart-tog').addEventListener('click', function () {
    document.querySelector('.cart-sidebar').style.right = 0;
    document.querySelector('.mask').style.display = "block";
    document.body.style.overflowY = "hidden";
})

document.querySelector('.sideNavClose').addEventListener('click', function () {
    document.querySelector('.cart-sidebar').style.right = "-1000%";
    document.querySelector('.mask').style.display = "none";
    document.body.style.overflowY = "scroll";
})


document.querySelector('.mask').addEventListener('click', () => {
    document.querySelector('.cart-sidebar').style.right = "-1000%";
    document.querySelector('.mask').style.display = "none";
    document.body.style.overflowY = "scroll";
})