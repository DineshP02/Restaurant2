import Navbar from "./Navbar.jsx";
import gallery1 from "./assets/gallery-1.jpg";
import gallery2 from "./assets/gallery-2.jpg";
import gallery3 from "./assets/gallery-3.jpg";
import gallery4 from "./assets/gallery-4.jpg";
import gallery5 from "./assets/gallery-5.jpg";
import gallery6 from "./assets/gallery-6.jpg";
import gallery7 from "./assets/gallery-7.jpg";
import gallery8 from "./assets/gallery-8.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { CiMobile2 } from "react-icons/ci";
import FormAddress from "./FormAddress.jsx";
import "./App.css";
import { FaPlayCircle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaSkype } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function App() {
  const handleMouseEnter = (event) => {
    event.target.style.transform = "scale(1.1)";
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = "scale(1)";
  };
  const [isInputFocused, setIsInputFocused] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="parent">
        <Navbar />
        <div className="container ">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              marginTop: "120px",
            }}
          >
            <div>
              <div style={{}}>
                <h1 style={{ fontSize: "45px", color: "white" }}>
                  Welcome to{" "}
                  <span style={{ color: "#FFC72C" }}>Restaurantly</span>
                </h1>
              </div>
              <div
                style={{
                  paddingLeft: "15px",
                  color: "whitesmoke",
                }}
              >
                <h4>Delivering great food for more than 18 years !</h4>
              </div>

              <div
                style={{
                  marginTop: "20px",

                  display: "flex",
                  gap: "30px",
                }}
              >
                {" "}
                <button
                  className="btn btn-dark nav-item text-light  border-warning rounded-pill "
                  style={{
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",

                    paddingLeft: "30px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f0e68c";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  Our menu
                </button>
                <button
                  className="btn btn-dark nav-item text-light  border-warning rounded-pill "
                  style={{
                    backgroundColor: "transparent",
                    transition: "background-color 0.3s ease",

                    paddingLeft: "30px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#f0e68c";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  Book a table
                </button>
              </div>
            </div>
            <div
              style={{
                fontSize: "50px",
              }}
            >
              <a
                href="https://youtu.be/u6BOC7CDUTQ?si=OvWxrIP81CXbDdE9"
                style={{ color: "#FFC72C" }}
              >
                <FaPlayCircle
                  style={{
                    backgroundColor: "white",
                    borderRadius: "30px",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="booking">
        <div className="container ">
          <div style={{ marginTop: "30px" }}>
            <div style={{ color: "whitesmoke" }}>
              <h5>Reservation</h5>
            </div>
            <div>
              <h2 style={{ color: "#FFC72C" }}>Book a Table</h2>
            </div>
            <form
              className="row g-3"
              style={{ marginTop: "20px" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  style={{ color: isInputFocused ? "black" : "white" }}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsInputFocused(false), 0);
                  }}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div className="col-md-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: "Invalid email address",
                    },
                  })}
                  style={{ color: isInputFocused ? "black" : "white" }}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsInputFocused(false), 0);
                  }}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Number"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                  })}
                  style={{ color: isInputFocused ? "black" : "white" }}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsInputFocused(false), 0);
                  }}
                />
                {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Date"
                  {...register("date", { required: "Date is required" })}
                  style={{ color: isInputFocused ? "black" : "white" }}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsInputFocused(false), 0);
                  }}
                />
                {errors.date && <p>{errors.date.message}</p>}
              </div>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  placeholder="Time"
                  {...register("time", { required: "Time is required" })}
                  style={{ color: isInputFocused ? "black" : "white" }}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsInputFocused(false), 0);
                  }}
                />
                {errors.time && <p>{errors.time.message}</p>}
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  className="form-control"
                  placeholder="# of people"
                  {...register("numberOfPeople", {
                    required: "Number of people is required",
                    min: {
                      value: 1,
                      message: "Please enter a valid number of people",
                    },
                  })}
                  style={{ color: isInputFocused ? "black" : "white" }}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsInputFocused(false), 0);
                  }}
                />
                {errors.numberOfPeople && (
                  <p>{errors.numberOfPeople.message}</p>
                )}
              </div>
              <div className="col-md-12 ">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  {...register("message")}
                  style={{
                    paddingBottom: "70px",
                    color: isInputFocused ? "black" : "white",
                  }}
                  onFocus={() => setIsInputFocused(true)}
                  onBlur={() => {
                    setTimeout(() => setIsInputFocused(false), 0);
                  }}
                />
              </div>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  className="btn btn-dark nav-item text-light border border-warning rounded-pill"
                  style={{ backgroundColor: "#FFC72C" }}
                  type="submit"
                >
                  Book a table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="Gallery">
        <div className="container">
          <div style={{ color: "whitesmoke" }}>
            <h5>Gallery</h5>
          </div>
          <div>
            <h2 style={{ color: "#FFC72C" }}>
              Some photos from our Restaurant
            </h2>
          </div>
          <div className="row g-1" style={{ marginTop: "15px" }}>
            <div className="col-md-3">
              <img src={gallery1} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery2} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery3} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery4} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery5} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery6} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery7} className="img-thumbnail" alt="..."></img>
            </div>
            <div className="col-md-3">
              <img src={gallery8} className="img-thumbnail" alt="..."></img>
            </div>
          </div>
        </div>
      </div>
      {/* map */}
      <div className="Map">
        <div className="container">
          {" "}
          <div style={{ color: "whitesmoke" }}>
            {" "}
            <h5>CONTACT</h5>
          </div>
          <div style={{ marginTop: "20px" }}>
            {" "}
            <h2 style={{ color: "#FFC72C" }}>Contact Us</h2>
          </div>
        </div>

        <div className="iframe-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24178.41272818845!2d-74.006138!3d40.755391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2574ef5fe2c17%3A0x9048dbbcd614a637!2sThe%20Home%20Depot!5e0!3m2!1sen!2sus!4v1713008013204!5m2!1sen!2sus"
            style={{ border: 0, width: "100%", height: "400px" }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
      {/* Address */}
      <div className="Address">
        <div className="container ">
          <div className="row g-3">
            <div className="col-md-6">
              <div style={{ display: "flex" }}>
                <div>
                  <FaLocationDot
                    style={{
                      fontSize: "40px",
                      borderRadius: "50%",
                      padding: "10px",
                      backgroundColor: "#FFC72C",
                      color: "white",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: "10px", color: "white" }}>
                  <h6>Location :</h6>
                  <p>A108 Adam street,New York,NY535022</p>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div>
                  <FaClock
                    style={{
                      fontSize: "40px",
                      borderRadius: "50%",
                      padding: "10px",
                      backgroundColor: "#FFC72C",
                      color: "white",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: "10px", color: "white" }}>
                  <h6>Open Hours :</h6>
                  <p>Monday-Saturday :</p>
                  <p>11:00 AM-23:00 PM</p>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div>
                  <TfiEmail
                    style={{
                      fontSize: "40px",
                      borderRadius: "50%",
                      padding: "10px",
                      backgroundColor: "#FFC72C",
                      color: "white",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: "10px", color: "white" }}>
                  <h6>Email :</h6>
                  <p>info @ example.com</p>
                </div>
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div>
                  <CiMobile2
                    style={{
                      fontSize: "40px",
                      borderRadius: "50%",
                      padding: "10px",
                      backgroundColor: "#FFC72C",
                      color: "white",
                    }}
                  />
                </div>
                <div style={{ paddingLeft: "10px", color: "white" }}>
                  <h6>Call :</h6>
                  <p>+1 55895548855s</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <FormAddress />
            </div>
          </div>
        </div>
      </div>
      <div className="Footer">
        <div className="container-fluid">
          <div
            className="row g-3"
            style={{ color: "white", paddingtop: "50px" }}
          >
            <div className="col-md-3">
              <div>
                <h5>RESTAURANTLY</h5>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p>A108 Adam Street</p>
                <p>NY 535002,USA</p>
              </div>
              <div>
                <h6>Phone:+155895548855</h6>
              </div>
              <div>
                <h6>Email:info@example.com</h6>
              </div>
              <div
                style={{
                  marginTop: "15px",
                  gap: "10px",
                }}
              >
                <FaTwitter />
                <TiSocialFacebook style={{ marginLeft: "10px" }} />
                <IoLogoInstagram style={{ marginLeft: "10px" }} />
                <FaSkype style={{ marginLeft: "10px" }} />
                <FaLinkedinIn style={{ marginLeft: "10px" }} />
              </div>
            </div>
            <div className="col-md-3">
              <h5>Useful Links</h5>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Home</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> About us</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Services</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Terms of Services</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Privacy policy</p>
              </div>
            </div>
            <div className="col-md-3">
              {" "}
              <h5>Our Services</h5>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Web Design</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Web Development</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Product Management</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Marketing</p>
              </div>
              <div style={{ display: "flex" }}>
                <IoIosArrowForward
                  style={{ color: "yellow", marginTop: "5px" }}
                />
                <p> Graphic Design</p>
              </div>
            </div>
            <div className="col-md-3">
              <h5>Our Newsletter</h5>
              <div>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
              </div>
              <div className="input-group">
                <input
                  className="form-control "
                  style={{ borderRadius: "20px" }}
                />
                <button
                  className="btn btn-dark nav-item text-light border border-warning rounded-pill"
                  type="button"
                  style={{ backgroundColor: "#FFC72C" }}
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
