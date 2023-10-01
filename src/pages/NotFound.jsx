import { Navbar } from "../components/navbar"
import "../css/notfound.css"


export const NotFound = () => {
    return (
        <>
          <Navbar />
          <section className="notFound-sec">
              <div className="notfound-head-container">
                  <h2 className="not-found-head">
                    <span className="head-1">Page Not </span>
                    <span className="head-2">Found</span>
                  </h2>
                  <p className="status-code">
                    <span className="head-2">4</span>
                    <span className="head-1">0</span>
                    <span className="head-2">4</span>
                  </p>
              </div>
          </section>
        </>
    )
}