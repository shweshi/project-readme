import Head from 'next/head'
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import pdfStyles from '../styles/Pdf.module.css';
import prisma from '../lib/primsa';
import Link from 'next/link'

function Pdfs(props) {
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

                    {props.pdfs.length ? (
                        <div className={pdfStyles.pdfs} id="pdfs">
                            <div className="d-flex justify-content-between">
                                <div className={pdfStyles.pdfHeader}>/ Books</div>
                            </div>
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {props.pdfs.map((pdf, i) => (
                                    <Link href={{ pathname: 'pdfview', query: { url: pdf.link } }}>
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

                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const pdfs = await prisma.pdf.findMany();

    return { props: { pdfs } }
}

export default Pdfs;
