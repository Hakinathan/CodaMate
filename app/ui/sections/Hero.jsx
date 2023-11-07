function Hero() {
  return (
    <section className="section section--hero">
      <div className="hero flex flex--column">
        <div className="hero__content">
          <h1 className="hero__title">
            La plateforme d&apos;aide au développement ! 💪🏻
          </h1>
          <p className="hero__text">
            Ne laissez pas les défis techniques vous freiner. CodaMate est là
            pour vous aider à surmonter les obstacles et à transformer votre
            potentiel en réalité.
          </p>

          <a href="#contact" className="hero__cta">
            Réservez votre place 📅
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
