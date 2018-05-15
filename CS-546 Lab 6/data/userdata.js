let about = {
    "name": "Kajal Khunt",
    "biography": " I have completed my Bachelor of Computer Science(BCA) from Veer Narmad South Gujarat University, India. I have done Master Of Computer Science(MCA) from Gujarat Technological University, India. Currently doing Masters in Computer Science from Stevens Institute Of Technology.\nI have been working as a .Net full-stack developer for 3 year. I have an experience of working in ASP.NET with MVC framework.",
    "favoriteShows": ["Friends", "Science Of Stupid", "Big Boss", "Coffee With Karan","Table For Two"],
    "hobbies": ["Reading", "Listening Music", "Cooking","Travelling"]
  }


  let education =[
    {
        schoolName: "Stevens Institute of Technology",
        degree: "Master of Science in Computer Science",
        favoriteClass: "My Favorite class is CS 573 - Fundamentals of CyberSecurity and CS 546 - Web Programming.",
        favoriteMemory: "Memoral Day is when I was searching Project topic for CS-573 and I have spent around 5 hours."
    },
    {
        schoolName: "Gujarat Technological University",
        degree: "Master of Computer Application (MCA)",
        favoriteClass: "My Favorite class is Progamming in Java.",
        favoriteMemory: "Memoral Day is when my team got A for final year project."
    },
    {
        schoolName: "Veer Narmad South Gujarat University",
        degree: "Bachelor of Computer Application (BCA)",
        favoriteClass: "My Favorite class is Operationg Systems.",
        favoriteMemory: "Memoral Day is when we spend a night before final presentation of project in hosting it."
    }
  ]

  let story={
    "storyTitle": "The Power Of Persistence",
    "story": "The founder of Kentucky Fried Chicken(KFC). He was a military retiree and had nothing to his name, except his mother’s chicken recipe. So what did he do? He took his old sports wagon out and began driving to restaurant after restaurant after restaurant. His intention was to sell the chicken recipe, but he was turned down time and time again, 1,007 times before he received his first yes. That one yes is what made possible Kentucky Fried Chicken possible.\n Harland Sanders was born in 1890 and grew up on a farm in Indiana. When he was 6 years old, Sanders' father died, leaving him to take care of his younger brother and sister while his mom spent long days working. One of these responsibilities was feeding his siblings, and by age 7 he was already a decent cook."
             + "\n His mom remarried when he was 12. Because his new stepfather didn't like the boys around, Sanders' brother was sent to live with an aunt while he was sent to work on a farm about 80 miles away."
             + "\n Sanders soon realized he would rather work all day than go to school, so he dropped out in the seventh grade."
             + "\n His breakthrough came in 1939 when he found that frying his chicken and its signature '11 herbs and spices' in a new device, a pressure cooker (different from the ones used today), resulted in the ideal consistency he had been looking for."
             + "\n In 1952, he made a deal with his restaurateur friend, Pete Harman, to sell his chicken dish as 'Kentucky Fried Chicken' in exchange for a 4-cent royalty on every piece sold. After it became a top-selling item, Sanders made the same deal with several other local restaurants."
             + "\n He sold the location at a loss in 1956, leaving his $105 monthly Social Security check as his only income. Sanders then decided that he was not going to settle for a quiet retirement."
             + "\n By 1963, Sanders was fielding franchise requests without having to put in the legwork, and had more than 600 restaurants across the US and Canada selling Kentucky Fried Chicken. That October, he was approached by John Y. Brown, Jr., 'an aggressive young lawyer' as the New Yorker puts it, and a venture capitalist named Jack C. Massey who wanted to buy the franchise rights."
             + "\n Under the contract, the company Kentucky Fried Chicken would establish its own restaurants around the world and would not compromise the chicken recipe. Sanders was to have a lifetime salary of $40,000 (later upped to $75,000), a seat on the board, majority ownership of KFC's Canadian franchises, and would serve as the company's brand ambassador."
             + "\n Sanders wasn't happy to let go of his baby, but at 75, he decided that it would be best to see his company continue to grow beyond his capacity."
  }

  let exportedMethods ={
      getAbout(){
        return about;
      },
      getEducation(){
        return education;
      },
      getStory(){
        return story;
      }
  }

  module.exports = exportedMethods;