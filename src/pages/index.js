import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import immagine1 from "../images/300.png";
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
`;

const BoxNascosto = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  background: #1659de;
  padding: 1rem;
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
`;

export default class IndexPage extends React.Component {
  state = {
    boxNascostoOpen: false
  };
  handleBoxNascosto = () => {
    this.setState(() => {
      return {
        boxNascostoOpen: !this.state.boxNascostoOpen
      };
    });
  };
  render() {
    console.log(this.state.boxNascostoOpen);
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
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "sans-serif"
                }}
              >
                “hosting”
              </span>
              . Se sei giunto fin qui, di sicuro sai di cosa stiamo parlando.
              <br />
              <br />
              Scegliere{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "sans-serif"
                }}
              >
                l’hosting giusto per il tuo sito Wordpress
              </span>{" "}
              è <span style={{ fontStyle: "italic" }}>molto</span> importante.
              La “salute” del tuo sito, le sue prestazioni (e, di conseguenza,
              la tua soddisfazione) dipenderanno dall’hosting che tu sceglierai.
              <br />
              <br /> Ma{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "sans-serif"
                }}
              >
                come fare a sapere quale è il migliore hosting Wordpress?
              </span>{" "}
              La nostra guida, che è frutto sia della nostra esperienza diretta
              che di quella di utenti certificati di questi servizi, ti servirà
              proprio a valutare quale, tra i tanti servizi di hosting
              disponibili, sia{" "}
              <span
                style={{
                  fontWeight: "bold",
                  fontFamily: "sans-serif"
                }}
              >
                il più adatto a te.
              </span>{" "}
              <br />
              <br />
              Online esistono davvero molti servizi che possono fare al caso
              tuo, si tratta solo di scegliere quale hosting Wordpress sembra
              davvero ritagliato per te tra i vari SiteGround, Bluehost e tanti,
              tanti altri. <br />
              <br /> Se hai fretta e non vuoi scendere troppo nel dettaglio, da’
              un’occhiata alla nostra tabella comparativa! Tuttavia, ti
              consigliamo di capire prima quali sono i parametri che dovrebbero
              guidarti nella tua scelta (ti basterà aprire i link in basso).
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
                statoBoxNascosto={this.state.boxNascostoOpen}
                onClick={() => this.handleBoxNascosto()}
              />
              <StyledCloseIcon
                statoBoxNascosto={this.state.boxNascostoOpen}
                onClick={() => this.handleBoxNascosto()}
              />
            </div>
            <ContenutoBoxNascosto statoBoxNascosto={this.state.boxNascostoOpen}>
              Nella scelta di un servizio di hosting ci sono sicuramente diversi
              parametri da tenere in considerazione: la velocità, l’uptime, il
              valore dell’assistenza tecnica e la sicurezza sono i primi a
              venirci in mente. Tuttavia, non dimenticare mai che la chiave per
              decidere quale servizio utilizzare sono sempre e soltanto i tuoi
              bisogni! Dal punto di vista tecnico, ricorda che sarà necessario
              tenere in considerazione almeno i seguenti tre parametri:
            </ContenutoBoxNascosto>
          </BoxNascosto>
        </Wrapper>
      </Layout>
    );
  }
}
