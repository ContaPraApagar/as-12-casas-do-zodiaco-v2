function MudaDesenho(){
    const texto = document.querySelector("h1");
    const texto1 = document.querySelector("h2");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const dia = document.querySelector('#valor1').value;
    const mes = document.querySelector('#valor2').value;
    
    if((valor=="gemeos" || valor=="Gemeos" || valor=="Gêmoes" || valor=="gêmeos") || (dia >= 21 && dia <= 31 && mes == 5 || dia >= 1 && dia <= 20 && mes == 6)){
        texto.innerHTML = "Gêmeos";
        texto1.innerHTML = "Saga de Gêmeo é o irmão gêmeo mais velho de Kanon, pedestinado a se tonar o Cavaleiro de Ouro de Gêmeos do século XX, que antigamente era tido como o próximo sucessor do Grande Mestre, tendo todas as características necessárias para o posto-humanidade, habilidade e força física. Dado como desaparecido há treze anos, no mangá, ele esteve escondido por todo esse tempo sob a máscara do Grande Mestre, depois de assassiná-lo e tomar seu posto como governante do Santuário.";
        imagem.setAttribute("src","./img/gemeos.jpg");
        imagem.setAttribute("width","400px");
    }

    else if((valor=="escorpiao" || valor=="Escorpiao" || valor=="escorpião" || valor=="Escorpião") || (dia >= 23 && dia <= 31 && mes == 10 || dia >= 1 && dia <= 21 && mes == 11)){
        texto.innerHTML = "Escorpião";
        texto1.innerHTML = "Milo de Escorpião foi no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário. Era um Cavaleiro fiel ao Santuário, inicialmente obedecendo as ordens do Grande Mestre, embora houvesse ocasiões em que ele se negaria a realizar missões específicas por questões de orgulho, sentimento este que determinava o rumo de suas conversas inicialmente, tendo se tornado consideravelmente mais humilde depois de sua batalha contra Hyoga de Cisne.";
        imagem.setAttribute("src","./img/escorpiao.jpg");
        imagem.setAttribute("width","400px");
    }
    
    else if((valor=="peixes" || valor=="Peixes") || (dia >= 19 && dia <= 29 && mes == 2 || dia >= 1 && dia <= 20 && mes == 3)){ 
        texto.innerHTML = "Peixes";
        texto1.innerHTML = "Afrodite de Peixes é o Cavaleiro de Ouro do signo de peixes, natural da Suécia. É o mais belo de todas as 88 constelações e acredita fielmente que: A força é a justiça. Utiliza as características da rosa pelo Cosmo e aplica os golpes. As Rosas Diabólicas Reais são flores vermelhas com veneno para atacar os inimigos. Apesar do lema: A força é a justiça, é o Cavaleiro que mais se preocupa com a paz na superfície.";
        imagem.setAttribute("src","./img/peixes.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="aquario" || valor=="Aquario" || valor=="aquário" || valor=="Aquário") || (dia >= 21 && dia <= 31 && mes == 1 || dia >= 1 && dia <= 18 && mes == 2)){
        texto.innerHTML = "Aquário";
        texto1.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
        imagem.setAttribute("src","./img/aquario.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="aries" || valor=="Aries" || valor=="áries" || valor=="Áries") || (dia >= 21 && dia <= 31 && mes == 3 || dia >= 1 && dia <= 20 && mes == 4)){
        texto.innerHTML = "Áries";
        texto1.innerHTML = "Mu de Áries é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário. Porém, desejando a purificação do local, manteve suas obrigações como Cavaleiro, dedicando-se à restauração das Armaduras em Jamiel.";
        imagem.setAttribute("src","./img/aries.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="leao" || valor=="Leao" || valor=="Leão" || valor=="Leão") || (dia >= 23 && dia <= 31 && mes == 8 || dia >= 1 && dia <= 22 && mes == 9)){
        texto.innerHTML = "Leão";
        texto1.innerHTML = "Aiolia de Leão, Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze. Durante a batalha contra os Espectros, enfrentou o exército inimigo de frente e derrubou muitos Espectros, servindo como poder central de ataque no Santuário.";
        imagem.setAttribute("src","./img/leao.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="touro" || valor=="Touro") || (dia >= 21 && dia <= 31 && mes == 10 || dia >= 1 && dia <= 20 && mes == 11)){
        texto.innerHTML = "Touro";
        texto1.innerHTML = "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. O Grande Chifre, alusão ao chifre de um touro bravo, é um golpe lançado quando está engatado com o inimigo. Mas se desferido depois, de longe, sua potência dobra. De personalidade franca e despachada, confia no que sente, sem se preocupar com as aparências ou racionalidades. Lutou com Niobe de Deep quando os Espectros invadiram o Santuário, tendo um fim heroico.";
        imagem.setAttribute("src","./img/touro.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="virgem" || valor=="Virgem") || (dia >= 23 && dia <= 31 && mes == 8 || dia >= 1 && dia <= 22 && mes == 9)){
        texto.innerHTML = "Virgem";
        texto1.innerHTML = "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências.";
        imagem.setAttribute("src","./img/virgem.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="sagitario" || valor=="Sagitario" || valor=="sagitário" || valor=="Sagitário") || (dia >= 22 && dia <= 30 && mes == 11 || dia >= 1 && dia <= 21 && mes == 12)){
        texto.innerHTML = "Sagitário";
        texto1.innerHTML = "Aiolos de Sagitário é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia.";
        imagem.setAttribute("src","./img/sagitario.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="libra" || valor=="Libra") || (dia >= 23 && dia <= 30 && mes == 9 || dia >= 1 && dia <= 22 && mes == 10)){
        texto.innerHTML = "Libra";
        texto1.innerHTML = "Dohko de Libra fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.";
        imagem.setAttribute("src","./img/libra.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="capricornio" || valor=="Capricornio" || valor=="capricórnio" || valor=="Capricórnio") || (dia >= 22 && dia <= 31 && mes == 12 || dia >= 1 && dia <= 20 && mes == 1)){
        texto.innerHTML = "Capricornio";
        texto1.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz.";
        imagem.setAttribute("src","./img/capricornio.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="cancer" || valor=="Cancer" || valor=="câncer" || valor=="Câncer") || (dia >= 21 && dia <= 30 && mes == 6 || dia >= 1 && dia <= 22 && mes == 7)){
        texto.innerHTML = "Câncer";
        texto1.innerHTML = "Máscara da Morte de Câncer é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis. As paredes da Casa de Câncer são enfeitadas com os rostos das pessoas que foram mortas até hoje por Máscara da Morte.";
        imagem.setAttribute("src","./img/cancer.jpg");
        imagem.setAttribute("width","400px");
    }
    else if((valor=="easteregg" || valor=="Easteregg" || valor=="EasterEgg" || valor=="easter egg" || valor=="Easter egg" || valor=="Easter Egg") || (dia >= 69 && mes == 420 || dia >= 420 && mes == 69)){
        texto.innerHTML = "Cavaleiros Secretos Desbloqueados";
        texto1.innerHTML = "Os esquecidos e cáoticos";
        imagem.setAttribute("src","./img/signos1.png");
        imagem.setAttribute("width","1000px");
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado...";
        texto1.innerHTML = "";
        imagem.setAttribute("src","./img/interrogação.png");
        imagem.setAttribute("width","250px");
    }
}
