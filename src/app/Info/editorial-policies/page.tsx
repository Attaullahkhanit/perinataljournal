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
  title: 'Perinatal Journal - Editorial Policies',
  description: 'Perinatal Journal - Editorial Policies',
  icons: {
    icon: '/PMF logo yuvarlak trans.png',
  },
};
export default function page() {
  const editorialPolicies = [
    {
      id: "aim-and-scope",
      title: "Aim and Scope",
      content:
        "Perinatal Journal aims to create an interdisciplinary scientific platform for sharing and discussing topics on perinatal medicine and to share its experience with international scientific community.",
    },
    {
      id: "open-access-policy",
      title: "Open Access Policy",
      content: (
        <>
          To promote the development of global{" "}
          <a
            href="https://en.wikipedia.org/wiki/Open_access"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;open access&nbsp;
          </a>
          to scientific information and research, the journal provides immediate
          open access to its content.
          <div className="br" />
          <div className="br" />
          All published materials will become the sole property of, and will be
          copyrighted by Perinatal Journal. Therefore, "Acknowledgement of
          Authorship and Transfer of Copyright Agreement" presented by
          manuscript submission system should be approved by the authors during
          the submission process.
          <div className="br" />
          <div className="br" />
          The Journal provides copyrights of all published papers (except where
          otherwise noted) for free use of readers, scientists, and institutions
          (such as link to the content or permission for its download,
          distribution, printing, copying, and reproduction in any medium,
          without any changing and except the commercial purpose), under the
          terms of
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;CC BY-NC-ND 4.0 License&nbsp;
          </a>
          , provided the original work is cited. To get permission for
          commercial purpose please contact the
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;publisher&nbsp;
          </a>
          . <div className="br" />
          <div className="br" />
        </>
      ),
    },
    {
      id: "article-processing-fee",
      title: "Article Processing Fee",
      content: (
        <>
          Perinatal Journal is an open access journal and has no any
          subscription and publication fee. But it applies an Article Processing
          Charge (APC) for only accepted articles. No fees are requested from
          the authors during submission and evaluation process. All manuscripts
          must be submitted via Manuscript Manager. When you are informed that
          your article has been accepted for preperation about publication, you
          have to make payment as soon as possible, otherwise will not be
          appearing on early view page and not published which means it is not
          accepted publication.
          <div className="br" />
          The APCs will be accepted through the link that will be sent to the
          corresponding author of each article via the online article system. In
          the next step, the authors will be receiving a receipt of their
          payment. Please be aware that no any refund is possible for your
          payment.
          <div className="br" />
          <div className="br" />
          Please note that the Article Processing Charge (APC) will not affect
          neither the editorial and peer-review process nor the priority of the
          manuscripts by no means.
          <div className="br" />
          Please click on for the page of Article Processing Charge
          <div className="br" />
          <div className="br" />
          <div className="br" />
        </>
      ),
    },
    {
      id: "publication-frequency",
      title: "Publication Frequency",
      content:
        "Perinatal Journal is published three times a year in April, August and December.",
    },
    {
      id: "peer-review-process",
      title: "Peer Review Process",
      content: (
        <>
          All manuscripts that are submitted to the Perinatal Journal are first
          subjected to technical evaluation in terms of conformance to the
          journal’s manuscript rules and plagiarism at the preliminary
          evaluation. One of the Editors evaluates whether the manuscripts are
          within the scope of the journal or not, and when they are not within
          the scope, the Editor either rejects them directly or sends back to
          authors to make the papers comply with publication scope and rules.
          <div className="br" />
          <div className="br" />
          At the next stage of the evaluation, manuscripts that are within the
          scope of the journal undergo double-blind peer review. An Editor is
          assigned for the manuscript to conduct the peer review process. Each
          submission will be reviewed by at least two external reviewers who are
          experts in their fields relevant to the paper and invited by the
          assigned Editor. These reviewers can be also selected from the members
          of the Advisory Board. The Editorial Board will assign an external and
          independent editor to manage the evaluation processes of manuscripts
          submitted by the Editorial Board members of the journal.
          <div className="br" />
          <div className="br" />
          If any revision is required in the manuscripts according to the
          comments of the reviewers, the Editor assigned to the paper makes sure
          that the revisions from corresponding author are re-evaluated by
          reviewers. This Editor is authorized to suggest required corrections
          and changes upon the comments and suggestions of reviewers, and/or to
          correct or shorten the text by permission of the corresponding author.
          In the end, the assigned Editor submits their suggestion of acceptance
          or rejection for publishing to Editors-in-Chief. If there are any
          concerns about statistics in reviewer comments, the paper is evaluated
          by Statistics Editor. If necessary, external statistics experts can be
          asked for their opinion.
          <div className="br" />
          <div className="br" />
          The Editors-in-Chief are the final authority in the decision to
          publish the manuscript or not. They also have the right to reject a
          manuscript after authors’ revision. Author(s) should provide
          additional relevant data, documents, or information upon the editorial
          request if necessary.
          <div className="br" />
          <div className="br" />
          <div className="br" />
        </>
      ),
    },
    {
      id: "advertising-policy",
      title: "Advertising Policy",
      content:
        "Perinatal Journal advertising policy is consistent with the principles mentioned in the Recommendations on Publication Ethics Policies for Medical Journals which issued by the World Association of Medical Editors (WAME). Products or services being advertised in the journal website can only be related to (i) the practice of medicine, (ii) medical education, or (iii) health care delivery. Advertisements are not be related in any way to editorial decision making and displayed separate from the published academic content.",
    },
    {
      id: "archiving",
      title: "Archiving",
      content: (
        <>
          Perinatal Journal is also archived on
          <a
            href="https://www.scopus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;SCOPUS&nbsp;
          </a>
          and
          <a
            href="https://doaj.org/toc/1305-3124?source=%7B%22query%22%3A%7B%22filtered%22%3A%7B%22filter%22%3A%7B%22bool%22%3A%7B%22must%22%3A%5B%7B%22terms%22%3A%7B%22index.issn.exact%22%3A%5B%221305-3124%22%5D%7D%7D%5D%7D%7D%2C%22query%22%3A%7B%22match_all%22%3A%7B%7D%7D%7D%7D%2C%22size%22%3A100%2C%22sort%22%3A%5B%7B%22created_date%22%3A%7B%22order%22%3A%22desc%22%7D%7D%5D%2C%22_source%22%3A%7B%7D%7D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;DOAJ&nbsp;
          </a>
          and
          <a
            href="https://trdizin.gov.tr/en/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;https://trdizin.gov.tr/en/about/.&nbsp;
          </a>
        </>
      ),
    },
    {
      id: "disclaimer-of-liability",
      title: "Disclaimer of Liability",
      content: (
        <>
          Perinatal Journal does not officially agree with the ideas of
          manuscripts published in the journal and does not guarantee for any
          product or service advertisements in its website.
          <div className="br" />
          <div className="br" />
          The content of the articles published in the journal does not
          necessarily reflect the views or policies of the publisher, nor does
          any mention of trade names, commercial products, or organizations
          imply endorsement by the publisher. Scientific and legal
          responsibilities of published articles belong to their author(s).
          <div className="br" />
          <div className="br" />
          The publisher and publishing house remain neutral with regard to
          jurisdictional claims in published maps and institutional
          affiliations.
          <div className="br" />
          <div className="br" />
          Materials such as pictures, figures, tables etc. sent with manuscripts
          should be original or if they were published before written approval
          of copyright holder should be sent with manuscript for publishing
          together.
        </>
      ),
    },
    {
      id: "research-ethics-policy",
      title: "Research Ethics Policy",
      content: (
        <>
          All manuscripts presenting data obtained from studies involving human
          subjects must include a statement that the written informed consent of
          the participants was obtained and that the study was approved by an
          institutional ethics board or an equivalent body. This institutional
          approval should be submitted with the manuscript. Authors of case
          reports must submit the written informed consent of the subject(s) of
          the report or of the patient’s legal representatives for the
          publication of the manuscript. All studies should be carried out in
          accordance with the World Medical Association Declaration of Helsinki,
          covering the latest revision date. Patient confidentiality must be
          protected according to the universally accepted guidelines and rules.
          <div className="br" />
          <div className="br" />
          Manuscripts reporting the results of experimental studies on animals
          must include a statement that the study protocol was approved by the
          animal ethics committee of the institution and that the study was
          conducted in accordance with the internationally accepted guidelines,
          including the
          <a
            href="https://www.fondation-droit-animal.org/la-fondation/declaration-des-droits-de-lanimal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;Universal Declaration of Animal Rights,&nbsp;
          </a>
          <a
            href="https://www.coe.int/en/web/cdcj/laboratory-animals?form=MG0AV3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;European Convention for the Protection of Vertebrate Animals
            Used for Experimental and Other Scientific Purposes,&nbsp;
          </a>
          <a
            href="https://nap.nationalacademies.org/catalog/12910/guide-for-the-care-and-use-of-laboratory-animals-eighth?form=MG0AV3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;Principles of Laboratory Animal Science, and the Handbook for
            the Care and Utilization of Laboratory Animals.&nbsp;
          </a>
          <div className="br" />
          <div className="br" />
          The authors are strongly requested to send the approval of the ethics
          committee together with the manuscript. In addition, manuscripts on
          human and animal studies should describe procedures indicating the
          steps taken to eliminate pain and suffering.
          <div className="br" />
          <div className="br" />
          The authors should also disclose all issues concerning financial
          relationship, conflicts of interest, and competing interest that may
          potentially influence the results of the research or scientific
          judgment. All financial contributions or sponsorship, financial
          relations, and areas of conflicts of interest should be clearly
          explained in the relevant step of the submission process, with full
          assurance that any related document will be submitted to the journal
          when requested.
        </>
      ),
    },
    {
      id: "plagiarism-check",
      title: "Plagiarism Check",
      content:
        "All submitted manuscripts are subjected to plagiarism check using iThenticate with the maximum similarity score of 40% at the initial evaluation. The manuscripts detected to have similarity between 10-40% are sent back to the author for content revision. A manuscript containing >40% similarity will be rejected without the review.",
    },
    {
      id: "corrections-retractions-process",
      title: (
        <>
          The Process for Handling Cases Requiring Corrections, Retractions, and
          Editorial Expressions of Concern  <div className="br" />
          <span className="italic">Corrections</span>
        </>
      ),
      content: (
        <>
          Errata in published papers may be identified in the form of a corrigendum or erratum when  the Editors-in-Chief consider it appropriate to inform the journal readership about a previous error and makes a correction to the error in the published article. The correction will appear as a new article under the Erratum category of the journal, and will cite the original published article.
          <div className="br" />
          <div className="br" />
          <strong>Retractions </strong>
          <div className="br" />
          <div className="br" />
          Retractions are considered and published when there are severe errors in an article that invalidate the conclusions. Retractions are also made in cases where there is evidence of publication malpractice, such as plagiarism, duplicate publication, or unethical research. If a retraction is confirmed it will be handled according to the updated version of COPE Retraction Guidelines, and a retraction note signed by the authors and/or the editor is published in a subsequent issue of the journal and listed in the relevant contents list, a link is made to the original article concurrently.
          <div className="br" />
          <div className="br" />
          <strong>Editorial expressions of concern</strong>
          <div className="br" />
          <div className="br" />
          Where substantial doubt arises as to the honesty or integrity of a submitted or published article, Editors-in-Chief may consider issuing an expression of concern. However, expressions of concern should only be issued if an investigation into the problems relating to the article has proven inconclusive, and if there remain strong indicators that the concerns are valid. Under some rare cases, an editorial expression of concern may also be issued when an investigation is underway but a judgement will not be available for a considerable time. The expression of concern will be linked back to the published article it relates to.",
          <div className="br" />
          <div className="br" />
        </>)
    },


    {
      id: "Publication Ethics and Malpractice Statement",
      title: "Publication Ethics and Malpractice Statement",
      content: (
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
          </a>
          .
          <div className="br" />
          <div className="br" />
          For the details of journal Publication Ethics and Malpractice
          Statement please
          <a
            href="https://perinataljournal.com/Info/publication-ethics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0B5486] text-[14px] font-normal hover:underline"
          >
            &nbsp;click here.&nbsp;
          </a>
        </>
      ),
    },
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
          <div className="home-body-text w-[100%] px-3 ">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-[24px] font-bold leading-[40px] text-[#0B5486] not-italic">Editorial Policies</h1>
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
                    <h2 className="text-[14px] font-bold leading-[20px] text-[#333333]">
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
  );
}
