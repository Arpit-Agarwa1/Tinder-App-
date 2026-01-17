import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2> 💋 BabuShona</h2>
          <p>Real connections. Real people. Real love.</p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <span>About</span>
            <span>Careers</span>
            <span>Press</span>
          </div>

          <div>
            <h4>Support</h4>
            <span>Help Center</span>
            <span>Safety</span>
            <span>Community</span>
          </div>

          <div>
            <h4>Legal</h4>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MatchMe. All rights reserved.</p>
      </div>
    </footer>
  );
}
