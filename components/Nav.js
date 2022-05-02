import React from "react";
import Link from "next/link";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  return (
    <>
      <nav>
        <Link href="/">
          <a>
            <span>Blodyning</span>
          </a>
        </Link>
        <div className="container-links-and-theme">
          <div>
            <Link href="/">
              <a>Cursos</a>
            </Link>
            <Link href="/">
              <a>Proximos Cursos</a>
            </Link>
            <Link href="/">
              <a>Repositorios</a>
            </Link>
          </div>
          <button className="btn-theme">
            <FontAwesomeIcon icon={faSun} />
          </button>
        </div>
      </nav>
      <style jsx>{`
        nav {
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 50px;
          position: sticky;
          top: 0;
        }

        span {
          font-size: 30px;
          font-weight: 700;
          background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .container-links-and-theme {
          display: flex;
        }

        .btn-theme {
          background: none;
          font-size: 17px;
          border: none;
          border-left: 1px solid gray;
          padding: 0 20px;
          display: flex;
          align-items: center;
          cursor: pointer;
          color: #5e5e5e;
        }

        a {
          text-decoration: none;
          color: #5e5e5e;
          margin: 0 20px;
          font-size: 17px;
          font-weight: 600;
          transition: 0.2s;
        }

        a:hover {
          color: #0070f3;
        }
      `}</style>
    </>
  );
};

export default Nav;
