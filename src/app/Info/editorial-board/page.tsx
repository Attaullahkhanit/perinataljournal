import Layout from "@/components/ui/Layout/layout";
import ModuleBox from "@/components/ui/modulebox/modulebox";
import Link from "next/link";
import React from "react";
import { FaThLarge, FaSearch, FaUserAlt, FaShareSquare, FaChevronRight } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";
import { GrLink } from "react-icons/gr";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Perinatal Journal - Editorial Board',
  description: 'Perinatal Journal - Editorial Board',
  icons: {
    icon: '/PMF logo yuvarlak trans.png',
  },
};
export default function page() {
  const orchidIcon = "/images/orcid.logo.icon.svg";
  const boardMembers = [
    {
      name: "Reuven Achiron",
      department: "Department of Obstetrics & Gynecology, Chaim Sheba Medical Center Tel-Hashomer, Tel-Aviv, Israel"
    },
    {
      name: "Elena Greco",
      department: "Department of Obstetrics & Gynecology, Fetal Medicine Unit, Royal London Hospital, London, UK"
    },
    {
      name: "Ozan Bahtiyar",
      department: "Fetal Care Center, Maternal Fetal Medicine, Obstetrics, Gynecology@Reproductive Sciences, Yale University School of Medicine, New Haven, CT, USA"
    },
    {
      name: "Nelly Jekova",
      department: "Department of Neonatology, Obstetrics & Gynecology, University Hospital, Sofia, Bulgaria"
    },
    {
      name: "Christoph Berg",
      department: "Department of Obstetrics & Gynecology and Fetal Surgery, University of Bonn, Bonn, Germany"
    },
    {
      name: "K. Oliver Kagan",
      department: "Department of Prenatal Medicine, University Women's Hospital, University of Tübingen, Tübingen, Germany"
    },
    {
      name: "Ana Bianchi",
      department: "Department of Fetal Medicine, University of Montevideo, Montevideo, Uruguay"
    },
    {
      name: "Asma Khalil",
      department: "Fetal Medicine Unit, Saint George’s Hospital, London, UK"
    },
    {
      name: "Gurur Biliciler Denktaş",
      department: "Division of Pediatric Cardiology, McGovern Medical School UTHealth, Houston, TX, USA"
    },
    {
      name: "Satoshi Kusuda",
      department: "Department of Pediatrics, Kyorin University, Tokyo, Japan"
    },
    {
      name: "Robert Brawura",
      department: "Department of Obstetrics & Gynecology, Medical University of Warsaw, Warsaw, Poland"
    },
    {
      name: "Ewelina Litwińska",
      department: "Department of Perinatology & Gynaecology, Polish Mother’s Memorial Hospital Research Institute, Lodz, Poland"
    },
    {
      name: "Petya Cahveeva",
      department: "Department of Fetal Medicine, Dr. Shterev Hospital, Sofia, Bulgaria"
    },
    {
      name: "Qiuyan Pei",
      department: "Department of Obstetrics & Gynecology, Peking University People's Hospital, Beijing, China"
    },
    {
      name: "Giuseppe Cali",
      department: "Department of Obstetrics & Gynecology, Azienda Ospedaliera Villa Sofia Cervello, Palermo, Italy"
    },
    {
      name: "Guiseppe Rizzo",
      department: "Division of Maternal-Fetal Medicine, Ospedale Cristo Re Roma, University of Roma Tor Vergata, Rome, Italy"
    },
    {
      name: "Frank A. Chervenak",
      department: "Department of Obstetrics & Gynecology, Lenox Hill Hospital and Zucker School of Medicine at Hofstra/Northwell, New York, NY, USA"
    },
    {
      name: "Ilan Timor-Tritsch",
      department: "Division of Maternal-Fetal Medicine, Department of Obstetrics & Gynecology, New York University SOM, New York, NY, USA"
    },
    {
      name: "Ana Daneva",
      department: "University Clinic of Obstetrics & Gynecology, Medical Faculty, Skopje, North Macedonia"
    },
    {
      name: "Şifa Turan",
      department: "Department of Obstetrics, Gynecology & Reproductive Sciences, University of Maryland Medical Center, Baltimore, MD, USA"
    },
    {
      name: "Jan Deprest",
      department: "Department of Obstetrics & Gynecology, UZ Leuven, Leuven, Belgium"
    },
    {
      name: "Simcha Yagel",
      department: "Department of Obstetrics & Gynecology, Hadassah-Hebrew University Medical Center, Jerusalem, Israel"
    },
    {
      name: "Alaa Ebrashy",
      department: "Fetal Medicine Unit, Department of Obstetrics & Gynecology, Cairo University, Cairo, Egypt"
    },
    {
      name: "Jun Yoshimatsu",
      department: "Department of Perinatology & Gynecology, National Cerebral and Cardiovascular Center, Osaka, Japan"
    },
    {
      name: "Gökhan Göynümer",
      department: "Department of Obstetrics & Gynecology, Faculty of Medicine, Duzce University, Düzce, Turkey"
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
        <div className="w-full h-20 flex">
          <div className="home-body-text w-[100%] p-3 ">
            <div className="max-w-4xl mx-auto px-4 py-8">
              <h1 className="text-[24px] font-bold mb-6">Editorial Board</h1>

              <ul className="list-disc ml-6 text-blue-700 mb-8">
                <li>
                  <a href="#editors-in-chief">Editors-in-Chief</a>
                </li>
                <li>
                  <a href="#editors">Editors</a>
                </li>
                <li>
                  <a href="#managing-editor">Managing Editor</a>
                </li>
                <li>
                  <a href="#statistics-editor">Statistics Editor</a>
                </li>
                <li>
                  <a href="#editorial-board">Editorial Board</a>
                </li>
              </ul>

              {/* Editors-in-Chief */}
              <section id="editors-in-chief" className="mb-8">
                <h2 className="text-[14px] font-semibold underline mb-4">
                  Editors-in-Chief
                </h2>

                <div className="mb-4">
                  <div className="inline-flex items-center">
                    <strong className="text-blue-700">Cihat Şen</strong>, MD{" "}
                    <Link
                      href="https://orcid.org/0000-0002-2822-6840"
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
                  </div>
                  <div>
                    President, Perinatal Medicine Foundation &amp; World
                    Association of Perinatal Medicine
                  </div>
                  <div>
                    Perinatal Medicine Unit, Memorial Bahçelievler Hospital,
                    Istanbul, Türkiye
                  </div>
                </div>

                <div>
                  <strong className="text-blue-700">Nicola Volpe</strong>, MD,
                  PhD{" "}
                  <Link
                    href="https://orcid.org/0000-0003-4209-5602"
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
                  <div>
                    Obstetrics &amp; Gynecology Unit, Department of Medicine and
                    Surgery, University of Parma
                  </div>
                  <div>
                    Azienda Ospedaliero-Universitaria Ospedale Maggiore di
                    Parma, Parma, Italy
                  </div>
                </div>
              </section>

              {/* Editors */}
              <section id="editors" className="mb-8">
                <h2 className="text-[14px] font-semibold underline mb-4">
                  Editors
                </h2>

                <div className="mb-4">
                  <strong className="text-blue-700">Cecilia Villalain</strong>,
                  MD, PhD{" "}
                  <Link
                    href="https://orcid.org/0000-0002-9456-4100"
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
                  <div>
                    Department of Obstetrics &amp; Gynecology, 12 de Octubre
                    University Hospital, Madrid, Spain
                  </div>
                </div>

                <div className="mb-4">
                  <strong className="text-blue-700">Daniel Rolnik</strong>, MD,
                  PhD{" "}
                  <Link
                    href="https://orcid.org/0000-0002-2263-3592"
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
                  <div>
                    Department of Obstetrics &amp; Gynaecology, Monash
                    University, Melbourne, Australia
                  </div>
                </div>

                <div>
                  <strong className="text-blue-700">Mar M. Gil</strong>, MD{" "}
                  <Link
                    href="https://orcid.org/0000-0002-9993-5249"
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
                  <div>
                    Department of Obstetrics &amp; Gynecology, Hospital
                    Universitario de Torrejón, Madrid, Spain; School of Health
                    Sciences, Universidad Francisco de Vitoria, Madrid, Spain
                  </div>
                </div>
              </section>

              {/* Managing Editor */}
              <section id="managing-editor" className="mb-8">
                <h2 className="text-[14px] font-semibold underline mb-4">
                  Managing Editor
                </h2>
                <div>
                  <strong className="text-blue-700">Murat Yayla</strong>, MD
                  <div>
                    Perinatal Medicine Unit, Acıbadem International Hospital,
                    Istanbul, Türkiye
                  </div>
                </div>
              </section>

              {/* Statistics Editor */}
              <section id="statistics-editor" className="mb-8">
                <h2 className="text-[14px] font-semibold underline mb-4">
                  Statistics Editor
                </h2>
                <div>
                  <strong className="text-blue-700">Resul Arısoy</strong>, MD{" "}
                  <Link
                    href="https://orcid.org/0000-0003-1359-1674"
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
                  <div>
                    Perinatal Medicine Unit, Memorial Ataşehir Hospital,
                    Istanbul, Türkiye
                  </div>
                </div>
              </section>

              {/* Editorial Board Full */}
              <div className="pr-50" id="editorial-board">
                <h2 className="text-[14px] font-semibold underline mb-4">
                  Editorial Board
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
                  {boardMembers.map((member, index) => (
                    <div key={index} className="pt-5 pr-7">
                      <h2 className="text-[rgb(11,84,134)] font-bold text-[14px]">
                        {member.name}
                      </h2>
                      <p className="text-[rgb(11,84,134)] font-normal text-[14px] mt-1">
                        {member.department}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
