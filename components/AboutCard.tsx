import React from "react";
import styles from "../styles/About.module.css";
import Link from "next/link";
import NextImage from "./Image";
import { IAboutPage, IContact } from "../interfaces/about.interface";

const AboutCard = ({ contacts }: IAboutPage) => {
  return (
    <div>
      <h2>Our Team</h2>
      <div className={styles.aboutPage}>
        {contacts.map((contact, ind) => (
          <div className={styles.row} key={ind}>
            <div className={styles.column}>
              <div className={styles.card}>
                <NextImage
                  layout="raw"
                  className={styles.myImg}
                  width={237}
                  height={158}
                  alternativetext="Home image"
                  url={contact.photo.data.attributes.url}
                />
                {/* <img src="/w3images/team1.jpg" alt="Jane" /> */}
                <div className={styles.cardContainer}>
                  <h2>{contact.name}</h2>
                  <p className={styles.title}>{contact.designation}</p>
                  <p>{contact.description}</p>
                  <p>{contact.email}</p>
                  {/* <p>
                    <button className="button">Contact</button>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCard;
