
//the constants of the ramen data
const ramens = [
    { id: 1, name: "Gyukotsu Ramen", restaurant: "Ichiran", image: "./images/gyukotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Shoyu Ramen", restaurant: "Menya", image: "./images/shoyu.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Nirvana Ramen", restaurant: "Ramen-ya", image: "./images/nirvana.jpg", rating: 9, comment: "Best ramen in town!" },
    { id: 4, name: "Naruto Ramen", restaurant: "Hidden frost", image: "./images/naruto.jpg", rating: 5, comment: "Very good!" },
    { id: 5, name: "Kojiro Ramen", restaurant: "zaik-cho", image: "./images/kojiro.jpg", rating: 7, comment: "Actually good" },
 ];


 //function to make the images clickable to be displayed
 function handleClick(event) {
    const ramenId = event.target.dataset.id;
    const selectedRamen = ramens.find(ramen => ramen.id == ramenId);

    if (selectedRamen) {
        
        document.querySelector("#deet-image img").src = selectedRamen.image;
        document.querySelector("#deet-text h4").textContent = selectedRamen.name;
        document.querySelector("#deet-text p").textContent = selectedRamen.restaurant;
        document.querySelector("#deet-rating p").textContent = `${selectedRamen.rating}/10`;
        document.querySelector("#deet-comment p").textContent = selectedRamen.comment;
    }
}

//display ramen upon clicking on ramen-deet div
function displayRamens() {
    const ramenMenu = document.querySelector(".images"); 
    ramenMenu.innerHTML = ""; 

    ramens.forEach(ramen => {
        const img = document.createElement("img"); 
        img.src = ramen.image; 
        img.alt = ramen.name; 
        img.dataset.id = ramen.id; 

        img.addEventListener("click", handleClick);

        ramenMenu.appendChild(img);
    });
}

document.addEventListener("DOMContentLoaded", displayRamens);



//adding new ramen to the list
document.addEventListener("DOMContentLoaded", () => {
    const ramenContainer = document.querySelector(".images");
    const ramenDetails = document.getElementById("deet-image img");
    const ramenTitle = document.querySelector("#deet-text h4");
    const ramenRestaurant = document.querySelector("#deet-text p");
    const ramenRating = document.querySelector("#deet-rating p");
    const ramenComment = document.querySelector("#deet-comment p");
    
    const createBtn = document.getElementById("createbtn");

//prevents reloading the page by mistake
    createBtn.addEventListener("click", (e) => {
        e.preventDefault();


        const name = document.getElementById("nameput").value;
        const restaurant = document.getElementById("restaurantput").value;
        const image = document.getElementById("imageput").value;
        const rating = document.getElementById("rateput").value;
        const comment = document.getElementById("commentput").value;

        if (!name || !restaurant || !image || !rating || !comment) {
            alert("Please fill in all fields!");
            return;
        }

//creates a new ramen dish with data you put in
        const newRamen = { name, restaurant, image, rating, comment };

//this adds the image you put in to the rest of the images on top
        const newRamenImg = document.createElement("img");
        newRamenImg.src = image;
        newRamenImg.alt = name;


        newRamenImg.addEventListener("click", () => {
            ramenDetails.src = newRamen.image;
            ramenTitle.textContent = newRamen.name;
            ramenRestaurant.textContent = newRamen.restaurant;
            ramenRating.textContent = `${newRamen.rating}/10`;
            ramenComment.textContent = newRamen.comment;
        });
// add the image to the display part of the ramen
        ramenContainer.appendChild(newRamenImg);

//this clears the form after clicking create
        document.getElementById("nameput").value = "";
        document.getElementById("restaurantput").value = "";
        document.getElementById("imageput").value = "";
        document.getElementById("rateput").value = "";
        document.getElementById("commentput").value = "";
    });
});



