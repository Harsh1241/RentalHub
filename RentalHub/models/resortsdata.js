const sampleListings = [
  {
    title: "Sayaji Indore",
    description:
      "Hotel Sayaji reflects the true spirit of Indore, Central India's financial capital, in the way it brings together tradition and contemporary luxury",
      categories:"resorts",

    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106332464.jpg?k=f702ee255be2eaa83d98b09e1f64651697987db4d5aec10d6a50b90d4a57276c&o=&hp=1",
    },
    price: 60000,
    location: "Indore",
    country: "India",
  },
  {
    title: "Radisson Blu Hotel",
    description:
      "Elegant, stylish rooms, magnificent banquet spaces, fine dining and spa. We offer 5-star luxury accommodation along with exquisite experiences. On-Site Dining.",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1432402406/Domestic%20Hotels/Hotels_Indore/Radisson%20Hotel%20Indore/Hotel_at_night.jpg",
    },
    price: 120000,
    location: "Indore",
    country: "India",
  },
  {
    title: "Taj Hotel Mumbai",
    description:
      "Experience true grandeur at Taj Mahal Palace, our iconic grand luxury hotel in Mumbai.",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/103705059.jpg?k=9e078265b31ad1815a573da8ed2a665f863e3925e1efd730df703421868a2ada&o=&hp=1",
    },
    price: 150000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Blue Leaf Hotel",
    description:
      "We are a dynamic lifestyle hospitality hotel that provides guests with the BEST in effortless living because we know its all abo.",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202107251558563526-5926b97267b311eca2c70a58a9feac02.jpg",
    },
    price: 85000,
    location: "Indore",
    country: "India",
  },
  {
    title: "Sun N star Hotel",
    description:
      "Hotel Sun N Star in Satna HO Satna welcomes people from all walks of life. It has some of the best services, such as Wake-Up Calls , Concierge Service , 24 Hour ...",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/404145596.jpg?k=e6d4bfd7166d90091d27d991029ce059f7b1e1cd6581416d14002b15f0ebccbc&o=&hp=1",
    },
    price: 80000,
    location: "Satna",
    country: "India",
  },
  {
    title: "Platinum Resort",
    description:
      "Nestled in the city of Itarsi, PLATINUM RESORT and GARDEN is located at an distance of 115 km from Raja Bhoj Airport and 5.2 km Read more. Free Cancellation.",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://r1imghtlak.ibcdn.com/57aced58a38811e7a32f0a9df65c8753.jfif?downsize=634:357",
    },
    price: 90000,
    location: "Itarsi",
    country: "India",
  },
  {
    title: "Vijan Mahal",
    description:
      "The property has spacious and luxurious rooms with good amenities. The food quality is excellent with a wide variety of options available in the buffet.",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1470031645/Domestic%20Hotels/Hotels_Jabalpur/Vijan%20Mahal/Overview.jpg",
    },
    price: 100000,
    location: "Jabalpur",
    country: "India",
  },
  {
    title: "One Hprizon Productionb Hotel",
    description:
      "We are a group of wedding photographers, based in Bengaluru, documenting weddings & pre weddings all across India and overseas.",
      categories:"resorts",

    image: {
      filename: "listingimage",
      url: "https://onehorizonproductions.com/wp-content/uploads/2022/08/itc-windsor-2.jpg",
    },
    price: 110000,
    location: "Bangalore",
    country: "India",
  },
  {
    title: "Wow Crest Hotel",
    description:
      "Dive into opulence at Wow Crest, a luxury hotel. Experience our peacock-inspired decor, atrium, and lavish rooms for an unmatched stay of comfort and style.",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/499372354.jpg?k=e5617af438e171db8fb5b863f8747f173ad6df54f78b3fae79a68be2cdc67b1c&o=&hp=1",
    },
    price: 100000,
    location: "Indore",
    country: "India",
  },
  {
    title: "Hilton Garden Inn",
    description:
      "Our Hilton Garden Inn Pune Hinjawadi hotel features onsite dining and complimentary WiFi. Unwind in an inviting guest room with a comfy bed, Keurig™ Brewing ...",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/423172066.jpg?k=a2c87f47051134c7306a0285814dcd90de43aba20df8d05d57b0ac5893b40b45&o=&hp=1",
    },
    price: 100000,
    location: "Pune",
    country: "India",
  },
  {
    title: "Taj Deccan",
    description:
      "Located in Hyderabad's elite Banjara Hills, this elegant hotel offers a welcome respite for both leisure and business travellers alike.",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d8/6a/taj-deccan.jpg?w=700&h=-1&s=1",
    },
    price: 118000,
    location: "Hyderabad",
    country: "India",
  },
  {
    title: "Noor Us Sabah Palace",
    description:
      "Noor Us Sabah Palace is a heritage property located in Bhopal with a serene and peaceful surrounding. The property offers a vintage look with comfortable ...",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/e2/b7/59/welcomheritage-noor-us.jpg?w=700&h=-1&s=1",
    },
    price: 100000,
    location: "Bhopal",
    country: "India",
  },
  {
    title: "Crowne Plaza",
    description:
      "The hotel features 208 well-equipped guest rooms with complimentary Wi-Fi and a banqueting space of 8500 Sq. ft. Host events or meetings in one of the 11 indoor ...",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-new-delhi-3905168365-2x1",
    },
    price: 120000,
    location: "Delhi",
    country: "India",
  },
  {
    title: "The fern sardar sarovar resort",
    description:
      "The property has good amenities, including a large swimming pool, a gym, and a play area for children. The food is vegetarian and delicious, with a good range ...",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://statueofunity.in/wp-content/uploads/POOl-VIEW-DAY.jpg-23-1024x681.jpg",
    },
    price: 130000,
    location: "Ahmedabad",
    country: "India",
  },
  {
    title: "The Regnant",
    description:
      "The Regnant seeks to redefine the art of conducting business and social meetings in India. Centrally located from all travel hubs, our victorian-style banquet ...",
      categories:"resorts",
    image: {
      filename: "listingimage",
      url: "https://content.jdmagicbox.com/comp/lucknow/k4/0522px522.x522.200213190953.t8k4/catalogue/the-regnant-niralanagar-lucknow-hotels-rdreriyf6c.jpg",
    },
    price: 120000,
    location: "Lucknow",
    country: "India",
  },
];

module.exports = { data: sampleListings };
