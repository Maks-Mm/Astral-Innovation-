import React from "react";
import { FaYoutube, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaViber, FaWhatsapp } from "react-icons/fa6";
import "./Contacts.css"; // Import the CSS file

const contacts = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 234 567 890",
    social: {
      youtube: "https://www.youtube.com/@johndoe",
      github: "https://github.com/johndoe",
      gmail: "mailto:johndoe@gmail.com",
      viber: "viber://chat?number=%2B1234567890",
      whatsapp: "https://wa.me/1234567890",
      instagram: "https://www.instagram.com/johndoe",
      facebook: "https://www.facebook.com/johndoe",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+44 789 654 321",
    social: {
      youtube: "https://www.youtube.com/@janesmith",
      github: "https://github.com/janesmith",
      gmail: "mailto:janesmith@gmail.com",
      viber: "viber://chat?number=%2B44789654321",
      whatsapp: "https://wa.me/44789654321",
      instagram: "https://www.instagram.com/janesmith",
      facebook: "https://www.facebook.com/janesmith",
    },
  },
  {
    id: 3,
    name: "Alex Brown",
    phone: "+33 123 456 789",
    social: {
      youtube: "https://www.youtube.com/@alexbrown",
      github: "https://github.com/alexbrown",
      gmail: "mailto:alexbrown@gmail.com",
      viber: "viber://chat?number=%2B33123456789",
      whatsapp: "https://wa.me/33123456789",
      instagram: "https://www.instagram.com/alexbrown",
      facebook: "https://www.facebook.com/alexbrown",
    },
  },
];

const socialIcons = {
  youtube: <FaYoutube className="text-red-600" />, 
  github: <FaGithub className="text-gray-800" />, 
  gmail: <MdEmail className="text-blue-500" />, 
  viber: <FaViber className="text-purple-500" />, 
  whatsapp: <FaWhatsapp className="text-green-500" />, 
  instagram: <FaInstagram className="text-pink-500" />, 
  facebook: <FaFacebook className="text-blue-700" />, 
};

const Contacts = () => {
  return (
    <div className="container">
      <h1 className="title text-4xl font-bold text-blue-500 mb-4">Contacts</h1>
      <div className="grid">
        {contacts.map((contact) => (
          <div key={contact.id} className="card">
            <div className="card-header">
              <h2>{contact.name}</h2>
              <p>{contact.phone}</p>
            </div>
            <div className="social-media">
              <p>Social Media:</p>
              <div className="flex space-x-2">
                {Object.entries(contact.social).map(([key, value]) => (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    {socialIcons[key]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
