class Navbar extends HTMLElement {
    connectedCallback () {
        this.innerHTML = 
        `
            <div class="navigation-bar">
                <div class="left">
                <img class="navigation logo" src="images/logo.png" alt="logo">
                </div>
                <div class="right">
                <div class="navigation"><a class="navi-options navi-selected" href="index.html">Home</a></div>
                <div class="navigation"><a class="navi-options" href="#aboutUs">About Us</a></div>
                <div class="navigation"><a class="navi-options" href="services.html">Services</a></div>
                <div class="navigation"><a class="navi-options" href="projects.html">Projects</a></div>
                <div class="navigation"><a class="navi-options" href="getQuote.html">Get Quote</a></div>
                </div>
            </div>
        `
    };
}

customElements.define("page-navbar",Navbar);

class Footer extends HTMLElement {
    connectedCallback () {
        this.innerHTML = 
        `
        <footer>
        <div class="bottom">
          <div class="footer-left">
            <h3>DOWNLOAD BROCHURE</h3>
            <div id="brochure">
              <p>EXCELCOMM NURSE CALL SYSTEM</p>
              <p>Emergency Code Blue Alert Systems</p>
              <p>Medical Gas Engineering Systems</p>
              <p>Bedhead Service Panels</p>
              <p>Pneumatic Tube Systems</p>
              <p>Wall protection</p>
          </div>
          </div>
          <div class="footer-middle">
            <h3>LEAVE A MESSAGE</h3>
            <p class="input-text">Your Name (Required):</p>
            <input type="text" class="input-box">
            <p class="input-text">Your Email (Required):</p>
            <input type="text" class="input-box">
            <p class="input-text">Phone Number:</p>
            <input type="text" class="input-box">
            <p class="input-text">Your Message:</p>
            <input type="text" class="input-box message-box">
            <button id="send-button">Send</button>
          </div>
          <div class="footer-right">
            <h3>FIND US</h3>
            <div class="contact">
              <div class="contact-img"><img src="images/Icons/building.png" alt=""></div>
              <p>Gading New Batavia BLK LC 8 No.16</p>
            </div>
            <div class="contact">
              <div class="contact-img"><img src="images/Icons/phone.png" alt=""></div>
              <p>+6221 2957 4322/3</p>
            </div>
            <div class="contact">
              <div class="contact-img"><img src="images/Icons/clock.png" alt=""></div>
              <p>Monday - Friday; 9:00AM - 6:00PM</p>
            </div>
          </div>
        </div>
        <div class="copyright">Copyright © 2022 | Alta Pratama | All rights reserved.</div>
      </footer>
        `
    };
}

customElements.define("page-footer",Footer);