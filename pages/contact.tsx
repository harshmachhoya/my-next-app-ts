import { gql } from "@apollo/client";
import { Alert, AlertColor, Button, Snackbar, TextField } from "@mui/material";
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
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor | undefined>();
  const [alertMessage, setAlertMessage] = useState("");
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = { name, phone, email, message };
    // console.log("Body", data);
    if (data.message.length <= 10) {
      setSeverity("warning");
      setAlertMessage("Please put a message more than 10 characters!");
      setOpen(true);
      return;
    }
    apolloCon
      .mutate({
        mutation: POST_CONTACT,
        variables: { ...data },
      })
      .then((d) => {
        console.log("Success response:", d);
        setSeverity("success");
        setAlertMessage("Thanks for contacting us");
        setOpen(true);
        handleReset();
        // alert("Thanks for contacting us");
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
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
            required
          />
          <TextField
            className={styles.formFields}
            label="Email"
            value={email}
            onChange={handleChange}
            name="email"
            fullWidth
            autoComplete="none"
            required
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
            required
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
