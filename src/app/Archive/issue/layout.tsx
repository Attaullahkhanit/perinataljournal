import Layout from '@/components/ui/Layout/layout'
import ModuleBox from '@/components/ui/modulebox/modulebox'
import React from 'react'
import ArchiveTree from '@/components/ui/treatview/treatview';
import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Perinatal Journal - issue',
    description: 'Perinatal Journal - issue',
    icons: {
        icon: '/PMF logo yuvarlak trans.png',
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    const articles = [
        {
            id: '20250331001',
            pages: '1-4',
            title: 'Post-immunization evaluation in infants of Hepatitis B carrier mothers',
            authors: 'Sema Tanriverdi, Özge Özalp Berkarda, Esra Arun Özer',
            type: 'Original Article',
            publicationDate: 'December 29, 2024',
            doi: '10.59215/prn.25.0331001'
        },
        {
            id: '20250331002',
            pages: '5-10',
            title: 'Assessment of Xenopsin Related Peptide-1 levels in pregnant women with gestational diabetes mellitus',
            authors: 'Emre Ağdemir, Melda Kuyucu, Mehtap Yücedağ, Kamile Kübra Ağdemir',
            type: 'Original Article',
            publicationDate: 'January 10, 2025',
            doi: '10.59215/prn.25.0331002'
        },
        {
            id: '20250331003',
            pages: '11-17',
            title: 'HOXA1 Expression in preeclampsia: immunohistochemical and bioinformatic analyses',
            authors: 'Zeynep Türe, Ayşenur Sevinç Akdeniz, Gül Ebru Aydeniz Acar, Fırat Aşır, Tuğcan Korak, Serhat Ege',
            type: 'Original Article',
            publicationDate: 'January 14, 2025',
            doi: '10.59215/prn.25.0331003'
        },
        {
            id: '20250331004',
            pages: '18-24',
            title: 'Reducing the rate of permanent obstetric brachial plexus palsy: Impact of a simulation training program in shoulder dystocia after five years of training',
            authors: 'Christian Garrido López, Emma Batllori Badía, Cecilia Villalaín, María Inmaculada Mejía Jiménez, Patricia Barbero, Laura Forcén Acebal',
            type: 'Original Article',
            publicationDate: 'March 18, 2025',
            doi: '10.59215/prn.25.0331004'
        },
        {
            id: '20250331005',
            pages: '25-27',
            title: 'Effect of Oral Supplementation with micronized ferric pyrophosphate in pregnant women to prevent postpartum hemorrhage',
            authors: 'Federica Di Napoli, Luigi Vigilante, Maria Giuseppina Trinchillo, Gennaro Esposito, Maddalena Turco, Elisabetta Gragnano, Dario Colacurci, Gabriele Saccone',
            type: 'Original Article',
            publicationDate: 'March 18, 2025',
            doi: '10.59215/prn.25.0331005'
        },
        {
            id: '20250331006',
            pages: '28-33',
            title: 'Does preoperative tranexamic acid use in placenta previa have a positive effect on the results?',
            authors: 'Ahmet Zeki Nessar, Mürşide Çevikoğlu Kıll, Fikriye Işıl Adıgüzel, Ayhan Coşkun',
            type: 'Original Article',
            publicationDate: 'March 06, 2025',
            doi: '10.59215/prn.25.0331006'
        },
        {
            id: '20250331007',
            pages: '34-39',
            title: 'The impact of assisted reproductive technology on pregnancies with very advanced maternal age',
            authors: 'Gizem Elif Dizdaroğulları, Aslıhan Öztürk',
            type: 'Original Article',
            publicationDate: 'March 12, 2025',
            doi: '10.59215/prn.25.0331007'
        },
        {
            id: '20250331008',
            pages: '40-45',
            title: 'Congenital candida cases in a level-3 neonatal intensive care unit - A 10-year review',
            authors: 'Brandi Newby, Anithadevi Moodley, Jacqueline Clayton, Cherrie Tan-Dy',
            type: 'Case Report',
            publicationDate: 'March 19, 2025',
            doi: '10.59215/prn.25.0331008'
        },
        {
            id: '20250331009',
            pages: '46-49',
            title: 'Complete penoscrotal transposition in the male twin of a dichorionic diamniotic pregnancy from oocyte donation: a case report',
            authors: 'Beatrice Leuzzi, Annasilvia Pertusio, Andrea Garnero, Simona Gerocarni Nappo, Andrea Sciarrone',
            type: 'Case Report',
            publicationDate: 'March 25, 2025',
            doi: '10.59215/prn.25.0331009'
        },
        {
            id: '20250331010',
            pages: '50-56',
            title: 'Sociodemographic and obstetric risk factors for postpartum depression',
            authors: 'Koray Özbay, İsmail Bağlar, Sahra Sultan Kara, Esra Keles, Fatih Şanlıkan',
            type: 'Original Article',
            publicationDate: 'April 02, 2025',
            doi: '10.59215/prn.25.0331010'
        },
        {
            id: '20250331011',
            pages: '57-61',
            title: 'Determination of the relationship between severe preeclampsia and HALP scores',
            authors: 'Fikriye Işıl Adıgüzel, Seray Sırkıntı, Mert Ali Karataş, Sadık Kükrer, Cevdet Adıgüzel, Gülsüm Uysal',
            type: 'Original Article',
            publicationDate: 'April 15, 2025',
            doi: '10.59215/prn.25.0331011'
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
                            <p><strong>Online ISSN</strong> <br className="br" /> 1305-3124</p>
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
                    {children}
                </div>
            </Layout>
        </div>
    )
}