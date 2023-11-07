"use client";
import { useState } from "react";
import Link from "next/link";
import Hamburger from "hamburger-react";

const links = [
  {
    label: "À propos",
    url: "#about",
  },
  {
    label: "Services",
    url: "#services",
  },
  {
    label: "Témoignages",
    url: "#testimonials",
  },
];

function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <header className="header grid grid--col-1">
      <div className="header__nav flex flex--between flex--center">
        <Link href="/" className="header__title">
          <h1>CodaMate</h1>
        </Link>
        <div className="header__icon">
          <Hamburger
            toggled={show}
            toggle={setShow}
            rounded
            label="Icône du menu"
            color="#fff"
            size={30}
          />
        </div>
      </div>
      {show && (
        <nav className="nav">
          <ul className="nav__list flex flex--center">
            {links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} className="nav__list-item">
                    {link.label}
                  </a>
                </li>
              );
            })}

            <li>
              <a
                href="https://cal.com/lusty9149"
                className="nav__list-item nav__btn"
                target="_blank"
                rel="noreferrer"
              >
                Prendre rendez-vous 🚀
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default NavBar;
