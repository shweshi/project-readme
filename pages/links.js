import Head from 'next/head'
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import linkStyles from '../styles/Link.module.css';
import prisma from '../lib/primsa';
import Link from 'next/link'

function Links(props) {
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

                    {props.links.length ? (
                        <div className={linkStyles.links} id="links">
                            <div className="d-flex justify-content-between">
                                <div className={linkStyles.linkHeader}>/ Links</div>
                            </div>
                            {props.links.map((link, i) => (
                                <a href={link.url} target="_blank" key={i}>
                                    <div className={`card rounded mb-6 ${linkStyles.card}`}>
                                        <div className="row g-0">
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
                                </a>
                            ))}
                        </div>
                    ) : null}

                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const links = await prisma.link.findMany();

    return { props: { links } }
}

export default Links;
