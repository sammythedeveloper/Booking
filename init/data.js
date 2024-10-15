// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];

// module.exports = { data: sampleListings };

const sampleListings = [
  {
    title: "The Obsidian Mirror Prism",
    description:
      "A breathtaking, fully mirrored glass cabin hidden high in the pine forests. The exterior completely reflects nature, making the structure invisible from the outside. Features a stargazing roof and a private volcanic stone hot tub.",
    price: 1420,
    location: "Svolvær, Lofoten",
    country: "Norway",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1724873299560-355df1871c09?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Amalfi Cliffside Infinity Estate",
    description:
      "Carved directly into the sheer rock face overlooking the Mediterranean. This architectural masterpiece features soaring 20-foot ceilings, an infinity pool that bleeds into the horizon, and private lemon grove pathways leading to the sea.",
    price: 850,
    location: "Positano, Amalfi Coast",
    country: "Italy",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566682364859-f92effc37fe6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Aero-Pod Luxury Converted Jet",
    description:
      "Sleep inside a completely stripped and reimagined vintage 1970s commercial airliner permanently grounded atop a jungle ridge. The cockpit has been turned into a high-end hot tub lounge looking out over the canopy.",
    price: 310,
    location: "Manuel Antonio",
    country: "Costa Rica",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1637247837220-139790fcc3a6?q=80&w=2251&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Sub-Oceanic Coral Suite",
    description:
      "An unbelievable architectural wonder submerged 15 feet beneath the ocean surface. Fall asleep to panoramic views of live coral reefs, sea turtles, and manta rays swimming right past your reinforced glass bedroom walls.",
    price: 1200,
    location: "Rangali Island",
    country: "Maldives",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Kyoto Bamboo Forest Sanctuary",
    description:
      "A meticulously restored 300-year-old traditional Machiya townhome tucked away inside a private bamboo grove. Experience authentic tatami rooms, a minimalist rock Zen garden, and a private outdoor hinoki wood bath.",
    price: 280,
    location: "Arashiyama, Kyoto",
    country: "Japan",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1741851373866-f73721697fc2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Copper Dome Desert Oasis",
    description:
      "An eco-futuristic off-grid dome structure clad in raw copper plating that glows red at sunset. Located deep in the high desert, it offers unparalleled milky way views, brutalist concrete interiors, and a hidden plunge pool.",
    price: 390,
    location: "Joshua Tree, California",
    country: "United States",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1707190205003-a0e210376dcf?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Monolithic Brutalist Rainforest Villa",
    description:
      "An architectural marvel blending raw exposed concrete with overhanging tropical flora. This multi-level open-air villa cuts straight through the jungle canopy and features a dramatic 3-story internal waterfall.",
    price: 540,
    location: "Ubud, Bali",
    country: "Indonesia",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1721222203626-b3ec87ddcb6d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Santorini Caldera Edge Cave",
    description:
      "A traditional Cycladic cave dwelling completely hollowed out inside the volcanic cliffside. Whitewashed walls contrast beautifully with a deep sapphire indoor cave pool that opens straight out onto the Aegean sea view.",
    price: 620,
    location: "Oia, Santorini",
    country: "Greece",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1604145195376-e2c8195adf29?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Neo-Gothic Clocktower Loft",
    description:
      "Live inside the historic mechanisms of a massive Victorian clocktower. Spanning four industrial-chic stories, the main bedroom sits directly behind the giant, glowing glass clock face overlooking the city skyline.",
    price: 450,
    location: "St Pancras, London",
    country: "United Kingdom",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1686002166472-9e9455e30268?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Patagonian Glass Geo-Sphere",
    description:
      "A clear geodesic luxury pod anchored on an isolated cliff face at the edge of the world. Brave the elements while warm inside under luxury furs, staring directly at the jagged peaks of Mount Fitz Roy.",
    price: 490,
    location: "El Chaltén, Patagonia",
    country: "Argentina",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1698005631633-eb1240b509c2?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Sacred Valley Suspended Capsule",
    description:
      "An adrenaline-fueled luxury pod crafted from aerospace aluminum, bolted thousands of feet up a sheer mountain wall. Dine under the stars with a 300-degree bird's-eye view of the ancient Inca kingdom below.",
    price: 580,
    location: "Cuzco, Sacred Valley",
    country: "Peru",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593053272490-e0ed6d6a42c5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Glass A-Frame Greenhouse",
    description:
      "A structural masterpiece made entirely of iron and double-paned glass. Sleep directly under the Northern Lights while surrounded by an internal climate-controlled tropical botanical garden in the freezing subarctic.",
    price: 340,
    location: "Reykjavík Outskirts",
    country: "Iceland",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1517253259615-dff3842d2544?q=80&w=2180&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Kasbah Mirage Desert Pavilion",
    description:
      "A stunning modern interpretation of traditional Moroccan architecture rising out of rolling sand dunes. Features hand-carved stone archways, courtyard fire pits, and a private oasis plunge pool.",
    price: 410,
    location: "Merzouga, Sahara Desert",
    country: "Morocco",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1757439402375-2f2a4ab0dc75?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Floating Bamboo Pavilion",
    description:
      "An architectural marvel constructed completely of curved sustainable giant bamboo, floating gently on a calm freshwater lagoon. Open-air living spaces let you dive straight into crystal clear waters from bed.",
    price: 290,
    location: "El Nido, Palawan",
    country: "Philippines",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1676089775678-f81f7253103e?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Medieval Castle Keep Tower",
    description:
      "Step back in time inside a fully restored, exclusive 12th-century stone fortification tower. Climb winding stone staircases to your private parapet rooftop offering sweeping views of the French wine valleys.",
    price: 670,
    location: "Dordogne Valley",
    country: "France",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1527149172837-f9f324bbb97b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Underground Hobbit Sanctuary",
    description:
      "An enchanting earth-sheltered home built directly into the side of a rolling green hill. Features a massive round oak doorway, exposed wooden beam supports, and a cozy fieldstone fireplace.",
    price: 250,
    location: "Matamata, Waikato",
    country: "New Zealand",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1729048563795-b001db99209f?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "High-Canopy Redwood Treehouse",
    description:
      "Suspended 150 feet above the forest floor between three ancient giant sequoia trees. Accessible via a secure multi-tiered suspension bridge system, complete with an open-air cedar hot tub in the trees.",
    price: 380,
    location: "Big Sur, California",
    country: "United States",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1672278865602-d535af563e23?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Reykjavík Geometric Eco-Cabin",
    description:
      "A striking minimalist polygon structure utilizing sustainable geothermal heating. Huge floor-to-ceiling geometric glass facets look out directly over vast, moss-covered black lava fields.",
    price: 320,
    location: "Selfoss, Golden Circle",
    country: "Iceland",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1645020456013-c4e693da0bbf?q=80&w=2346&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Floating Houseboat Palace",
    description:
      "A highly ornate, multi-room cedar houseboat docked on a majestic mountain lake. Features intricate wood carvings, velvet tapestry lounges, and a private rooftop sun terrace for mountain watching.",
    price: 220,
    location: "Dal Lake, Srinagar",
    country: "India",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Brutalist Monolithic Box",
    description:
      "A structural concrete monolith cantilevered out over a dramatic coastal cliffside. Stripped of all distractions, the design focuses purely on raw stone textures, massive steel structures, and the crashing waves below.",
    price: 730,
    location: "Cape Town Coast",
    country: "South Africa",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549295990-ad4f7cd10652?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Vintage Converted Windmill",
    description:
      "Sleep inside a piece of functioning historical engineering. This beautifully updated 18th-century traditional windmill features exposed wooden machinery wheels, cozy circular rooms, and views over endless tulip fields.",
    price: 190,
    location: "Haarlem, North Holland",
    country: "Netherlands",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1541435469116-8ce8ccc4ff85?q=80&w=2294&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Jungle Cenote Hideaway",
    description:
      "A hidden concrete luxury villa constructed around a private, limestone sinkhole pool (cenote). Wake up to freshwater swimming steps from your bed, surrounded by hanging vines and wild jungle ferns.",
    price: 460,
    location: "Tulum, Quintana Roo",
    country: "Mexico",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501855901885-8b29fa615daf?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Arctic Ice Floating Dome",
    description:
      "A heavily insulated, high-tech glass dome structure anchored to a floating wooden dock system on an ice fjord. Watch massive icebergs float safely past your bedroom window under a midnight sun.",
    price: 890,
    location: "Ilulissat Fjord",
    country: "Greenland",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1636743743452-0b82ed31cd0c?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Andalucian Cave Eco-Hacienda",
    description:
      "A masterfully updated whitewashed cave estate burrowed deep inside a mountain ridge. Naturally climate-controlled at a perfect temperature year-round, featuring rustic terracotta tile accents and private olive grove views.",
    price: 180,
    location: "Granada, Andalucia",
    country: "Spain",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1614634495973-216b0bbd464e?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Emerald Canopy Tree Pavilion",
    description:
      "A multi-level architectural pavilion built with local sustainable materials, hoisted deep in culture. Complete with mesh lounge hammocks suspended over the open air floor.",
    price: 340,
    location: "Addis Ababa",
    country: "Ethiopia",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1775743241025-5d354dcefcd6?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Copper-Clad Alpine Loft",
    description:
      "A sharp modern cabin completely clad in dark treated copper sheets designed to withstand intense winter conditions. Features massive double-height glass windows framing panoramic views of the Matterhorn.",
    price: 520,
    location: "Zermatt, Swiss Alps",
    country: "Switzerland",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1723119832675-0031e0f0408c?q=80&w=2146&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Savannah Luxury Horizon Lodge",
    description:
      "A canvas-and-timber luxury suite elevated on a wooden platform overlooking a major watering hole. Watch elephants, giraffes, and lions gather from the safety of your private canvas deck and plunge pool.",
    price: 980,
    location: "Serengeti National Park",
    country: "Tanzania",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1697730165391-265e1b94d550?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Floating Glass Lake Pavilion",
    description:
      "A sleek, steel-framed minimalist glass box anchored right out in the middle of a glassy mountain lake. Accessible only by a private wooden rowboat, offering complete and total off-grid isolation.",
    price: 310,
    location: "Lake Tekapo",
    country: "New Zealand",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1692017827893-f97d95397b49?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "The Industrial Boiler Room Loft",
    description:
      "A dramatic 3-story industrial loft built inside a historic, defunct brick factory powerhouse. Features original rusted iron pipes, massive exposed brick accent walls, and a private industrial steel rooftop terrace.",
    price: 260,
    location: "Brooklyn, New York",
    country: "United States",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1577701759165-d24b1c4b51de?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    title: "Ancient Olive Mill Compound",
    description:
      "A completely secluded stone estate built out of the structural ruins of a 600-year-old historic olive pressing mill. Features original giant grinding stone monuments, sun-baked clay stone patios, and an infinity pool.",
    price: 430,
    location: "Crete Countryside",
    country: "Greece",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568241076564-b7ccd36912a0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];

module.exports = { data: sampleListings };
