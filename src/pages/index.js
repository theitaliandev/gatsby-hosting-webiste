import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import MiglioriHostingPerWordpress from "../images/Migliori Hosting per Wordpress.png";
import SiteGround from "../images/SiteGround - Migliori hosting wordpress - NeuWP.com.png";
import GoDaddy from "../images/GoDaddy - Migliori hosting wordpress - NeuWP.com.png";
import BlueHost from "../images/BlueHost - Migliori hosting wordpress - NeuWP.com.png";
import A2Hosting from "../images/A2Hosting - Migliori hosting wordpress - NeuWP.com.png";
import Cloudways from "../images/Cloudways - Migliori hosting wordpress - NeuWP.com.png";
import VHosting from "../images/VHosting - Migliori hosting wordpress - NeuWP.com.png";
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

const StyledATag = styled.a`
  color: #1659de;
  text-decoration: none;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
const CustomButton = styled.button`
  padding: 20px;
  border: 2px solid #1659de;
  border-radius: 7px;
  background-color: white;
  color: #1659de;
  font-size: 1.15em;
  font-weight: bold;
  transition: 0.15s linear;
  :hover {
    background-color: #1659de;
    color: white;
    cursor: pointer;
  }
`

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
            <img
              src={MiglioriHostingPerWordpress}
              alt="Migliori Hosting per Wordpress - Mano con logo WordPress"
            />
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
            <span style={{ color: "red" }}>NeuWP</span>. Grazie mille
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
          <BannerSitiHosting
            src={SiteGround}
            alt="SiteGround - Migliori Hosting Wordpress - NeuWP"
          />
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
            <ConstBox>
              <ConstBoxTitle>CONTRO</ConstBoxTitle>
              <p>
                Tempo di caricamento non ai livelli dei top competitor. Il piano
                “GoGeek” un po’ troppo costoso. (clicca qui per vedere i prezzi
                attuali dei piani di abbonamento offerti da SiteGround).
              </p>
            </ConstBox>
          </ProConstContainer>
          <br />
          <br />
          <h2>
            2. GoDaddy (<span style={{ color: "#1659de" }}>it.GoDaddy.com</span>
            )
          </h2>
          <br />
          <BannerSitiHosting
            src={GoDaddy}
            alt="GoDaddy - Migliori Hosting Wordpress - NeuWP"
          />
          <br />
          <ul>
            <li>
              <span className="bold">Uptime:</span> 99.97%
            </li>
            <li>
              <span className="bold">Tempo di caricamento:</span> 1040ms
            </li>
            <li>
              <span className="bold">Assistenza clienti:</span> 3/5
            </li>
            <li>
              <span className="bold">Sito internet:</span>{" "}
              <span style={{ color: "#1659de" }}>it.godaddy.com</span>
            </li>
          </ul>
          <br />
          <p>
            GoDaddy è di sicuro uno dei{" "}
            <span className="bold">
              servizi di hosting WordPress più noti in assoluto.
            </span>{" "}
            Fondata nel 1997, i suoi 17 milioni di utenti sparsi in tutto il
            mondo ne certificano l’affidabilità e la qualità dei servizi!
          </p>
          <br />
          <p>
            I <span className="bold">piani di GoDaddy</span>, se sottoscritti
            annualmente, hanno prezzi che partono da 3.04€/mese fino a
            10.36€/mese del piano “Ultimate”. In cosa si differiscono questi
            piani? Con il piano economy si parte da 30GB di spazio di
            memorizzazione e larghezza di banda illimitata, fino ad arrivare,
            considerando i piani intermedi, ad una velocità di elaborazione
            raddoppiata e a database illimitati. Il piano che ti consigliamo noi
            è almeno il piano economy, che include anche l’acquisto di un
            dominio per un anno.
          </p>
          <br />
          <p>
            <span className="bold">Come ci siamo trovati con GoDaddy?</span>{" "}
            Decisamente bene! L’uptime del 99.97% è sicuramente garanzia di un
            sito stabile e quasi sempre online, il che si traduce, per te e per
            il tuo business in più visibilità e meno grattacapi. Il parametro
            che non ci ha fatto impazzire è sicuramente il tempo di caricamento:
            1040ms, in un mondo alla continua ricerca della velocità è
            decisamente tutto.
          </p>
          <br />
          <p>
            <span className="bold">Il servizio clienti è valido</span>,
            purtroppo però si sente fortemente{" "}
            <span className="bold">la mancanza di una live chat h24</span>, per
            questo motivo il nostro voto è sceso a 3/5, nonostante l’ottima
            qualità del servizio offerto.
          </p>
          <br />
          <ProConstContainer>
            <ProBox>
              <ProBoxTitle>PRO</ProBoxTitle>
              <p>Affidabilità e gentilezza del servizio clienti.</p>
            </ProBox>
            <ConstBox>
              <ConstBoxTitle>CONTRO</ConstBoxTitle>
              <p>Mancanza di una live chat, tempi di caricamento elevati</p>
            </ConstBox>
          </ProConstContainer>
          <br />
          <br />
          <h2>
            3. Bluehost (
            <span style={{ color: "#1659de" }}><StyledATag href="https://www.bluehost.com/track/neunet/" target="_blank">www.Bluehost.com</StyledATag></span>)
          </h2>
          <br />
          <BannerSitiHosting
            src={BlueHost}
            alt="Bluehost - Migliori Hosting Wordpress - NeuWP"
          />
          <br />
          <ul>
            <li>
              <span className="bold">Uptime:</span> >99.9%
            </li>
            <li>
              <span className="bold">Tempo di caricamento:</span> 419ms
            </li>
            <li>
              <span className="bold">Assistenza clienti:</span> 5/5
            </li>
            <li>
              <span className="bold">Sito internet:</span>{" "}
              <span style={{ color: "#1659de" }}><StyledATag href="https://www.bluehost.com/track/neunet/" target="_blank">www.Bluehost.com</StyledATag></span>
            </li>
          </ul>
          <br />
          <p>
          Bluehost è uno degli <span className="bold">hosting provider più popolari tra i possessori di piccoli e medi business</span> online e bloggers. Proprio per questa ragione ci sentiamo di raccomandarti Bluehost come hosting per il tuo sito Wordpress.
          </p>
          <br />
          <p>
          Il <span className="bold">pacchetto base</span> di Bluehost parte da 3.75 $ al mese, una cifra sicuramente abbordabile considerando l’offerta del dominio gratuito per un anno, del certificato SSL e della possibilità di personalizzare gli indirizzi email.
          </p>
          <br />
          <p>
          Ma in quanti scelgono questo provider di hosting WordPress? La fetta di mercato di <StyledATag href="https://www.bluehost.com/track/neunet/" target="_blank">Bluehost</StyledATag> sarebbe già di per sé garante delle eccellenti prestazioni: Bluehost offre “ospitalità” ad oltre 2 milioni di siti internet e fa parte del gruppo EIG, comunemente conosciuto come HostGator.
          </p>
          <br />
          <p>
          <span className="bold">Come si è comportato Bluehost durante una analisi long-run di 12 mesi?</span>
          </p><br/>
          <p>
          L’<span className="bold">uptime medio</span> nel corso degli ultimi 12 mesi è stato <span className="bold">maggiore del 99.99%</span> e il tempo di caricamento si è assestato su una media di 406ms. Cosa vuol dire questo dato? Semplicemente che i siti ospitati da Bluehost sono stati “down”, nell’ultimo anno, per una sola ora complessiva; senza ombra di dubbio, dunque, stiamo parlando di uno degli <span className="bold">hosting provider più affidabili.</span>
          </p>
          <br />
          <p>Bluehost, inoltre, offre <span className="bold">un’assistenza clienti sempre operativa</span>, 24 ore su 24, 7 giorni su 7.
Ti basterà iniziare una live chat a qualsiasi ora della giornata per risolvere ogni problematica relativa alla tua struttura Hosting+WordPress.</p>
<br />
<p>Mentre l’offerta tecnica è di assoluto valore, per quel che riguarda l’offerta economica potresti avere un po’ di dubbi; al di là dell’offerta iniziale, purtroppo non esistono pacchetti mensili di hosting ma solo annuali. 
</p>
<br />
<ProConstContainer>
            <ProBox>
              <ProBoxTitle>PRO</ProBoxTitle>
              <p>Valori eccezionali di uptime e tempo di caricamento. Migrazione gratuita. Dominio gratuito. Raccomandato da <StyledATag href="https://wordpress.org">WordPress.org</StyledATag>
</p>
            </ProBox>
            <ConstBox>
              <ConstBoxTitle>CONTRO</ConstBoxTitle>
              <p>Nessuna opzione di piano mensile dopo la prima offerta iniziale, abbonamenti sottoscrivibili solo annualmente.</p>
            </ConstBox>
          </ProConstContainer>
          <br />
          <form method="get" action="https://www.bluehost.com/track/neunet/">
          <ButtonContainer><CustomButton type="submit">Scopri le ultime offerte Bluehost</CustomButton></ButtonContainer>
         </form>
          <br />
          <br />
          <h2>
            4. A2 Hosting (
            <span style={{ color: "#1659de" }}>www.A2Hosting.com</span>)
          </h2>
          <br />
          <BannerSitiHosting
            src={A2Hosting}
            alt="A2Hosting - Migliori Hosting Wordpress - NeuWP"
          />
          <br />
          <ul>
            <li>
              <span className="bold">Uptime:</span> >99.9%
            </li>
            <li>
              <span className="bold">Tempo di caricamento:</span> 392ms
            </li>
            <li>
              <span className="bold">Assistenza clienti:</span> 5/5
            </li>
            <li>
              <span className="bold">Sito internet:</span>{" "}
              <span style={{ color: "#1659de" }}>www.A2Hosting.com</span>
            </li>
          </ul>
          <br />
          <p>
          <span className="bold">Importante precisazione:</span> Ci teniamo a farti notare che A2 Hosting si trova così in alto nella nostra classifica poiché fornisce un <span className="bold">tempo di caricamento incredibilmente veloce;</span> come avrai subito notato, infatti, il suo uptime non è propriamente ottimale, con un valore pari a 99.91%.
          </p>
          <br />
          <p>
          Sebbene sia una compagnia assolutamente non recente (è stata fondata nel 2001) nel mondo degli hosting provider per Wordpress, A2 Hosting ha conosciuto la fama solo recentemente.
          </p>
          <br />
          <p>
          Di sicuro, <span className="bold">l’offerta più accattivante</span> per i potenziali clienti è, appunto, legata alla velocità di caricamento offerta da questo hosting: “i nostri <span className="bold">Turbo Servers</span> sono 20 volte più veloci di quelli dei nostri competitor!”, affermano sul solo sito web.
          </p>
          <br />
          <p>
          Effettivamente, sebbene non possiamo confermare che siano effettivamente 20 volte più veloci, i loro server offrono davvero una velocità molto maggiore rispetto a pur ottimi servizi come SiteGround o HostGator.
          </p>
          <br />
          <p>
          Nei 12 mesi la velocità si è attestata su una ottima media di 392ms, un valore che ci tenta di definirlo un tempo di caricamento pagina quasi istantaneo. 
A2 Hosting implementa di default un <span className="bold">sofisticato sistema di caching</span>, il quale memorizza dati relativi al sito internet nel browser del tuo utente, in modo che nel momento in cui questo accederà nuovamente, in futuro, non dovrà richiedere ancora una volta al server  i dati per renderizzare la pagina.
          </p>
          <br />
          <p>
            <span className="bold">Sfortunatamente il valore di uptime relativo all’hosting A2 si è attestato su una media di 99.91%</span> nell’arco degli ultimi 12 mesi (circa 8 ore di downtime).
          </p>
          <br />
          <p>L’hosting provider A2 offre un’assistenza clienti 24/7 attraverso live chat, email, telefono e sistema di ticketing. </p>
          <br />
          <p>Il prezzo di lancio è di sicuro buono, con uno shared hosting offerto a 3.41€/mese.</p>
          <br/>
          <ProConstContainer>
            <ProBox>
              <ProBoxTitle>PRO</ProBoxTitle>
              <p>Hosting WordPress con tempo di caricamento velocissimo. Server ottimizzati per WordPress.</p>
            </ProBox>
            <ConstBox>
              <ConstBoxTitle>CONTRO</ConstBoxTitle>
              <p>Uptime medio inconsistente rispetto ai competitor (99.91%).</p>
            </ConstBox>
          </ProConstContainer>
          <br />
          <br />
          <h2>
            5. Cloudways (
            <span style={{ color: "#1659de" }}>www.Cloudways.com</span>)
          </h2>
          <br />
          <BannerSitiHosting
            src={Cloudways}
            alt="Cloudways - Migliori Hosting Wordpress - NeuWP"
          />
          <br />
          <ul>
            <li>
              <span className="bold">Uptime:</span> >99.9%
            </li>
            <li>
              <span className="bold">Tempo di caricamento:</span> decisamente inferiore a 200ms
            </li>
            <li>
              <span className="bold">Assistenza clienti:</span> 3/5
            </li>
            <li>
              <span className="bold">Sito internet:</span>{" "}
              <span style={{ color: "#1659de" }}>www.Cloudways.com</span>
            </li>
          </ul>
          <br />
          <p>
          Nel mondo sempre in fermento dei servizi di hosting WordPress Cloudways rappresenta certamente un <span className="bold">punto fermo.</span> L’azienda, con sede a Malta, è <span className="bold">una delle più apprezzate</span> da chi usufruisce dei <span className="bold">servizi di hosting per blog e siti realizzati con WordPress.</span>
          </p>
          <br />
          <p>
          I loro servizi partono da 10$/mese, pertanto non proprio prezzi super competitivi, ma <span className="bold">la qualità del servizio</span> è fuori discussione, soprattutto in termini di uptime, con un valore del 99.99% garantito e tempi di upload che presentano picchi di 37 ms!
            </p>
            <br />
            <p>
            <span className="bold">Nota dolente il servizio clienti:</span> in questo caso è presente il servizio h24, ma spesso scortesia e incompetenza non permettono di arrivare alla risoluzione dei problemi.
            </p>
            <br />
            <ProConstContainer>
            <ProBox>
              <ProBoxTitle>PRO</ProBoxTitle>
              <p>Uptime e tempo di caricamento eccellenti.</p>
            </ProBox>
            <ConstBox>
              <ConstBoxTitle>CONTRO</ConstBoxTitle>
              <p>Assistenza clienti non all’altezza.</p>
            </ConstBox>
          </ProConstContainer>
          <br />
          <br />
          <h2>
            6. VHosting (
            <span style={{ color: "#1659de" }}>www.VHosting-it.com</span>)
          </h2>
          <br />
          <BannerSitiHosting
            src={VHosting}
            alt="VHosting - Migliori Hosting Wordpress - NeuWP"
          />
          <br />
          <ul>
            <li>
              <span className="bold">Uptime:</span> 99.9%
            </li>
            <li>
              <span className="bold">Tempo di caricamento:</span> decisamente inferiore a 200s
            </li>
            <li>
              <span className="bold">Assistenza clienti:</span> 4/5
            </li>
            <li>
              <span className="bold">Sito internet:</span>{" "}
              <span style={{ color: "#1659de" }}>www.VHosting-it.com</span>
            </li>
          </ul>
          <br />
          <p>
          Passiamo ora ad un <span className="bold">servizio di hosting 100% italiano:</span> VHosting! 
          </p>
          <br />
          <p>I ragazzi di VHosting hanno in canna <span className="bold">diversi piani</span> per te che sei interessato al miglior hosting WordPress, che vanno da 40€/anno fino ad arrivare a 85€/anno.</p>
          <br />
          <p>I <span className="bold">punti di forza</span> sono sicuramente l’<span className="bold">uptime</span> del 99.9% e un <span className="bold">servizio clienti davvero ottimo,</span> se non fosse per la pecca di non avere un servizio operativo h24, 7/7.</p>
          <br />
          <p>Inoltre, il  fatto di avere i server dislocati in Europa (tra Italia, Germania e Francia) sarà per te davvero un vantaggio, poiché sarà maggiore la garanzia che avrai di avere un <span className="bold">servizio all’altezza delle tue aspettative</span> e di quelle dei tuoi utenti, grazie alla garanzia di avere il massimo in termini di performance e assistenza.</p>
          <br />
            <ProConstContainer>
            <ProBox>
              <ProBoxTitle>PRO</ProBoxTitle>
              <p>Buon servizio clienti, costi ridotti, uptime elevato.</p>
            </ProBox>
            <ConstBox>
              <ConstBoxTitle>CONTRO</ConstBoxTitle>
              <p>Manca servizio assistenza h24, prezzi riportati senza iva.</p>
            </ConstBox>
          </ProConstContainer>
        </Wrapper>
      </Layout>
    );
  }
}