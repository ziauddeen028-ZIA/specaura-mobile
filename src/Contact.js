import React from "react";
import "./Contact.css";

const contacts = [
  {
    id: 0,
    name: "Soumyan",
    role: "Project Guide",
    phone: "+91 80563 36671",
    image: "/images/sowmiyan_sir.jpeg",
    type: "guide"
  },
  {
    id: 1,
    name: "Ziauddeen S",
    phone: "+91 63740 69185",
    email: "ziauddeen028@gmail.com",
    image:
      "https://api.thenewcollege.edu.in/UserUploads/60c2dca2e5505c34a43d4a244b2f8db0ea300/applicantImage_20240326093222_3a08f6d2.jpg",
    type: "technical-member"
  },
  {
    id: 2,
    name: "Mohammed Rabbani M S",
    phone: "+91 90252 58895",
    email: "mohammedrabbani07@gmail.com",
    image: "/images/rabbani.jpeg",
    type: "technical-member"
  },
  {
    id: 3,
    name: "Mohamed Abdul Salam M",
    phone: "+91 98400 80201",
    email: "abdulsalammohamed04@gmail.com",
    image:
      "https://api.thenewcollege.edu.in/UserUploads/602850d0d09aabc7149d682f615b8a0f65071/applicantImage_20231003131615_119a1994.JPG",
    type: "technical-member"
  },
  {
    id: 4,
    name: "Shahul Hameed",
    phone: "+91 63815 83695",
    email: "shahulhameed@gmail.com",
    image:
      "https://api.thenewcollege.edu.in/UserUploads/68c293db78a6e9f07420282ba5a525b8926aa/applicantImage_20231003131711_b082b0d5.JPG",
    type: "technical-member"
  }
];

const Contact = () => {
  const guide = contacts.filter((c) => c.type === "guide");
  const members = contacts.filter((c) => c.type === "technical-member");

  return (
    <div className="contact-container">

      <h2>Project Guide</h2>
      <div className="contact-grid guide-grid">
        {guide.map((person) => (
          <div className="contact-card guide-card" key={person.id}>
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3>
            <p className="role">{person.role}</p>
            <p>{person.phone}</p>
          </div>
        ))}
      </div>

      <h2>Our Team Members</h2>
      <div className="contact-grid">
        {members.map((person) => (
          <div className="contact-card" key={person.id}>
            <img src={person.image} alt={person.name} />
            <h3>{person.name}</h3>
            <p>{person.type}</p>
            <p>{person.email}</p>
            <p>{person.phone}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Contact;