import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados Pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Wemerson Bernardo" 
          descricao="Hello World, Wemerson Bernardo que vos fala! Sou estudante da Labenu, da internet e dos livros. Gosto de viajar, vasculhar alguns dados e observar pombos retangulares comendo alpiste do Himalaia setentrional."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

    <div className="page-section-container">
    
      <CardPequeno 
      tipo={"Email: "}
      imagem="https://www.flaticon.com/svg/static/icons/svg/54/54290.svg" 
      texto={"astronautalilas@intermail.com"}
      />
    </div>

    <div className="page-section-container">
      <CardPequeno
      tipo={"Endereço: "}
      imagem="https://i.pinimg.com/474x/cf/00/e9/cf00e9dbd04b0619b8a3b0a8bf9f7051.jpg"
      texto="Rua da Palma, 123"
      />
    </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eff3d7d4dba18a22ca203c8_Logo_Labenu_vertical.png" 
          nome="Labenu" 
          descricao="Imergindo na experiência e expectativa de ser um dev logo, logo." 
        />
        
        <CardGrande 
          imagem="http://proarquivosgestao.com.br/img/logo.png" 
          nome="Pró Arquivos Gestão" 
          descricao="Fazendo de tudo um pouco, da gestão à operação, do excel ao Dropbox!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
