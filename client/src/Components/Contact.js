import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [msg, setMsg] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMsg((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(process.env.REACT_APP_API + "api/admin/sendmail", msg)
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          toast.success("Contacted Successfully");
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        }
      });
  };

  return (
    <>
      <div className="contact_page_bg">
        <div className="container">
          {/*contact area start*/}
          <div className="contact_area">
            <div className="row">
              <div className="col-lg-6 col-md-12" style={{ padding: "10px" }}>
                <div className="contact_message content">
                  <h3>contact us</h3>
                  <p>
                    Claritas est etiam processus dynamicus, qui sequitur
                    mutationem consuetudium lectorum. Mirum est notare quam
                    littera gothica, quam nunc putamus parum claram anteposuerit
                    litterarum formas human. qui sequitur mutationem
                    consuetudium lectorum. Mirum est notare quam
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-fax" /> Address : Your address goes
                      here.
                    </li>
                    <li>
                      <i className="fa fa-phone" />{" "}
                      <a href="#/">admin@dealsghar.com</a>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" /> 0123456789
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="contact_message form">
                  <h3>Tell us your project</h3>

                  <p>
                    <label> Your Name (required)</label>
                    <input
                      name="username"
                      placeholder="Name *"
                      type="text"
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <label> Your Email (required)</label>
                    <input
                      name="email"
                      placeholder="Email *"
                      type="email"
                      onChange={handleChange}
                    />
                  </p>
                  <div className="contact_textarea">
                    <label> Your Message</label>
                    <textarea
                      placeholder="Message *"
                      name="message"
                      className="form-control2"
                      defaultValue={""}
                      onChange={handleChange}
                    />
                  </div>
                  {loading === true ? (
                    <>
                      <p>Sending Message.......</p>
                    </>
                  ) : (
                    <></>
                  )}

                  <button type="submit" onClick={handleSubmit}>
                    {" "}
                    Send
                  </button>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
          {/*contact area end*/}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
