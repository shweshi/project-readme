import styles from "../styles/Sidebar.module.css";

function Sidebar() {
  return (
      <div className={`col-sm-auto bg-dark sticky-top ${styles.bgDark}`}>
        <div className={`d-flex flex-sm-column flex-row flex-nowrap bg-dark align-items-center sticky-top ${styles.bgDark}`}>
          <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
            <li className="nav-item">
              <a href="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                 data-bs-placement="right" data-bs-original-title="Home">
                <i className={`bi-house fs-2 ${styles.navIcon}`}></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="/feeds" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                 data-bs-placement="right" data-bs-original-title="Feeds">
                <i className={`bi-rss fs-3 ${styles.navIcon}`}></i>
              </a>
            </li>
            <li>
              <a href="/links" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                 data-bs-placement="right" data-bs-original-title="Links">
                <i className={`bi-link fs-2 ${styles.navIcon}`}></i>
              </a>
            </li>
            <li>
              <a href="/pdfs" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                 data-bs-placement="right" data-bs-original-title="Pdfs">
                <i className={`bi-file-pdf-fill fs-2 ${styles.navIcon}`}></i>
              </a>
            </li>
            <li>
              <a href="/youtubes" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip"
                 data-bs-placement="right" data-bs-original-title="Youtubes">
                <i className={`bi-youtube fs-3 ${styles.navIcon}`}></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Sidebar
