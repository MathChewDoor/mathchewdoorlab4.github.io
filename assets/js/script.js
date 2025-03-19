const dishDetails = {
    burger: {
        title: "Classic Cheeseburger",
        description: "A juicy beef patty topped with melted cheese, fresh lettuce, tomato, and our signature sauce.",
        image: "assets/burgerburger.jpg"
    },
    pizza: {
        title: "Pepperoni Pizza",
        description: "A crispy crust loaded with rich tomato sauce, mozzarella cheese, and spicy pepperoni slices.",
        image: "assets/pizzapizza.jpg"
    },
    pasta: {
        title: "Creamy Alfredo Pasta",
        description: "Delicious fettuccine pasta tossed in a rich, creamy Alfredo sauce with grilled chicken.",
        image: "assets/pastapasta.jpg"
    },
    sandwich: {
        title: "Grilled Chicken Sandwich",
        description: "A freshly grilled chicken breast with lettuce, tomato, and garlic aioli on a toasted bun.",
        image: "assets/sandwichsandwich.jpg"
    }
};

function showDetails(cuisine) {
    if (dishDetails[cuisine]) {
        // Hide main menu
        document.getElementById("main-menu").classList.add("blur");

        // Show details
        const detailsDiv = document.getElementById("details");
        detailsDiv.classList.add("show");
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

        // Change content dynamically
        document.getElementById("dish-title").textContent = dishDetails[cuisine].title;
        document.getElementById("dish-description").textContent = dishDetails[cuisine].description;
        const dishImage = document.getElementById("dish-image");
        dishImage.src = dishDetails[cuisine].image;
        dishImage.style.width = "100%";
        dishImage.style.maxWidth = "300px";
        dishImage.style.borderRadius = "10px";
        dishImage.style.margin = "10px 0";

        // Change background
        document.body.classList.add("details-open");
    }
}

function goBack() {
    document.getElementById("main-menu").classList.remove("blur");
    document.getElementById("details").classList.remove("show");
    document.getElementById("details").style.display = "none";
    document.body.classList.remove("details-open");
}
