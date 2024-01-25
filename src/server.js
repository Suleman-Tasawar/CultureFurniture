import { createServer, Model } from "miragejs";
import uniqid from 'uniqid';

createServer({
  models: {
    sofas: Model,
    beds:Model,
    tables:Model,
    closets:Model,
    racks:Model,
  },
  seeds(server) {
    // Creating seed data for sofas
    server.create("sofa", {
      id: uniqid(),
      name: "Pakistani Heritage Sofa",
      imgUrl: "/assets/prod--chairM.png",
      itemPrice: "80000",
      discPrice: "50000",
      likes: 4,
      colors: ["blue", "black", "white"],
      details: "Immerse yourself in Pakistani heritage with this beautifully crafted sofa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("sofa", {
      id: uniqid(),
      name: "Pakistani Elegance Leather Sofa",
      imgUrl: "/assets/prod--chairM2.png",
      itemPrice: "120000",
      discPrice: "80000",
      likes: 3,
      colors: ["brown", "maroon", "cream"],
      details: "Experience the elegance of Pakistani design with this luxurious leather sofa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("sofa", {
      id: uniqid(),
      name: "Contemporary Pakistani Lounge",
      imgUrl: "/assets/prod--chairM3.png",
      itemPrice: "150000",
      discPrice: "120000",
      likes: 5,
      colors: ["green", "gold", "teal"],
      details: "Enjoy modern comfort with a touch of Pakistani flair in this lounge sofa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("sofa", {
      id: uniqid(),
      name: "Traditional Charm Sofa",
      imgUrl: "/assets/prod--chairM4.jpg",
      itemPrice: "100000",
      discPrice: "70000",
      likes: 2,
      colors: ["blue", "black", "white"],
      details: "Bring traditional charm to your living room with this exquisite sofa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("sofa", {
      id: uniqid(),
      name: "Pakistani Grace Sofa",
      imgUrl: "/assets/prod--chairM5.jpg",
      itemPrice: "110000",
      discPrice: "90000",
      likes: 1,
      colors: ["blue", "black", "white"],
      details: "Experience the grace of Pakistani craftsmanship with this stylish sofa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("sofa", {
      id: uniqid(),
      name: "Pakistani Comfort Sofa",
      imgUrl: "/assets/prod--chairM6.jpg",
      itemPrice: "95000",
      discPrice: "75000",
      likes: 4,
      colors: ["blue", "black", "white"],
      details: "Indulge in comfort with this Pakistani-inspired sofa designed for relaxation. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("bed", {
      id: uniqid(),
      name: "Pakistani Royal Bed",
      imgUrl: "/assets/prod--bed1.png",
      itemPrice: "200000",
      discPrice: "150000",
      likes: 3,
      colors: ["blue", "black", "white"],
      details: "Sleep like royalty with this Pakistani-themed royal bed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("bed", {
      id: uniqid(),
      name: "Luxury Pakistani Bed",
      imgUrl: "/assets/prod--bed2.png",
      itemPrice: "180000",
      discPrice: "130000",
      likes: 2,
      colors: ["blue", "black", "white"],
      details: "Experience luxury and style with this elegant Pakistani-inspired bed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("bed", {
      id: uniqid(),
      name: "Modern Pakistani Bed",
      imgUrl: "/assets/prod--bed3.png",
      itemPrice: "160000",
      discPrice: "120000",
      likes: 5,
      colors: ["blue", "black", "white"],
      details: "Infuse modern design into your bedroom with this contemporary Pakistani bed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("bed", {
      id: uniqid(),
      name: "Classic Pakistani Bed",
      imgUrl: "/assets/prod--bed4.jpg",
      itemPrice: "220000",
      discPrice: "170000",
      likes: 1,
      colors: ["blue", "black", "white"],
      details: "Bring classic elegance to your bedroom with this Pakistani-themed bed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("bed", {
      id: uniqid(),
      name: "Pakistani Dream Bed",
      imgUrl: "/assets/prod--bed5.jpg",
      itemPrice: "190000",
      discPrice: "140000",
      likes: 4,
      colors: ["blue", "black", "white"],
      details: "Experience a dreamy sleep with this beautifully designed Pakistani bed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("bed", {
      id: uniqid(),
      name: "Pakistani Harmony Bed",
      imgUrl: "/assets/prod--bed6.jpg",
      itemPrice: "210000",
      discPrice: "160000",
      likes: 3,
      colors: ["blue", "black", "white"],
      details: "Find harmony in your bedroom with this Pakistani-themed bed. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("table", {
      id: uniqid(),
      name: "Pakistani Elegance Table",
      imgUrl: "/assets/prod--table2.jpg",
      itemPrice: "35000",
      discPrice: "25000",
      likes: 4,
      colors: ["blue", "black", "white"],
      details: "Add elegance to your living space with this Pakistani-inspired table. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("table", {
      id: uniqid(),
      name: "Modern Pakistani Table",
      imgUrl: "/assets/prod--table3.jpg",
      itemPrice: "37000",
      discPrice: "27000",
      likes: 2,
      colors: ["blue", "black", "white"],
      details: "Infuse modern style into your home with this contemporary Pakistani table. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("table", {
      id: uniqid(),
      name: "Pakistani Classic Table",
      imgUrl: "/assets/prod--table4.jpg",
      itemPrice: "30000",
      discPrice: "20000",
      likes: 1,
      colors: ["blue", "black", "white"],
      details: "Bring classic charm to your home with this Pakistani-themed classic table. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("closet", {
      id: uniqid(),
      name: "Pakistani Royale Closet",
      imgUrl: "/assets/prod--closet1.jpg",
      itemPrice: "70000",
      discPrice: "60000",
      likes: 3,
      colors: ["blue", "black", "white"],
      details: "Organize your belongings in style with this luxurious Pakistani-themed closet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("closet", {
      id: uniqid(),
      name: "Pakistani Contemporary Closet",
      imgUrl: "/assets/prod--closet2.jpg",
      itemPrice: "45000",
      discPrice: "35000",
      likes: 5,
      colors: ["blue", "black", "white"],
      details: "Experience contemporary organization with this stylish Pakistani closet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("closet", {
      id: uniqid(),
      name: "Pakistani Classic Closet",
      imgUrl: "/assets/prod--closet3.jpg",
      itemPrice: "35000",
      discPrice: "25000",
      likes: 2,
      colors: ["blue", "black", "white"],
      details: "Bring classic elegance to your space with this Pakistani-themed classic closet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("rack", {
      id: uniqid(),
      name: "Pakistani Vintage Rack",
      imgUrl: "/assets/prod--rack1.jpg",
      itemPrice: "20000",
      discPrice: "15000",
      likes: 4,
      colors: ["blue", "black", "white"],
      details: "Add a touch of vintage charm to your space with this Pakistani-themed rack. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("rack", {
      id: uniqid(),
      name: "Pakistani Modern Rack",
      imgUrl: "/assets/prod--rack2.jpg",
      itemPrice: "23000",
      discPrice: "18000",
      likes: 3,
      colors: ["blue", "black", "white"],
      details: "Organize with modern flair using this stylish Pakistani-inspired rack. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
    server.create("rack", {
      id: uniqid(),
      name: "Pakistani Chic Rack",
      imgUrl: "/assets/prod--rack3.jpg",
      itemPrice: "45000",
      discPrice: "35000",
      likes: 1,
      colors: ["blue", "black", "white"],
      details: "Stay organized in style with this chic Pakistani-themed rack. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi architecto optio quibusdam consequatur voluptatem exercitationem sapiente laudantium tempora corrupti atque."
    });
    
  },

  routes() {
    this.namespace = "api";

    // Route for sofas
    this.get("/sofas", (schema, request) => {
      return schema.sofas.all();
    });
    this.get("/beds", (schema, request) => {
      return schema.beds.all();
    });
    this.get("/tables", (schema, request) => {
      return schema.tables.all();
    });
    this.get("/closets", (schema, request) => {
      return schema.closets.all();
    });
    this.get("/racks", (schema, request) => {
      return schema.racks.all();
    });

    // Route to get all items
    this.get('/items', (schema) => {
      const sofas = schema.sofas.all();
      const beds = schema.beds.all();
      const tables = schema.tables.all();
      const closets = schema.closets.all();
      const racks = schema.racks.all();

      // Combine data from all collections
      const allItems = {
        sofas: sofas.models,
        beds: beds.models,
        tables: tables.models,
        closets: closets.models,
        racks: racks.models,
      };

      return allItems;
    });
  }
});
