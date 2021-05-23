import React from 'react'
import styles from '../styles/Feed.module.css';
import Link from 'next/link'

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { feeds: [] };
  }

  async componentDidMount() {
    const toJson = response => response.json()

    const res = await fetch('https://raw.githubusercontent.com/shweshi/reading/main/feeds.json')
        .then(toJson)
        .then((feeds) => {

          const promises = feeds.map((feed) => {
            return fetch(`https://api.rss2json.com/v1/api.json?rss_url=${feed.rss}`).then(toJson)
                .then((json) => {
                  if (json.status === "ok") {
                    json.rss = feed.rss;
                    return json;
                  }
                })
          })
          return Promise.all(promises)
        })
    this.setState({ feeds: res.filter(x => x !== undefined) })
  }

  render() {
    console.log(this.state.feeds);
    return (
        <div className={styles.feeds}>
          <div className={styles.feedHeader}>/ Feeds</div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {this.state.feeds.map((feed) => (
                <Link href={{ pathname: 'feedreader', query: { rss: feed.rss }}}>
                  <a>
                    <div className="col">
                      <div className={`h-100 rounded ${styles.card}`}>
                        {/*<img src={feed.image ? feed.image : 'https://picsum.photos/180/40'} className="card-img-top" alt="..."/>*/}
                        <div className="card-body">
                          <h5 className={`card-title ${styles.cardTitle}`}>{feed.feed.title}</h5>
                          <p className={`card-title ${styles.cardText}`}>{feed.feed.description}</p>
                          <small className={`card-title ${styles.cardLink}`}>{feed.feed.link}</small>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
            ))}
          </div>
        </div>
    );
  }
}

export default Feed;
