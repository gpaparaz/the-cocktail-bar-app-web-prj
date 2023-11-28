import React from "react";
import Hero from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import useMultipleFetch from "../../useMultipleFetch";
import Loading from "../../components/Loading/Loading";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Cocktails from "../../components/Cocktails/Cocktails";
import style from "./home.css";
import info from "../../utils/info.json";
import Reviews from "../../components/Reviews/Reviews";
import heroHome from "../../assets/image/hero-home.jpg";
import ScrollToTopOnMount from "../../utils/ScrollToTop";

const Home = () => {
  const numberOfRequests = 8;

  const { isLoading, data, isError } = useMultipleFetch(numberOfRequests);

  const reviews = info.reviews.slice(-3);

  return (
    <section className="mb-5">
      <ScrollToTopOnMount />
      <Hero img={heroHome} disableOverlay={true}>
        <div className="hero">
          <div className="hero-text">
            <div className="hero-title">
              <h2 className="brand-color">The Mixologist's Playground</h2>
              <h4>
                Dove cocktails e delizie culinarie danzano insieme in perfetta
                armonia
              </h4>
            </div>
            <p>
              Soddisfa le tue papille gustative ed esplora le nostre
              straordinarie creazioni di drink e non solo
            </p>
          </div>
        </div>
      </Hero>

      <div className="container my-5">
        <div className="row">
          <div className="col-6 containerImg">
            <div className="historyImg img1"></div>
            <div className="historyImg img2"></div>
            <div className="historyImg img3"></div>
          </div>
          <div className="col-6">
            <h3>La nostra storia</h3>
            <p>
              Da amanti dei cocktail con una visione audace, abbiamo creato
              questo spazio per offrire un'esperienza straordinaria a coloro che
              cercano qualcosa di più di un semplice drink. The Mixologist's
              Playground è nato dalla convinzione che i cocktail siano più di
              una bevanda: sono un'opera d'arte da gustare.
            </p>
            <h3 className="mt-3">La Nostra Filosofia</h3>
            <p>
              Qui, ogni cocktail è una storia raccontata attraverso sapori
              audaci e combinazioni uniche. I nostri bartender sono veri artisti,
              padroni nell'arte di creare bevande che stimolano i sensi e
              scatenano emozioni.
            </p>

            <h3 className="mt-3">Cibo e Atmosfera</h3>
            <p>
              Non è solo la nostra carta dei cocktail a brillare. Accanto a ogni
              sorso, offriamo un menu di delizie culinarie pensate per
              completare l'esperienza. Dai piccoli assaggi perfetti per uno
              spuntino durante l'aperitivo, ai panini gourmet che soddisfano
              anche i palati più esigenti.
            </p>
            <h3 className="mt-3">Il Playground</h3>
            <p>
              Il nostro ambiente è progettato per farvi sentire come se foste nel parco
              giochi di un alchimista. Vibrazioni vivaci, luci soffuse e arredi
              accoglienti creano l'atmosfera perfetta per condividere momenti
              speciali o semplicemente rilassarsi dopo una lunga giornata.
            </p>
          </div>
        </div>
      </div>

      <div className="container-sm">
        <h2 className="my-5">I drink del momento</h2>
      </div>
      <div className="container-fluid">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <ErrorMessage>Nessun Cocktail Trovato</ErrorMessage>
        ) : data && data.length > 0 ? (
          <>
            <Cocktails data={data} isFullWidth={true} />
          </>
        ) : null}
      </div>

      <div className="container-sm px-5">
        <h2 className="mt-5 mb-3">Ultime recensioni</h2>
        <Link to="/about#reviews">Vai alla sezione delle recensioni</Link>
        <div className="d-flex flex-wrap justify-content-center mt-5">
          {reviews.map((review) => {
            return (
              <Reviews key={review.id} review={review} showUserAvatar={false} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
