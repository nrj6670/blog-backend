const get = (request, response) => {
   
    const fooddata= [
        {
            id:"11",
            category: "Food",
            name: "Masala Dosa",
            img: "https://media.istockphoto.com/photos/plain-dosa-dish-picture-id1318571167?b=1&k=20&m=1318571167&s=170667a&w=0&h=y6-UzyZaDysAXmkUeA9TJyxgkGRxccygadwNS_26WZM=",
            about: "Masala dosa is a variation of the popular South Indian dosa, which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar."
        },
        {
            id:"12",
            category: "Food",
            name: "Pizza",
            img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            about: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes called a pizzetta."
        },
        {
            id:"13",
            category: "Food",
            name: "Risoto",
            img: "https://media.istockphoto.com/photos/cheese-risotto-traditional-italian-recipe-picture-id1319617759?b=1&k=20&m=1319617759&s=170667a&w=0&h=1Sao2UdQ7LqrYp5Uuup4ESYgvZxzs529H17uhnlemDA=",
            about: "Risotto is a northern Italian rice dish cooked with broth until it reaches a creamy consistency. The broth can be derived from meat, fish, or vegetables. Many types of risotto contain butter, onion, white wine, and Parmigiano-Reggiano. It is one of the most common ways of cooking rice in Italy."
        },
        {
            id:"14",
            category: "Food",
            name: "Paneer",
            img: "https://media.istockphoto.com/photos/green-peas-or-matar-paneer-curry-picture-id1325272041?b=1&k=20&m=1325272041&s=170667a&w=0&h=0bXXbN1Udw9siz-pPEDzYSZcY18_3G8D0dz1uosGkgY=",
            about: "Paneer, also known as ponir or Indian cottage cheese, is a fresh acid-set cheese common in the Indian subcontinent made from cow or buffalo milk. It is a non-aged, non-melting soft cheese made by curdling milk with a fruit- or vegetable-derived acid, such as lemon juice.Super rich in protein, having paneer for breakfast makes you feel full for longer. It gets digested slowly and increases the amount of feeling full hormones like GLP-1, PYY and CCK. Apart from protein, paneer is also rich in fat, iron, calcium and magnesium, which makes it an even healthier choice."
        },
        {
            id:"15",
            category: "Food",
            name: "Gelato",
            img: "https://media.istockphoto.com/photos/chocolate-and-vanilla-ice-cream-still-life-picture-id946097922?b=1&k=20&m=946097922&s=170667a&w=0&h=2_zCbC1xPbHD0K80678SmF6ONtPxP6h-lRTsLOfU_pE=",
            about: "Gelato is a frozen dessert of Italian origin. Artisanal gelato in Italy generally contains 6-10% butterfat, which is lower than other styles of frozen dessert.Indulge guilt free with our 96% fat free & 100% vegetarian range of gelato (Italian ice cream), sorbet, yogurt & gelato cakes."
        },
    ]
  
    response.send(fooddata);
}

module.exports.getfoodDetails = get