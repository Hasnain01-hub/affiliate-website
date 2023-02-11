import React from "react";

const Contact = () => {
  return (
    <div className="contact_page_bg">
      <div className="container">
        {/*contact area start*/}
        <div className="contact_area">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact_message content">
                <h3>contact us</h3>
                <p>
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum claram anteposuerit
                  litterarum formas human. qui sequitur mutationem consuetudium
                  lectorum. Mirum est notare quam
                </p>
                <ul>
                  <li>
                    <i className="fa fa-fax" /> Address : Your address goes
                    here.
                  </li>
                  <li>
                    <i className="fa fa-phone" />{" "}
                    <a href="#/">demo@example.com</a>
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
                  <input name="name" placeholder="Name *" type="text" />
                </p>
                <p>
                  <label> Your Email (required)</label>
                  <input name="email" placeholder="Email *" type="email" />
                </p>
                <p>
                  <label> Subject</label>
                  <input name="subject" placeholder="Subject *" type="text" />
                </p>
                <div className="contact_textarea">
                  <label> Your Message</label>
                  <textarea
                    placeholder="Message *"
                    name="message"
                    className="form-control2"
                    defaultValue={""}
                  />
                </div>
                <button type="submit"> Send</button>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
        {/*contact area end*/}
      </div>
    </div>
  );
};

export default Contact;
