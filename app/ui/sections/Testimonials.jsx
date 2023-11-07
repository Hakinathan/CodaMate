import Testimonial from "@/app/ui/Testimonial";

const testimonials = [
  {
    name: "Cyril",
    text: `Alors pour ma part, j'ai trouvé le cours particulier très intéressant et utile !
    [...]
    Tu avais préalablement défini la zone de travail et défini le niveau de compétence de l'étudiant, [...].
    
    L'approche de chaque point s'est fait de la même manière :
    - Apprendre à chercher par soi-même,
    - Vérifier avec un exemple réaliste créé en temps réel,
    
    Les lacunes ont donc été comblées et la matière semble acquise.
    
    Je pense donc que ton approche et ta méthodologie comme professeur sont bonnes, qu'on se sent à l'aise pour poser des questions et s'exprimer. C'est idéal !
    [...]
    Merci pour le cours, je te souhaite de réussir dans cette aventure, tu me sembles bien parti en tout cas.`,
    img: "/img/cyril.webp",
    source: "Discord",
  },
];

function Testimonials() {
  return (
    <section
      className="section section--testimonials testimonials__container flex flex--column"
      id="testimonials"
    >
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          name={testimonial.name}
          text={testimonial.text}
          img={testimonial.img}
          source={testimonial.source}
        />
      ))}
    </section>
  );
}

export default Testimonials;
