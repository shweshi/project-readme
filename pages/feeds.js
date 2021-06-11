import Head from 'next/head'
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import feedStyles from '../styles/Feed.module.css';
import prisma from '../lib/primsa';
import Link from 'next/link'

function Feeds(props) {
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

                    {props.feeds.length ? (
                        <div className={feedStyles.feeds} id="feeds">
                            <div className="d-flex justify-content-between">
                                <div className={feedStyles.feedHeader}>/ Feeds</div>
                            </div>

                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {props.feeds.map((feed, i) => (
                                    <Link href={{ pathname: 'feedreader', query: { rss: feed.rss } }}>
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
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const feeds = await prisma.feed.findMany();

    return { props: { feeds } }
}

export default Feeds;
