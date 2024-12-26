const sampleListings = [
  {
    title: "Gatthering Innovation",
    description:
      " A room in a hotel where a number of people can have a meeting",
      categories:"meeting blocks",
    image: {
      filename: "listingimage",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f5c8f561967137.5a8058c42849b.jpg",
    },
    price: 1000,
    location: "Indore",
    country: "India",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Installed meeting rooms for its corporate guests",
      categories:"meeting blocks",
 
    image: {
      filename: "listingimage",
      url: "https://blog.wearespaces.com/wp-content/uploads/2019/03/Screenshot-2019-03-26-at-5.17.01-PM-1.png",
    },
    price: 1200,
    location: "white hills East Mumbai",
    country: "India",
  },
  {
    title: "Meet gallary",
    description:
      "A space set aside for teams to discuss issues, collaborate on projects,",
      categories:"meeting blocks",

    image: {
      filename: "listingimage",
      url: "https://www.touchwindow.it/frontend/img/_solutions/meeting-room/touchwindow-meeting-room-banner.jpg",
    },
    price: 1500,
    location: "MP nagar Bhopal",
    country: "India",
  },
  {
    title: "Decision finalize",
    description:
      "Best meeting blocks for you",
      categories:"meeting blocks",

    image: {
      filename: "listingimage",
      url: "https://www.ceosuite.com/wp-content/uploads/2017/10/Kuala-Lumpur-Axiata-Training-Room-1.jpg?x19230",
    },
    price: 2000,
    location: "Delhi",
    country: "India",
  },
  {
    title: "Inspiration Station",
    description:
      "Installed meeting rooms for its corporate guests",
      categories:"meeting blocks",

    image: {
      filename: "listingimage",
      url: "https://www.appliedglobal.com/wp-content/uploads/5-Most-Important-Conference-Room-Technologies-2048x1152.png",
    },
    price: 800,
    location: "kolkata",
    country: "India",
  },
  {
    title: "Creating techs",
    description:
      "Installed meeting rooms for its corporate guests",
      categories:"meeting blocks",

    image: {
      filename: "listingimage",
      url: "https://www.workspace.co.uk/media/properties/the%20leather%20market/workspace-15.jpg?width=1200&height=630&mode=crop&format=jpeg&quality=60",
    },
    price: 2000,
    location: "jabalpur",
    country: "India",
  },
  {
    title: "Rustic Cabin",
    description:
      "Installed meeting rooms for its corporate guests",
      categories:"meeting blocks",

    image: {
      filename: "listingimage",
      url: "https://5.imimg.com/data5/SELLER/Default/2022/4/KN/VZ/DB/141099552/meeting-room-services.jpeg",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury meets",
    description:
      "The strength of the team is each individual member.",
      categories:"meeting blocks",

    image: {
      filename: "listingimage",
      url: "https://i.pinimg.com/originals/fc/f2/fa/fcf2fa7effb8583e6628972f1ee071c0.jpg",
    },
    price: 3500,
    location: "patna",
    country: "India",
  },
  {
    title: "Book to Meet",
    description:
      "including any booking systems or contacts",
      categories:"meeting blocks",

    image: {
      filename: "listingimage",
      url: "https://ballantyneexecutivesuites.com/wp-content/uploads/2015/10/Depositphotos_13534536_original.jpg",
    },
    price: 3000,
    location: "pune",
    country: "India",
  },
  {
    title: "The Achievement Arena",
    description:
      "Best meeting blocks for you",
      categories:"meeting blocks",

    image: {
      filename: "listingimage",
      url: "https://assets.website-files.com/5bf604124fac8067e66a2889/5cc8df3c1273fae158f4642b_meet-space.jpg",
    },
    price: 2000,
    location: "Lukhnow",
    country: "India",
  },
  {
    title: "Meeting solutions",
    description:
      "Best meeting blocks for you",
      categories:"meeting blocks",

    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-gYUUDHTnH3N1zWoLXPbqzifPaj7nlLtZqw&usqp=CAU",
    },
    price: 1800,
    location: "Hyderabad",
    country: "India",
  },
  {
    title: "Private Blocks",
    description:
      "Climate Control: [Specify if the room has heating, air conditioning, or ventilation systems]",
      categories:"meeting blocks",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdjZPCuJwpLcmehFGA22aRRmM4cfdrj0Tieg&usqp=CAU",
    },
    price: 10000,
    location: "Rewa",
    country: "India",
  },
  {
    title: "Charming Meets",
    description:
      "provisions for refreshments, such as water, coffee, tea",
      categories:"meeting blocks",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Wfl8k8bqvjqqa6hpx6Qv60qWqfjglwG7mg&usqp=CAU",
    },
    price: 1800,
    location: "Ahmedabad",
    country: "India",
  },
  {
    title: "The Breakthrough Boardroom",
    description:
      "provisions for refreshments, such as water, coffee, tea",
      categories:"meeting blocks",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jU9If9AE-Q3Kpzl6GPiWTCZnVm1SSrLa3w&usqp=CAU",
    },
    price: 2200,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "The Situation Room",
    description:
      "staying together is progress, and working together is success",
      categories:"meeting blocks",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtZ3UJ-M_ryH3q0O_evLXq2tjGM2bIroGLw&usqp=CAU",
    },
    price: 1100,
    location: "Kota",
    country: "India",
  },
 ];

module.exports = { data: sampleListings };
