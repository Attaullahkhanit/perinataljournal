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
  title: 'Perinatal Journal -  About Perinatal Journal',
  description: 'Perinatal Journal - About Perinatal Journal',
  icons: {
    icon: '/PMF logo yuvarlak trans.png',
  },
};
export default function page() {
  return (
    <>
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
        <div className="w-full flex">
          <div className="home-body-text w-[100%] px-3 ">
            <h1 className="text-[24px] font-bold leading-[40px] text-[#0B5486] not-italic">
              About Perinatal Journal
            </h1>
            <div className="br" />
            <ul>
              <li><a href="#description">Description</a></li>
              <li><a href="#audience">Audience</a></li>
              <li><a href="#abstracted-indexed">Abstracted & Indexed</a></li>
              <li><a href="#editorial-board">Editorial Board</a></li>
              <li><a href="#publication-history">Publication History</a></li>
              <li><a href="#journal-abbreviation">Journal Abbreviation</a></li>
              <li><a href="#supplements">Supplements</a></li>
              <li><a href="#journal-sponsorship">Journal Sponsorship</a></li>
              <li><a href="#impressum">Impressum</a></li>
              <li><a href="#correspondence">Correspondence</a></li>
            </ul>
            <div className="br" />

            <div id="description">
              <strong>Description</strong>
              <div className="br" />
              <p>
                Perinatal Journal is an online open access, peer-reviewed scientific journal (e-ISSN: 1305-3124). The journal is the official publication of{" "}
                <a href="http://www.perinatal.org.tr" target="_blank">Perinatal Medicine Foundation</a>. It is published three times a year in April, August and December. The publication language of the journal is English.
              </p>
            </div>

            <div className="br" />
            <div id="audience">
              <strong>Audience</strong>
              <div className="br" />
              <p>
                Perinatal Journal can be read by perinatal medicine experts, fetal medicine experts, obstetricians, gynecologists, radiologists, pediatricians, sonographers, midwives, radiographers, and scientific members of other related areas...
              </p>
            </div>

            <div className="br" />
            <div id="abstracted-indexed">
              <strong>Abstracted & Indexed</strong>
              <div className="br" />
              <p>
                Perinatal Journal is currently indexed in DOAJ, Google Scholar, EBSCOhost, TÜBİTAK ULAKBİM TR Index, SCOPUS, etc.
              </p>
            </div>

            <div className="br" />
            <div id="editorial-board">
              <strong>Editorial Board</strong>
              <div className="br" />
              <p>
                The details of Editorial Team and Advisory Board members are available on{" "}
                <a href="https://perinataljournal.com/Info/editorial-board">Editorial Board page</a>.
              </p>
            </div>

            <div className="br" />
            <div id="publication-history">
              <strong>Publication History</strong>
              <div className="br" />
              <p>
                Perinatal Journal (2005-present)<br />
                Perinatoloji Dergisi (1993-2004)
              </p>
            </div>

            <div className="br" />
            <div id="journal-abbreviation">
              <strong>Journal Abbreviation</strong>
              <div className="br" />
              <p>Perinat J</p>
            </div>

            <div className="br" />
            <div id="supplements">
              <strong>Supplements</strong>
              <div className="br" />
              <p>
                Perinatal Journal can publish peer-reviewed supplementary issues to the main volume...
              </p>
            </div>

            <div className="br" />
            <div id="journal-sponsorship">
              <strong>Journal Sponsorship</strong>
              <div className="br" />
              <p>
                Perinatal Journal is sponsored by Perinatal Medicine Foundation, a non-profit, scientific institution.
              </p>
            </div>

            <div className="br" />
            <div id="impressum">
              <strong>Impressum</strong>
              <div className="br" />
              <p>
                Ownership & Publisher: Perinatal Medicine Foundation<br />
                Managing Editor: Murat Yayla<br />
                Administrative Office: Cumhuriyet Cad. 30/5 Elmadağ, 34367 Taksim, Istanbul, Turkey<br />
                Advisor for Scientific Publishing: Akın Usta<br />
                Publishing Coordinator: Rumeysa Uslu<br />
                Language Editor: Fikret Yeşilyurt<br />
                Technical Staff: Ali Koz<br />
                Publishing service provided by <a href="mailto:info@perinatalmedicine.org?subject=Perinatal%20Journal">CETUS</a>
              </p>
            </div>

            <div className="br" />
            <div id="correspondence">
              <strong>Correspondence</strong>
              <div className="br" />
              <p>
                Perinatal Journal, Perinatal Medicine Foundation<br />
                Ataköy 10.Kısım, Çobançeşme E5 Yan Yol No:6 Route A-70, Bakırköy, Istanbul, Turkey<br />
                Phone: +90 542 442 87 36
              </p>
              <a href="mailto:info@perinataljournal.com?subject=Perinatal%20Journal">
                <strong>Send e-mail</strong>
              </a>
            </div>
          </div>

        </div>
      </Layout>
    </>
  );
}
