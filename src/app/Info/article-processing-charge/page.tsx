import Layout from "@/components/ui/Layout/layout";
import ModuleBox from "@/components/ui/modulebox/modulebox";
import Link from "next/link";
import React from "react";
import { FaThLarge, FaSearch, FaUserAlt, FaShareSquare, FaChevronRight } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GrLink } from "react-icons/gr";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Perinatal Journal - Article Processing Charge',
    description: 'Perinatal Journal - Article Processing Charge',
    icons: {
        icon: '/PMF logo yuvarlak trans.png',
    },
};
export default function page() {
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
                <div className="w-full h-20 flex">
                    <div className="home-body-text w-[100%] px-3 ">
                        <h1 className="text-[24px] font-bold leading-[40px] text-[#0B5486] not-italic">
                            Article Processing Charge
                        </h1>
                        <div className="br" />
                        <div className="text-[#333333]">
                            <h2 className="text-[14px] font-bold">
                                Perinatal Journal is an open access journal and has no any
                                subscription and publication fee.
                            </h2>
                            <div className="text-[14px] font-normal leading-[20px]">
                                However in order to cover our handling, processing and
                                production expenses, a nominal processing fee called{" "}
                                <span className="font-bold">
                                    Article Processing Charges (APC)
                                </span>{" "}
                                is charged on every accepted submission made to Perinatal
                                Journal by authors just before publication. This fee also
                                accommodates efforts put into tasks such as editing,
                                proofreading, quality check, web maintenance, plagiarism check
                                and much more. APC may vary based on the type of manuscript and
                                the place where it’s being processed.
                                <div className="br" />
                                <div className="br" />
                                But it applies an{" "}
                                <span className="font-bold">
                                    Article Processing Charge (APC)
                                </span>{" "}
                                for only accepted articles. No fees are requested from the
                                authors during submission and evaluation process. All
                                manuscripts must be submitted via Manuscript Manager.
                                <div className="br" />
                                <div className="br" />
                                When you are informed that your article has been accepted for
                                preperation about publication, you have to make payment as soon
                                as possible, otherwise{" "}
                                <span className="font-bold">
                                    will not be appearing on early view page and not published{" "}
                                </span>{" "}
                                which means it is not accepted publication.
                                <div className="br" />
                                <div className="br" />
                                The APCs will be accepted through the link below{" "}
                                <span className="font-bold">
                                    after a notification from the Perinatal Journal which your
                                    maunscript is accepted for publication.
                                </span>{" "}
                                In the next step, the author will be receiving a receipt of
                                their payment. Please be aware that there is no any refund after
                                your payment, even after withdrawal of the manuscript.
                                <div className="br" />
                                <div className="br" />
                                Please note that the Article Processing Charge (APC) will not
                                affect neither the editorial and peer-review process nor the
                                priority of the manuscripts by no means.
                                <div className="br" />
                                <div className="br" />
                                The APC fee is 200 € for a manuscript. Please bear in mind that
                                payment process is processed by the CETUS which gives this
                                services.
                                <div className="br" />
                                <div className="br" />
                                For payment
                                <a
                                    href="https://www.perinataljournal.com/Member/Login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0B5486] text-[14px] font-normal hover:underline"
                                >
                                    &nbsp;
                                    <span className="bg-red-500 text-white">please click on</span>
                                </a>
                                .
                                <div className="br" />
                                <div className="br" />
                                Türkiye için
                                <a
                                    href="https://www.perinataljournal.com/Member/Login"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0B5486] text-[14px] font-normal hover:underline"
                                >
                                    &nbsp;
                                    <span className="bg-red-500 text-white">
                                        lütfen tıklayınız
                                    </span>
                                </a>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
