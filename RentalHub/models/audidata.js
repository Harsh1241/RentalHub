const sampleListings = [
  {
    title: "IIT Bombay Auditorium",
    description:
    "Elegant auditoriums designed to elevate your event experience.",
    categories:"audi",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533483996897-a8dde9930141?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 5000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "IIT Delhi Auditorium",
    description:
    "State-of-the-art rental auditoriums for seamless presentations.",
    categories:"audi",
    image: {
      filename: "listingimage",
      url: "https://dms.iitd.ac.in/wp-content/uploads/2017/09/Inauguration_2.jpg",
    },
    price: 12000,
    location: "Delhi",
    country: "India",
  },
  {
    title: "IIT Indore",
    description:
    "Flexible spaces adaptable for conferences, seminars, and performances.",
    categories:"audi",
    image: {
      filename: "listingimage",
      url: "https://media.assettype.com/freepressjournal/2023-08/c1a028f0-fb4c-4d32-8de2-bf37178692e2/IIT_Indore__2_.jpeg",
    },
    price: 6000,
    location: "Indore",
    country: "India",
  },
  {
    title: "IIT hyderabad ",
    description:
    "Premium rental auditoriums equipped with top-notch audiovisual technology.",
    categories:"audi",

    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjF_uzoYu5XzMblegk6LMdAlkYe5XgEQ3K5cmWAlbuCcgefvr4ObZkQ_QBOFx9x3yb12Q&usqp=CAU",
    },
    price: 2500,
    location: "Hyderabad",
    country: "India",
  },
  {
    title: "IIT Madras",
    description:
    "Modern auditoriums tailored to meet your event's unique requirements.",
    categories:"audi",

    image: {
      filename: "listingimage",
      url: "https://icandsr.iitm.ac.in/assets/img/halls_pic.JPG",
    },
    price: 18000,
    location: "Madras",
    country: "India",
  },
  {
    title: "IIt Kanpur",
    description:
    "Comfortable and professional settings for impactful presentations.",
    categories:"audi",

    image: {
      filename: "listingimage",
      url: "https://iitk.ac.in/vh/images/gallery/Main-Auditorium/Main-Auditorium.jpg",
    },
    price: 12000,
    location: "Kanpur",
    country: "India",
  },
  {
    title: "Ips Academy Indore",
    description:
    "Spacious rental auditoriums designed to impress your audience.",
    categories:"audi",

    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXuipPYwkuZGYJr5eRqGztx9qXjVheFCR-mg&usqp=CAU",
    },
    price: 9000,
    location: "Indore",
    country: "India",
  },
  {
    title: "Acropolis",
    description:
    "Turnkey solutions for hosting memorable events in our prestigious auditoriums.",
    categories:"audi",

    image: {
      filename: "listingimage",
      url: "https://i0.wp.com/anaxee.com/wp-content/uploads/2023/08/acropolis-event.jpg?fit=700%2C464&ssl=1",
    },
    price: 10000,
    location: "Indore",
    country: "India",
  },
  {
    title: "Medi-caps Indore",
    description:
    "Conveniently located rental auditoriums with customizable seating arrangements.",
    categories:"audi",

    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM412A28_NB9cvr66DP8PdLtbk78fREWpf4g&usqp=CAU",
    },
    price: 13000,
    location: "Indore",
    country: "India",
  },
  {
    title: "DAVV University Indore",
    description:
    "Acoustically optimized auditoriums for crystal-clear sound and immersive experiences.",
    categories:"audi",


    image: {
      filename: "listingimage",
      url: "https://images.collegedunia.com/public/college_data/images/campusimage/1442644862MKR_2524BIG.jpg",
    },
    price: 14000,
    location: "Indore",
    country: "India",
  },
  {
    title: "LNCT Bhopal",
    description:
    "Exquisite rental spaces perfect for hosting cultural events and performances.",
    categories:"audi",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMaDUQOOmeG9wuSNTCP3MeU6MQLplEKyuK8UwohHuXi4cfNL24blyMsoIE76Y1VErKey4&usqp=CAU",
    },
    price: 1800,
    location: "Bhopal",
    country: "India",
  },
  {
    title: "chamelidevi group of institute indore ",
    description:
    "Sleek and contemporary auditoriums designed for maximum audience engagement.",
    categories:"audi",
    image: {
      filename: "listingimage",
      url: "https://i.ytimg.com/vi/RjE0zGDQxW4/maxresdefault.jpg",
    },
    price: 10000,
    location: "Indore",
    country: "India",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
    "Accessible rental auditoriums with inclusive features for all attendees.",
    categories:"audi",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgu8YXhh0Uq9tsfOf0DMkjqBTlZo1Ew3amgipt2a4iQA9vGzzwdzDNQyWm4zT3CJxG3k&usqp=CAU",
    },
    price: 12000,
    location: "Indore",
    country: "India",
  },
  {
    title: "shivaji university kolhapur",
    description:
    "Premium amenities and impeccable service in our sought-after auditorium venues.",
    categories:"audi",
    image: {
      filename: "listingimage",
      url: "https://www.admissionfever.com/Media/clgimg/gallery/3574_img7386898471846576.png",
    },
    price: 12000,
    location: "Kolhapur",
    country: "India",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
    "Turnkey solutions for hosting memorable events in our prestigious auditoriums.",
    categories:"audi",
    image: {
      filename: "listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXlam_uzCKiumFSj_SgWpztPB8q0jiW-VHh91w0dka0vWgDs3Yr8zrjmGget-VcLyiU4&usqp=CAU",
    },
    price: 11000,
    location: "Indore",
    country: "India",
  },
 ];
 
module.exports = { data: sampleListings };
