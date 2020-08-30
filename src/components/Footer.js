import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
    <footer className="">
      <div>

      </div>
      <div>
          <p className="text-red-100">Consider getting social:</p>
          <ul className="flex">
            <li><a href="https://www.linkedin.com/in/ruthmatieu/" target="_blank"><i className="fab fa-linkedin-in text-red-100"></i></a></li>
            <li><a href="https://twitter.com/ruthmatieu" target="_blank"><i className="fab fa-twitter text-red-100"></i></a></li>
            <li><a href="http://instagram.com/civil_co" target="_blank"><i className="fab fa-instagram text-red-100"></i></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100008826826867" target="_blank"><i className="fab fa-facebook-f text-red-100"></i></a></li>
          </ul>
      </div>
    </footer>
    )
}

export default Footer;