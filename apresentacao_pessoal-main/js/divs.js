function divMostrar(el) {

  document.getElementById("sobre").innerText = "";
  document.getElementById("profissional").innerText = "";
  document.getElementById("formacao").innerText = "";
  document.getElementById("projeto").innerText = "";




  if (el == "sobre") {
    if (document.getElementById("sobre").style.display == 'block') {
      document.getElementById("sobre").style.display = 'none';
      
    } else {
      document.getElementById("profissional").style.display = 'none';
      document.getElementById("formacao").style.display = 'none';
      document.getElementById("projeto").style.display = 'none';

      $("#sobre").append(
        '<section>Tenho 22 anos, sou de São José dos Pinhais, desde criança ja tinha definido que ia seguir o caminho da progamação pela Curiosidade, e amor a tecnologia que sempre  me animaram, ao longo desse caminho sempre busquei realizar da melhor forma minhas tarefas, sempre explorando novos conhecimentos para melhorar o produto final e a minha produtividade.</section>'
      );
      document.getElementById("sobre").style.display = 'block';
    }
  }
  if (el == "profissional") {
    if (document.getElementById("profissional").style.display == 'block') {
      document.getElementById("profissional").style.display = 'none';

    } else {
      document.getElementById("sobre").style.display = 'none';
      document.getElementById("formacao").style.display = 'none';
      document.getElementById("projeto").style.display = 'none';

      $("#profissional").append(
        '<section><div class="row"><div class="col-4" style="color: #00008B;"><img src="/imagens/Fluxo.jpeg" style="width: 50px;"> Fluxo<br><p style="color: #66FF00;"><b> Desenvolvedor de front-end <br> Meio período <br> abr de 2021 - nov de 2021 </b></p><p style="color: #66FF00;"><b>-Desenvolvimento de melhorias no Printer cloud<br> -Implementação de novas funções em Api REST<br>-Manipulação de Banco de dados<b></p></div><div class="col-4" style="color: red;"><img src="/imagens/Printer.jpeg" style="width: 45px; border-radius:40px;"> Printer do brasil<br><p style="color: #66FF00;"><b> Desenvolvedor de front-end <br> Meio período <br> dez de 2021 - mar de 2022 </b></p><p style="color: #66FF00;"><b>-Correção de bugs<br>-Implementação de melhorias-<br>Implementação de novas funções em Api REST<br>-Manipulação de Banco de dados</b></p></div><div class="col-4" style="color: white;"><img src="/imagens/pucpr.jpg" style="width: 50px;"> E-motion<br><p style="color: #66FF00;><b> Desenvolvedor de front-end <br> Meio período <br> mai de 2022 - ago de 2022 </b></p><p style="color: #66FF00;font-size: 18px;"><b>Progamador <br> Meio período <br> abr de 2022 - ago de 2022 <br> -Desenvolvimento de APP de captura de movimento na linguagem swift.</b><br></p> </div></div></section>'
      );
      document.getElementById("profissional").style.display = 'block';
    }
  } if (el == "formacao") {
    if (document.getElementById("formacao").style.display == 'block') {
      document.getElementById("formacao").style.display = 'none';

    } else {
      document.getElementById("sobre").style.display = 'none';
      document.getElementById("profissional").style.display = 'none';
      document.getElementById("projeto").style.display = 'none';

      $("#formacao").append(
        '<section style="text-align: center;"><b>Formado em Engenharia de software pela PUC-PR<br> 2018-2021 <br> <img src="/imagens/Diploma.png" id="diplo"></b></section>'
      );
      document.getElementById("formacao").style.display = 'block';
    }
  } if (el == "projeto") {
    if (document.getElementById("projeto").style.display == 'block') {
      document.getElementById("projeto").style.display = 'none';

    } else {
      document.getElementById("sobre").style.display = 'none';
      document.getElementById("profissional").style.display = 'none';
      document.getElementById("formacao").style.display = 'none';

      $("#projeto").append(
        '<section><p style="text-align: center;" ><b>Projeto Linhas de produto de software<b></p><br><div class="row"><div class="col-3">Dominio<br><iframe  src="https://www.youtube.com/embed/hFxhW_Zcvwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="col-3"> Escola<br><iframe " src="https://www.youtube.com/embed/OLq3k_CFftE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="col-3"> Faculdade 1<br><iframe  src="https://www.youtube.com/embed/KS8ACyVTQuM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="col-3">Faculdade 2<br><iframe src="https://www.youtube.com/embed/Vs24AvR9FS8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div></section>'
      );
      document.getElementById("projeto").style.display = 'block';
    }
  }
}