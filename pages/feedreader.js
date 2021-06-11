import Head from 'next/head'
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import styles from "../styles/Link.module.css";
import { withRouter } from "next/router"
import IFrameModal from '../components/modal';
import React from "react";
import QueueAnim from 'rc-queue-anim';

class FeedReader extends React.Component {
  constructor(props) {
    super(props);
    const { query } = props.router;
    this.state = {
      links: [],
      query: query,
      modalShow: false,
      modalId: null,
      title: null,
      link: null,
    };
  }

  showModal = (e, index) => {
    this.setState({ modalShow: true, modalId: index });
  };

  hideModal = (e, index) => {
    this.setState({ modalShow: false, modalId: index });
  };

  showModal(e) { }
  modalClose = () => this.setState({ modalShow: false });

  async componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const url = params.get('rss');
    const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`);
    const json = await res.json();
    this.setState({ links: json.items })
  }

  render() {
    return (
      <div className="container-fluid">
        <Head>
          <title>README : Reading Dashboard</title>
          <meta name="description" content="README : Reading Dashboard" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="row">
          <Sidebar />
          <div className="col-sm p-3 min-vh-100">
            <Header />
            <div className={styles.links}>
              <div className={styles.linkHeader}>/ <a href="/">Feeds</a> > Items</div>

              {this.state.links.map((link, i) => (
                <>
                  <QueueAnim type="right" duration={3000}>
                    <div className={`card rounded mb-6 ${styles.card}`} onClick={() => this.setState({ modalShow: true, title: link.title, url: link.link })}>
                      <div className="row g-0">
                        {/*<div className="col-md-1">*/}
                        {/*  /!*<img className={styles.image} src={link.image ? link.image : 'https://picsum.photos/50/50'} alt="..."/>*!/*/}
                        {/*</div>*/}
                        <div className="col-md-11">
                          <div className={`card-body ${styles.card}`}>
                            <h5 className={`card-title ${styles.cardTitle}`}>{link.title}</h5>
                            <p className={`card-title ${styles.cardText}`}>{link.description}</p>
                            <small className={`card-title ${styles.cardLink}`}>{link.link}</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <IFrameModal show={this.state.modalShow} onHide={this.modalClose} title={this.state.title} url={this.state.url} />
                  </QueueAnim>

                </>
              ))}

            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default withRouter(FeedReader);
