import React from "react";

const Footer = () =>{
    return <footer className="page-footer light-green lighten-1">
    <div className="footer-copyright">
      <div className="container grey-text text-lighten-4">
      © {new Date().getFullYear()} Copyright Text
      <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
      </div>
    </div>
  </footer>
}

export default Footer