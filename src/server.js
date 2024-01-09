import { createServer, Model } from "miragejs";

createServer({
  models: {
    sofas: Model,
    beds:Model,
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
      name: "Sofa 75457451",
      imgUrl: "/assets/prod--chairM2.png",
      itemPrice: "40600",
    });

    server.create("sofa", {
      id: 3,
      name: "Sofa75474 1",
      imgUrl: "/assets/prod--chairM3.png",
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
  }
});
