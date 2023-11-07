import Image from "next/image";

function About() {
  return (
    <section className="section section--about" id="about">
      <Image
        src="/img/me.webp"
        className="about__img"
        alt="Photo de profil de moi, Nathan Lemoine"
        width={449}
        height={600}
      />
      <div className="about__text-box">
        <p className="about__text">
          Je m&apos;appelle Nathan Lemoine et je suis{" "}
          <span>développeur indépendant</span>. Je suis <span>diplômé</span> de
          l&apos;HELMo depuis juin 2022. 👨🏻‍🎓
        </p>
        <p className="about__text">
          J&apos;ai eu l&apos;occasion de prendre la casquette de parrain en
          deuxième année de mon bachelier et j&apos;ai aimé ça. J&apos;ai voulu
          continuer sur cette lancée via cette plateforme que vous consultez
          actuellement. Je pars du principe que{" "}
          <span>
            tout le monde est capable de surmonter les difficultés d&apos;un
            cursus de développement
          </span>{" "}
          et <span>je crois en chacun de vous</span>. 💪🏻
        </p>
        <p className="about__text">
          Nous pouvons tous <span>réaliser de grandes choses</span> ! ✨
        </p>
      </div>
    </section>
  );
}

export default About;
