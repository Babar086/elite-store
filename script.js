// Elite Store JavaScript

// Page Load Effect
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow =
        "0 0 25px rgba(0,191,255,0.5)";
    } else {
        header.style.boxShadow = "none";
    }

});

// Add To Cart Buttons

const cartButtons =
document.querySelectorAll(".product-card button");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
        "Product Added To Cart Successfully!"
        );

    });

});

// Newsletter Subscription

const newsletterBtn =
document.querySelector(".newsletter button");

newsletterBtn.addEventListener("click", () => {

    const email =
    document.querySelector(".newsletter input");

    if(email.value.trim() !== ""){

        alert(
        "Thank You For Subscribing To Elite Store!"
        );

        email.value = "";

    }
    else{

        alert(
        "Please Enter Your Email Address"
        );

    }

});

// Product Hover Animation

const products =
document.querySelectorAll(".product-card");

products.forEach(product => {

    product.addEventListener("mouseenter", () => {

        product.style.transform =
        "translateY(-10px)";

    });

    product.addEventListener("mouseleave", () => {

        product.style.transform =
        "translateY(0px)";

    });

});

// Category Hover Animation

const categories =
document.querySelectorAll(".category-card");

categories.forEach(category => {

    category.addEventListener("mouseenter", () => {

        category.style.transform =
        "scale(1.05)";

    });

    category.addEventListener("mouseleave", () => {

        category.style.transform =
        "scale(1)";

    });

});

// Console Message

console.log(
"Elite Store Website Loaded Successfully"
);
