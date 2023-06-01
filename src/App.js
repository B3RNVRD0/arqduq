import './App.css'

function App() {
  return (
    <div className="main">
      <div className="textLove">
        <h1>Amamos o que fazemos</h1>
      </div>

      <section className="caixaTextoAcimaCaixas">
        <span className="textoAcimaCaixas">
          Lorem Ipsum Lorem Ipsum Lorem ipsum Ipsum Lorem<br></br> Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum<br></br>Lorem Ipsum Lorem Ipsumipsum
          Lorem Ipsum Lorem<br></br> Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
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
            <div className="caixa2Text">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="caixa2">
            <div className="caixa2Text">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="caixa2">
            <div className="caixa2Text">Lorem ipsum dolor sit amet</div>
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

        <div className="botaoCaixa2">
          <div className="textBotaoCaixa2">Mame-me</div>
        </div>
      </div>

      <footer>
        <div className="containerFooter"></div>
      </footer>
    </div>
  )
}

export default App
