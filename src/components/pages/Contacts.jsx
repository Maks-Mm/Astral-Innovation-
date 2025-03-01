import React from "react";
import './Contacts.css'; // Import the CSS file

const contacts = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 890",
    social: {
      youtube: "youtube.com/johndoe",
      github: "github.com/johndoe",
      gmail: "johndoe@gmail.com",
      viber: "viber://johndoe",
      whatsapp: "whatsapp://johndoe",
      instagram: "instagram.com/johndoe",
      facebook: "facebook.com/johndoe",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+44 789 654 321",
    social: {
      youtube: "youtube.com/janesmith",
      github: "github.com/janesmith",
      gmail: "janesmith@gmail.com",
      viber: "viber://janesmith",
      whatsapp: "whatsapp://janesmith",
      instagram: "instagram.com/janesmith",
      facebook: "facebook.com/janesmith",
    },
  },
  {
    id: 3,
    name: "Alex Brown",
    phone: "+33 123 456 789",
    social: {
      youtube: "youtube.com/alexbrown",
      github: "github.com/alexbrown",
      gmail: "alexbrown@gmail.com",
      viber: "viber://alexbrown",
      whatsapp: "whatsapp://alexbrown",
      instagram: "instagram.com/alexbrown",
      facebook: "facebook.com/alexbrown",
    },
  },
];

const Contacts = () => {
  return (
    <div className="container">
      <h1 className="title">Contacts</h1>
      <div className="grid">
        {contacts.map((contact) => (
          <div key={contact.id} className="card">
            <div className="card-header">
              <h2>{contact.name}</h2>
              <p>{contact.phone}</p>
            </div>
            <div className="social-media">
              <p>Social Media:</p>
              <p>
                YouTube: {contact.social.youtube} &nbsp; | &nbsp;
                GitHub: {contact.social.github} &nbsp; | &nbsp;
                Gmail: {contact.social.gmail} &nbsp; | &nbsp;
                Viber: {contact.social.viber} &nbsp; | &nbsp;
                WhatsApp: {contact.social.whatsapp} &nbsp; | &nbsp;
                Instagram: {contact.social.instagram} &nbsp; | &nbsp;
                Facebook: {contact.social.facebook}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
