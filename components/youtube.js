import React from 'react'
import styles from '../styles/Link.module.css';

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: [] };
  }

  async componentDidMount() {
    const res = await fetch('https://raw.githubusercontent.com/shweshi/reading/main/youtube-links.json')
    const json = await res.json();
    this.setState({ links: json })
  }

  render() {
    return (
        <div className={styles.links} id="youtube">
          <div className={styles.linkHeader}>/ Youtube</div>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {this.state.links.map((link) => (
                <div className="col">
                  <iframe class="col-lg-12 col-md-12 col-sm-12"
                          src={`https://www.youtube.com/embed/${link.url.split("?v=").pop().split('&')[0]}?controls=0`}>
                  </iframe>
                </div>
            ))}
          </div>
        </div>
    );
  }
}

export default Youtube;
