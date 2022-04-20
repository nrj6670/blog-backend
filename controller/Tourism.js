const get = (request, response) => {
   
    const tourismdata= [
        {
            id:"6",
            category: "Tourism",
            name: "London",
            img: "https://media.istockphoto.com/photos/big-ben-in-sunny-day-london-picture-id526258817?b=1&k=20&m=526258817&s=170667a&w=0&h=pHAcb5jymEFklxYtG6-mErEkS_EOx2KIxOh4UWJA3aA=",
            about: "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city. Noisy, vibrant and truly multicultural, London is a megalopolis of people, ideas and frenetic energy."
        },{
            id:"7",
            category: "Tourism",
            name: "Paris",
            img: "https://media.istockphoto.com/photos/arc-de-triomphe-from-the-sky-paris-picture-id1324189687?b=1&k=20&m=1324189687&s=170667a&w=0&h=FfUeOeb0NB-sbrNCiu4zCmhsnqCK0nx40D-fY1UFMKM=",
            about: "Also known as the Latin Quarter, the 5th arrondissement is home to the Sorbonne university and student-filled cafes. It's also known for its bookshops, including the famed Shakespeare & Company. Family-friendly attractions include the Jardin des Plantes botanical gardens and the National Museum of Natural History. The stately Panthéon building holds the remains of notables like Voltaire and Marie Curie.A world-class business school, making an impact through an exclusive community of students, alumni, academics and global partners."
        },{
            id:"8",
            category: "Tourism",
            name: "Delhi",
            img: "https://media.istockphoto.com/photos/the-india-gate-in-delhi-picture-id898467608?b=1&k=20&m=898467608&s=170667a&w=0&h=HlThQtBd6DV7ceWb25DBticSPDyKoCUnTfDy1vgQH0A=",
            about: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls. "
        },{
            id:"9",
            category: "Tourism",
            name: "Australia",
            img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVzdHJhbGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
            about: "Australia, officially the Commonwealth of Australia, is a sovereign transcontinental country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands.Australia is the sixth-largest country by land area. Australia is bordered to the west by the Indian Ocean, and to the east by the South Pacific Ocean. "
        },{
            id:"10",
            category: "Tourism",
            name: "California",
            img: "https://media.istockphoto.com/photos/bay-bridge-and-san-francisco-skyline-at-sunset-picture-id476881195?b=1&k=20&m=476881195&s=170667a&w=0&h=mEHJq7rrrlPYy4JmegDVGIBrQ8QW21IFmV0EdSQowPI=",
            about: "California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles. Its terrain includes cliff-lined beaches, redwood forest, the Sierra Nevada Mountains, Central Valley farmland and the Mojave Desert. The city of Los Angeles is the seat of the Hollywood entertainment industry. Hilly San Francisco is known for the Golden Gate Bridge, Alcatraz Island and cable cars."
        },
    ]
        
  
    response.send(tourismdata);
}

module.exports.gettourismDetails = get