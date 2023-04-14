import './Home.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

function Home() {
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

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        Swal.fire({
          title: 'Message has been sent!',
          icon:'success',
          confirmButtonText: 'OK',
        }).then((result) => {
          window.location.reload() 
        });
      }, (error) => {
        Swal.fire({
          title: 'Message was not sent...',
          icon:'error',
          confirmButtonText: 'OK',
        });
      });
  }

  return (
    <div className="main-wrapper">
      <header>

      </header>
      <div className="middle">

      </div>
      <footer>
        <div>
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
                  <button id='email-button'>
                    Send Message!
                  </button>
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
          center={[-25.881040, 28.203550]}
          zoom={7}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://goo.gl/maps/qRhHMPpLMkQBz9qZ8">OpenGoogleMaps</a>'
          />
          <Marker position={[-25.881040, 28.203550]} icon={defaultIcon}>
            <Popup>
            Entelect Centurion Office
            </Popup>
          </Marker>
        </MapContainer>
      </footer>
    </div>
  );
}

export default Home;
