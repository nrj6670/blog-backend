const get = (request, response) => {
   
    const fitnessdata= [
        {
            id:"16",
            category: "Fitness",
            name: "Stanford",
            img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            about: "When Zahrt moved from London to the San Francisco Bay Area, she experienced a culture shock. In terms of her regular exercise routines in England, she had biked to work and had done some yoga and housework and had thought that was plenty. But in California, she noticed fitness studios on practically every corner and a focus on vigorous activities.Based on this experience, she developed the idea that no matter how active people actually are, they can hold the mindset that their physical activity level is adequate and healthy, or inadequate and unhealthy, and that these mindsets may have real consequences"
        },
        {
            id:"17",
            category: "Fitness",
            name: "Khabib Numragodev",
            img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
            about: "Upper body workouts consist of exercises that cater to the physical requirements of the arms, core, chest, back, and shoulders.Khabib Nurmaogomedov has displayed exceptional upper body strength whenever he has stepped inside the Octagon. The domination that he brings, along with his grappling, arises from impressive strength and skills. Let's break down the UFC Lightweight Champion's favorite upper body workouts"
        
        
        },
        {
            id:"18",
            category: "Fitness",
            name: "Conor Mcgregor",
            img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            about: "People are so caught in a routine, doing the same things over and over. I want to be an expert in different fighting styles, new training methods, new ways of thinking. Your muscles, are extremely adaptable and very quickly become used to the stimulus – that’s weights to you and I. Can’t lift any heavier? Not seeing big enough physical improvements"
        },
        {
            id:"19",
            category: "Fitness",
            name: "Luka Donic",
            img: "https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            about: "Keep in mind, former number one overall pick Kwame Brown was ripped. Former Maverick and number two overall pick Michael Kidd-Gilchrist looks like he could compete in any Olympic sport he wanted. Neither have Luka’s skills.Westbrook is hardly out of shape. But it still takes him some time to start playing his best basketball. Maybe Luka is the same.Regardless, it just takes Luka a little while to get going. We all wish that he’d show up to start the season in amazing shape and demolish the league from start to finish."
        },
        {
            id:"20",
            category: "Fitness",
            name: "CDC",
            img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
            about: "Exercising regularly, every day if possible, is the single most important thing you can do for your health. In the short term, exercise helps to control appetite, boost mood, and improve sleep. In the long term, it reduces the risk of heart disease, stroke, diabetes, dementia, depression, and many cancers. At least 60 minutes of physical activity a day, most of which should be devoted to aerobic exercise. Children should do vigorous exercise and strength training, such as push-ups or gymnastics, on at least three days every week."
        },
        
    ]
  
    res.send(fitnessdata);
}

module.exports.getfitnessDetails = get