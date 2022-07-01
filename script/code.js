let property = [
    {
        name: document.getElementById("property1"),
        type: "Apartment",
        location: "City Centre",
        bedrooms: 1,
        price: 2250000
    },
    {
        name: document.getElementById("property2"),
        type: "Apartment",
        location: "Camps Bay",
        bedrooms: 2,
        price: 10500000
    },
    {
        name: document.getElementById("property3"),
        type: "House",
        location: "Beverly Hills",
        bedrooms: 5,
        price: 9600000
    },
    {
        name: document.getElementById("property4"),
        type: "House",
        location: "Sea Point",
        bedrooms: "3",
        price: 6850000
    },
    {
        name: document.getElementById("property5"),
        type: "House",
        location: "Clifton",
        bedrooms: "4",
        price: 52000000
    },
    {
        name: document.getElementById("property6"),
        type: "House",
        location: "Bishopscourt Village",
        bedrooms: "3",
        price: 8150000
    },
    {
        name: document.getElementById("property7"),
        type: "Apartment",
        location: "Clifton",
        bedrooms: 4,
        price: 32000000
    },
    {
        name: document.getElementById("property8"),
        type: "House",
        location: "Clifton",
        bedrooms: 7,
        price: 3950000
    },
    {
        name: document.getElementById("property9"),
        type: "Apartment",
        location: "Camps Bay",
        bedrooms: 2,
        price: 17250000
    },
    {
        name: document.getElementById("property10"),
        type: "Apartment",
        location: "Camps Bay",
        bedrooms: 3,
        price: 55950000
    }
];

function filterPrice() {
    
    
    // let priceRange2 = {
        //     lower: 0,
        //     upper: 10000000
        // };
        
        // let filteredProperty2 = property.filter(function (property) {
            //     return property.price >= this.lower && property.price <= this.upper;
            // }, priceRange2);
            
            // console.log(filteredProperty2);
            if (condition) {
                let priceRange1 = {
                    lower: 0,
                    upper: 1000000
                };
                
                let filteredProperty1 = property.filter(function (property) {
                    return property.price >= this.lower && property.price <= this.upper;
                }, priceRange1);
                
                console.log(filteredProperty1);
    } else if(condition){
        
    }else{
      
    }
    }

// initiate(newPlots);

// function filteredType(e) {
//     const type = e.target.value;
//     if (type === "all") {
//       return initiate(newPlots);
//     }
//     const filtered = newPlots.filter((property) =>{
//         return property.Type === type
//     } );
    
//     return initiate(filtered);
//   }
// // ------------------------------
//   function filteredLocation(e) {
//     const location = e.target.value;
//     if (location === "all") {
//       return initiate(newPlots);
//     }
//     console.log(filteredLocation)
//     const filtered = newPlots.filter((property) =>{
//         return property.Location === location
//     } );
    
//     return initiate(filtered);
//   }
// // ------------------------------
//   function filteredBedroom(e) {
//     const bedroom = e.target.value;
//     if (bedroom === "all") {
//       return initiate(newPlots);
//     }
//     const filtered = newPlots.filter((property) =>{
//         return property.Bedroom === bedroom
//     } );
    
//     return initiate(filtered);
//   }

//   function filteredPrice(e) {
//     const price = e.target.value;
//     if (price === "all") {
//       return initiate(newPlots);
//     }
//     const filtered = newPlots.filter((property) =>{
//         return property.Price === price
//     } );
    
//     return initiate(filtered);
//   }