import './Home.scss';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

function Home() {
  const [sending, setSending] = useState(false);
  const [zoom, setZoom] = useState(7);
  
  const defaultIcon = L.icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowAnchor: [12, 41],
  });

  function sendEmail(e) {
    e.preventDefault();  

    setSending(true); 
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        setSending(false);
        Swal.fire({
          title: 'Message has been sent!',
          icon:'success',
          confirmButtonText: 'OK',
        }).then((result) => {
          window.location.reload() 
        });
      }, (error) => {
        setSending(false);
        Swal.fire({
          title: 'Message was not sent...',
          icon:'error',
          confirmButtonText: 'OK',
        });
      });
  }

  return (
    <div className="main-wrapper">
      <header className='header'>
        <div className='top-heading-container'>
          <div className='left-header'>
          <span className='After html-before'></span>
        <span className='After body-before'></span>
          <span className='Before h1'></span>
          <h1><span className='first-letter'>H</span><span>i</span><span>,</span></h1>
          <h1>
              <span className='first-letter'>I</span>
              <span>'</span>
              <span>m</span>
              <span className='invisable'>m</span>
              <span className='first-letter'>A</span>
              <span>n</span>
              <span>d</span>
              <span>r</span>
              <span>é</span>
              <span>,</span>
          </h1>
          <h1>
              <span className='first-letter'>S</span>
              <span>o</span>
              <span>f</span>
              <span>t</span>
              <span>w</span>
              <span>a</span>
              <span>r</span>
              <span>e</span>
              <span className='invisable'>m</span>
              <span className='first-letter'>E</span>
              <span>n</span>
              <span>g</span>
              <span>i</span>
              <span>n</span>
              <span>e</span>
              <span>e</span>
              <span>r</span>
          </h1>
          <span className='Before h1-after'></span>
          <div className='div-button-top'>
            <button className='email-button contact-me' onClick={() => {
              const footer = document.querySelector('footer');
              window.scrollTo({
                  top: footer.offsetTop,
                  behavior: 'smooth'
              });
              }} >Contact me!</button>
          </div>
              <section className='section-arrow'>
                <div className='center-arrow'>
                  <ul id="downArrow" onClick={() => {
              const middle = document.getElementsByClassName('middle')[0];
              window.scrollTo({
                  top: middle.offsetTop,
                  behavior: 'smooth'
              });
              }} >
                    <li style={{'--i': 1}}></li>
                    <li style={{'--i': 2}}></li>
                    <li style={{'--i': 3}}></li>
                  </ul>
                </div>
                <div className='arrow-down'>
                  <div className='arrow-image'>
                  <svg onClick={() => {
              const middle = document.getElementsByClassName('middle')[0];
              window.scrollTo({
                  top: middle.offsetTop,
                  behavior: 'smooth'
              });
              }}  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="arrow" x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve">
                    <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="m20.5 11.5-6 6-6-6"></path>
                  </svg>
                  </div>
                </div>
                <div className='arrow-down scroll-text'>
                  scroll down
                </div>
              </section>
          </div>
          <div className='right-header'>
              <div className='cerntre-div'>
                <div>
                  <div className='background-img'>
                  <svg className='path-svg' viewBox="0 0 288 288">
                  <linearGradient id="PSgrad_0" x1="70.711%" x2="0%" y1="70.711%" y2="0%">
                    <stop offset="10%" stop-color="#d261ff" stop-opacity="1" />
                    <stop offset="100%" stop-color="#61bbff" stop-opacity="1" />
                  </linearGradient>
                  <path fill="url(#PSgrad_0)"/>
                  </svg>
                  </div>
                  <div className='profile-img'>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </header>
      <div className="middle">


      </div>
      <footer>
        <div className='footer'>
        <div className='div-back-color'>
          <div className='contact-center'>
            <div>
            <span className='Before h2'></span>
            <p className='contact'>
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
              <span className='invisable'>m</span>
              <span>m</span>
              <span>e</span>
            </p>
            <span className='After h2-after'></span>
            <br/>
            <span className='Before form'></span>
            <div className='form-div'>
              <form onSubmit={sendEmail}>
                <div className='contact-grid'>
                  <input className='input' type='text' placeholder='Name' name="name" required/>
                  <input className='input' type='email' placeholder='Email' name="email" required/>
                </div>
                <input type='text' placeholder='Subject' name="subject" required/>
                <textarea placeholder='Message' name="html_message" required/>
                <div className='div-button'>
                  {sending ? <span class="loader"></span> :<button className='email-button' type="submit" >Send Message!</button>}
                </div>
              </form>
            </div>
            <span className='After form-after'></span>
            </div>
          </div>
          <span className='After body-after'></span>
          <div className='social-wrapper'>
          <ul className='social'>
          <li>
              <a className="linkedIn" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/andré-croukamp-7102a2209">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124" id="linkedin"><path fill="#00000" d="M102.4 70.7v28.5c0 .7-.6 1.3-1.3 1.3H86.4c-.7 0-1.3-.6-1.3-1.3V72.7c0-7-2.5-11.8-8.8-11.8-4.8 0-7.6 3.2-8.9 6.3-.5 1.1-.6 2.7-.6 4.2v27.8c0 .7-.6 1.3-1.3 1.3H50.9c-.7 0-1.3-.6-1.3-1.3 0-7.1.2-41.4 0-49.4 0-.7.6-1.3 1.3-1.3h14.7c.7 0 1.3.6 1.3 1.3v6.1c0 .1-.1.1-.1.2h.1v-.2c2.3-3.5 6.4-8.6 15.6-8.6 11.4 0 19.9 7.5 19.9 23.4zM24 100.6h14.7c.7 0 1.3-.6 1.3-1.3V49.8c0-.7-.6-1.3-1.3-1.3H24c-.7 0-1.3.6-1.3 1.3v49.5c.1.7.6 1.3 1.3 1.3z"></path><circle cx="30.9" cy="32.7" r="9.3" fill="inhereit"></circle></svg>
              </a>
            </li>
            <li>
              <a className="facebook" title="Facebook" target="_blank" href="https://www.facebook.com/andre.croukamp.1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook"><path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path></svg>
              </a>
            </li>
            <li>
              <a className="instagram" title="Instagram" target="_blank" href="https://github.com/Andre6738">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="instagram"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path></svg>
              </a>
            </li>
            <li>
              <a className="github" title="GitHub" target="_blank" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github"><path d="M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z"></path></svg>
              </a>
            </li>
          </ul>
        </div>
          <span className='After html-after'></span>
          </div>
    <MapContainer
      key={zoom}
      center={[-25.881040, 28.203550]}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://goo.gl/maps/qRhHMPpLMkQBz9qZ8">OpenGoogleMaps</a>'
      />
      <Marker position={[-25.881040, 28.203550]} icon={defaultIcon}>
        <Popup>Entelect Centurion Office</Popup>
      </Marker>
    </MapContainer>
        </div>
        <div className='footer-top'>
          <div className='to-the-top' onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="1.5vw" fill="currentColor" class="bi bi-chevron-double-up bounce-icon" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z" style={{ fill: "#9CDCFE" }} />
            <path fill-rule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" style={{ fill: "#9CDCFE", opacity:'0.6' }} />
          </svg>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;