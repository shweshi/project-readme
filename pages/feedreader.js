import Head from 'next/head'
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import styles from "../styles/Link.module.css";
import React from "react";
import { withRouter } from "next/router"

class FeedReader extends React.Component {
  constructor(props) {
    super(props);
    const {query} = props.router;
    this.state = { links: [], query: query };
  }

  async componentDidMount() {
    const url = this.state.query.rss;
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
            <Sidebar/>
            <div className="col-sm p-3 min-vh-100">
              <Header/>
              <div className={styles.links}>
                <div className={styles.linkHeader}>/ Feeds > Items</div>
                {this.state.links.map((link, i) => (
                    <a href={link.link} target="_blank" key={i}>
                      <div className={`card rounded mb-6 ${styles.card}`}>
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
                    </a>
                ))}
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default withRouter(FeedReader);
