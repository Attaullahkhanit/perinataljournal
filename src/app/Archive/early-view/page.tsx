// import {  } from 'next/navigation';
import Layout from '@/components/ui/Layout/layout'
import ModuleBox from '@/components/ui/modulebox/modulebox'
import React from 'react'
import ArchiveTree from '@/components/ui/treatview/treatview';
import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Perinatal Journal - Early View',
    description: 'Perinatal Journal - Early View',
    icons: {
        icon: '/PMF logo yuvarlak trans.png',
    },
};
const page = ({ id }: any) => {

    const articles = [
        {
            id: '20250332001',
            title: 'Investigation of M3 Muscarinic Acetylcholine Receptor Expression in Placentas of Smoking Women',
            authors: 'Esma Yıldırım, Gül Ebru Aydeniz Acar, Zeynep Türe, Ayşegül Aşır, Fırat Aşır, Tuğcan Korak, Serhat Ege',
            type: 'Original Article',
            publicationDate: 'May 05, 2025',
            doi: '10.59215/prn.25.0332001'
        },
        {
            id: '20250332002',
            title: 'Maternal Serum Surfactant Protein-D (SP-D) levels in pregnancies complicated with mild and severe preeclampsia: A case control study',
            authors: 'Mehmet Mete Kirlangic, Erdem Sahin, Mefkure Eraslan Sahin, Serhan Kutuk, Merve Vural Yalman, Esra Akdemir',
            type: 'Original Article',
            publicationDate: 'May 05, 2025',
            doi: '10.59215/prn.25.0332002'
        },
        {
            id: '20250332003',
            title: 'Determination of systemic inflammatory markers and determination of possible risk factors in post-term pregnancies',
            authors: 'Özgün AKBAŞ, Mücahit Furkan BALCI, Arda Batuhan KARADUMAN, Ozan ODABAŞ, Azra Arıcı YURTKUL, Mehmet Ferdi KINCI, Yaşam Kemal AKPAK',
            type: 'Original Article',
            publicationDate: 'May 07, 2025',
            doi: '10.59215/prn.25.0332003'
        },
        {
            id: '20250332004',
            title: 'Effect of amniocentesis on feto-placental hemodynamics and fetal cardiac function: A comprehensive Doppler study',
            authors: 'Sevim Tuncer Can, Hakan Golbasi, Burak Bayraktar, Ceren Saglam, Raziye Torun, Zubeyde Emiralioglu Cakir, Ilayda Gercik, Ilknur Gumus Toka, Atalay Ekin',
            type: 'Original Article',
            publicationDate: 'May 14, 2025',
            doi: '10.59215/prn.25.0332004'
        },
        {
            id: '20250332005',
            title: 'Pruritic urticarial papules and plaques in pregnancy following the second in vitro fertilization cycle: A case report',
            authors: 'Simge Berrak Beyoglu Oruc, Deniz Ghasemi Mohammadrezaloo, Nur Dokuzeylül Güngör',
            type: 'Case Report',
            publicationDate: 'May 15, 2025',
            doi: '10.59215/prn.25.0332005'
        }
    ];


    const FileTextIcon = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#28a745" // Green color
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-file-text"
        >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
        </svg>
    );

    return (
        <div>
            <Layout
                sidebar={
                    <div>
                        <div >
                            <ArchiveTree />
                        </div>

                        <ModuleBox
                            title="Journal Information"
                            icon={<i className="icon-info-sign"></i>}
                        >
                            <p><strong>Online ISSN</strong> <br className="br" />1305-3124</p>
                            <p><strong>Established</strong> <br className="br" />1993</p>
                            <p><strong>Editors-in-Chief</strong> <br className="br" /> Cihat Şen,  Nicola Volpe</p>
                            <p><strong>Editors</strong> <br className="br" />Cecilia Villalain, Daniel Rolnik, M. Mar Gil</p>
                            <p><strong>Managing Editors</strong> <br className="br" />Murat Yayla</p>
                            <p><strong>Statistics Editor</strong> <br className="br" />Resul Arısoy</p>
                            <div className="text-center" style={{ margin: '15px 0' }}>
                                <img src="/open-access.png" alt="Open Access" />
                                <img src="/doaj.jpg" alt="DOAJ" />
                                <img src="/google-scholar.jpg" alt="Google Scholar" />
                                <img src="/ebsco.jpg" alt="EBSCO" />
                                <img src="/ulakbim.jpg" alt="Ulakbim" />
                                <img src="/scopus-logo.jpg" alt="Scopus" />
                            </div>
                        </ModuleBox>
                    </div>
                }
            >
                <div className="Issue-Container">
                    <IntroductionCardSecond
                        title="Early View"

                        description="Perinatal Journal is an international, online open access, peer-reviewed scientific journal (e-ISSN: 1305-3124). The journal is the official publication of Perinatal Medicine Foundation. It is published three times a year in April, August and December. The publication language of the journal is English."
                        imageUrl="/images/perinatal-journal-small-en-US.jpg"
                    />
                    <h1 className="issue-table-of-contents
                     bg-[#efefef] text-[#3d3d3d] text-[14pt] py-3 px-3 font-bold mt-2">Table of Contents</h1>
                    <ul className="issue-article-list">
                        {articles.map((article) => (
                            <li key={article.id} className='mt-6 list-none'>
                                <h1 className="article-item-title flex">
                                    <FileTextIcon />{'  '}
                                    <Link className='pl-1 font-bold' href={`/Archive/Article/${article.id}`} title={article.title}>
                                        {article.title}
                                    </Link>

                                </h1>
                                <div className="article-item-authors">{article.authors}</div>
                                <div className="article-item-serial">
                                    <span style={{
                                        marginRight: '5px',
                                        border: '1px solid #377fbf',
                                        borderRadius: '5px',
                                        padding: '2px 5px',
                                        fontSize: '11px',
                                        color: '#377fbf',
                                        backgroundColor: '#f1f2f3'
                                    }}>
                                        <strong>{article.type}</strong>
                                    </span>
                                    <span >
                                        <strong>Online publication date:</strong> {article.publicationDate}
                                    </span>
                                    <span className='pl-2'>
                                        <strong>DOI:</strong> {article.doi}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Layout>
        </div>
    );
};

export default page;