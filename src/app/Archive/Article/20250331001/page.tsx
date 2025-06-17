"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdDownloadForOffline } from "react-icons/md";

export default function ArticleTabs() {
    const [activeTab, setActiveTab] = useState("info");
    const orchidIcon = "/images/orcid.logo.icon.svg";

    const tabs = [
        { id: "info", label: "Information" },
        { id: "abstract", label: "Abstract" },
        { id: "fulltext", label: "Full Text" },
        { id: "references", label: "References" },
        { id: "appendix", label: "Appendix" },
    ];

    return (
        <div className="w-full h-20 flex">
            <div className="home-body-text w-[73%] px-3 ">
                <div className="  mx-auto px-4 py-1">
                    <div className="journal-Container"></div>
                    <h1 className="text-[29px] font-bold leading-[32px] text-[#0B5486] article-info-title">
                        Post-immunization evaluation in infants of Hepatitis B carrier
                        mothers
                    </h1>
                </div>

                <div className="mb-6 text-sm flex gap-1">
                    <div className="flex items-center pl-6 space-x-2">
                        <Link
                            href="https://orcid.org/0000-0002-5681-3647"
                            target="_blank"
                        >
                            <Image
                                src={orchidIcon}
                                alt="ORCID"
                                width={16}
                                height={16}
                                className="inline ml-1"
                            />
                        </Link>
                        <Link
                            href="/Archive/Search/?s=InAuthors&q=Sema Tanriverdi"
                            className="underline text-blue-600 relative top-[1.5px]"
                        >
                            Sema Tanriverdi,
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                        <Link
                            href="https://orcid.org/0000-0002-8503-7915"
                            target="_blank"
                        >
                            <Image
                                src={orchidIcon}
                                alt="ORCID"
                                width={16}
                                height={16}
                                className="inline ml-1"
                            />
                        </Link>
                        <Link
                            href="/Archive/Search/?s=InAuthors&q=Özge Özalp Berkarda"
                            className="underline text-blue-600 relative top-[1.5px] "
                        >
                            Özge Özalp Berkarda,
                        </Link>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                        <Link
                            href="https://orcid.org/0000-0003-2634-7136"
                            target="_blank"
                        >
                            <Image
                                src={orchidIcon}
                                alt="ORCID"
                                width={16}
                                height={16}
                                className="inline ml-1"
                            />
                        </Link>
                        <Link
                            href="/Archive/Search/?s=InAuthors&q=Esra Arun Özer"
                            className="underline text-blue-600 relative top-[1.5px]"
                        >
                            Esra Arun Özer
                        </Link>
                    </div>
                </div>

                {/* Tabs */}
                <ul className="flex border-b border-gray-300 mb-4">
                    {tabs.map((tab) => (
                        <li key={tab.id} className=" list-none">
                            <button
                                onClick={() => setActiveTab(tab.id)}
                                className={`py-2 px-4 font-normal text-[14px] leading-[20px] rounded-t-md
                                ${activeTab === tab.id
                                        ? "text-[rgb(85,85,85)] border border-b-0 border-gray-300 bg-white mb-[-0.5px]"
                                        : "text-[rgb(0,140,199)] border-none"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>
                {/* Tab Content */}
                <div className="text-gray-800 ml-6 text-sm leading-relaxed">
                    {activeTab === "info" && (
                        <div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">Article info</h2>
                                <p className="text-[14px] font-normal leading-[20px]">
                                    Assessment of Xenopsin Related Peptide-1 levels in pregnant
                                    women with gestational diabetes mellitus. Perinatal Journal
                                    2025;33(1):5-10 DOI: 10.59215/prn.25.0331002
                                    <br className="br" />
                                    <br className="br" />
                                </p>
                            </div>
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <h2 className="text-[14px] font-bold">
                                    Author(s) Information
                                </h2>
                                <div className="text-[14px] font-normal leading-[4px]">
                                    <Link
                                        href="https://orcid.org/0000-0002-5681-3647"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline pb-[0.5px] ml-1"
                                        />
                                    </Link>
                                    &nbsp;Sema Tanriverdi,<sup>1</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Study Designer, Study Supervisor, Results
                                        Interpreter, Final Reviewer)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0002-8503-7915"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Özge Özalp Berkarda,<sup>2</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Data Analyst, Literature
                                        Researcher)
                                    </span>
                                    <div className="br" />
                                    <Link
                                        href="https://orcid.org/0000-0002-8503-7915"
                                        target="_blank"
                                    >
                                        <Image
                                            src={orchidIcon}
                                            alt="ORCID"
                                            width={16}
                                            height={16}
                                            className="inline ml-1"
                                        />
                                    </Link>
                                    &nbsp;Esra Arun Özer<sup>3</sup>
                                    <span className="text-[11px] leading-[20px] font-normal not-italic text-[#2080C2]">
                                        &nbsp;(Data Collector, Literature Researcher, Final
                                        Reviewer)
                                    </span>
                                    <div className="br" />
                                </div>
                            </div>
                            <div className="br" />
                            <div className="br" />
                            <div id="manuscript-evaluation" className="text-[#333333]">
                                <div className="text-[14px] font-normal leading-[20px]">
                                    1. Manisa Celal Bayar University, Medical School Department
                                    of Pediatrics, Division of Neonatology, Manisa, Türkiye{" "}
                                    <div className="br" />
                                    2. Manisa Celal Bayar University Medical School Department
                                    of Pediatrics Manisa Turkiye
                                    <div className="br" />
                                    3. Izmir Tinaztepe University Medical School Izmir Turkiye
                                    <div className="br" />
                                </div>
                            </div>
                            <h3 className="mt-4 font-semibold">Correspondence</h3>
                            <p>
                                Sema Tanriverdi, Manisa Celal Bayar University, Department of
                                Pediatrics, Division of Neonatology, Manisa, Türkiye{" "}
                                <div className="br" />
                                <a
                                    href="mailto:drsemarala@yahoo.com"
                                    className="text-blue-600 underline"
                                >
                                    drsemarala@yahoo.com
                                </a>
                            </p>

                            <h3 className="mt-4 font-semibold">Publication History</h3>
                            <ul className="list-disc pl-5">
                                <li>Received: October 04, 2024</li>
                                <li>Accepted: December 19, 2024</li>
                                <li>Early View: December 29, 2024</li>
                                <li>Published: April 28, 2025</li>
                            </ul>

                            <h3 className="mt-4 font-semibold">Conflicts of Interest</h3>
                            <p>No conflicts declared.</p>
                        </div>
                    )}

                    {activeTab === "abstract" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Abstract</h2>
                            <p>
                                Although postnatal hepatitis B vaccine and hepatitis B
                                immunoglobulin are administered to infants of hepatitis B
                                carrier mothers...
                            </p>
                            {/* Add full abstract content here as needed */}
                        </div>
                    )}

                    {activeTab === "fulltext" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Full Text</h2>
                            <p>[Insert full text content here]</p>
                        </div>
                    )}

                    {activeTab === "references" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">References</h2>
                            <p>[Insert references here with proper citation links]</p>
                        </div>
                    )}

                    {activeTab === "appendix" && (
                        <div>
                            <h2 className="font-semibold text-lg mb-2">Appendix</h2>

                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>File/Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="pull-center">
                                            <i className="icon-file icon-2x"></i>
                                        </td>
                                        <td>
                                            <strong>
                                                <a
                                                    href="/Files/Archive/en-US/Attachments/14369/PF-2024-10-07-120403.docx"
                                                    target="_blank"
                                                >
                                                    Table 1 <i className="icon-share"></i>
                                                </a>
                                            </strong>{" "}
                                            <div className="br" />
                                            Demographic Characteristics of the Study Group
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            <div className="home-body-right-sidebar w-[25%]">
                <div className="border border-gray-300 rounded-md bg-white shadow-sm text-sm text-gray-800 w-full max-w-xs flex flex-col overflow-hidden">
                    {/* Sections with dividers */}
                    <div className="divide-y divide-gray-300">
                        {/* Article's Type */}
                        <div className="p-3">
                            <p className="font-semibold">Article's type</p>
                            <p>Original Article</p>
                        </div>

                        {/* Pages */}
                        <div className="p-3">
                            <p className="font-semibold">Pages</p>
                            <p>1–4</p>
                        </div>

                        {/* Article Info */}
                        <div className="p-3 space-y-1">
                            <p className="font-semibold">Article info</p>
                            <p>
                                <span className="font-semibold">Online publication date:</span>{" "}
                                December 29, 2024
                            </p>
                            <p>Perinatal Journal 2025; 33 (1)</p>
                        </div>

                        {/* DOI */}
                        <div className="p-3">
                            <p className="font-semibold">DOI</p>
                            <a
                                href="https://dx.doi.org/10.59215/prn.25.0331001"
                                className="text-sky-600 hover:underline"
                            >
                                10.59215/prn.25.0331001
                            </a>
                        </div>
                    </div>

                    {/* Download as PDF Button */}
                    <div className="p-3 border-t border-gray-300">
                        <a
                            download={true}
                            href="/content/pdf/Article1.pdf"
                            type="button"
                            className="w-full !bg-[#5EBD5E] hover:!bg-green-600 !text-white font-medium py-2 px-4 rounded flex items-center justify-center space-x-2"
                        >
                            <MdDownloadForOffline className="text-white text-lg" />
                            <span>Download as PDF</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
