import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import immagine1 from "../images/300.png";

const Wrapper = styled.article`
  .primo-paragrafo {
    img {
      @media (min-width: 850px) {
        float: right;
        margin: 10px;
      }
      display: block;
      margin: 10px auto;
    }
  }
`;

const IndexPage = () => (
  <Layout
    titolo="Migliori Hosting per Wordpress"
    sottotitolo="In base ad uptime, velocità di caricamento e costo..."
  >
    <SEO
      title="Home"
      keywords={[
        `migliori hosting per wordpress`,
        `hosting per wordpress`,
        `recensioni hosting per wordpress`,
        "recensioni migliori hosting per wordpress"
      ]}
    />
    <Wrapper>
      <div className="primo-paragrafo">
        <img src={immagine1} alt="Immagine 1" />
        <p>
          Perché dovresti trovare il miglior hosting Wordpress per te? In tanti
          si cimentano nel tentativo di avviare un proprio business online o,
          semplicemente, di dare voce ai propri pensieri. Con il tempo,
          quest’attività è diventata sempre più alla portata di tutti, talmente
          tanti sono i servizi che mettono a disposizione dei temi che sono solo
          da riempire di contenuti. Senza ombra di dubbio, il più famoso e
          diffuso, tra questi servizi, è certamente Wordpress. Tuttavia, se
          avviare il proprio sito grazie a questa piattaforma è davvero una
          delle modalità più semplici per creare un proprio spazio online, è
          innegabile che se si vuole raggiungere una fetta di pubblico quanto
          più ampia possibile ci sia la necessità di fare le cose per bene;
          allora, ecco che arriva la tematica “hosting”. Se sei giunto fin qui,
          di sicuro sai di cosa stiamo parlando. Scegliere l’hosting giusto per
          il tuo sito Wordpress è molto importante. La “salute” del tuo sito, le
          sue prestazioni (e, di conseguenza, la tua soddisfazione) dipenderanno
          dall’hosting che tu sceglierai. Ma come fare a sapere quale è il
          migliore hosting Wordpress? La nostra guida, che è frutto sia della
          nostra esperienza diretta che di quella di utenti certificati di
          questi servizi, ti servirà proprio a valutare quale, tra i tanti
          servizi di hosting disponibili, sia il più adatto a te. Online
          esistono davvero molti servizi che possono fare al caso tuo, si tratta
          solo di scegliere quale hosting Wordpress sembra davvero ritagliato
          per te tra i vari SiteGround, Bluehost e tanti, tanti altri. Se hai
          fretta e non vuoi scendere troppo nel dettaglio, da’ un’occhiata alla
          nostra tabella comparativa! Tuttavia, ti consigliamo di capire prima
          quali sono i parametri che dovrebbero guidarti nella tua scelta (ti
          basterà aprire i link in basso).
        </p>
      </div>
      <p>
        [INIZIO BOX NASCOSTO, come su WPBeginner] Parametri guida per la scelta
        del miglior hosting Wordpress Nella scelta di un servizio di hosting ci
        sono sicuramente diversi parametri da tenere in considerazione: la
        velocità, l’uptime, il valore dell’assistenza tecnica e la sicurezza
        sono i primi a venirci in mente. Tuttavia, non dimenticare mai che la
        chiave per decidere quale servizio utilizzare sono sempre e soltanto i
        tuoi bisogni! Dal punto di vista tecnico, ricorda che sarà necessario
        tenere in considerazione almeno i seguenti tre parametri: Velocità -
        conosciuta anche come “tempo di caricamento” Uptime - deve essere almeno
        99.94% Assistenza - il centro di assistenza del tuo host deve essere
        disponibile h24 e capace di risolvere ogni questione legata all’hosting
        del tuo sito WordPress. Tuttavia, ci sono anche altre considerazioni che
        potrebbe essere necessario che tu faccia. Hosting Wordpress: condiviso,
        VPS o dedicato? La soluzione di hosting condiviso è sicuramente
        apprezzabile e consigliata a chi sta partendo adesso con il proprio sito
        web e, chiaramente, non ha ancora idea di quanto traffico potrebbe
        generare il proprio sito. Cosa vuol dire, però, hosting condiviso?
        Be’... è un po’ come vivere in condominio: hai il tuo “appartamento”, ma
        è pur sempre all’interno di uno spazio comune, pertanto non potrai mai
        avere risorse “illimitate”. Ciò è un bene o un male? Di sicuro,
        all’inizio non ci sono aspetti negativi; tuttavia, quando il tuo sito
        crescerà e sarà in grado di generare un traffico considerevole, potresti
        essere costretto (dal tuo provider o dalle necessità) ad effettuare un
        upgrade del tuo piano. Niente di sconvolgente, ma è bene che questa cosa
        ti sia chiara. Hosting VPS: cos’è e a chi può servire Una soluzione di
        mezzo tra l’hosting condiviso e l’hosting dedicato è sicuramente il VPS
        (Virtual Private Sever): si tratta di un unico server fisico
        “partizionato” in diversi server virtuali. Questa soluzione permette di
        coniugare costi un po’ più limitati rispetto ad una soluzione di hosting
        dedicato con la flessibilità che è propria, appunto, di un hosting
        Wordpress dedicato. Fa’ attenzione solo ad una cosa: se non hai
        competenze di tipo tecnico, assicurati di acquistare una soluzione
        “managed” (ovvero, gestita); in questo modo, il provider sarà in grado
        di fornirti un elevato livello di assistenza e gestire per te le
        problematiche tecniche relative al tuo servizio di hosting. Ti
        consigliamo questa soluzione se hai un blog, sei uno sviluppatore o hai
        un business di medie dimensioni. Hosting Dedicato: cos’è e a chi può
        servire Infine, ecco la soluzione più costosa, ma che ti garantisce il
        massimo della performance: l’hosting dedicato. Questa soluzione prevede
        che un intero server sia dedicato a te e al tuo sito, con tutti i pro e
        i contro del caso. I pro si possono riassumere con la semplice formula
        “massima flessibilità”, ovvero sarai in grado di decidere ogni minimo
        dettaglio (es: sistema operativo, ecc) relativo alla gestione del tuo
        server. Tuttavia, proprio la gestione del server potrebbe essere un
        contro notevole: se non hai esperienza a livello tecnico relativa alla
        gestione del server, allora è bene dedicarsi ad una soluzione di host
        “amministrato”, ovvero cedendo al tuo provider l’onere di amministrare
        per te la parte tecnica del tuo hosting. [FINE BOX NASCOSTO]
      </p>
    </Wrapper>
  </Layout>
);

// export const query = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "300.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 300, maxHeight: 300) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;

export default IndexPage;
