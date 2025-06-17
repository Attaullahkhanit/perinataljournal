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
  title: 'Perinatal Journal - Author Guidelines',
  description: 'Perinatal Journal - Author Guidelines',
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
          <div className="home-body-text w-[100%] p-3">
            <div>
              <h2 className="text-[24px] font-bold text-[#0B5486] mb-2">
                Author Guidelines
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                {[
                  "Coverage",
                  "Manuscript Evaluation",
                  "Ethical Issues",
                  "Manuscript Preparation",
                  "Authorship and Length of Texts",
                  "Sections in the Manuscripts",
                  "Submission",
                  "Open Data Policy",
                  "Open Access Policy & Copyright",
                  "Privacy Statement",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                      className="text-[#0B5486] text-[14px] font-normal hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="br" />

            <div id="coverage" className="text-[#333333]">
              <h2 className="text-[14px] font-bold">Coverage</h2>
              <p className="text-[14px] font-normal leading-[20px]">
                The manuscripts should be prepared for one of the following
                article categories which are peer-reviewed:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li className="text-[14px] font-normal">Original Article</li>
                <li className="text-[14px] font-normal">Case Report</li>
                <li className="text-[14px] font-normal">Review</li>
                <li className="text-[14px] font-normal">Technical Note</li>
                <li className="text-[14px] font-normal">Letter to the Editor</li>
              </ul>
            </div>

            <div className="br" />

            <div className="text-[#333333]">
              <p className="text-[14px] font-normal leading-[20px]">
                In addition, the journal includes article categories which do
                not require a peer review process but are prepared by the
                Editorial Board or consist of invited articles, titled as:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li className="text-[14px] font-normal">Editorial</li>
                <li className="text-[14px] font-normal">Opinion</li>
                <li className="text-[14px] font-normal">Report</li>
                <li className="text-[14px] font-normal">Abstracts</li>
                <li className="text-[14px] font-normal">Announcements</li>
                <li className="text-[14px] font-normal">Erratum</li>
                <li className="text-[14px] font-normal">Clinical Guidelines</li>
              </ul>
            </div>

            <div className="br" />

            <div id="manuscript-evaluation" className="text-[#333333]">
              <h2 className="text-[14px] font-bold">Manuscript Evaluation</h2>
              <div className="text-[14px] font-normal leading-[20px]">
                All submissions to the Perinatal Journal must be original,
                unpublished, and not under the review of any other publication.
                This is recorded by the system automatically with the IP number,
                the date and time of submission. On behalf of all authors the
                corresponding author should state that all authors are
                responsible for the manuscripts. The name, date, and place of
                the relevant meeting should be stated if the submission is a
                work that was previously presented in a scientific meeting.
                <div className="br" />
                <div className="br" />
                All manuscripts that are submitted to the Perinatal Journal are
                first subjected to technical evaluation in terms of conformance
                to the journal's manuscript rules and plagiarism at the
                preliminary evaluation. Following this initial evaluation,
                manuscripts that are within the scope of the journal undergo
                double-blind peer review. For more detailed information about
                the Editorial Policy for peer review process of the journal
                please
                <a
                  href="https://perinataljournal.com/Info/editorial-policies#peer-review-process"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;click here
                </a>
              </div>
            </div>

            <div className="br" />

            <div id="ethical-issues" className="text-[#333333]">
              <h2 className="text-[14px] font-bold">Ethical Issues</h2>
              <div className="text-[14px] font-normal leading-[20px]">
                All manuscripts presenting data obtained from studies involving
                human subjects must include a statement that the written
                informed consent of the participants was obtained and that the
                study was approved by an institutional ethics board or an
                equivalent body. This institutional approval should be submitted
                with the manuscript. Authors of case reports must submit the
                written informed consent of the subject(s) of the report or of
                the patient's legal representatives for the publication of the
                manuscript. All studies should be carried out in accordance with
                the World Medical Association Declaration of Helsinki, covering
                the latest revision date. Patient confidentiality must be
                protected according to the universally accepted guidelines and
                rules.
                <div className="br" />
                <div className="br" />
                Manuscripts reporting the results of experimental studies on
                animals must include a statement that the study protocol was
                approved by the animal ethics committee of the institution and
                that the study was conducted in accordance with the
                internationally accepted guidelines, including the Universal
                Declaration of Animal Rights, European Convention for the
                Protection of Vertebrate Animals Used for Experimental and Other
                Scientific Purposes, Principles of Laboratory Animal Science,
                and the Handbook for the Care and Utilization of Laboratory
                Animals.
                <div className="br" />
                <div className="br" />
                The authors are strongly requested to send the approval of the
                ethics committee together with the manuscript. In addition,
                manuscripts on human and animal studies should describe
                procedures indicating the steps taken to eliminate pain and
                suffering.
                <div className="br" />
                <div className="br" />
                The authors should also disclose all issues concerning financial
                relationship, conflicts of interest, and competing interest that
                may potentially influence the results of the research or
                scientific judgment. All financial contributions or sponsorship,
                financial relations, and areas of conflicts of interest should
                be clearly explained in the relevant step of the submission
                process, with full assurance that any related document will be
                submitted to the journal when requested.
                <div className="br" />
                <div className="br" />
                Perinatal Journal is committed to upholding the highest
                standards of publication ethics and observes the following
                principles of Publication Ethics and Malpractice Statement which
                is based on the recommendations and guidelines for journal
                editors developed by the
                <a
                  href="https://publicationethics.org/resources/code-conduct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;Committee on Publication Ethics (COPE),
                </a>
                <a
                  href="https://www.councilscienceeditors.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;Council of Science Editors (CSE),
                </a>
                <a
                  href="https://www.wame.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;World Association of Medical Editors (WAME)
                </a>{" "}
                and
                <a
                  href="https://www.icmje.org/recommendations/browse/roles-and-responsibilities/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;International Committee of Medical Journal Editors
                  (ICMJE).
                </a>
                For the details of journal Publication Ethics and Malpractice
                Statement please
                <a
                  href="https://perinataljournal.com/Info/publication-ethics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;click here.
                </a>
              </div>
            </div>

            <div className="br" />
            <div className="br" />

            <div id="manuscript-preparation" className="text-[#333333]">
              <h2 className="text-[14px] font-bold">Manuscript Preparation</h2>
              <div className="text-[14px] font-normal leading-[20px]">
                In addition to the rules listed below, manuscripts to be
                published in the Perinatal Journal should be in compliance with
                the Uniform Requirements for Manuscripts Submitted to Biomedical
                Journals published by International Committee of Medical Journal
                Editors (ICMJE) of which latest version is available at
                <a
                  href="https://perinataljournal.com/Info/editorial-policies#peer-review-process"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;www.icmje.org
                </a>
                <div className="br" />
                <div className="br" />
                Authors are requested to ensure that their manuscript follows
                the appropriate guidelines such as CONSORT for randomized
                controlled trials, STROBE for observational studies, STARD for
                diagnostic accuracy studies, and PRISMA for systematic reviews
                and meta-analyses, for the study design and reporting if
                applicable. Clinical trials should be registered prospectively
                on a suitable trial registry, before any participants have been
                recruited into the trial. The trial registration number (e.g.
                NCT012345678) should be included in the Methods.
              </div>
            </div>

            <div className="br" />
            <div className="br" />

            <div id="authorship-and-length-of-texts" className="text-[#333333]">
              <h2 className="text-[14px] font-bold">
                Authorship and Length of Texts
              </h2>
              <div className="text-[14px] font-normal leading-[20px]">
                The author(s) must declare that they were involved in at least 3
                of the 5 stages of the study stated in the "Acknowledgement of
                Authorship and Transfer of Copyright Agreement" as "designing
                the study", "collecting the data", "analyzing the data",
                "writing the manuscript" and "confirming the accuracy of the
                data and the analyses". Those who do not fulfill this
                prerequisite should not be stated as an author.
                <div className="br" />
                <div className="br" />
                Each author should also submit his/her
                <a
                  href="https://orcid.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;ORCID&nbsp;
                </a>
                ID besides the classical personal data such as affiliation.
                <div className="br" />
                <div className="br" />
                <span className="italic">Original research articles</span> base
                on clinical or experimental studies. The main text should not
                exceed 2500 words (max. 16 pages), and a maximum of six authors
                is advisable.
                <div className="br" />
                <div className="br" />
                <span className="italic">Case reports</span> should illustrate
                interesting cases including their treatment options. The main
                text should not exceed 2000 words (max. 8 pages), and a maximum
                of five authors is advisable.
                <div className="br" />
                <div className="br" />
                <span className="italic">Opinion articles:</span> Only by
                invitation and should be no more than 2000 words long (max. 8
                pages).
                <div className="br" />
                <div className="br" />
                <span className="italic">Review articles:</span> Only by
                invitation and should be no more than 4000-5000 words long (max.
                20 pages).
                <div className="br" />
                <div className="br" />
                <span className="italic">Technical notes</span> aims to present
                a newly diagnostic or therapeutic method. They should not exceed
                2000 words (max. 8 pages) and include a maximum of 10
                references.
                <div className="br" />
                <div className="br" />
                <span className="italic">Letters to the Editor</span> should be
                no more than 500 words long (max. 2 pages) and include a maximum
                of 10 references.
              </div>
            </div>

            <div className="br" />
            <div className="br" />
            <div className="br" />

            <div id="sections-in-the-manuscripts" className="text-[#333333]">
              <h2 className="text-[14px] font-bold">
                Sections in the Manuscripts
              </h2>
              <p className="text-[14px] font-normal leading-[20px]">
                Manuscripts should be designed in the following order: title,
                abstract, main text, references, and appendix (tables, figures,
                drawings, pictures, videos, patient forms, surveys etc.).
              </p>
            </div>

            <div className="br" />
            <div className="br" />

            <div className="text-[#333333]">
              <h2 className="text-[14px] font-bold italic">Title</h2>
              <p className="text-[14px] font-normal leading-[20px]">
                The title of the manuscript should be carefully chosen to better
                reflect the contents of the study. No anusual abbreviations
                should be used in the title of the manuscript.
              </p>
            </div>

            <div className="br" />
            <div className="br" />

            <div className="text-[#333333]">
              <h2 className="text-[14px] font-bold italic">Abstract</h2>
              <div className="text-[14px] font-normal leading-[20px]">
                Abstracts should not contain any abbreviation and references.
                They should be prepared under following designs.
                <div className="br" />
                — Abstracts of Original Research Articles should be max. 250
                words and structured in four paragraphs using the following
                subtitles: Objective, Methods, Results, and Conclusion.
                Following the abstract, each abstract should include max. five
                keywords separated with comma and written in lower cases.
                <div className="br" />
                — Abstracts of Case Reports should be max. 125 words and
                structured in three paragraphs using the following subtitles:
                Objective, Case, Conclusion. Following the abstract, each
                abstract should include max. three keywords separated with comma
                and written in lower cases.
                <div className="br" />
                — Abstracts of Review Articles should be max. 300 words and
                presented not structured in one paragraph. Following the
                abstract, each abstract should include max. five keywords
                separated with comma and written in lower cases.
                <div className="br" />
                — Abstracts of Technical Notes should be max. 125 words and
                structured in three paragraphs using the following subtitles:
                Objective, Technique, Conclusion. Following the abstract, each
                abstract should include max. three keywords separated with comma
                and written in lower cases.
                <div className="br" />
              </div>
            </div>

            <div className="br" />
            <div className="br" />

            <div className="text-[#333333]">
              <h2 className="text-[14px] font-bold italic">Main text</h2>
              <div className="text-[14px] font-normal leading-[20px]">
                The sections in main text are defined according to the
                manuscript type.
                <div className="br" />— In{" "}
                <span className="font-bold">
                  Original Research Articles,
                </span>{" "}
                main text should consist of sections titled as "Introduction,
                Methods, Results, Discussion and Conclusion". Each title may
                have subtitles. The categories of subtitles should be clearly
                defined.
                <div className="br" />
                The Introduction section should include a brief summary of the
                base of the work and clearly states the purpose of the study.
                The Methods section should contain a detailed description of the
                material, the study design and clinical and laboratory tests,
                and statistical methods used. A statement regarding the ethical
                issues should also be given in this section. The Results section
                should provide the main findings of the study. Data should be
                concisely presented, preferably in tables or graphs. The
                Discussion section should mainly rely on the results derived
                from the study, with relevant citations from the most recent
                literature.
                <div className="br" />
                The Conclusion section should briefly and claearly present the
                conclusions derived from the results of the study. It should be
                in compliance with the aim of the work and and point out its
                application in clinical practice.
                <div className="br" />— In <span className="font-bold">Case Reports,</span> main
                text should be divided with the titles "Introduction, Case(s),
                Discussion". Reported case(s) should be introduced clearly
                including the case story, and the results of laboratory tests
                should be given in table format as far as possible.
                <div className="br" />— The text of the{" "}
                <span className="font-bold">Review Articles</span> should follow
                the "Introduction" and be organized under subtitles which should
                clearly define the text's context categorization. The reviews
                are expected to include wide surveying of literature and reflect
                the author's personal experiences as far as possible.
                <div className="br" />— The text of the{" "}
                <span className="font-bold">Technical Note</span> type of
                articles should be divided into "Introduction, Technic,
                Discussion". The presented technic should be defined briefly
                under the related title, and include illustrations or figures as
                soon as possible.
                <div className="br" />— <span className="font-bold">
                  Letters to the Editor
                </span>{" "}
                should not have titled sections. If there is a citation about a
                formerly published article within the text, reference(s) should
                be provided.
                <div className="br" />
              </div>
            </div>
            <div className="br" />
            <div className="br" />
            <div className="text-[#333333]" id="references">
              <h2 className="text-[14px] font-bold italic">References</h2>
              <div className="text-[14px] font-normal leading-[20px]">
                References used in the text should be directly related to the
                topic, as recent as possible and in enough numbers. They should
                be numbered in square brackets in the order in which they are
                mentioned in the text including Tables and Figures. Citation
                order should be checked carefully.
                <div className="br" />
                <div className="br" />
                Only published articles or articles in press can be used in
                references. Unpublished data including conference papers or
                personal communications should not be used. Papers published in
                only electronic journals or in the preprint or online first
                issues of the electronic versions of conventional periodicals
                should be absolutely presented with DOI (digital object
                identifier) numbers.
                <div className="br" />
                <div className="br" />
                Journal titles should be abbreviated according to the Index
                Medicus. All authors if six or fewer should be listed;
                otherwise, the first six and “et al.” should be written.
                <div className="br" />
                <div className="br" />
                Direct use of references is strongly recommended and the authors
                may be asked to provide the first and last pages of certain
                references. Publication of the manuscript will be suspended
                until this request is fulfilled by the author(s).
                <div className="br" />
                <div className="br" />
                The style and punctuation should follow the formats outlined
                below:
                <div className="br" />
                <div className="br" />
                — Standard journal article: Hammerman C, Bin-Nun A, Kaplan M.
                Managing the patent ductus arteriosus in the premature neonate:
                a new look at what we thought we knew. Semin Perinatol
                2012;36:130–8.  <div className="br" />
                <div className="br" />
                — Article published in an electronic-only journal: Lee J, Romero
                R, Xu Y, Kim JS, Topping V, Yoo W, et al. A signature of
                maternal anti-fetal rejection in spontaneous preterm birth:
                chronic chorioamnionitis, anti-human leukocyte antigen
                antibodies, and C4d. PLoS One 2011;6:e16806. doi:10.1371/
                journal.pone.0011846
                <div className="br" />
                <div className="br" />
                — Book: Jones KL. Practical perinatology. New York: Springer;
                1990. p. 112–9.
                <div className="br" />
                <div className="br" />
                — Chapter in a book: Moore TR, Hauguel-De Mouzon S, Catalano P.
                Diabetes in pregnancy. In: Creasy RK, Resnik R, Greene MF, Iams
                JD, Lockwood CJ, Moore TR, editors. Creasy and Resnik’s
                maternal-fetal medicine: principles and practice. 7th ed.
                Philadelphia, PA: Saunders-Elsevier; 2014. p. 988–1021.
                <div className="br" />
                <div className="br" />
              </div>
            </div>
            <div className="br" />
            <div className="br" />
            <div className="text-[#333333]" id="appendices">
              <h2 className="text-[14px] font-bold italic">
                Figures and tables
              </h2>
              <div className="text-[14px] font-normal leading-[20px]">
                All illustrations (photographs, graphics, drawings, etc.)
                accompanying the manuscript should be referred to as “figure”.
                All figures should be numbered consecutively and mentioned in
                the text. Figure legends should be added at the end of the text
                as a separate section. Each figure should be prepared as a
                separate digital file in “jpeg” format, with a minimum 300 dpi
                or better resolution. All illustrations should be original.
                Illustrations published elsewhere should be submitted with the
                written permission of the original copyright holder. For
                recognizable photographs of human subjects, written permission
                signed by the patient or his/her legal representative should be
                submitted; otherwise, patient names or eyes must be blocked out
                to prevent identification. Microscopic photographs should
                include information on staining and magnification.
                <div className="br" />
                <div className="br" />
                Each table should be prepared on a separate page with table
                heading on top of the table. Table heading should be added to
                the main text file on a separate page when a table is submitted
                as a supplementary file.
              </div>
            </div>
            <div className="br" />
            <div className="br" />
            <div className="br" />
            <div className="text-[#333333]" id="submission">
              <h2 className="text-[14px] font-bold italic">Submission</h2>
              <div className="text-[14px] font-normal leading-[20px]">
                For a swift peer review, Perinatal Journal operates a web-based
                submission, peer review and manuscript tracking system. Authors
                are required to
                <a
                  href="https://www.perinataljournal.com/Member/Login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B5486] text-[14px] font-normal hover:underline"
                >
                  &nbsp;submit&nbsp;
                </a>
                their articles online.
              </div>
            </div>
            <div className="br" />
            <div className="br" />
            <div className="text-[#333333]" id="submission-checklist">
              <h2 className="text-[14px] font-bold italic">
                Submission checklist
              </h2>
              <div className="text-[14px] font-normal leading-[20px]">
                The following list will be useful during the final check of a
                manuscript before submission:
                <div className="br" />
                1. Manuscript length (max. 4000 words for original research
                articles)
                <div className="br" />
                2. Number of authors (max. six authors for original research
                articles)
                <div className="br" />
                3. Title page (no anusual abbreviations)
                <div className="br" />
                4. Abstracts (max. 250 words for original research articles)
                <div className="br" />
                5. Key words (max. five keywords for original research articles)
                <div className="br" />
                6. Main text (subtitles)
                <div className="br" />
                7. References (listed according to the rules of ICMJE)
                <div className="br" />
                8. Appendices such as tables, figures, drawings, pictures,
                videos, patient forms, surveys etc. (numbering; legends and
                headings; copyright info/permission)
                <div className="br" />
                9. Conflicts of Interest Disclosure Statement (if necessary)
                <div className="br" />
              </div>
            </div>
            <div className="br" />
            <div className="br" />
            <div className="text-[#333333]" id="open-data-policy">
              <h2 className="text-[14px] font-bold">Open Data Policy</h2>
              <p className="text-[14px] font-normal leading-[20px]">
                Data that is integral to the paper must be made available in
                such a way as to enable readers to replicate, verify and build
                upon the conclusions published in the paper. Any restriction on
                the availability of this data must be disclosed at the time of
                submission.
              </p>
            </div>
            <div className="br" />
            <div className="br" />
            <div className="text-[#333333]" id="open-access-policy">
              <h2 className="text-[14px] font-bold">
                Open Access Policy & Copyright
              </h2>
              <p className="text-[14px] font-normal leading-[20px]">
                To promote the development of global open access to scientific
                information and research, the journal provides immediate open
                access to its content. The Journal provides copyrights of all
                published papers (except where otherwise noted) for free use of
                readers, scientists, and institutions (such as link to the
                content or permission for its download, distribution, printing,
                copying, and reproduction in any medium, without any changing
                and except the commercial purpose), under the terms of CC
                BY-NC-ND 4.0 License, provided the original work is cited. To
                get permission for commercial purpose please contact the
                publisher.{" "}
                <span className="font-bold">
                  All published materials will become the sole property of, and
                  will be copyrighted by Perinatal Journal.
                </span>{" "}
                Therefore, “Acknowledgement of Authorship and Transfer of
                Copyright Agreement” presented by manuscript submission system
                should be approved by the authors during the submission
              </p>
            </div>
            <div className="br" />
            <div className="br" />
            <div className="text-[#333333]" id="privacy-statement">
              <h2 className="text-[14px] font-bold">Privacy Statement</h2>
              <p className="text-[14px] font-normal leading-[20px]">
                By the Law on the Protection of Personal Data, the names and
                e-mail addresses submitted to this journal will be used
                exclusively for the stated purposes of Perinatal Journal will
                not be made available for any other purpose or to any other
                party.
              </p>
            </div>
            <div className="br" />
            <div className="br" />
            <div className="br" />
          </div>
        </div>
      </Layout>
    </div>
  );
}
