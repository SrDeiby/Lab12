class UserCard extends HTMLElement {

  constructor(){
    super();

    this.attachShadow({ mode:"open" });

    this.shadowRoot.innerHTML = `
      <style>

        :host{
          display:block;
        }

        .card{
          display:flex;
          align-items:center;
          gap:16px;

          padding:20px;
          border-radius:16px;

          background:#1E1E1E;
          color:white;
        }

        .avatar{
          width:70px;
          height:70px;
          border-radius:50%;
          background:#FFE000;

          display:grid;
          place-items:center;

          font-size:24px;
          font-weight:bold;
          color:black;
        }

        .info{
          flex:1;
        }

        h2,p{
          margin:0;
        }

        button{
          margin-top:10px;
          padding:10px 16px;
          border:none;
          border-radius:10px;
          cursor:pointer;

          font-weight:bold;

          background:#FFE000;
        }

      </style>

      <article class="card" part="card">

        <div class="avatar" part="avatar">
          A
        </div>

        <div class="info">

          <h2>
            <slot name="name">
              Alonso
            </slot>
          </h2>

          <p>
            <slot name="role">
              Profesor
            </slot>
          </p>

          <button id="btn">
            Saludar
          </button>

        </div>

      </article>
    `;
  }

  connectedCallback(){

    const btn = this.shadowRoot.querySelector("#btn");

    btn.addEventListener("click", () => {

      this.dispatchEvent(
        new CustomEvent("user-salute", {

          detail:{
            message:"Saludos Alonso, Mejenga el Sábado a las 6:00 PM"
          },

          bubbles:true,
          composed:true

        })
      );

    });

  }

}

customElements.define("user-card", UserCard);