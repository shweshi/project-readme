import Head from 'next/head'
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import feedStyles from '../styles/Feed.module.css';
import linkStyles from '../styles/Link.module.css';
import pdfStyles from '../styles/Pdf.module.css'
import youtubeStyles from '../styles/Youtube.module.css';
import prisma from '../lib/primsa';
import Link from 'next/link'
import IFrameModal from '../components/modal';
import React, { useEffect, useState } from "react";
import { Parallax } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';

function Home(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="container-fluid">
      <Head>
        <title>README : Reading Dashboard</title>
        <meta name="description" content="README : Reading Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row" key="demo1">
        <Sidebar />
        <div className="col-sm p-3 min-vh-100">
          <Header />

          <QueueAnim type="left" duration={3000}>
            {props.feeds.length ? (
              <div className={feedStyles.feeds} id="feeds" key="feeds">
                <div className="d-flex justify-content-between">
                  <div className={feedStyles.feedHeader}>/ Feeds</div>
                  {props.feeds.length > 4 ? (
                    <Link href={{ pathname: 'feeds' }}>
                      <div className={feedStyles.feedSmallHeader}>Show All</div>
                    </Link>
                  ) : null}
                </div>

                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {props.feeds.map((feed, i) => (
                    <Link href={{ pathname: 'feedreader', query: { rss: feed.rss } }} key={i}>
                      <a>
                        <div className="col">
                          <div className={`h-100 rounded ${feedStyles.card}`}>
                            {/*<img src={feed.image ? feed.image : 'https://picsum.photos/180/40'} className="card-img-top" alt="..."/>*/}
                            <div className="card-body">
                              <h5 className={`card-title ${feedStyles.cardTitle}`}>{feed.title}</h5>
                              <p className={`card-title ${feedStyles.cardText}`}>{feed.description}</p>
                              <small className={`card-title ${feedStyles.cardLink}`}>{feed.url}</small>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </QueueAnim>

          <QueueAnim type="left" duration={3000}>

            {props.links.length ? (
              <div className={linkStyles.links} id="links" key="links">
                <div className="d-flex justify-content-between">
                  <div className={linkStyles.linkHeader}>/ Links</div>
                  {props.links.length > 4 ? (
                    <Link href={{ pathname: 'links' }}>
                      <div className={linkStyles.linkSmallHeader}>Show All</div>
                    </Link>
                  ) : null}
                </div>

                {props.links.map((link, i) => (
                  <>
                    <div className={`card rounded mb-6 ${linkStyles.card}`} onClick={() => setModalShow(true)} key={i}>
                      <div className="row g-0" >
                        {/*<div className="col-md-1">*/}
                        {/*  /!*<img className={linkStyles.image} src={link.image ? link.image : 'https://picsum.photos/50/50'} alt="..."/>*!/*/}
                        {/*</div>*/}
                        <div className="col-md-11">
                          <div className={`card-body ${linkStyles.card}`}>
                            <h5 className={`card-title ${linkStyles.cardTitle}`}>{link.title}</h5>
                            <p className={`card-title ${linkStyles.cardText}`}>{link.description}</p>
                            <small className={`card-title ${linkStyles.cardLink}`}>{link.url}</small>
                          </div>
                        </div>
                      </div>

                    </div>
                    <IFrameModal show={modalShow} onHide={() => setModalShow(false)} title={link.title} url={link.url} />
                  </>

                ))}
              </div>
            ) : null}
          </QueueAnim>

          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0, 0.5] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
          >
            {props.pdfs.length ? (
              <div className={pdfStyles.pdfs} id="pdfs" key="pdfs">
                <div className="d-flex justify-content-between">
                  <div className={pdfStyles.pdfHeader}>/ Books</div>
                  {props.pdfs.length > 4 ? (
                    <Link href={{ pathname: 'pdfs' }}>
                      <div className={pdfStyles.pdfSmallHeader}>Show All</div>
                    </Link>
                  ) : null}
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {props.pdfs.map((pdf, i) => (
                    <Link href={{ pathname: 'pdfview', query: { url: pdf.link } }} key={i}>
                      <a>
                        <div className={`card rounded mb-6 ${pdfStyles.card}`}>
                          <div className="row g-0">
                            {/*<div className="col-md-1">*/}
                            {/*  /!*<img className={linkStyles.image} src={link.image ? link.image : 'https://picsum.photos/50/50'} alt="..."/>*!/*/}
                            {/*</div>*/}
                            <div className="col-md-11">
                              <div className={`card-body ${pdfStyles.card}`}>
                                <small className={`card-title ${pdfStyles.cardLink}`}>{pdf.link}</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </Parallax>

          <Parallax
            animation={{ x: 0, opacity: 1, playScale: [0, 0.5] }}
            style={{ transform: 'translateX(-100px)', opacity: 0 }}
          >
            {props.youtubeLinks.length ? (
              <div className={youtubeStyles.links} id="youtube" key="youtube">
                <div className="d-flex justify-content-between">
                  <div className={youtubeStyles.linkHeader}>/ Youtube</div>
                  {props.youtubeLinks.length > 4 ? (
                    <Link href={{ pathname: 'youtubes' }}>
                      <div className={youtubeStyles.linkSmallHeader}>Show All</div>
                    </Link>
                  ) : null}
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  {props.youtubeLinks.map((link, i) => (
                    <div className="col" key={i}>
                      <iframe class="col-lg-12 col-md-12 col-sm-12"
                        src={`https://www.youtube.com/embed/${link.link.split("?v=").pop().split('&')[0]}?controls=0`}>
                      </iframe>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </Parallax>
        </div>
      </div>
    </div >
  )
}

export async function getServerSideProps(context) {
  const feeds = await prisma.feed.findMany();
  const links = await prisma.link.findMany();
  const pdfs = await prisma.pdf.findMany();
  const youtubeLinks = await prisma.youtube.findMany();
  return { props: { feeds, links, pdfs, youtubeLinks } }
}

export default Home;
