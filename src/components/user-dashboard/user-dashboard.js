class UserDashboard extends HTMLElement {

  constructor(){
    super();

    this.attachShadow({ mode:"open" });

    this.shadowRoot.innerHTML = `
      <style>

        :host{
          display:block;
          width:700px;
        }

        .dashboard{

          background:#181818;

          padding:30px;

          border-radius:24px;

          border:3px solid #333;

          display:grid;
          gap:20px;

        }

      </style>

      <main class="dashboard" part="dashboard">

        <user-card>

          <span slot="name">
            Alonso
          </span>

          <span slot="role">
            Profesor
          </span>

        </user-card>

        <weather-time></weather-time>

        <warning-badge id="badge">
          Sesión por expirar
        </warning-badge>

      </main>
    `;
  }

  connectedCallback(){

    this.addEventListener("user-salute", (event) => {

      const badge = this.shadowRoot.querySelector("#badge");

      badge.setAttribute("pulsing", "");

      badge.textContent = event.detail.message;

      setTimeout(() => {

        badge.removeAttribute("pulsing");

        badge.textContent = "Sesión por expirar";

      }, 3000);

    });

  }

}

customElements.define("user-dashboard", UserDashboard);