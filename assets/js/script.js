const dishDetails = {
    burger: {
        title: "Classic Cheeseburger",
        description: "A juicy beef patty topped with melted cheese, fresh lettuce, tomato, and our signature sauce.",
        image: "assets/img/burgerburger.jpg"
    },
    pizza: {
        title: "Pepperoni Pizza",
        description: "A crispy crust loaded with rich tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        image: "assets/img/pizzapizza.jpg"
    },
    pasta: {
        title: "Creamy Alfredo Pasta",
        description: "Delicious fettuccine pasta tossed in a rich, creamy Alfredo sauce with grilled chicken.",
        image: "assets/img/pastapasta.jpg"
    },
    sandwich: {
        title: "Grilled Chicken Sandwich",
        description: "A freshly grilled chicken breast with lettuce, tomato, and garlic aioli on a toasted bun.",
        image: "assets/img/sandwichsandwich.jpg"
    }
};

function showDetails(cuisine) {
    if (dishDetails[cuisine]) {
        document.getElementById("main-menu").classList.add("blur");

        const detailsDiv = document.getElementById("details");
        detailsDiv.style.display = "flex";
        detailsDiv.style.flexDirection = "column";
        detailsDiv.style.alignItems = "center";
        detailsDiv.style.justifyContent = "center";
        detailsDiv.style.position = "fixed";
        detailsDiv.style.top = "50%";
        detailsDiv.style.left = "50%";
        detailsDiv.style.transform = "translate(-50%, -50%)";
        detailsDiv.style.width = "80%";
        detailsDiv.style.maxWidth = "500px";
        detailsDiv.style.background = "rgba(0, 0, 0, 0.8)"; 
        detailsDiv.style.color = "#ffffff"; 
        detailsDiv.style.padding = "20px";
        detailsDiv.style.borderRadius = "10px";
        detailsDiv.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";

        document.getElementById("dish-title").textContent = dishDetails[cuisine].title;
        document.getElementById("dish-description").textContent = dishDetails[cuisine].description;

        const dishImage = document.getElementById("dish-image");
        dishImage.src = dishDetails[cuisine].image;
        dishImage.style.width = "100%";
        dishImage.style.maxWidth = "300px";
        dishImage.style.borderRadius = "10px";
        dishImage.style.margin = "10px 0";

        detailsDiv.classList.add("show");
        document.body.classList.add("details-open");
    }
}

function goBack() {
    document.getElementById("main-menu").classList.remove("blur");
    document.getElementById("details").classList.remove("show");
    document.getElementById("details").style.display = "none";
    document.body.classList.remove("details-open");
}
