import perro1 from "../assets/img/perro1.webp"
import perro2 from "../assets/img/perro2.webp"
import perro3 from "../assets/img/perro3.webp"
import perro4 from "../assets/img/perro4.jpg"
import perro5 from "../assets/img/perro5.jpg"
import perro6 from "../assets/img/perro6.webp"
import perro7 from "../assets/img/perro7.webp"
import perro8 from "../assets/img/perro8.jpg"
import grupo from "../assets/img/grupo.jpg"
import ayuda from "../assets/img/ayuda.jpg"
import nosotros from "../assets/img/nosotros.jpg"
import './main.css';

function Main() {
  return <main>
  <section class="nosotros">
      <h2>
          Quiénes somos y por qué existimos
      </h2>
      <div class="nosotros__container">
          <img src={nosotros} alt="nosotros"/>
          <div class="nosotros__info">
              <h3>
                  Somos una asociación sin fines de lucro que busca construir un mundo mejor para los perros a
                  través de iniciativas sostenibles.
              </h3>
              <div class="nosotros-iconos">
                  <div class="nosotros-icono">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home"
                          width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd6b6c"
                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="5 12 3 12 12 3 21 12 19 12" />
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                      </svg>
                      <p>
                          Adopción responsable
                      </p>
                  </div>
                  <div class="nosotros-icono">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dog-bowl"
                          width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd6b6c"
                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                              d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586" />
                          <path
                              d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586" />
                          <path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z" />
                      </svg>
                      <p>
                          Donaciones agua y comida
                      </p>
                  </div>
                  <div class="nosotros-icono">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vaccine"
                          width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd6b6c"
                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M17 3l4 4" />
                          <path d="M19 5l-4.5 4.5" />
                          <path d="M11.5 6.5l6 6" />
                          <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5" />
                          <path d="M7.5 12.5l1.5 1.5" />
                          <path d="M10.5 9.5l1.5 1.5" />
                          <path d="M3 21l3 -3" />
                      </svg>
                      <p>
                          Salud y esterilización
                      </p>
                  </div>
                  <div class="nosotros-icono">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book"
                          width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd6b6c"
                          fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                          <line x1="3" y1="6" x2="3" y2="19" />
                          <line x1="12" y1="6" x2="12" y2="19" />
                          <line x1="21" y1="6" x2="21" y2="19" />
                      </svg>
                      <p>
                          Educación y cuidados
                      </p>
                  </div>
              </div>
              <div class="nosotros-btn">
                  <button class="btn btn-adoptar">Adoptar</button>
                  <button class="btn btn-donar">Donar</button>
              </div>
          </div>
      </div>
  </section>
  <section class="adoptar">
      <h2>Adoptar</h2>
      <div class="adoptar__container">
          <a href="."><img src={perro1} alt="perro"/>
          </a>
          <a href="."><img src={perro2} alt="perro"/>
          </a>
          <a href="."><img src={perro3} alt="perro"/>
          </a>
          <a href="."><img src={perro4} alt="perro"/>
          </a>
          <a href="."><img src={perro5} alt="perro"/>
          </a>
          <a href="."><img src={perro6} alt="perro"/>
          </a>
          <a href="."><img class="img-none" src={perro7} alt="perro"/>
          </a>
          <a href="."><img class="img-none" src={perro8} alt="perro"/>
          </a>
      </div>
      <div class="adoptar-btn">
          <button class="btn btn-adoptar">Adoptar</button>
          <button class="btn btn-donar">Donar</button>
      </div>
  </section>
  <section class="equipo">
      <h2>Nuestro equipo</h2>
      <img src={grupo} alt="equipo"/>
  </section>
  <section class="ayuda">
      <h2>Compra y ayuda en “Adoptame”</h2>
      <div class="ayuda__container">
          <div class="ayuda__info">
              <p>
                  of type and scrambled it to make a type specimen
                  book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the
                  1960s with the release of Letras
              </p>
              <button class="btn btn-adoptar">Adoptar</button>
          </div>
          <img src={ayuda} alt="perro"/>
      </div>
  </section>
</main>
}

export { Main };