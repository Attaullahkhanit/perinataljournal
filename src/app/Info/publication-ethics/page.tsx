import Layout from '@/components/ui/Layout/layout'
import ModuleBox from '@/components/ui/modulebox/modulebox'
import { Metadata } from 'next';
import Link from 'next/link'
import React from 'react'
import { FaThLarge, FaSearch, FaUserAlt, FaShareSquare, FaChevronRight } from "react-icons/fa";
import { FaShareFromSquare } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";

export const metadata: Metadata = {
  title: 'Perinatal Journal - Publication Ethics',
  description: 'Perinatal Journal - Publication Ethics',
  icons: {
    icon: '/PMF logo yuvarlak trans.png',
  },
};
export default function page() {
  const editorialPolicies = [
    {
      id: "Publication Ethics and Malpractice Statement",
      title: "Publication Ethics and Malpractice Statement",
      content:
        (
          <>
            Perinatal Journal is committed to upholding the highest standards of
            publication ethics and observes the following principles of
            Publication Ethics and Malpractice Statement which is based on the
            recommendations and guidelines for journal editors developed by the
            <a
              href="https://publicationethics.org/resources/code-conduct"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5486] text-[14px] font-normal hover:underline"
            >
              &nbsp;Committee on Publication Ethics (COPE),&nbsp;
            </a>
            <a
              href="https://www.councilscienceeditors.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5486] text-[14px] font-normal hover:underline"
            >
              &nbsp;Council of Science Editors (CSE),&nbsp;
            </a>
            <a
              href="https://www.wame.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5486] text-[14px] font-normal hover:underline"
            >
              &nbsp;World Association of Medical Editors (WAME)&nbsp;
            </a>
            and
            <a
              href="https://www.icmje.org/recommendations/browse/roles-and-responsibilities/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5486] text-[14px] font-normal hover:underline"
            >
              &nbsp;International Committee of Medical Journal Editors
              (ICMJE)&nbsp;
            </a> <div className="br" /> <div className="br" />
            All submissions must be original, unpublished (including as full text in conference proceedings), and not under the review of any other publication synchronously. Each manuscript is reviewed by one of the editors and at least three referees under double-blind peer review process. We reserve the right to use plagiarism detecting software to screen submitted papers at all times. We check for plagiary and fraudulent data; falsification (fabrication or manipulation of research data, tables, or images) and improper use of humans or animals in research. All manuscripts not in accordance with these standards will be removed from the publication. This also contains any possible malpractice discovered after the publication. In accordance with the code of conduct we will report any cases of suspected plagiarism or duplicate publishing. <div className="br" /> <div className="br" />
            We follow the COPE Ethics Flowcharts for dealing with cases of possible scientific misconduct and breach of publication ethics. For more details please
            <a
              href="https://publicationethics.org/resources/flowcharts"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B5486] text-[14px] font-normal hover:underline"
            >
              &nbsp;click here&nbsp;
            </a>.
          </>
        )
    },
    {
      id: "Author Responsibilities",
      title: "Author Responsibilities",
      content: (
        <>
          Authors should ensure that submitted work is original. They must certify that the manuscript has not previously been published elsewhere or is not currently being considered for publication elsewhere, in any language. Applicable copyright laws and conventions should be followed. Copyright material (e.g. tables, figures or extensive quotations) should be reproduced only with appropriate permission and acknowledgement. Any work or words of other authors, contributors, or sources should be appropriately credited and referenced.
          <div className="br" /> <div className="br" />
          The author(s) of the original research articles (including short communications) must declare that they were involved in at least 3 of the 5 stages of the study as "designing the study", "collecting the data", "analyzing the data", "writing the manuscript" and "confirming the accuracy of the data and the analyses". All authors should disclose all issues concerning financial relationship, conflict of interest, and competing interest that may potentially influence the results of the research or scientific judgment. All financial contributions, supports or sponsorship of projects should be clearly explained.
          <div className="br" /> <div className="br" />
          When an author discovers a significant error or inaccuracy in his/her own published paper, it is the author's obligation to promptly cooperate with the Editor-in-Chief to provide retractions or corrections of mistakes.
          <div className="br" /> <div className="br" />
          For more detailed information about Authorship and Author Responsibilities by ICMJE, please
          <a
            href="https://www.icmje.org/recommendations/browse/roles-and-responsibilities/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;click here
          </a>.
        </>
      ),
    },
    {
      id: "Responsibility for the Reviewers",
      title: "Responsibility for the Reviewers",
      content: (
        <>
          Reviewers evaluate manuscripts based on content without regard to ethnic origin, gender, sexual orientation, citizenship, religious belief or political philosophy of the authors. They should have no conflict of interest with respect to the research, the authors and/or the research funders. Their judgments should be objective.
          <div className="br" /> <div className="br" />
          Reviewers should identify relevant published work that has not been cited by the authors. They must ensure that all the information related to submitted manuscripts is kept as confidential and must report to the Editor-in-Chief if they are aware of copyright infringement and plagiarism on the author's side.
          <div className="br" /> <div className="br" />
          A reviewer who feels unqualified to review the topic of a manuscript or knows that its prompt review will be impossible should notify the Editor-in-Chief and excuse himself from the review process.
          <div className="br" /> <div className="br" />
          To read the PDF document of COPE Ethical Guidelines for Peer Reviewers, please
          <a
            href="https://publicationethics.org/guidance/guideline/ethical-guidelines-peer-reviewers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;click here
          </a>.
        </>
      ),
    },
    {
      id: "Editorial Responsibilities",
      title: "Editorial Responsibilities",
      content: (
        <>
          Editors evaluate manuscripts for their scientific content without regard to ethnic origin, gender, sexual orientation, citizenship, religious belief or political philosophy of the authors. They provide a fair double-blind peer review of the submitted articles for publication. They ensure that all the information related to submitted manuscripts is kept as confidential before publishing.
          <div className="br" /> <div className="br" />
          Editors are responsible for the contents and overall quality of the publication. They should publish errata pages or make corrections when needed.
          <div className="br" /> <div className="br" />
          Editor-in-Chief does not allow any conflicts of interest between the authors, editors and reviewers. Only he has the full authority to assign a reviewer and is responsible for final decision for publication of the manuscripts in Perinatal Journal.
          <div className="br" /> <div className="br" />
          To read the updated version of Council of Science Editors' "Editor Roles and Responsibilities" document, please
          <a
            href="https://www.councilscienceeditors.org/index.php?option=com_content&view=article&id=103:2-1-editor-roles-and-responsibilities&catid=20:site-content"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;click here
          </a>.
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
                    <h2 className="text-[14px] font-bold leading-[20px] text-[#333333] pb-3">
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



