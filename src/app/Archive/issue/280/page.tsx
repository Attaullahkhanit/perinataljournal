import IntroductionCardSecond from '@/components/ui/IntroductionCard2/card';
import { FileTextIcon } from '@/components/ui/svgs/fileTexticon';
import Link from 'next/link';

export default async function page() {


    return (
        <div className="Issue-Container">
            <IntroductionCardSecond
                title="Perinatal Journal - Issue 2"
                subtitle="Volume 33, Issue-1, April 2025"
                pageRange="1-61"
                description="Perinatal Journal is an international, online open access, peer-reviewed scientific journal..."
                imageUrl="/images/perinatal-journal-small-en-US.jpg"
            />

            <h1 className="issue-table-of-contents bg-[#efefef] text-[#3d3d3d] text-[14pt] py-3 px-3 font-bold mt-2">
                Table of Contents
            </h1>

            <ul className="issue-article-list">
                {/* Article 1 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331001">
                            Post-immunization evaluation in infants of Hepatitis B carrier mothers
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">1-4</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Sema Tanriverdi, Özge Özalp Berkarda, Esra Arun Özer
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span><strong>Online publication date:</strong> December 29, 2024</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331001</span>
                    </div>
                </li>

                {/* Article 2 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331002">
                            Assessment of Xenopsin Related Peptide-1 levels in pregnant women with gestational diabetes mellitus
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">5-10</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Emre Ağdemir, Melda Kuyucu, Mehtap Yücedağ, Kamile Kübra Ağdemir
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span><strong>Online publication date:</strong> January 10, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331002</span>
                    </div>
                </li>

                {/* Article 3 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331003">
                            HOXA1 Expression in preeclampsia: immunohistochemical and bioinformatic analyses
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">11-17</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Zeynep Türe, Ayşenur Sevinç Akdeniz, Gül Ebru Aydeniz Acar, Fırat Aşır, Tuğcan Korak, Serhat Ege
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span><strong>Online publication date:</strong> January 14, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331003</span>
                    </div>
                </li>

                {/* Article 4 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331004">
                            Reducing the rate of permanent obstetric brachial plexus palsy: Impact of a simulation training program in shoulder dystocia after five years of training
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">18-24</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Christian Garrido López, Emma Batllori Badía, Cecilia Villalaín, María Inmaculada Mejía Jiménez, Patricia Barbero, Laura Forcén Acebal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span><strong>Online publication date:</strong> March 18, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331004</span>
                    </div>
                </li>

                {/* Article 5 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331005">
                            Effect of Oral Supplementation with micronized ferric pyrophosphate in pregnant women to prevent postpartum hemorrhage
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">25-27</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Federica Di Napoli, Luigi Vigilante, Maria Giuseppina Trinchillo, Gennaro Esposito, Maddalena Turco, Elisabetta Gragnano, Dario Colacurci, Gabriele Saccone
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span><strong>Online publication date:</strong> March 18, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331005</span>
                    </div>
                </li>

                {/* Article 6 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331006">
                            Does preoperative tranexamic acid use in placenta previa have a positive effect on the results?
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">28-33</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Ahmet Zeki Nessar, Mürşide Çevikoğlu Kıll, Fikriye Işıl Adıgüzel, Ayhan Coşkun
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span><strong>Online publication date:</strong> March 06, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331006</span>
                    </div>
                </li>

                {/* Article 7 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331007">
                            The impact of assisted reproductive technology on pregnancies with very advanced maternal age
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">34-39</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Gizem Elif Dizdaroğulları, Aslıhan Öztürk
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span><strong>Online publication date:</strong> March 12, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331007</span>
                    </div>
                </li>

                {/* Article 8 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331008">
                            Congenital candida cases in a level-3 neonatal intensive care unit - A 10-year review
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">40-45</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Brandi Newby, Anithadevi Moodley, Jacqueline Clayton, Cherrie Tan-Dy
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span><strong>Online publication date:</strong> March 19, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331008</span>
                    </div>
                </li>

                {/* Article 9 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331009">
                            Complete penoscrotal transposition in the male twin of a dichorionic diamniotic pregnancy from oocyte donation: a case report
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">46-49</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Beatrice Leuzzi, Annasilvia Pertusio, Andrea Garnero, Simona Gerocarni Nappo, Andrea Sciarrone
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Case Report</span>
                        <span><strong>Online publication date:</strong> March 25, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331009</span>
                    </div>
                </li>

                {/* Article 10 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331010">
                            Sociodemographic and obstetric risk factors for postpartum depression
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">50-56</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Koray Özbay, İsmail Bağlar, Sahra Sultan Kara, Esra Keles, Fatih Şanlıkan
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span><strong>Online publication date:</strong> April 02, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331010</span>
                    </div>
                </li>

                {/* Article 11 */}
                <li className="mt-6 list-none">
                    <h1 className="article-item-title flex">
                        <FileTextIcon />
                        <Link className="pl-1 font-bold pr-2" href="/Archive/Article/20250331011">
                            Determination of the relationship between severe preeclampsia and HALP scores
                        </Link>
                        <div className="article-item-pages text-right block ml-auto">
                            <span className="badge badge-pages">57-61</span>
                        </div>
                    </h1>
                    <div className="article-item-authors">
                        Fikriye Işıl Adıgüzel, Seray Sırkıntı, Mert Ali Karataş, Sadık Kükrer, Cevdet Adıgüzel, Gülsüm Uysal
                    </div>
                    <div className="article-item-serial">
                        <span className="badge badge-info">Original Article</span>
                        <span><strong>Online publication date:</strong> April 15, 2025</span>
                        <span className="pl-3"><strong>DOI:</strong> 10.59215/prn.25.0331011</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}
