x=150;
y=120;
xq= 37;
yq= 130;
placar=0;
opcao=1;

tela='menu'

respostas = {"aab1": 4, "aab2": 1, "aab3": 3, "aab4":  4, "aab5": 2,"aab6": 3, "aab7": 2, "aab8": 1, "aab9": 1, "aab10": 4, "aab11": 3, "aab12": 4, "aab13": 2, "aab14": 1, "aab15": 2, "aab16": 3, "aab17": 4, "aab18": 2, "aab19": 1, "aab20": 3};
telaTeste = {
  'menu': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    y=y-100
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<3){
      y=y+100
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == 1){
        tela='aab1'
        x = 40;
        y = 190;
      }
      else if(opcao == 2){
        tela='instrucoes'
      }
      else if(opcao == 3){
        tela='creditos'
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'creditos': (key) => {
    if(key == "Escape") tela = 'menu';
  },
  'instrucoes': (key) => {
    if(key == "Escape") tela = 'menu';
  },
  'aab1': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1
      tela='aab2'
        
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab2'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab2': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1 
      tela='aab3'   
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab3'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab3': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab4'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab4'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab4': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab5'  
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab5'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab5': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
     if(opcao == respostas[tela]){
        placar += 1   
      tela='aab6' 
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab6'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab6': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab7'    
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab7'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab7': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab8'     
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab8'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab8': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab9'    
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab9'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab9': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab10'   
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab10'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab10': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
     if(opcao == respostas[tela]){
        placar += 1    
      tela='aab11'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab11'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab11': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab12'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab12'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab12': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1     
      tela='aab13'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab13'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab13': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
     if(opcao == respostas[tela]){
        placar += 1    
      tela='aab14'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab14'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab14': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1   
      tela='aab15'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab15'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab15': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1   
      tela='aab16'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab16'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab16': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab17'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab17'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab17': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab18'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab18'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab18': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1   
      tela='aab19'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab19'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab19': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='aab20'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='aab20'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'aab20': (key) => { 
    if(key=="ArrowUp" && opcao>1){
    yq=yq-25
    opcao=opcao-1;
    console.log(opcao)
    }
    if(key=="ArrowDown" && opcao<4){
      yq=yq+25
      opcao=opcao+1;
      console.log(opcao)
    }
    if(key=="Enter"){
      if(opcao == respostas[tela]){
        placar += 1    
      tela='acertos'
    }
      else if(key=="Enter"){
        if(opcao != respostas[tela]){
        placar += 0
      tela='acertos'
      }
      }
    }
    if(key=="Escape"){
      x=150
      y=120
      placar=0
      opcao=1
      tela='menu'
    }
  },
  'acertos': (key) => {
    x=150
    y=120
    placar=0
    opcao=1
    tela = 'menu';
  }
}
  

function preload()
{
  placar = 0
  telas = {
  'menu': menu,
  'aab1': fase1,
  'aab2': fase2,
  'aab3': fase3,
  'aab4': fase4,
  'aab5': fase5,
  'aab6': fase6,
  'aab7': fase7,
  'aab8': fase8,
  'aab9': fase9,
  'aab10': fase10,
  'aab11': fase11,
  'aab12': fase12,
  'aab13': fase13,
  'aab14': fase14,
  'aab15': fase15,
  'aab16': fase16,
  'aab17': fase17,
  'aab18': fase18,
  'aab19': fase19,
  'aab20': fase20,
  'creditos': creditos,
  'instrucoes': instrucoes,
  'acertos': acertos
}
  
img=loadImage("fundoinicial.jpg");
img1=loadImage("parabens.jpg");
img2=loadImage("fundoinicial.jpg");
img3=loadImage("fundobranco.jpg")
img4=loadImage("fundoinicial.jpg")
img5=loadImage("fototelajogo.jpg")
img6=loadImage("fotoeducadora.jpg")
img7=loadImage("fotoperfil.jpg")
fontYesterdayDream=loadFont("YesterdayDream.otf")
}

function setup(){
  createCanvas(500,500)
}

function draw(){
  background(img4);
  telas[tela]();
}

function drawPlacar(){
  text(`Pontos: ${placar}`, 40, 400, 300, 50)
}

function menu(){
  rect(x,y,185,45)
  textSize(34)
  textFont(fontYesterdayDream)
  text("GEOGRAGAME", 170, 50)
  textSize(32)
  text("Iniciar", 195, 160)
  text("Instruções", 180, 250)
  text("Créditos", 195, 350)
  textFont(NORMAL)
}

function fase1(){
  
  background(img5);
  rect(xq,yq,220,28)
  textStyle(NORMAL)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 1: Possui temperatura média anual de 25 °C, apresentando pouca variação. A umidade relativa do ar é bastante elevada: aproximadamente 90%. Atua nas regiões próximas à linha do Equador, na zona intertropical. Essas são as características do clima::",20,20,460,260);
  textSize(14)
    text("A) Desértico."+"\n", 45, 150);
    text("B) Frio de Montanha."+"\n",45, 175);
    text("C) Subtropical."+"\n",45, 200);
    text("D) Equatorial."+"\n",45, 225);
     drawPlacar()
}

function fase2(){
  background(img5);
  rect(xq,yq,290,25)
  textStyle(NORMAL)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 2: A umidade é um importante elemento atmosférico, pois refere-se à quantidade de água presente no ar na forma de vapor, interferindo em várias configurações climáticas, entre as quais, podemos citar:",20,20,450,260);
  textSize(13)
    text("A) O controle das temperaturas."+"\n", 45, 150);
    text("B) A alteração do regime das estações do ano."+"\n",45, 175);
    text("C) A presença de vegetação."+"\n", 45, 200);
    text("D) O deslocamento das massas de ar."+"\n",45,225);
    drawPlacar()
 
}

function fase3(){
  background(img5);
    rect(xq,yq,450,28)
  textStyle(NORMAL)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 3: Apresenta as temperaturas mais baixas do planeta, podendo atingir até -50 °C. Situa-se nas faixas delimitadas pelos círculos polares e recebe raios solares durante poucos meses no ano. Marque a alternativa que corresponde a esse tipo de clima..",20,20,480,260);
  textSize(13)
    text("A) Frio."+"\n", 40, 150);
    text("B) Temperado."+"\n",40, 175);
    text("C) Polar."+"\n", 40, 200);
    text("D) Semiarido."+"\n",40, 225);
    drawPlacar()
}
function fase4(){
  background(img5);
  rect(xq,yq,460,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text("QUESTÃO 4: O processo de formação dos solos é relativamente lento e gradual, de forma que os elementos e as condições naturais envolvidas são fundamentais para a determinação dos tipos e características desse recurso natural.Sobre a formação dos solos, também conhecida como pedogênese, é correto afirmar:",20,20,475,260);
  textSize(10)
    text("A) Ocorre com um ritmo de intensidade determinado pela posição latitudinal do local."+"\n", 39, 150);
    text("B) Acontece, inicialmente, pelo incremento de material orgânico sobre formações rochosas."+"\n",39, 175);
    text("C) Constitui uma camada do relevo desprovida de qualquer tipo de estratificação."+"\n", 39, 200);
    text("D) Depende, entre outros fatores, da atuação dos agentes intempéricos, tais como a água e os ventos."+"\n",39, 225);
    drawPlacar()
}


function fase5(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,220,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 5: Vegetação típica de regiões costeiras, sendo uma área de encontro das águas do mar com as águas doces dos rios. A principal espécie encontrada nesse bioma é o caranguejo. Essas características são do:",20,20,490,260);
  textSize(13);
    text("A) Cerrado."+"\n", 40, 150);
    text("B) Mangue. "+"\n",40, 175);
    text("C) Mata dos cocais."+"\n", 40, 200);
    text("D) Caatinga."+"\n",40, 225);
    drawPlacar()
}

function fase6(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq, 200,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 6: Localizado principalmente na Região Centro-Oeste, esse bioma é caracterizado pela presença de pequenos arbustos e árvores retorcidas, com cascas grossas e folhas recobertas de pelos. Solo deficiente em nutrientes e com alta concentração de alumínio. Marque a alternativa que corresponde ao bioma que apresenta as características descritas.",20,20,470,450);
    textSize(13);
    text("A) Mangue."+"\n", 40, 150);
    text("B) Caatinga."+"\n",40, 175);
    text("C) Cerrado."+"\n", 40, 200);
    text("D) Campos."+"\n",40, 225);
    drawPlacar()
}
function fase7(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,360,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 7: O principal fator responsável pelas diferenças climáticas existentes na Terra é a radiação solar,pois todo o calor absorvido pelo nosso planeta é proveniente do Sol. Entre os fenômenos cuja ocorrência vincula-se à manifestação dos raios solares, destacam-se:",20,20,480,450);
    textSize(13);
    text("A) O aumento da umidade e da amplitude térmica."+"\n", 40, 150);
    text("B) A existência do efeito estufa e das zonas térmicas. "+"\n",40, 175);
    text("C) A redução da pressão e da inversão térmica."+"\n", 40, 200);
    text("D) A regulação das precipitações e da circulação atmosférica."+"\n",40, 225);
    drawPlacar()
}
function fase8(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,250,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 8: O relevo terrestre é resultante da atuação de dois conjuntos de forças denominadas agentes do relevo, que compreendem os agentesinternos ou criadores do relevo e os agentes externos ou modificadores do relevo. Podemos considerar agentes internos e externos, respectivamente: ",20,20,450,260);
  textSize(13)
    text("A) Tectonismo e intemperismo."+"\n", 40, 150);
    text("B) Águas correntes e seres vivos."+"\n",40, 175);
    text("C) Vento e vulcanismo."+"\n", 40, 200);
    text("D) Águas correntes e intemperismo."+"\n",40, 225);
    drawPlacar()
}
function fase9(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,419,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 9: O clima da caatinga é semiárido quente com estações seca. A respeito dos motivos que levam a caatinga a possuir essa característica, marque a alternativa correta:",20,20,350,280);
  textSize(13)
    text("A) Influências de massas de ar e presciência de centros de alta pressão"+"\n", 40, 150);
    text("B) Chuvas intensas"+"\n",40, 175);
    text("C) Por se localizar distante da linha do equador"+"\n", 40, 200);
    text("D) Apenas por possuir baixas precipitações"+"\n",40, 225);
    drawPlacar()
}
function fase10(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(16);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 10: Os principais biomas brasileiros são:",20,20,260,260);
  textSize(13)
    text("A) Manguezal, Pradarias, Amazônia, Caatinga, Cerradão e Campo sujo."+"\n", 40, 150);
    text("B) Mata de Galeria, Cerrado, Amazônia, Pantanal e Igapó."+"\n",40, 175);
    text("C) Biomas costeiros, Campos, Pampas, Pradarias e Mata Atlântica."+"\n", 40, 200);
    text("D) Amazônia, Cerrado, Mata Atlântica, Pampas, Caatinga e Pantanal."+"\n",40, 225);
    drawPlacar()
}
function fase11(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 11: A globalização colocou o desafio ecológico como questão de sobrevivência da humanidade, e a Amazônia se tornou símbolo desse desafio. (Berta K. Becker et al. (orgs.). Geografia e meio ambiente no Brasil. São Paulo: Hucitec. Adaptado). Em relação à Amazônia, a preocupação dos países desenvolvidos se concentrou",20,20,480,260);
  textSize(13)
    text("A) Na difusão de doenças tropicais antes limitadas à região."+"\n", 40, 150);
    text("B) Na desterritorialização de grupos indígenas da região."+"\n",40, 175);
    text("C) No rápido desflorestamento das últimas décadas."+"\n", 40, 200);
    text("D) No aumento dos grupos autodenominados “povos da floresta”."+"\n",40, 225);
    drawPlacar()
}
function fase12(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 12:“Nas montanhas da China, do Japão, do Sudeste dos Estados Unidos e de algumas áreas da América do Sul ocorre este tipo de vegetação. Nele as chuvas são bem distribuídas durante o ano, alcançando 1500 mm anuais em média, mas as temperaturas são mais baixas do que na zona tropical. A paisagem vegetal descrita no texto corresponde",20,20,480,260);
  textSize(13)
    text("A) À floresta boreal."+"\n", 40, 150);
    text("B) Os campos temperados."+"\n",40, 175);
    text("C) À savana."+"\n", 40, 200);
    text("D) À floresta subtropical."+"\n",40, 225);
    drawPlacar()
}
function fase13(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 13: Na região de Ribeirão Preto, a qualidade dos solos tem grande influência sobre a vegetação natural. Enquanto nas áreas com solos de grande fertilidade encontram-se florestas, nos solos arenosos de menor fertilidade predomina",20,20,480,260);
  textSize(13)
    text("A) A Mata Atlântica."+"\n", 40, 150);
    text("B) O Cerrado."+"\n",40, 175);
    text("C) A Mata de Araucária."+"\n", 40, 200);
    text("D) A Caatinga."+"\n",40, 225);
    drawPlacar()
}
function fase14(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 14: As mudanças climáticas estão ocorrendo e já é possível notar algumas modificações que provavelmente relacionam-se com a ação do homem. Assim sendo, são necessárias ações urgentes para que nosso impacto no meio ambiente seja reduzido. Analise as alternativas abaixo e marque aquela que não indica uma forma de deter o avanço das mudanças climáticas.",20,20,480,460);
  textSize(13)
    text("A)  Aumentar o uso de combustíveis fósseis."+"\n", 40, 150);
    text("B) Realizar técnicas na agricultura que evitam a emissão de carbono."+"\n",40, 175);
    text("C) Realizar frequentemente a regulagem dos carros."+"\n", 40, 200);
    text("D) Realizar consumo consciente."+"\n",40, 225);
    drawPlacar()
}
function fase15(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 15: Muitas pessoas acreditam que as mudanças climáticas afetam exclusivamente a temperatura do planeta, que se torna mais quente. Entretanto, muitas vezes, essas pessoas esquecem que, ao aumentar a temperatura, uma série de organismos e ecossistemas são gravemente afetados. Observe as alternativas abaixo e marque a única que não é uma consequência da alteração da temperatura do planeta.",20,20,480,460);
  textSize(13)
    text("A) Diminuição da biodiversidade."+"\n", 40, 150);
    text("B) Aumento da frequência de terremotos."+"\n",40, 175);
    text("C) Secas prolongadas."+"\n", 40, 200);
    text("D) Alterações do regime de chuvas."+"\n",40, 225);
    drawPlacar()
}
function fase16(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 16: As florestas tropicais são conhecidas por apresentar grande variedade de plantas e animais. Pensando sobre a quantidade de matéria orgânica presente nesses locais, é esperado que os solos destas florestas tenham grande quantidade de:",20,20,480,260);
  textSize(13)
    text("A) Argila."+"\n", 40, 150);
    text("B) Areia."+"\n",40, 175);
    text("C) Húmus."+"\n", 40, 200);
    text("D) Cascalho."+"\n",40, 225);
    drawPlacar()
}
function fase17(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 17:Denomina-se erosão a degradação e decomposição das rochas e as modificações provocadas pelas variações de temperatura, ação da água e do vento, seu transporte e deposição. Este processo também pode ser induzido ou acelerado pela ação humana. Assinale a alternativa que contém, corretamente, um tipo de erosão e respectiva técnica de controle. ",20,20,480,460);
  textSize(13)
    text("A) Eólica/calagem. "+"\n", 40, 150);
    text("B) Pluvial/assoreamento."+"\n",40, 175);
    text("C) Glacial/gabiões."+"\n", 40, 200);
    text("D) Laminar/terraceamento."+"\n",40, 225);
    drawPlacar()
}
function fase18(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 18: O solo desempenha funções diversificadas e fundamentais como as seguintes, exceto:",20,20,480,260);
  textSize(12)
    text("A) Base de fixação e nutrição da vida vegetal."+"\n", 40, 150);
    text("B) Não está incluído nos ciclos de energia dos ecossistemas."+"\n",40, 175);
    text("C) Fonte essencial para produção de alimentos e matérias-primas."+"\n", 40, 200);
    text("D) Fonte de recurso, armazenamento de combustíveis fósseis e receptor de resíduos."+"\n",40, 225);
    drawPlacar()
}
function fase19(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,450,28)
    textSize(15);
    stroke(23)
    textAlign(LEFT);
    text( "QUESTÃO 19:A formação dos solos é um processo muito lento, tem uma longa duração e segue diversas etapas. Sobre o tema assinale a alternativa ERRADA:",20,20,480,260);
  textSize(11)
    text("A) Não há Circulação de nutrientes no Solo somente nas raízes das plantas."+"\n", 40, 150);
    text("B) Vento, água e temperatura são fatores que provcam degaste da rocha. "+"\n",40, 175);
    text("C) Da rocha mãe surge à superfície da Terra."+"\n", 40, 200);
    text("D) A formação dos solos, temperatura e precipitação influenciam na desagregação da rocha. "+"\n",40, 225);
    drawPlacar()
}
function fase20(){
  background(img5);
  textStyle(NORMAL)
  rect(xq,yq,415,28)
    textSize(15);
    stroke(1)
    textAlign(LEFT);
    text( "QUESTÃO 20: Não é um elemento constitutivo do solo:",20,20,480,260);
  textSize(13)
    text("A) Matéria mineral (areia, calcário, argila). "+"\n", 40, 150);
    text("B) Matéria orgânica (húmus, restos de plantas e animais)."+"\n",40, 175);
    text("C) Ozônio."+"\n", 40, 200);
    text("D) Ar e água."+"\n",40, 225);
    drawPlacar()
}
function acertos(){
    background(img1);
  textSize(24)
    text(`Você conseguiu acertar ${placar} questões!`, 50, 50)
}

function instrucoes(){
  background(img3)
  textStyle()
  textSize(16);
    stroke(1)
    textAlign(LEFT);
    text("Ano: 6º ano."+"\n"+"Materia: Geografia."+"\n"+"Resumo: O jogo de perguntas e respostas busca estimular o utilizador a testar seus conhecimentos e habilidades em relacionar padrões climáticos, tipos de solo, relevo e formações vegetais, onde os alunos terão perguntas que farão o estudo mais pratico e rapido.",20,20,260,260);
 

}
function creditos(){
  background(img3)
  textSize(16);
    stroke(23)
    textAlign(LEFT);
    image(img6, 90,90,140,150);
    image(img7,110,310,140,150);
    text("Aluno: Lucas Padilha Barbosa."+"\n", 80, 300)
    text("Educadora: Maria Silene Padilha Barbosa."+"\n",80,60,320,320)
}


function keyPressed(){
  telaTeste[tela](key)

}
