import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Nav />
        {children}
      </div>
      <style jsx>{`
        div {
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Layout;
