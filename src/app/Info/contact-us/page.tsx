import Layout from '@/components/ui/Layout/layout'
import ModuleBox from '@/components/ui/modulebox/modulebox'
import Link from 'next/link'
import React from 'react'
import { FaThLarge, FaSearch, FaUserAlt, FaShareSquare, FaChevronRight } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GrLink } from "react-icons/gr";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Perinatal Journal - Contact Us',
    description: 'Perinatal Journal - Contact Us',
    icons: {
        icon: '/PMF logo yuvarlak trans.png',
    },
};

export default function page() {
    const editorialPolicies = [
        {
            id: "Mailing Address",
            title: "Mailing Address",
            content:
                (
                    <>
                        Perinatal Journal, Perinatal Medicine Foundation
                        <div className="br" />
                        Phone: +90 542 442 87 36
                        <div className="br" />
                        <a
                            href="mailto:office@perinatalmedicine.org"
                            className="text-[#0B5486] text-[14px] font-normal hover:underline"
                        >
                            Send e-mail
                        </a>
                    </>
                )
        },
        {
            id: "Principal Contact",
            title: "Principal Contact",
            content: (
                <>
                    Prof. Dr. Cihat Şen, Editor- in-Chief
                    <div className="br" />
                    <a
                        href="mailto:office@perinatalmedicine.org"
                        className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                        Send e-mail
                    </a>
                </>
            ),
        },
        {
            id: "Publisher",
            title: "Publisher",
            content: (
                <>
                    Perinatal Medicine Foundation
                    <div className="br" />
                    Phone: +90 542 442 87 36
                    <div className="br" />
                    office@perinatalmedicine.org
                    <div className="br" />
                    <a
                        href="mailto:office@perinatalmedicine.org"
                        className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                        Send e-mail
                    </a>
                </>
            ),
        },
        {
            id: "Advertising Contact",
            title: "Advertising Contact",
            content: (
                <>
                    Yasemin Guzel (Mrs.)
                    <div className="br" />
                    Perinatal Medicine Foundation
                    <div className="br" />
                    Phone: +90 542 442 87 36
                    <div className="br" />
                    <a
                        href="mailto:office@perinatalmedicine.org"
                        className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                        Send e-mail
                    </a>
                </>
            ),
        },
        {
            id: "Publication Service",
            title: "Publication Service",
            content: (
                <>
                    Cetus Publishing
                    <div className="br" />
                    info@perinatalmedicine.org
                    <div className="br" />
                    <a
                        href="mailto:info@perinatalmedicine.org"
                        className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                        Send e-mail
                    </a>
                </>
            ),
        }
    ];
    return (
        <div>
            <Layout
                sidebar={
                    <div>
                        <ModuleBox >
                            {[
                                "About Perinatal Journal",
                                "Editorial Board",
                                "Author Guidelines",
                                "Article Processing Charge",
                                "Editorial Policies",
                                "Publication Ethics",
                                "Contact Us",
                            ].map((item, idx, arr) => (
                                <Link
                                    key={idx}
                                    href={"/Info/" + item.replaceAll(" ", "-").toLowerCase()}
                                    className={`block px-2 py-1 hover:bg-gray-100 flex items-start text-[#777777] text-sm font-normal leading-6 ${idx !== arr.length - 1 ? "border-b border-gray-200" : ""
                                        }`}
                                >
                                    <span className="mr-2 text-[#777777] text-base">
                                        <FaChevronRight />
                                    </span>
                                    {item}
                                </Link>
                            ))}
                        </ModuleBox>

                        <ModuleBox title="Archive" icon={<FaThLarge />}>
                            <ul>
                                <li><Link href="/Archive/issue/288">Current Issue</Link></li>
                                <li><Link href="/Archive/early-view">Early View</Link></li>
                                <li><Link href="/Archive/issue">All Issues</Link></li>
                            </ul>
                        </ModuleBox>
                        <ModuleBox title="Submission" icon={<FaShareFromSquare />}>
                            <ul>
                                <li>
                                    <a href="/Info/about-perinatal-journal">
                                        About Perinatal Journal
                                    </a>
                                </li>
                                <li>
                                    <a href="/Info/author-guidelines">Author Guidelines</a>
                                </li>
                            </ul>
                            <div className="mt-4">
                                <i className="mt-5">Please ensure that all correspondence regarding articles is submitted as email attachments to info@perinataljournal.com</i>
                            </div>
                        </ModuleBox>
                        <ModuleBox
                            title="Journal Information"
                            icon={<RiInformation2Fill />}
                        >
                            <p>
                                <strong>Online ISSN</strong>
                                <div className="br" />
                                1305-3124
                            </p>
                            <p>
                                <strong>Established</strong>
                                <div className="br" />
                                1993
                            </p>
                            <p>
                                <strong>Editors-in-Chief</strong>
                                <div className="br" />
                                Cihat Şen,  Nicola Volpe
                            </p>
                            <p>
                                <strong>Editors</strong>
                                <div className="br" />
                                Cecilia Villalain, Daniel Rolnik, M. Mar Gil
                            </p>
                            <p>
                                <strong>Managing Editors</strong>
                                <div className="br" />
                                Murat Yayla
                            </p>
                            <p>
                                <strong>Statistics Editor</strong>
                                <div className="br" />
                                Resul Arısoy
                            </p>
                            <div className="text-center" style={{ margin: "15px 0" }}>
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
                <div className='w-full h-20 flex'>
                    <div className="home-body-text w-[100%] px-3 ">
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-[24px] font-bold leading-[40px] text-[#0B5486] not-italic">
                                Publication Ethics
                            </h1>
                            <ul className="list-disc list-inside mb-10 space-y-2">
                                {editorialPolicies.map((policy) => (
                                    <li key={policy.id}>
                                        <a
                                            href={`#${policy.id}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {policy.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="">
                                {editorialPolicies.map((policy) => (
                                    <section
                                        key={policy.id}
                                        id={policy.id}
                                        className="scroll-mt-24 mt-7"
                                    >
                                        <h2 className="text-[14px] pb-2 font-bold leading-[20px] text-[#333333]">
                                            {policy.title}
                                        </h2>
                                        <p className="text-[14px] font-normal leading-[20px] text-[#333333]">
                                            {policy.content}
                                        </p>
                                        <div className="br" />
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

        </div>
    )
}



