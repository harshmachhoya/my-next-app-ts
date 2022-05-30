import { gql } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import { apolloCon } from "../apolloCon";
import { NextSeo } from "next-seo";
import seoConfig from "../config/next-seo.config";
import { POST_CONTACT } from "../graphql/queries";

const Contact = () => {
  const SEO = {
    title: seoConfig.title,
    titleTemplate: "%s | Contact",
  };
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, phone, email, message };
    // console.log("Body", data);

    apolloCon
      .mutate({
        mutation: POST_CONTACT,
        variables: { ...data },
      })
      .then((d) => {
        console.log("Success response:", d);
        handleReset();
        alert("Thanks for contacting us");
      })
      .catch((e) => {
        console.log("Error", e);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "message") {
      setmessage(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };

  const handleReset = () => {
    setphone("");
    setname("");
    setmessage("");
    setemail("");
  };

  return (
    <>
      <NextSeo {...SEO} />
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            className={styles.formFields}
            label="Full Name"
            value={name}
            onChange={handleChange}
            name="name"
            fullWidth
            autoComplete="none"
          />
          <TextField
            className={styles.formFields}
            label="Email"
            value={email}
            onChange={handleChange}
            name="email"
            fullWidth
            autoComplete="none"
          />
          <TextField
            className={styles.formFields}
            label="Phone"
            value={phone}
            onChange={handleChange}
            name="phone"
            fullWidth
            autoComplete="none"
          />
          <TextField
            className={styles.formFields}
            label="Message"
            value={message}
            onChange={handleChange}
            name="message"
            fullWidth
            multiline
            rows={5}
            autoComplete="none"
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          &nbsp;
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
        </form>
      </div>
    </>
  );
};

export default Contact;
