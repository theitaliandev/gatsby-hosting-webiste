import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import immagine1 from "../images/300.png";
import banner from "../images/1024.png";
import { MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

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
  .bold {
    font-weight: bold;
    font-family: sans-serif;
  }
`;

const BoxNascosto = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  background: #1659de;
  padding: 1rem;
  transition: all 1sec linear;
  .titolo-icona {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 15px;
    h2 {
      color: white;
      font-size: 1rem;
      @media (min-width: 768px) {
        font-size: 1.2rem;
      }
    }
  }
`;

const StyledAddIcon = styled(MdAddCircleOutline)`
  display: ${props => (props.statoBoxNascosto ? "none" : "unset")};
  color: white;
  cursor: pointer;
  max-width: 3em;
  max-height: 3em;
  min-width: 1.5em;
  min-height: 1.5em;
  margin: 0px 20px;
`;

const StyledCloseIcon = styled(MdRemoveCircleOutline)`
  display: ${props => (props.statoBoxNascosto ? "unset" : "none")};
  color: white;
  cursor: pointer;
  max-width: 3em;
  max-height: 3em;
  min-width: 1.5em;
  min-height: 1.5em;
  margin: 0px 20px;
`;

const ContenutoBoxNascosto = styled.div`
  height: ${props => (props.statoBoxNascosto ? "auto" : "0")};
  overflow: hidden;
  background: white;
  padding: ${props => (props.statoBoxNascosto ? "15px" : "0")};
  h3 {
    font-size: 1.4rem;
  }
`;

const BannerSitiHosting = styled.img`
  width: 100vw;
  margin-left: -40px;
  @media (min-width: 481px) {
    margin-left: -80px;
  }
  @media (min-width: 768px) {
    margin-left: -120px;
  }
  @media (min-width: 1024px) {
    margin-left: -200px;
  }
`;

const ProBox = styled.div`
  border: solid 2px green;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ProBoxTitle = styled.div`
  background: green;
  padding: 0.5rem;
  color: white;
  font-style: bold;
  margin-bottom: 1rem;
`;

const ConstBox = styled.div`
  border: solid 2px red;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ConstBoxTitle = styled.div`
  background: red;
  padding: 0.5rem;
  color: white;
  font-style: bold;
  margin-bottom: 1rem;
`;

const ProConstContainer = styled.div`
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;
  }
`;

export default class IndexPage extends React.Component {
  state = {
    boxNascosto1Open: false,
    boxNascosto2Open: false
  };
  handleBoxNascosto1 = () => {
    this.setState(() => {
      return {
        boxNascosto1Open: !this.state.boxNascosto1Open
      };
    });
  };
  handleBoxNascosto2 = () => {
    this.setState(() => {
      return {
        boxNascosto2Open: !this.state.boxNascosto2Open
      };
    });
  };
  render() {
    return (
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
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.6rem"
                }}
              >
                Perché dovresti trovare il miglior hosting Wordpress per te?
              </span>
              <br />
              <br /> In tanti si cimentano nel tentativo di avviare un proprio
              business online o, semplicemente, di dare voce ai propri pensieri.
              Con il tempo, quest’attività è diventata sempre più alla portata
              di tutti, talmente tanti sono i servizi che mettono a disposizione
              dei temi che sono solo da riempire di contenuti. Senza ombra di
              dubbio, il più famoso e diffuso, tra questi servizi, è certamente
              Wordpress. <br />
              <br />
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "1.6rem"
                }}
              >
                Ma quali sono gli elementi per il successo del tuo sito?
              </span>
              <br />
              <br />
              Se avviare il proprio sito grazie a questa piattaforma è davvero
              una delle modalità più semplici per creare un proprio spazio
              online, è innegabile che se si vuole raggiungere una fetta di
              pubblico quanto più ampia possibile ci sia la necessità di fare le
              cose per bene; allora, ecco che arriva la tematica{" "}
              <span className="bold">“hosting”</span>
              . Se sei giunto fin qui, di sicuro sai di cosa stiamo parlando.
              <br />
              <br />
              Scegliere{" "}
              <span className="bold">
                l’hosting giusto per il tuo sito Wordpress
              </span>{" "}
              è <span style={{ fontStyle: "italic" }}>molto</span> importante.
              La “salute” del tuo sito, le sue prestazioni (e, di conseguenza,
              la tua soddisfazione) dipenderanno dall’hosting che tu sceglierai.
              <br />
              <br /> Ma{" "}
              <span className="bold">
                come fare a sapere quale è il migliore hosting Wordpress?
              </span>{" "}
              La nostra guida, che è frutto sia della nostra esperienza diretta
              che di quella di utenti certificati di questi servizi, ti servirà
              proprio a valutare quale, tra i tanti servizi di hosting
              disponibili, sia <span className="bold">il più adatto a te.</span>{" "}
              <br />
              <br />
              Online esistono davvero molti servizi che possono fare al caso
              tuo, si tratta solo di scegliere quale hosting Wordpress sembra
              davvero ritagliato per te tra i vari SiteGround, Bluehost e tanti,
              tanti altri. <br />
              <br /> Se hai fretta e non vuoi scendere troppo nel dettaglio, da’
              un’occhiata alla nostra tabella comparativa! Tuttavia, ti
              consigliamo di capire prima quali sono i parametri che dovrebbero
              guidarti nella tua scelta (ti basterà cliccare sull'iconcina "+"
              in basso per approfondire l'argomento).
              <br />
              <br />
            </p>
          </div>
          <BoxNascosto>
            <div className="titolo-icona">
              <h2>
                Parametri guida per la scelta del miglior hosting Wordpress
              </h2>
              <StyledAddIcon
                statoBoxNascosto={this.state.boxNascosto1Open}
                onClick={() => this.handleBoxNascosto1()}
              />
              <StyledCloseIcon
                statoBoxNascosto={this.state.boxNascosto1Open}
                onClick={() => this.handleBoxNascosto1()}
              />
            </div>
            <ContenutoBoxNascosto
              statoBoxNascosto={this.state.boxNascosto1Open}
            >
              Nella scelta di un servizio di hosting ci sono sicuramente diversi
              parametri da tenere in considerazione: la velocità, l’uptime, il
              valore dell’assistenza tecnica e la sicurezza sono i primi a
              venirci in mente. Tuttavia, non dimenticare mai che la chiave per
              decidere quale servizio utilizzare sono sempre e soltanto i tuoi
              bisogni! Dal punto di vista tecnico, ricorda che sarà necessario
              tenere in considerazione almeno i seguenti tre parametri:
              <br />
              <br />
              <ul>
                <li>
                  <span className="bold">Velocità - </span>
                  conosciuta anche come "tempo di caricamento"
                </li>
                <li>
                  <span className="bold">Uptime - </span>
                  deve essere almeno 99.94%
                </li>
                <li>
                  <span className="bold">Assistenza - </span>
                  il centro di assistenza del tuo host deve essere disponibile
                  h24 e capace di risolvere ogni questione legata all’hosting
                  del tuo sito WordPress.
                </li>
              </ul>
              <br />
              Tuttavia, ci sono anche altre considerazioni che potrebbe essere
              necessario che tu faccia.
              <br />
              <br />
              <h3>Hosting Wordpress: condiviso, VPS o dedicato?</h3>
              <br />
              La soluzione di <span className="bold">hosting condiviso</span> è
              sicuramente apprezzabile e consigliata a chi sta{" "}
              <span className="bold">
                partendo adesso con il proprio sito web
              </span>{" "}
              e, chiaramente, non ha ancora idea di quanto traffico potrebbe
              generare il proprio sito. Cosa vuol dire, però, hosting condiviso?
              Be’... è un po’ come vivere in condominio: hai il tuo
              “appartamento”, ma è pur sempre all’interno di uno spazio comune,
              pertanto non potrai mai avere risorse “illimitate”. Ciò è un bene
              o un male?
              <br />
              <br />
              Di sicuro, all’inizio non ci sono aspetti negativi; tuttavia,
              quando il tuo sito crescerà e sarà in grado di generare un
              traffico considerevole, potresti essere costretto (dal tuo
              provider o dalle necessità) ad effettuare un upgrade del tuo
              piano. Niente di sconvolgente, ma è bene che questa cosa ti sia
              chiara.
              <br />
              <br />
              <h3>Hosting VPS: cos’è e a chi può servire</h3>
              <br />
              Una soluzione di mezzo tra l’hosting condiviso e l’hosting
              dedicato è sicuramente il{" "}
              <span className="bold">VPS (Virtual Private Sever)</span>: si
              tratta di un unico server fisico “partizionato” in diversi server
              virtuali. Questa soluzione permette di coniugare costi un po’ più
              limitati rispetto ad una soluzione di hosting dedicato con la
              flessibilità che è propria, appunto, di un hosting Wordpress
              dedicato. Fa’ attenzione solo ad una cosa: se non hai competenze
              di tipo tecnico,{" "}
              <span className="bold">
                assicurati di acquistare una soluzione “managed” (ovvero,
                gestita dal provider)
              </span>
              ; in questo modo, il provider sarà in grado di fornirti un elevato
              livello di assistenza e gestire per te le problematiche tecniche
              relative al tuo servizio di hosting. Ti consigliamo questa
              soluzione se hai un blog, sei uno sviluppatore o hai un business
              di medie dimensioni.
              <br />
              <br />
              <h3>Hosting Dedicato: cos’è e a chi può servire</h3>
              <br />
              Infine, ecco la soluzione più costosa, ma che ti garantisce il
              massimo della performance: l’
              <span className="bold">hosting dedicato</span>. Questa soluzione
              prevede che un intero server sia dedicato a te e al tuo sito, con
              tutti i pro e i contro del caso. I pro si possono riassumere con
              la semplice formula{" "}
              <span className="bold">“massima flessibilità”</span>, ovvero sarai
              in grado di decidere ogni minimo dettaglio (es: sistema operativo,
              ecc) relativo alla gestione del tuo server. Tuttavia, proprio la
              gestione del server potrebbe essere un contro notevole: se non hai
              esperienza a livello tecnico relativa alla gestione del server,
              allora è bene dedicarsi ad una soluzione di host “amministrato”,
              ovvero cedendo al tuo provider l’onere di amministrare per te la
              parte tecnica del tuo hosting.
            </ContenutoBoxNascosto>
          </BoxNascosto>
          <br />
          <p>
            Eccoci qui: dopo mesi di prove, nostre e di utenti che hanno deciso
            di collaborare con noi, ti proponiamo quelli che a nostro avviso
            sono i migliori servizi di hosting Wordpress attualmente sul
            mercato.
          </p>
          <br />
          <p>
            <span className="bold">È bene precisare che</span>: noi guadagnamo
            una commissione nel momento in cui tu deciderai di acquistare uno
            dei servizi proposti in questo articolo attraverso i nostri link di
            affiliazione. Grazie a questi introiti riusciamo a mantenere
            operativo ed aggiornato{" "}
            <span style={{ color: "red" }}>“nome del sito”</span>. Grazie mille
            per il tuo supporto.
          </p>
          <br />
          <p>
            <span className="bold">P.S.</span> Noi non possiamo garantirti
            risultati e metriche dell’uptime o della velocità del tuo sito
            WordPress dal momento che queste variano in base a svariati fattori:
            pacchetto hosting per WordPress scelto, dimensioni del tuo sito,
            traffico ricevuto ecc…
          </p>
          <br />
          <BoxNascosto style={{ background: "red" }}>
            <div className="titolo-icona">
              <h2>Perché dovresti fidarti di noi?</h2>
              <StyledAddIcon
                statoBoxNascosto={this.state.boxNascosto2Open}
                onClick={() => this.handleBoxNascosto2()}
              />
              <StyledCloseIcon
                statoBoxNascosto={this.state.boxNascosto2Open}
                onClick={() => this.handleBoxNascosto2()}
              />
            </div>
            <ContenutoBoxNascosto
              statoBoxNascosto={this.state.boxNascosto2Open}
            >
              <h3>Hai bisogno di aiuto?</h3>
              <br />
              <p>
                <span className="bold">
                  La scelta di un hosting per WordPress può essere una cosa
                  complicata e ti capiamo
                </span>
                . Per cui vogliamo solo che tu sappia che siamo qui per guidarti
                nella scelta. Se la scelta dell’hosting per WordPress ti blocca
                mentre imposti il tuo nuovo sito, o hai qualsiasi domanda a
                riguardo saremo felici di aiutarti. Sentiti libero di inviarci
                un commento o di scrivere una mail all’indirizzo dedicato, che
                troverai in basso!
              </p>
              <br />
              <h3>Perché dovresti fidarti di noi?</h3>
              <br />
              <p>
                Come ti abbiamo già detto in precedenza, i parametri in base ai
                quali scegliere il provider più adatto alle tue esigenze sono
                spesso oggettivi e quantificabili, ma la scelta finale dipenderà
                da te e dalle tue esigenze. Chiaramente, non è facile navigare
                in un mare così vasto se non si hanno ancora gli strumenti
                adatti a farlo: ecco, noi vogliamo essere la tua bussola e la
                tua stella polare!
              </p>
              <br />
              <p>
                I provider di hosting occupano una grossa fetta del business
                online: è un mercato da 16 miliardi di dollari nei soli Stati
                Uniti ed ogni anno cresce del 10%. Chiaramente, stiamo parlando
                di cifre totali, da cui estrapolare quelle legate al solo
                business degli hosting condivisi sarebbe un piccolo azzardo;
                tuttavia, ipotizzare che questo servizio rappresenti il 50% di
                quelli erogati in totale potrebbe non essere così lontano dalla
                realtà.
              </p>
              <br />
              <p>
                Quindi, ogni volta che ti imbatti nella lettura di una
                sensazionale recensione sui migliori hosting per WordPress, non
                dimenticare un particolare importantissimo:{" "}
                <span className="bold">
                  queste compagnie offrono tra le più alte commissioni nel
                  mercato del programma di affiliazioni.
                </span>
              </p>
              <br />
              <p>
                E allora è facile che la maggior parte delle guide siano state
                scritte con il solo scopo di invogliarti a cliccare sui link di
                affiliazione e generare commissioni interessanti per gli autori
                di queste fantomatiche “reviews”. Che tradotto significa:
                generare profitto senza curarsi minimamente di indirizzare la
                propria utenza alla scelta migliore.
              </p>
              <br />
              <p>
                <span className="bold">
                  Perché, allora, dovresti credere che siamo diversi dagli
                  altri?
                </span>
                Il motivo è semplice: vogliamo essere riconosciuti come
                affidabili, obiettivi e onesti, vogliamo che, dopo il tuo primo
                acquisto, tu possa tornare da noi per una richiesta di supporto,
                per chiederci un consiglio o, semplicemente, per tenerti
                aggiornato. In poche parole,{" "}
                <span className="bold">
                  vogliamo che tu senta di poterti fidare di noi!
                </span>
              </p>
              <br />
              <p>
                Per questo, abbiamo elaborato una strategia chiara e lineare di
                cui vogliamo metterti al corrente: come imprenditori online e
                come appassionati di tecnologia abbiamo provato con mano alcuni
                dei servizi di hosting che ti proporremo, mentre per altri ci
                siamo affidati alle esperienze dei colleghi che abbiamo aiutato
                nella scelta e nella cura dei loro servizi di hosting o che,
                semplicemente, si sono offerti di fornirci il loro punto di
                vista e la loro esperienza. Insomma, direttamente o
                indirettamente, abbiamo avuto modo di toccare con mano molti di
                questi servizi e, pertanto, siamo sicuri di non rifilarti delle
                “sole”.
              </p>
              <br />
              <p>
                Dopo questa necessaria precisazione, è ora tempo di capire quale
                hosting per WordPress risponderà alla perfezione a tutte le tue
                esigenze.
              </p>
            </ContenutoBoxNascosto>
          </BoxNascosto>
          <br />
          <h2>Migliori Hosting per WordPress</h2>
          <br />
          <p>
            Dopo le doverose premesse del caso, siamo pronti a partire e
            scoprire quali sono i migliori provider di hosting WordPress!
            Concedici solo un’ultima, doverosa precisazione: ci siamo
            concentrati su quei servizi che possano essere davvero efficaci per
            te, escludendone altri che, magari, sono famosi e validi, ma che, a
            nostro avviso, sono troppo concentrati sul mercato statunitense e
            troppo poco su quello italiano ed europeo.
          </p>
          <br />
          <p>
            <span className="bold">
              Possiamo ora rispondere alla fatidica domanda: quali sono i
              migliori servizi di hosting per Wordpress?
            </span>
          </p>
          <br />
          <h2>
            1. SiteGround (
            <span style={{ color: "#1659de" }}>www.SiteGround.com</span>)
          </h2>
          <br />
          <BannerSitiHosting src={banner} alt="banner" />
          <br />
          <ul>
            <li>
              <span className="bold">Uptime:</span> 99.99%
            </li>
            <li>
              <span className="bold">Tempo di caricamento:</span> 714ms
            </li>
            <li>
              <span className="bold">Assistenza clienti:</span> 5/5
            </li>
            <li>
              <span className="bold">Sito internet:</span>{" "}
              <span style={{ color: "#1659de" }}>www.SiteGround.com</span>
            </li>
          </ul>
          <br />
          <p>
            Dal 2004, anno in cui è stata fondata, SiteGround è cresciuta fino a
            raggiungere la quota di oltre 800.000 domini ospitati. La maggior
            parte dello staff è locato in Bulgaria, ma hanno server sparsi in
            tutto il mondo.
          </p>
          <br />
          <p>
            Come tutti i migliori provider di hosting Wordpress, anche
            SiteGround offre diversi piani ai propri clienti, a seconda delle
            esigenze che questi possono palesare nel corso del tempo. Le
            metriche dello “Start-Up Plan” (il più economico, con un costo di
            3.95€/mese) sono a dir poco eccellenti: evidenziano un solido 99.99%
            di uptime medio (1 sola ora di offline durante l’anno solare)
            seguito da un tempo di caricamento (non tra i più alti) di circa
            714ms.
          </p>
          <br />
          <p>
            La nota più piacevole è quasi sicuramente l’assistenza clienti.
            Sempre cordiali e disponibili nelle live chat instaurate, hanno
            anche affrontato con successo problemi di non facile risoluzione,
            sconfinando spesso in territori non di loro competenza contrattuale,
            ad esempio: modifiche del file .htaccess per alcuni redirect e
            analisi del report generato da Gtmetrix relativo al tempo di
            caricamento del sito con seguenti interventi risolutivi.
          </p>
          <br />
          <p>
            <span className="bold">TOP!</span>
          </p>
          <br />
          <p>
            In aggiunta SiteGround offre una migrazione gratuita per siti
            internet già esistenti ed è ufficialmente come hosting provider da
            WordPress.
          </p>
          <br />
          <ProConstContainer>
            <ProBox>
              <ProBoxTitle>PRO</ProBoxTitle>
              <p>
                Ottimo uptime. Migliore supporto per siti costruiti su
                piattaforma WordPress. Una migrazione di sito esistente
                gratuita. Ufficialmente raccomandato da WordPress.org. SSL
                gratuito.
              </p>
            </ProBox>
            <br />
            <ConstBox>
              <ConstBoxTitle>CONTRO</ConstBoxTitle>
              <p>
                Tempo di caricamento non ai livelli dei top competitor. Il piano
                “GoGeek” un po’ troppo costoso. (clicca qui per vedere i prezzi
                attuali dei piani di abbonamento offerti da SiteGround).
              </p>
            </ConstBox>
          </ProConstContainer>
        </Wrapper>
      </Layout>
    );
  }
}
