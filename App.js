import "./Card.js";
import "./Cart.js";

class App extends HTMLElement {
  constructor() {
    super();
    this.data = [
      {
        id: 1,
        title: "Product #1",
        preview: "./images/appleWatch.jpg",
        description:
          "Смарт-часы APPLE Watch SE Space Grey будут стимулировать вас тренироваться чаще и следить за вашим прогрессом.",
        price: 200,
      },
      {
        id: 2,
        title: "Product #2",
        preview: "./images/appleWatch1.jpg",
        description:
          "Смарт-часы APPLE Watch SE Space Grey будут стимулировать вас тренироваться чаще и следить за вашим прогрессом.",
        price: 210,
      },
      {
        id: 3,
        title: "Product #3",
        preview: "./images/iphine13.jpg",
        description:
          "Стандарт защиты IP68, Face id, Технология дисплея True Tone, Передняя панель Ceramic Shield.",
        price: 230,
      },
      {
        id: 4,
        title: "Product #4",
        preview: "./images/iphine13green.jpg",
        description:
          "Стандарт защиты IP68, Face id, Технология дисплея True Tone, Передняя панель Ceramic Shield.",
        price: 240,
      },
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class='container mt-5 mb-5'>
            <div class='col-12'>
                <it-cart></it-cart>
            </div>
        </div>
        <div class="container">
            <div class="row">
                ${this.data
                  .map((item) => {
                    return `
                        <div class="col mt-5">
                            <it-card data='${JSON.stringify(item)}'></it-card>
                        </div>
                    `;
                  })
                  .join(" ")}
            </div>
        </div>
        `;
  }
}

customElements.define("it-app", App);
