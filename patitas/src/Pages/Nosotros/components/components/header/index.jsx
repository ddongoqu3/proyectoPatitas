import './header.css';
import blanco from "../assets/img/blanco.png"

function Header() {
    return <header className="header">
      <section class="header__container">
      <div class="header-izq">
        <a href="."><img class="header__logo" src={blanco} alt="logo" /></a>
      </div>
      <div class="header-der">
        <nav class="header__nav">
          <ul class="header__ul">
            <li><a href=".">Adopta</a></li>
            <li><a href=".">Nosotros</a></li>
            <li><a href=".">Tienda</a></li>
            <li><a href=".">Consultas</a></li>
            <li><a href=".">Blog</a></li>
          </ul>
        </nav>
        <div class="container-btn">
          <button class="btn btn-donar">Donar</button>
          <button class="btn btn-login">Iniciar sesión</button>
        </div>
      </div>
    </section>
  </header>
  }

export { Header };