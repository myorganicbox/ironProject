const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/organicbox");
const Basket = require("./models/Basket");
const TYPES = require ('./models/Basket-types');
const Meal= require("./models/Meal");

const baskets=[
{
 category: "Single",
 quantity: 3, // in Mongoose : agregar un MIN y un MAX
 price: 300,
 name: "Single Box",
 images:["https://cdn.shopify.com/s/files/1/0561/2921/products/CANASTA_DE_VERDURAS_CHICA_SIN_FONDO_large.jpg?v=1515891633" ],
 description: "Feeds 1 person for 3 nights"
},
   {
     category: "Single",
     quantity: 5, // in Mongoose : agregar un MIN y un MAX
     price: 500,
     name: "Single Box",
     images:["https://cdn.shopify.com/s/files/1/0561/2921/products/CANASTA_DE_VERDURAS_CHICA_SIN_FONDO_large.jpg?v=1515891633"],
     description: "Feeds 1 person for 5 nights"
    },
   {
        category: "Couple",
        quantity: 3, // in Mongoose : agregar un MIN y un MAX
        price: 600,
        name: "Couple Box",
        images:["https://cdn.shopify.com/s/files/1/0561/2921/products/CANASTA_DE_VERDURAS_CHICA_SIN_FONDO_large.jpg?v=1515891633"],
        description: "Feeds 2 persons for 3 nights"
       },
    {
        category: "Couple",
        quantity: 5, // in Mongoose : agregar un MIN y un MAX
        price: 900,
        name: "Couple Box",
        images:["https://cdn.shopify.com/s/files/1/0561/2921/products/CANASTA_DE_VERDURAS_CHICA_SIN_FONDO_large.jpg?v=1515891633"],
        description: "Feeds 2 persons for 5 nights"
       },
    {
        category: "Family",
        quantity: 3, // in Mongoose : agregar un MIN y un MAX
        price: 800,
        name: "Family Box",
        images:["https://cdn.shopify.com/s/files/1/0561/2921/products/CANASTA_DE_VERDURAS_CHICA_SIN_FONDO_large.jpg?v=1515891633"],
        description: "Feeds 4 persons for 3 nights"
       },
    {
        category: "Family",
        quantity: 5, // in Mongoose : agregar un MIN y un MAX
        price: 1200,
        name: "Family Box",
        images:["https://cdn.shopify.com/s/files/1/0561/2921/products/CANASTA_DE_VERDURAS_CHICA_SIN_FONDO_large.jpg?v=1515891633"],
        description: "Feeds 4 persons for 5 nights"
       },

    ];


    Basket.create(baskets, function(err, result){
        if(err) console.log("no guardado");
        console.log("lo lograste!", result);
    });

const meals = [
    {
    name: "Smoky Chickpeas & Quinua",
    description: "Chickpeas in a smoky, mildly spiced tomato sauce, with quinoa and garnished with fresh coriander." ,
    image: ["https://cdn.shopify.com/s/files/1/1044/2600/products/IMG_2622_grande.jpg?v=1519550570"]
    },
    {
    name: "Pad Thai with Jackfruit",
    description: "A Thai rice noodle dish with carrots, bean sprouts, shallots and roasted shredded jackfruit, in a tamarind and lime sauce, topped with crushed peanuts, fresh coriander, spring onions and red chilli.." ,
    image: ["https://cdn.shopify.com/s/files/1/1044/2600/products/IMG_1690_grande.jpg?v=1497784729"]
        },
    {
    name: "Biryani",
    description: "This south Asian dish is made with basmati rice, red capsicums, tofu, peas and all the traditional Indian spices such as garam masala, turmeric and cumin seeds, garnished with golden raisins. ." ,
    image: ["https://cdn.shopify.com/s/files/1/1044/2600/products/IMG_9904_grande.jpg?v=1489303829"]
         },
    {
    name: "Burritos",
    description: "A family favourite that is super quick to make, multigrain wraps filled with refried beans, brown rice, corn, lettuce, tomatoes and guacamole." ,
    image: ["https://cdn.shopify.com/s/files/1/1044/2600/products/IMG_9960_grande.jpg?v=1489304053"]
        },
    {
    name: "Ruby Quinoa and lentil salad    ",
    description: "Shredded beetroot and carrots with red quinoa, puy lentils, fresh mint and coriander, with a sesame oil and rice vinaigrette, garnished with slivered almonds." ,
    image: ["https://cdn.shopify.com/s/files/1/1044/2600/products/IMG_2622_grande.jpg?v=1519550570"]
        },
    {
    name: "Roasted Red Capsicum Pasta",
    description: "Spaghetti in a creamy sauce made by blending cashews and roasted red capsicums together, with nutritional yeast and chilli flakes." ,
    image: ["https://cdn.shopify.com/s/files/1/1044/2600/products/IMG_1690_grande.jpg?v=1497784729"]
        },
    {
    name: "Chickpea Tikka Massala",
    description: "A tikka masala sauce made with tomatoes, coconut cream, kumara and Indian spices, served with brown rice and fresh coriander." ,
    image: ["https://cdn.shopify.com/s/files/1/1044/2600/products/IMG_9904_grande.jpg?v=1489303829"]
      },
    {
    name: "Portobello Fajita Bowl",
    description: "Smoky Quinoa, topped with pan fried chipotle spiced red and yellow capsicums, portobello mushrooms, red onions and baby spinach, drizzled with a cashew sour cream and a lime wedge to squeeze." ,
    image: ["https://cdn.shopify.com/s/files/1/1044/2600/products/IMG_9960_grande.jpg?v=1489304053"]
      },
        
]

Meal.create(meals, function(err, result){
    if(err) console.log("no guardado");
    console.log("lo lograste!", result);
});
