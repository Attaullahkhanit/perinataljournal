"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/ui/Layout/layout";
import ArchiveTree from "@/components/ui/treatview/treatview";
import ModuleBox from "@/components/ui/modulebox/modulebox";
import { MdDownloadForOffline } from "react-icons/md";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <Layout
            sidebar={
                <div>
                    <div>
                        <ArchiveTree />
                    </div>

                    <ModuleBox
                        title="Journal Information"
                        icon={<i className="icon-info-sign"></i>}
                    >
                        <p>
                            <strong>Online ISSN</strong> <br className="br" /> 1305-3124
                        </p>
                        <p>
                            <strong>Established</strong> <br className="br" />
                            1993
                        </p>
                        <p>
                            <strong>Editors-in-Chief</strong> <br className="br" /> Cihat Şen,
                            Nicola Volpe
                        </p>
                        <p>
                            <strong>Editors</strong> <br className="br" />
                            Cecilia Villalain, Daniel Rolnik, M. Mar Gil
                        </p>
                        <p>
                            <strong>Managing Editors</strong> <br className="br" />
                            Murat Yayla
                        </p>
                        <p>
                            <strong>Statistics Editor</strong> <br className="br" />
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
            {children}
        </Layout>
    );
}
