//creating an array of objects

const plants = [

  {
    "name": "Cactus plant",
    "price": 150,
    "description": "The cactus plant is a unique and diverse group of succulent plants known for their ability to thrive in arid and desert environments. They belong to the family Cactaceae and are native to the Americas, from Canada to Argentina. Cacti are renowned for their water-storing capabilities, allowing them to survive in harsh conditions with minimal rainfall.",
    "image": "imgOne 1 (no bg).png"
  },
    
  {
    "name": "Lucky Bamboo",
    "price": 300,
    "description": "Lucky Bamboo, also known as Dracaena sanderiana or Ribbon Plant, is not actually a bamboo plant but rather a member of the Dracaena family. It is a popular and widely cultivated indoor plant that has become a symbol of good luck and prosperity in various cultures, particularly in East Asia.",
    "image": "imgTwo 1 (no bg).png"
  },
  {
    "name": "Zamioculcas zamiifolia",
    "price": 160,
    "description": "Zamioculcas zamiifolia, commonly known as the ZZ plant or Zanzibar Gem, is a popular and resilient houseplant that belongs to the Araceae family. Native to eastern Africa, particularly Zanzibar, Tanzania, it has gained widespread popularity as an indoor plant due to its attractive appearance and ability to thrive in low-light and neglectful conditions.",
    "image": "imgThree 1 (no bg).png"
  },
  {
    "name": "Bonsai tree",
    "price": 1200,
    "description": "A bonsai tree is a miniature, artistic representation of a fully-grown tree that is carefully cultivated in a shallow container. The art of bonsai originated in China over a thousand years ago and was later refined and popularized in Japan. The word bonsai itself translates to planted in a container or tray planting.",
    "image": "imgFour 1 (no bg).png"
  },
  {
    "name": "Orchids",
    "price": 230,
    "description": "Orchids are a diverse and beautiful group of flowering plants belonging to the Orchidaceae family, one of the largest and most diverse plant families in the world. With over 25,000 species and thousands of hybrids, orchids are found on every continent except Antarctica, thriving in a wide range of habitats, from rainforests to deserts.",
    "image": "imgFive 1 (no bg).png"
  }
    
];


$(document).ready(function(){
//select the plants container and add html from our template 
    

//you have to call it only when ready/loaded
    loadPlants();
});


function loadPlants () {
    for (let i = 0; i < plants.length; i++) {
        console.log(plants[i]);

        $("#plantsContainer").append($("#plantCardTemplate").html());

        let currentChild = $("#plantsContainer").children().eq(i+1);

        $(currentChild).find(".card-img-top").attr('src','assets/' + plants[i].image);

        $(currentChild).find("#nameText").text(plants[i].name);

        $(currentChild).find("#priceText").text('R ' + plants[i].price);

        $(currentChild).find("#descriptionText").text(plants[i].description);

        $(currentChild).find("#descriptionText").hide();
        
        
    }
}


$("#plantsContainer").on('click', '.card', function(){

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

});

