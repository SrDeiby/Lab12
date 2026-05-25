class WeatherTime extends HTMLElement {

  constructor(){
    super();

    this.attachShadow({ mode:"open" });

    this.render();
  }

  render(){

    this.shadowRoot.innerHTML = `
      <style>

        :host{
          display:block;
        }

        .weather{
          background:#1E1E1E;
          color:white;

          padding:20px;
          border-radius:16px;

          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        h3,p{
          margin:0;
        }

        .temp{
          font-size:28px;
          font-weight:bold;
          color:#FFE000;
        }

      </style>

      <section class="weather" part="weather">

        <div>
          <h3>Liberia</h3>
          <p>Sunny</p>
        </div>

        <div class="temp">
          31 °C
        </div>

      </section>
    `;
  }

}

customElements.define("weather-time", WeatherTime);