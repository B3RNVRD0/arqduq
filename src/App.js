import './App.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import foto1 from './images/foto01.jpg'
import foto2 from './images/foto02.jpg'
import foto3 from './images/foto03.jpg'

function App() {
  const cabecalhoPag = (
    <header className="cabecalhoContainer">
      <div className="logoContainer">logo</div>
      <nav className="menuContainer">
        <span className="homeCabecalho">HOME</span>
        <span className="projetosCabecalho">PROJETOS</span>
        <span className="sobrenosCabecalho">SOBRE NÓS</span>
        <span className="contatoCabecalho">CONTATO</span>
      </nav>
    </header>
  )
  const slides = [foto1, foto2, foto3]
  const swiperCarrossel = (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="container"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img
            src={slide}
            className="Carrosselimg"
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
  const conteudo = (
    <div className="main">
      <section className="caixaTextoAcimaCaixas">
        <span className="textoAcimaCaixas">
          No nosso portfólio, você encontrará projetos de arquitetura que foram
          concebidos com amor e cuidado, transformando ideias em realidade.
        </span>
      </section>

      <div className="mainCaixa">
        <div className="tresCaixas">
          <div className="caixa1">
            <img src="https://images.adsttc.com/media/images/5f1b/5886/b357/653d/3a00/023f/newsletter/featured_image.jpg?1595627628"></img>
          </div>
          <div className="caixa1">
            <img src="https://innovarconstrutora.com.br/wp-content/uploads/2018/07/05-750x440.jpg"></img>
          </div>
          <div className="caixa1">
            <img src="https://m.galeriadaarquitetura.com.br/Img/projeto/702x415/3338/quarto-de-casal352.jpg"></img>
          </div>
        </div>

        <div className="subCaixas">
          <div className="caixa2">
            <div className="caixa2Text">Arquitetura Interna</div>
          </div>
          <div className="caixa2">
            <div className="caixa2Text">Arquitetura Externa</div>
          </div>
          <div className="caixa2">
            <div className="caixa2Text">Interiores</div>
          </div>
        </div>
      </div>

      <div className="mainCaixa2">
        <div className="titleCaixa2">
          <h1>Mais sobre nós</h1>
        </div>

        <div className="textCaixa2">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            suscipit nibh at mattis ultricies. Aliquam ultricies, velit id
            consectetur tincidunt, purus sapien auctor nulla, eu commodo metus
            erat vitae ligula.
          </span>
        </div>

        <div className="containerBtn">
          <div className="botaoSabermais">
            <a href="" class="btn btn2">
              Hover Me
            </a>
          </div>
        </div>
      </div>

      <footer>
        <div className="containerFooter"></div>
      </footer>
    </div>
  )

  return (
    <div className="content">
      {cabecalhoPag}
      {swiperCarrossel}
      {conteudo}
    </div>
  )
}

export default App
