
<template>
  <div>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <carousel
      class="md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100"
    >
      <slide>
        <div class="contenitore">
          <img
            src="https://www.lascimmiapensa.com/wp-content/uploads/2021/07/Digimon.jpg"
          />
        </div>
      </slide>
      <slide>
        <div class="contenitore">
          <img
            src="https://deveserisso.com.br/blog/wp-content/uploads/2016/04/digimon.jpg"
          />
        </div>
      </slide>
      <slide>
        <div class="contenitore">
          <img
            src="https://www.animeemanga.it/wp-content/uploads/2010/07/Digimon-Adventure-02.jpg"
          />
        </div>
      </slide>
      <slide>
        <div class="contenitore">
          <img
            src="https://www.ciakgeneration.it/wp-content/uploads/2019/03/DIGIMON-Ricordi-i-nomi-di-questi-Digiprescelti-QUIZ.jpg"
          />
        </div>
      </slide>

      <slide>
        <div class="contenitore">
          <img
            src="https://giochi-mmo.it/mmorpg/files/pasqua-digimon-masters-online.jpg"
          />
        </div>
      </slide>
      <slide>
        <div class="contenitore">
          <img
            src="https://www.daninseries.it/wp-content/uploads/2017/09/Digimon-Anime.jpg"
          />
        </div>
      </slide>

      <slide>
        <div class="contenitore">
          <img
            src="https://www.hallofseries.com/wp-content/uploads/2019/10/I-Digimon.jpg"
          />
        </div>
      </slide>
    </carousel>
    <br />
    <br />

    <!-- Messaggio di Benvenuto -->
    <div id="titolo">
      <div class="barra"></div>
      <div
        class="md-layout-item md-xlarge-size-20 md-size-20 md-small-size-40 md-medium-size-30 md-xsmall-size-60"
      >
        <span class="md-headline">BENVENUTO {{ username }}!</span>
      </div>
      <div class="barra"></div>
    </div>
    <br />
    <br />
    <br />

    <div class="md-layout md-alignment-center">
      <div
        class="md-layout-item md-xlarge-size-30 md-large-size-30 md-medium-size-30 md-small-size-50 md-xsmall-size-85"
      >
        <img
          class="img-home"
          src="data:image/jpeg;base64,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soy+nr1sxy5JdreGRWmd9nmiqBC+QsN7ASb2725d0XPwW34h41mqoHQfZXszkXdZ5+Flvvu0xnyqb3rv2J92eM+VTe9d/wCtTnG3m03uttFoexVdLGPMjfC/Fj6KEwNpHuu9zi6zwNbAWFtLALMxXjmaeF8IpJG5xbMM5Iv6wtx92mM+VTe9d+xPu1xnyqb3rv2KuVK2c1N7rZ41JZuMOK0T3XNoQqtprQshaLOkLW7OGrjlGhPpXqaipxHGyMbMaGj2ABU1gfJliIq6eWpMBiika92WRznd7qAAWjpV3L2vOMmuXZInQhKMXzbt5CIioLwiIgCIiAIiIAtfi+DwVTOaqImyM6nC9vUehbBEBXVdyO4e/wDl89AfySXH9LwQq2w2LJE6JxvJFPLG49JynQn2WXo5UvygcE1cVVJW0cZmilOaSJnhNk2JDfGB02V9vV5J5bKLilzwaS1MXgTEo2M5lzm85HK92RxsTcktI6xYqWQNYTEyw5uPM/L1v1AA6gAfiqhqa9gOWpgdG4fiMLCPVmA+ayqOst/JqpY/Rnzt7H3C5l1wSdSpKpQqL2m3h95po8ThCEYVoNNLGUWRDSBojcc7C5j3SAXsLbWa7QOvdfTKd/OCFxbmvIMzm6ODQwsdvbUPF1DYMerG+PFKPS0sPaCR8Flni2d1hJSteAMukoOh3FnN22XNq8Hu4708/Bo3UuJW/wCGrj4r/wBJHR0krn809jY3kAgmMEbkHVryD2r4DHOgMxkyhrm3tZmjiGi5IdYh1hotGOMJBlDKS2Xwf8RgA6dLDrXT3V1WuSCNl97yOPTfZrR0qEeFXcpaUXj5fck+IUFHWss46ErpKaJ7Y5XAO1cyS4DwQR3p761gLbgX1XfS1UjGta5ws0WIHguGwuXDMR6PSoDU4/VneaGMehmY9rj+i0lbigP86pll/LnytP8A0NsCtMOB3kklJqK+JTLilom2szb7jbYjO2SrmkZbI1rIwRsSy5Nj6Lrt5POD2YpLUumklbHCYwBGQMzn5i65IO1ht1rWYbS1dTaOko5S3bNkLIx63uAFldfJzwt/D6Xm3kOmkdnlcNsx2APSANF9AlGhbwoQlnHU5S5qteVaccZ6HVhHJrhtO4PbT53t2dI4vN/bopiEsuVnNIREQBERAEREAREQBERAEREAREQBERAFxZcogMWsoIpRlkjY8dTmh3zUQxXkrwyYlwhdC7yonuZ/bct+CnKICnazkblbrT1x9UrL/Fi1UvJtjDD3rqeQeiQj4OZ+qvdFbGvUjtJlUqFOW8UUI3gDGj4kA9co/RqzabkpxJ/82pgjHTlzyH5AK7kXruKr/ERVtSX4SraDkaphrUVE8x6gRG30+CL2UwwfgnD6X+TSxtPlEF7v6nklSJFU5N7suUUtkfDWAaAWC+guUXh6EREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q=="
          alt="Digimons"
        />

        <div>
          <h3 class="md-headline">DIGIMON</h3>

          <md-button
            to="/digimonlist"
            class="md-raised md-primary"
            id="vaiallapagina"
            style="width: 200px"
            >Vai alla pagina</md-button
          >
          <br />
        </div>
      </div>
      <div
        class="md-layout-item md-xlarge-size-30 md-large-size-30 md-medium-size-30 md-small-size-50 md-xsmall-size-85"
      >
        <img
          class="img-home"
          src="https://resizing.flixster.com/H2K5KPJTQpSOQMSDOj9TxifNBwI=/300x300/v2/https://flxt.tmsimg.com/assets/p18205770_b_h9_ac.jpg"
          alt="Film"
        />

        <div>
          <h3 class="md-headline">FILM</h3>
          <md-button
            to="/film"
            class="md-raised md-primary"
            id="vaiallapagina"
            style="width: 200px"
            >Vai alla pagina</md-button
          >
        </div>
      </div>
      <div
        class="md-layout-item md-xlarge-size-30 md-large-size-30 md-medium-size-30 md-small-size-50 md-xsmall-size-85"
      >
        <img
          class="img-home"
          src="https://preview.redd.it/0ox70xqrv8l21.jpg?auto=webp&s=21034f899b85644c3679fda98bbbc45ba4f57513"
          alt="Videogiochi"
        />

        <div>
          <h3 class="md-headline">VIDEOGIOCHI</h3>
          <md-button
            to="/videogames"
            class="md-raised md-primary"
            id="vaiallapagina"
            style="width: 200px"
            >Vai alla pagina</md-button
          >
        </div>
      </div>
    </div>
    <br />
    <br />

    <div>
      <div id="titolo">
        <div class="barra"></div>
        <div
          class="md-layout-item md-xlarge-size-20 md-size-20 md-small-size-40 md-medium-size-30 md-xsmall-size-60 scritta"
        >
          <span class="md-headline">ALLA SCOPERTA DEI DIGIMON</span>
        </div>
        <div class="barra"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div id="testo">
        <div class="md-layout-item-2">
          <span class="md-body-1">
            Digimon <span id="jap">デジモン</span> è un media franchise
            giapponese che comprende anime, manga, giocattoli, videogiochi,
            giochi di carte collezionabili e altri media, reso popolare
            soprattutto grazie alle dieci serie animate, ideate da Akiyoshi
            Hongo a partire dal 1999 e prodotte dalla Toei Animation. Digimon è
            l'abbreviazione di Digital Monsters
            <span id="jap">デジタルモンスタ</span>, cioè mostri digitali, che
            caratterizzano la serie e vivono in un universo parallelo al nostro:
            Digiworld, il mondo digitale, che si è sviluppato dalle varie reti
            di comunicazione presenti sulla Terra. I Digimon sono inoltre
            protagonisti, oltre all'anime e al manga, di alcuni film
            d'animazione, vari giocattoli, svariati videogiochi, giochi di carte
            collezionabili. Il creatore del concetto di Digimon è Akiyoshi
            Hongo, anche se quest'uomo rimane una figura misteriosa, e il suo
            vero ruolo è più o meno sconosciuto visto che non ha mai lasciato
            dichiarazioni. I Digimon nascono da uova particolari, chiamate
            "Digiuova". Questo secondo tipo di digiuovo viene chiamato
            "Digimental" in giapponese. Tramite la "Digievoluzione", i Digimon
            sono in grado di diventare più potenti e cambiano nell'aspetto.
            L'effetto della Digievoluzione, tuttavia, non è permanente nei
            Digimon compagni dei personaggi principali nell'anime, infatti i
            Digimon che hanno effettuato la Digievoluzione la maggior parte
            della volte regrediranno alla loro forma precedente dopo una
            battaglia o se sono troppo stanchi o malridotti per continuare.
            Alcuni Digimon possono considerarsi selvaggi e sono quindi feroci.
            La maggior parte di essi, tuttavia, si distingue per la propria
            intelligenza e per la padronanza della lingua umana. I Digimon sono
            tutti in grado di digievolvere autonomamente, ma l'uso del Digivice
            da parte dei loro eventuali partner umani lo rende molto più facile
            e realizzabile in tempi più brevi. In alcuni casi, come nella prima
            stagione, i Digiprescelti (conosciuti anche come i "bambini
            prescelti") devono trovare alcuni oggetti speciali come i
            Digimedaglioni e le Digipietre per permettere ai propri Digimon di
            raggiungere nuovi stadi di Digievoluzione come quello "evoluto" e
            quello "mega". Il primo anime dei Digimon introduce il ciclo vitale
            dei Digimon: questi invecchiano in un processo simile a quello degli
            organismi viventi, ma non muoiono mai per cause naturali perché sono
            fatti di dati riconfigurabili. Qualsiasi Digimon che subisce un
            colpo fatale si dissolverà in infinitesimali bit di dati. I dati
            quindi si ricomporranno automaticamente e formeranno un Digiuovo,
            che si schiuderà quando verrà covato nel modo giusto, e il suddetto
            Digimon ricomincerà il suo ciclo vitale. I Digimon reincarnati in
            questo modo a volte conserveranno alcuni o tutti i ricordi della
            loro vita precedente,. In ogni caso, se i dati di un Digimon vengono
            completamente distrutti, questo morirà.
          </span>
        </div>
      </div>
      <br />
    </div>

    <footer id="footer" class="footer">
      <div class="md-layout md-alignment-center">
        <div
          class="md-layout-item md-xlarge-size-100 md-large-size-100 md-medium-size-100 md-small-size-100 md-xsmall-size-100"
        >
          <div class="md-body-1">Questo sito web è stato sviluppato da:</div>
        </div>
        <div
          class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-33 md-xsmall-size-100"
        ></div>
        <div
          class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-33 md-xsmall-size-100"
        >
          <div class="md-subheading" id="nome">GIULIA DE BEI</div>
          <p class="md-body-1">giulia.debei@studenti.unitn.it</p>
        </div>
        <div
          class="md-layout-item md-xlarge-size-33 md-large-size-33 md-medium-size-33 md-small-size-33 md-xsmall-size-100"
        ></div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#testo {
  display: flex;
  justify-content: center;
}

#jap {
  color: rgb(0, 174, 255);
  font-weight: bold;
}

#nome {
  color: rgb(0, 174, 255);
  font-weight: bold;
}

#vaiallapagina {
  margin-bottom: 50px;
}

.img-home {
  width: 275px;
  height: 275px;
}

#titolo {
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35px;
}

.barra {
  height: 2px;
  width: 15%;
  background-color: #ffffff;
}

.md-layout-item {
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  transition: 0.3s;
  text-align: center;
}

.md-layout-item-2 {
  margin-top: -4%;
  width: 82%;
  font-style: initial;
  text-align: justify;
  text-justify: inter-word;
}

img {
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
}

.footer {
  background-color: #000000;
  margin-top: 20px;
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 598px) {
  img {
    height: 210px;
  }
}
</style>

<script>

export default {
  data: function () {
    return {
      username: localStorage.getItem("username").toUpperCase(),
    };
  },
};
</script>
