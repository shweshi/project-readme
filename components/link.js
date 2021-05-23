import React from 'react'
import styles from '../styles/Link.module.css';

class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = { links: [] };
  }

  async componentDidMount() {
    const res = await fetch('https://raw.githubusercontent.com/shweshi/reading/main/links.json')
    const json = await res.json();
    this.setState({ links: json })
  }

  render() {
    return (
        <div className={styles.links} id="links">
          <div className={styles.linkHeader}>/ Links</div>
          {this.state.links.map((link) => (
              <a href={link.link} target="_blank">
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
    );
  }
}

export default Link;
