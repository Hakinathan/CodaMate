import {
  PiGithubLogoDuotone,
  PiLinkedinLogoDuotone,
  PiTwitterLogoDuotone,
} from "react-icons/pi";

const icons = [
  {
    name: "Github",
    icon: <PiGithubLogoDuotone />,
    link: "https://github.com/Hakinathan",
  },
  {
    name: "Linkedin",
    icon: <PiLinkedinLogoDuotone />,
    link: "https://www.linkedin.com/in/nathan-lemoine-dev",
  },
  {
    name: "Twitter",
    icon: <PiTwitterLogoDuotone />,
    link: "https://twitter.com/NathouL22",
  },
];

function Footer() {
  return (
    <footer className="footer flex flex--center flex--column">
      <div className="footer__social flex flex--center">
        {icons.map((item) => (
          <a
            href={item.link}
            className="footer__social--icon"
            key={item.name}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Lien vers ${item.name}`}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="footer__copy">
        <span>
          &copy; {new Date().getFullYear()} -{" "}
          <a
            href="https://nathan-lemoine.be"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nathan Lemoine
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
