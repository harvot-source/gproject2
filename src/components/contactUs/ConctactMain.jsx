import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import ForumIcon from "@mui/icons-material/Forum";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";

function ContactMain() {
  const data = localStorage.getItem("ContactDB")
    ? JSON.parse(localStorage.getItem("ContactDB"))
    : [];

  const [contactArray, setContactArray] = useState(data);
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Your message has been sent",
      showConfirmButton: false,
      timer: 1500,
    });
    const contactId = Date.now();

    setContactArray([
      ...contactArray,
      {
        id: contactId,
        name: newContact.name,
        email: newContact.email,
        message: newContact.message,
      },
    ]);
    setNewContact({
      name: "",
      email: "",
      message: "",
    });
  }
  useEffect(() => {
    localStorage.setItem("ContactDB", JSON.stringify(contactArray));
  }, [contactArray]);
  return (
    <div className="contact ps-0 ps-md-5 d-flex align-items-center justify-content-md-start justify-content-center">
      <form className="py-5 rounded-5 px-3" onSubmit={handleSubmit}>
        <fieldset>
          <motion.legend
            className="mb-5 text-center"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <ForumIcon fontSize="large" /> Let's Talk <br />
            <small className="fs-6">
              Have any questions about our services and careers?<br />Bump us a
              message.
            </small>
          </motion.legend>
          <div className="form-group mb-3 row mx-0">
            <div className="col-6">
              <motion.label
                htmlFor="contactFullname"
                className="form-label text-light text-center w-100 fs-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Full name
              </motion.label>
              <motion.input
                type="text"
                className="form-control"
                name="contactFullname"
                placeholder="e.g. John Doe"
                value={newContact.name}
                onChange={(e) =>
                  setNewContact({ ...newContact, name: e.target.value })
                }
                required
                initial={{ x: "-50vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <div className="col-6">
              <motion.label
                htmlFor="contactEmail"
                className="form-label text-light text-center w-100 fs-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Email
              </motion.label>
              <motion.input
                type="email"
                className="form-control"
                name="contactEmail"
                placeholder="johndoe@email.com"
                value={newContact.email}
                onChange={(e) =>
                  setNewContact({ ...newContact, email: e.target.value })
                }
                required
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
          <div className="form-group mb-3 row mx-0">
            <div className=" col-12">
              <motion.label
                htmlFor="contactEmail"
                className="form-label text-light text-center w-100 fs-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Message
              </motion.label>
              <motion.textarea
                type="email"
                className="form-control"
                name="contactEmail"
                placeholder="Your message here..."
                value={newContact.message}
                onChange={(e) =>
                  setNewContact({ ...newContact, message: e.target.value })
                }
                required
                initial={{ y: "110vh" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
          <div className="form-group row justify-content-end">
            <motion.button
              type="submit"
              className="btn btn-info w-25"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <SendIcon />
            </motion.button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ContactMain;
