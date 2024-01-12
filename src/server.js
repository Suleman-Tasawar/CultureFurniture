import { createServer, Model } from "miragejs";

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
      id: 1,
      name: "Sofa 1",
      imgUrl: "/assets/prod--chairM.png",
      itemPrice: "4000",
    });
    server.create("sofa", {
      id: 2,
      name: "Sofa 75457452",
      imgUrl: "/assets/prod--chairM2.png",
      itemPrice: "40600",
    });

    server.create("sofa", {
      id: 3,
      name: "Sofa75474 3",
      imgUrl: "/assets/prod--chairM3.png",
      itemPrice: "43000",
    });
    server.create("sofa", {
      id: 4,
      name: "Sofa75474 4",
      imgUrl: "/assets/prod--chairM4.jpg",
      itemPrice: "43000",
    });

    server.create("sofa", {
      id: 5,
      name: "Sofa75474 5",
      imgUrl: "/assets/prod--chairM5.jpg",
      itemPrice: "43000",
    });

    server.create("sofa", {
      id: 6,
      name: "Sofa75474 6",
      imgUrl: "/assets/prod--chairM6.jpg",
      itemPrice: "43000",
    });
 
    server.create("bed", {
      id: 1,
      name: "Bed 1",
      imgUrl: "/assets/prod--bed1.png",
      itemPrice: "636000",
    });
    server.create("bed", {
      id: 2,
      name: "Bed 2",
      imgUrl: "/assets/prod--bed2.png",
      itemPrice: "633000",
    });
    server.create("bed", {
      id: 3,
      name: "Bed 3",
      imgUrl: "/assets/prod--bed3.png",
      itemPrice: "653000",
    });

    server.create("bed", {
      id: 4,
      name: "Bed 4",
      imgUrl: "/assets/prod--bed4.jpg",
      itemPrice: "653000",
    });

    server.create("bed", {
      id: 5,
      name: "Bed 5",
      imgUrl: "/assets/prod--bed5.jpg",
      itemPrice: "653000",
    });

    server.create("bed", {
      id: 6,
      name: "Bed 6",
      imgUrl: "/assets/prod--bed6.jpg",
      itemPrice: "653000",
    });

    server.create("table", {
      id: 1,
      name: "Table 1",
      imgUrl: "/assets/prod--table2.jpg",
      itemPrice: "6530",
    });
    server.create("table", {
      id: 2,
      name: "Table 1",
      imgUrl: "/assets/prod--table3.jpg",
      itemPrice: "6530",
    });
    server.create("table", {
      id: 3,
      name: "Table 3",
      imgUrl: "/assets/prod--table4.jpg",
      itemPrice: "6000",
    });

    server.create("closet", {
      id: 1,
      name: "Closet 1",
      imgUrl: "/assets/prod--closet1.jpg",
      itemPrice: "55000",
    });
    server.create("closet", {
      id: 2,
      name: "Closet 2",
      imgUrl: "/assets/prod--closet2.jpg",
      itemPrice: "35000",
    });
    server.create("closet", {
      id: 3,
      name: "Closet 3",
      imgUrl: "/assets/prod--closet3.jpg",
      itemPrice: "25000",
    });

    server.create("rack", {
      id: 1,
      name: "Rack 1",
      imgUrl: "/assets/prod--rack1.jpg",
      itemPrice: "15000",
    });
    server.create("rack", {
      id: 2,
      name: "Rack 2",
      imgUrl: "/assets/prod--rack2.jpg",
      itemPrice: "17000",
    });
    server.create("rack", {
      id: 3,
      name: "Rack 3",
      imgUrl: "/assets/prod--rack3.jpg",
      itemPrice: "35000",
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
  }
});
