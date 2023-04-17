import './Home.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';

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
          <span className='Before h1'></span>
          <h1><span>H</span><span>i</span><span>,</span></h1>
          <h1>
              <span>I</span>
              <span>'</span>
              <span>m</span>
              <span className='invisable'>m</span>
              <span>A</span>
              <span>n</span>
              <span>d</span>
              <span>r</span>
              <span>é</span>
              <span>,</span>
          </h1>
          <h1>
              <span>S</span>
              <span>o</span>
              <span>f</span>
              <span>t</span>
              <span>w</span>
              <span>a</span>
              <span>r</span>
              <span>e</span>
              <span className='invisable'>m</span>
              <span>E</span>
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
            <button id='email-button' onClick={() => {
              const footer = document.querySelector('footer');
              window.scrollTo({
                  top: footer.offsetTop,
                  behavior: 'smooth'
              });
              }} >Contact me!</button>
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
                  {sending ? <span class="loader"></span> :<button id='email-button' type="submit" >Send Message!</button>}
                </div>
              </form>
            </div>
            <span className='After form-after'></span>
            </div>
          </div>
          <span className='After body-after'></span>
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