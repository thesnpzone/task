import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

const FeedBackForm = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    country: "",
    email: "",
    phone: "",
  });

  const handelOpen = () => setOpen(true);
  const handelClose = () => setOpen(false);

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      fname: "",
      lname: "",
      address: "",
      country: "",
      email: "",
      phone: "",
    });

    handelClose();
  };

  return (
    <>
      <div
        className="mt-4 p-4 card text-center"
        style={{ borderRadius: "15px" }}
      >
        <h1 className="mb-4 text-center te">Have a Feedback?</h1>
        <Button
          sx={{
            fontFamily: "Outfit",
    
            fontWeight: "800",
            fontSize: "1.5rem",
            backgroundColor: "	#218838",
            borderRadius: "10px",
            color: "white",
          }}
          variant="contained"
          onClick={handelOpen}
        >
          We're Listening!
        </Button>

        <Modal
          open={open}
          onClose={handelClose}
          BackdropProps={{
            sx: {
              backdropFilter: "blur(5px)",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              transform: "translet(-50%,-50%)",
              width: "80vw",
              height: "100vh",
              bgcolor: "rgb(220, 226, 230)",

              p: 4,
              borderTopRightRadius: 15,
            }}
          >
            <div class="row">
              <div className="col-4">
                <ProfileCard />

                <div
                  className="mt-4 p-4 card text-center"
                  style={{ borderRadius: "15px" }}
                >
                  <h1 className="mb-4 text-center te">Have a Feedback?</h1>
                  <Button
                    onClick={handelClose}
                    sx={{
                      fontFamily: "Outfit",
                      color: "black",
                      fontWeight: "800",
                      fontSize: "1.5rem",
                      backgroundColor: "#ff5c5c",
                      borderRadius: "10px",
                    }}
                    variant="contained"
                  >
                    We're Listening!
                  </Button>
                </div>
              </div>

              <div className="col-8">
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Thank tou so much for taking the the time
                </Typography>
                <Typography variant="body1">
                  Please provide the below detils!{" "}
                </Typography>
                <form onSubmit={handelSubmit} className="mt-3">
                  <TextField
                    className="my-3"
                    label="First Name"
                    name="fname"
                    value={formData.fname}
                    onChange={handelChange}
                    required
                    fullWidth
                    InputProps={{ sx: { color: "black", background: "white" } }}
                    InputLabelProps={{
                      sx: { color: "black", background: "white" },
                    }}
                  />
                  <TextField
                    className="my-3"
                    label="Last Name"
                    name="lname"
                    value={formData.lname}
                    onChange={handelChange}
                    required
                    fullWidth
                    InputProps={{ sx: { color: "black", background: "white" } }}
                    InputLabelProps={{
                      sx: { color: "black", background: "white" },
                    }}
                  />
                  <TextField
                    className="my-3"
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handelChange}
                    required
                    fullWidth
                    InputProps={{ sx: { color: "black", background: "white" } }}
                    InputLabelProps={{
                      sx: { color: "black", background: "white" },
                    }}
                  />
                  <TextField
                    className="my-3"
                    label="Country"
                    name="country"
                    value={formData.country}
                    onChange={handelChange}
                    required
                    fullWidth
                    InputProps={{ sx: { color: "black", background: "white" } }}
                    InputLabelProps={{
                      sx: { color: "black", background: "white" },
                    }}
                  />
                  <TextField
                    type="email"
                    className="my-3"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handelChange}
                    required
                    fullWidth
                    InputProps={{ sx: { color: "black", background: "white" } }}
                    InputLabelProps={{
                      sx: { color: "black", background: "white" },
                    }}
                  />
                  <TextField
                    label="Phone No."
                    name="phone"
                    value={formData.phone}
                    onChange={handelChange}
                    required
                    fullWidth
                    InputProps={{ sx: { color: "black", background: "white" } }}
                    InputLabelProps={{
                      sx: { color: "black", background: "white" },
                    }}
                  />

                  <Button variant="contained" className="mt-5" color="success" type="submit">
                    Submit Feedback
                  </Button>
                </form>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default FeedBackForm;
