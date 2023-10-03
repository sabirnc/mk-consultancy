import { Navbar } from "../components/navbar";
import "../css/contact.css";

export const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="contact-sec">
        <div className="contact-head-container">
          <h3 className="contact-head">Contact us</h3>
          <p className="contact-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            odio eius a voluptatibus totam repellendus esse, mollitia quasi nemo
            deleniti minima, harum quo fugiat. Possimus, dolor laboriosam
            pariatur ex error commodi reprehenderit magni vero quam ipsam sit
            tempore sint inventore dolores aliquid voluptatum repudiandae eaque
            ad libero? Veritatis officia facere exercitationem doloremque culpa
            fuga, mollitia magnam dolor id similique dolorum ipsam, at
            perspiciatis voluptatibus necessitatibus ab amet numquam, maiores
            odit.
          </p>
        </div>
        <div className="contact-us">
          <div className="contact-card">
            <h2 className="contact-head">Dhanish Nabhan</h2>
            <p className="contact-para para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              et, veritatis reprehenderit esse dolorum illum quis dolore
              laboriosam cum..
            </p>
            <p className="phone">phone:<span className="phone-number">+919562252631</span></p>
          </div>
          <div className="contact-card">
            <h2 className="contact-head">Kamil Mashood</h2>
            <p className="contact-para para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              et, veritatis reprehenderit esse dolorum illum quis dolore
              laboriosam cum..
            </p>
            <p className="phone">phone:<span className="phone-number">+917397601689</span></p>
          </div>
          {/* <span>+919562252631</span>
                <span>+917397601689</span> */}
        </div>
      </section>
    </>
  );
};
