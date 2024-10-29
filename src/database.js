import axios from "axios";

export default {
  getDigimons(limit) {
    return axios.get(
      "https://digimoncard.io/api-public/search.php?limit=" + (limit || 0)
    );
  },

  getDigimon(name) {
    return axios.get("https://digimoncard.io/api-public/search.php?n=" + name);
  },

  getDigimonById(id) {
    return axios.get("https://digimoncard.io/api-public/search.php?card=" + id);
  },

  searchDigimon(term) {
    if (!term || term.length < 3) {
      return new Promise((resolve) => {
        resolve([]);
      });
    }
    return axios
      .get("https://digimoncard.io/api-public/search.php?limit=1795")
      .then((data) => {
        return data.data
          .filter((digimon) => {
            const nome = digimon.name.toLowerCase();
            const cerca = term.toLowerCase();
            return nome.indexOf(cerca) >= 0;
          })
          .map((digimon) => digimon.name);
      });
  },

  getFilms: function () {
    return [
      {
        id: "1",
        title: "Digimon Adventure",
        img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tn65LMkjjFFRdhwV2eSFH3WRlwA.jpg",
        opening_crawl:
          "Tai e Kari Kamiya si svegliano una mattina e trovano un Digiuovo, che la notte prima era fuoriuscito dal loro computer, che presto si schiude, dando alla luce Botamon. Il Digimon presto digievolve in Koromon e quindi in Agumon che presto esce all'esterno e distrugge inavvertitamente buona parte del vicinato con Kari seduta sul suo dorso. Quindi, improvvisamente, un secondo Digiuovo appare nel cielo per rivelare un Digimon malvagio, Parrotmon. Agumon quindi digievolve in Greymon, ma non sembra forte abbastanza per battere Parrotmon e viene messo fuori combattimento. Tai però afferra il fischietto di Kari e sveglia Greymon, che lotta nuovamente con Parrotmon, ma prima che la lotta venga vinta da uno dei due Digimon scompaiono insieme attraverso il varco, così come erano apparsi.",
        director: "Mamoru Hosoda",
        producer: "Toei Animation",
        release_date: "06-03-1999",
      },
      {
        id: "2",
        title: "Digimon Adventure 02: Zenpen",
        img: "https://nientepopcorn.b-cdn.net/film-img/digimon-adventure-02-zenpen-digimon-98299-locandina.jpg",
        opening_crawl:
          "I protagonisti della storia sono i nuovi Digiprescelti, che viaggiano dal Giappone agli Stati Uniti ed incontrano Willis, un Digiprescelto americano, ritrovandosi poi ad aiutarlo a fermare la minaccia causata da un enigmatico pericolo. Da bambino Willis aveva ricevuto due Digimon gemelli, un Gummymon ed un Kokomon. Tuttavia, un giorno Kokomon era scomparso misteriosamente senza lasciare traccia, ritornando successivamente nelle sembianze dello spietato Wendigomon.",
        director: "Yamauchi Shigeyasu",
        producer: "Toei Animation",
        release_date: "08-07-2000",
      },
      {
        id: "3",
        title: "Digimon Adventure: Last Evolution Kizuna",
        img: "https://pad.mymovies.it/filmclub/2021/11/203/locandina.jpg",
        opening_crawl:
          "Digimon Adventure: Last Evolution Kizuna è il dodicesimo film dedicato all' universo di Digimon e sarà ambientato 5 anni dopo gli eventi di Digimon Adventure tri., che a sua volta si svolge 6 anni dopo la serie originale. Tai Kamiya avrà 22 anni. I fatti si svolgono nel 2010. Con Taichi e i suoi amici che hanno ormai raggiunto l'età adulta, sono colpiti dalla notizia che l'amicizia con il loro Digimon finirà presto e saranno separati per sempre, poiché non sono più bambini. Nel frattempo, appare un potente Digimon chiamato Eosmon, pur sapendo che usare i loro poteri ridurrà il poco tempo che possono ancora avere insieme, tocca a Taichi, Agumon e tutti i loro amici combattere un'ultima volta per salvare il mondo. Oltre al film la Toei ha prodotto, e distribuito solo ai sostenitori del crowdfunding (Digimon Adventure 20th Memorial Story) 5 cortometraggi della durata di 5 minuti di cui il primo è stato distribuito online.",
        director: "Tomohisa Taguchi",
        producer: "Yosuke Kinoshita",
        release_date: "30-10-2020",
      },
    ];
  },

  getVideogames: function () {
    return [
      {
        id: "1",
        title: "Digimon world",
        img: "https://uploads.codesandbox.io/uploads/user/bdb3a51b-e135-4d98-8edc-2e2e5661722c/5axh-sito-02.png",
        console: "PlayStation 1",
        data: "06-07-2001",
        genere: "Simulatore di vita, Videogioco di ruolo",
      },
      {
        id: "2",
        title: "Digimon World: Digital Card Arena",
        img: "https://uploads.codesandbox.io/uploads/user/bdb3a51b-e135-4d98-8edc-2e2e5661722c/F1KR-sito-03.png",
        console: "PlayStation 1",
        data: "05-07-2002",
        genere: "Strategia a turni",
      },
      {
        id: "3",
        title: "Digimon Tamers: Battle Evolution",
        img: "https://uploads.codesandbox.io/uploads/user/bdb3a51b-e135-4d98-8edc-2e2e5661722c/uzua-sito-04.png",
        console: "PlayStation 1",
        data: "12-07-2002",
        genere: "Picchiaduro a incontri",
      },
      {
        id: "4",
        title: "Digimon World 3",
        img: "https://uploads.codesandbox.io/uploads/user/bdb3a51b-e135-4d98-8edc-2e2e5661722c/JLzG-sito-06.png",
        console: "PlayStation 1",
        data: "29-11-2002",
        genere: "Videogioco di ruolo",
      },
      {
        id: "5",
        title: "Digimon Tamers: Battle Spirit",
        img: "https://uploads.codesandbox.io/uploads/user/bdb3a51b-e135-4d98-8edc-2e2e5661722c/BYeV-sito-01.png",
        console: "WonderSwan Color, Game Boy Advance",
        data: "05-09-2003",
        genere: "Picchiaduro a incontri",
      },
      {
        id: "6",
        title: "Digimon Racing",
        img: "https://uploads.codesandbox.io/uploads/user/bdb3a51b-e135-4d98-8edc-2e2e5661722c/Y9CE-sito-05.png",
        console: "Game Boy Advance",
        data: "30-04-2004",
        genere: "Simulatore di guida",
      },
    ];
  },
};
