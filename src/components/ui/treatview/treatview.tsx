"use client"
import { useState } from 'react';
import Link from 'next/link';
// import { FiChevronDown, FiChevronRight, FiFile } from 'react-icons/fi';
import { FaFolderOpen, FaFolder, FaRegPlusSquare } from 'react-icons/fa'; // Yellow folder icons
import { FaRegSquareMinus } from 'react-icons/fa6';
import { FiFolder, FiFolderPlus, FiFile, FiChevronRight, FiChevronDown } from 'react-icons/fi';
import ModuleBox from '../modulebox/modulebox';
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { RiInformation2Fill } from "react-icons/ri";

const ArchiveTree = () => {
    const [expandedFolder, setExpandedFolder] = useState<string | null>('vol-482'); // Set default open folder

    const toggleFolder = (id: string) => {
        setExpandedFolder((prev) => (prev === id ? null : id)); // Close if already open, otherwise open the clicked one
    };
    const archiveData = [
        {
            "id": "all",
            "name": "All Issues",
            "href": "/Archive/issue/",
            "isFolder": false
        },
        {
            "id": "early",
            "name": "Early View",
            "href": "/Archive/early-view/",
            "isFolder": false
        },
        {
            "id": "vol-482",
            "name": "Year 2025 (Volume 33)",
            "items": [
                {
                    "id": "issue-280",
                    "name": "Issue-1",
                    "href": "/Archive/issue/280"
                }
            ]
        },
        {
            "id": "vol-481",
            "name": "Year 2024 (Volume 32)",
            "items": [
                {
                    "id": "issue-276",
                    "name": "Issue-1",
                    "href": "/Archive/issue/276"
                },
                {
                    "id": "issue-278",
                    "name": "Congress Supplement (Perinatal Medicine-2024)",
                    "href": "/Archive/issue/278"
                },
                {
                    "id": "issue-277",
                    "name": "Issue-2",
                    "href": "/Archive/issue/277"
                },
                {
                    "id": "issue-279",
                    "name": "Issue-3",
                    "href": "/Archive/issue/279"
                }
            ]
        },
        {
            "id": "vol-480",
            "name": "Year 2023 (Volume 31)",
            "items": [
                {
                    "id": "issue-272",
                    "name": "Issue-1",
                    "href": "/Archive/issue/272"
                },
                {
                    "id": "issue-273",
                    "name": "Issue-2",
                    "href": "/Archive/issue/273"
                },
                {
                    "id": "issue-275",
                    "name": "Congress Supplement (Perinatal Medicine-2023)",
                    "href": "/Archive/issue/275"
                },
                {
                    "id": "issue-274",
                    "name": "Issue-3",
                    "href": "/Archive/issue/274"
                }
            ]
        },
        {
            "id": "vol-479",
            "name": "Year 2022 (Volume 30)",
            "items": [
                {
                    "id": "issue-269",
                    "name": "Issue-1",
                    "href": "/Archive/issue/269"
                },
                {
                    "id": "issue-270",
                    "name": "Issue-2",
                    "href": "/Archive/issue/270"
                },
                {
                    "id": "issue-271",
                    "name": "Issue-3",
                    "href": "/Archive/issue/271"
                }
            ]
        },
        {
            "id": "vol-478",
            "name": "Year 2021 (Volume 29)",
            "items": [
                {
                    "id": "issue-266",
                    "name": "Issue-1",
                    "href": "/Archive/issue/266"
                },
                {
                    "id": "issue-267",
                    "name": "Issue-2",
                    "href": "/Archive/issue/267"
                },
                {
                    "id": "issue-268",
                    "name": "Issue-3",
                    "href": "/Archive/issue/268"
                }
            ]
        },
        {
            "id": "vol-477",
            "name": "Year 2020 (Volume 28)",
            "items": [
                {
                    "id": "issue-263",
                    "name": "Issue-1",
                    "href": "/Archive/issue/263"
                },
                {
                    "id": "issue-264",
                    "name": "Issue-2",
                    "href": "/Archive/issue/264"
                },
                {
                    "id": "issue-265",
                    "name": "Issue-3",
                    "href": "/Archive/issue/265"
                }
            ]
        },
        {
            "id": "vol-476",
            "name": "Year 2019 (Volume 27)",
            "items": [
                {
                    "id": "issue-260",
                    "name": "Issue-1",
                    "href": "/Archive/issue/260"
                },
                {
                    "id": "issue-261",
                    "name": "Issue-2",
                    "href": "/Archive/issue/261"
                },
                {
                    "id": "issue-262",
                    "name": "Issue-3",
                    "href": "/Archive/issue/262"
                }
            ]
        },
        {
            "id": "vol-475",
            "name": "Year 2018 (Volume 26)",
            "items": [
                {
                    "id": "issue-257",
                    "name": "Issue-1",
                    "href": "/Archive/issue/257"
                },
                {
                    "id": "issue-258",
                    "name": "Issue-2",
                    "href": "/Archive/issue/258"
                },
                {
                    "id": "issue-259",
                    "name": "Issue-3",
                    "href": "/Archive/issue/259"
                }
            ]
        },
        {
            "id": "vol-474",
            "name": "Year 2017 (Volume 25)",
            "items": [
                {
                    "id": "issue-254",
                    "name": "Issue-1",
                    "href": "/Archive/issue/254"
                },
                {
                    "id": "issue-255",
                    "name": "Issue-2",
                    "href": "/Archive/issue/255"
                },
                {
                    "id": "issue-256",
                    "name": "Issue-3",
                    "href": "/Archive/issue/256"
                }
            ]
        },
        {
            "id": "vol-473",
            "name": "Year 2016 (Volume 24)",
            "items": [
                {
                    "id": "issue-251",
                    "name": "Issue-1",
                    "href": "/Archive/issue/251"
                },
                {
                    "id": "issue-252",
                    "name": "Issue-2",
                    "href": "/Archive/issue/252"
                },
                {
                    "id": "issue-253",
                    "name": "Issue-3",
                    "href": "/Archive/issue/253"
                }
            ]
        },
        {
            "id": "vol-472",
            "name": "Year 2015 (Volume 23)",
            "items": [
                {
                    "id": "issue-248",
                    "name": "Issue-1",
                    "href": "/Archive/issue/248"
                },
                {
                    "id": "issue-249",
                    "name": "Issue-2",
                    "href": "/Archive/issue/249"
                },
                {
                    "id": "issue-250",
                    "name": "Issue-3",
                    "href": "/Archive/issue/250"
                }
            ]
        },
        {
            "id": "vol-471",
            "name": "Year 2014 (Volume 22)",
            "items": [
                {
                    "id": "issue-245",
                    "name": "Issue-1",
                    "href": "/Archive/issue/245"
                },
                {
                    "id": "issue-246",
                    "name": "Issue-2",
                    "href": "/Archive/issue/246"
                },
                {
                    "id": "issue-247",
                    "name": "Issue-3",
                    "href": "/Archive/issue/247"
                }
            ]
        },
        {
            "id": "vol-470",
            "name": "Year 2013 (Volume 21)",
            "items": [
                {
                    "id": "issue-242",
                    "name": "Issue-1",
                    "href": "/Archive/issue/242"
                },
                {
                    "id": "issue-243",
                    "name": "Issue-2",
                    "href": "/Archive/issue/243"
                },
                {
                    "id": "issue-244",
                    "name": "Issue-3",
                    "href": "/Archive/issue/244"
                }
            ]
        },
        {
            "id": "vol-469",
            "name": "Year 2012 (Volume 20)",
            "items": [
                {
                    "id": "issue-239",
                    "name": "Issue-1",
                    "href": "/Archive/issue/239"
                },
                {
                    "id": "issue-240",
                    "name": "Issue-2",
                    "href": "/Archive/issue/240"
                },
                {
                    "id": "issue-241",
                    "name": "Issue-3",
                    "href": "/Archive/issue/241"
                }
            ]
        },
        {
            "id": "vol-468",
            "name": "Year 2011 (Volume 19)",
            "items": [
                {
                    "id": "issue-236",
                    "name": "Issue-1",
                    "href": "/Archive/issue/236"
                },
                {
                    "id": "issue-237",
                    "name": "Issue-2",
                    "href": "/Archive/issue/237"
                },
                {
                    "id": "issue-238",
                    "name": "Issue-3",
                    "href": "/Archive/issue/238"
                }
            ]
        },
        {
            "id": "vol-467",
            "name": "Year 2010 (Volume 18)",
            "items": [
                {
                    "id": "issue-233",
                    "name": "Issue-1",
                    "href": "/Archive/issue/233"
                },
                {
                    "id": "issue-234",
                    "name": "Issue-2",
                    "href": "/Archive/issue/234"
                },
                {
                    "id": "issue-235",
                    "name": "Issue-3",
                    "href": "/Archive/issue/235"
                }
            ]
        },
        {
            "id": "vol-466",
            "name": "Year 2009 (Volume 17)",
            "items": [
                {
                    "id": "issue-230",
                    "name": "Issue-1",
                    "href": "/Archive/issue/230"
                },
                {
                    "id": "issue-231",
                    "name": "Issue-2",
                    "href": "/Archive/issue/231"
                },
                {
                    "id": "issue-232",
                    "name": "Issue-3",
                    "href": "/Archive/issue/232"
                }
            ]
        },
        {
            "id": "vol-465",
            "name": "Year 2008 (Volume 16)",
            "items": [
                {
                    "id": "issue-227",
                    "name": "Issue-1",
                    "href": "/Archive/issue/227"
                },
                {
                    "id": "issue-228",
                    "name": "Issue-2",
                    "href": "/Archive/issue/228"
                },
                {
                    "id": "issue-229",
                    "name": "Issue-3",
                    "href": "/Archive/issue/229"
                }
            ]
        },
        {
            "id": "vol-464",
            "name": "Year 2007 (Volume 15)",
            "items": [
                {
                    "id": "issue-224",
                    "name": "Issue-1",
                    "href": "/Archive/issue/224"
                },
                {
                    "id": "issue-225",
                    "name": "Issue-2",
                    "href": "/Archive/issue/225"
                },
                {
                    "id": "issue-226",
                    "name": "Issue-3",
                    "href": "/Archive/issue/226"
                }
            ]
        },
        {
            "id": "vol-463",
            "name": "Year 2006 (Volume 14)",
            "items": [
                {
                    "id": "issue-220",
                    "name": "Issue-1",
                    "href": "/Archive/issue/220"
                },
                {
                    "id": "issue-221",
                    "name": "Issue-2",
                    "href": "/Archive/issue/221"
                },
                {
                    "id": "issue-222",
                    "name": "Issue-3",
                    "href": "/Archive/issue/222"
                },
                {
                    "id": "issue-223",
                    "name": "Issue-4",
                    "href": "/Archive/issue/223"
                }
            ]
        },
        {
            "id": "vol-459",
            "name": "Year 2005 (Volume 13)",
            "items": [
                {
                    "id": "issue-207",
                    "name": "Issue-1",
                    "href": "/Archive/issue/207"
                },
                {
                    "id": "issue-208",
                    "name": "Issue-2",
                    "href": "/Archive/issue/208"
                },
                {
                    "id": "issue-209",
                    "name": "Issue-3",
                    "href": "/Archive/issue/209"
                },
                {
                    "id": "issue-210",
                    "name": "Issue-4",
                    "href": "/Archive/issue/210"
                }
            ]
        }
    ]

    return (
        <>
            <ModuleBox title="Archive" icon={<RiInformation2Fill />} noHorizontalPadding>
                <div className="module-container">
                    <div className="css-treeview">
                        <ul className="list-none">
                            {archiveData.map((item) => (
                                <li key={item.id}>
                                    {item.items ? (
                                        <div className="flex flex-col">
                                            <div
                                                className="flex items-center cursor-pointer hover:bg-gray-100 rounded p-1"
                                                onClick={() => toggleFolder(item.id)}
                                            >
                                                {/* Expand/Collapse icon */}
                                                {expandedFolder === item.id ? (
                                                    <FaRegSquareMinus className="text-gray-500 mr-1" size={14} />
                                                ) : (
                                                    <FaRegPlusSquare className="text-gray-500 mr-1" size={14} />
                                                )}

                                                {/* Folder Icon */}
                                                {expandedFolder === item.id ? (
                                                    <FaFolderOpen className="text-yellow-500 mr-2" size={16} />
                                                ) : (
                                                    <FaFolder className="text-yellow-500 mr-2" size={16} />
                                                )}

                                                <span className="text-[13px] leading-[16px] font-bold text-[#333333]">
                                                    {item.name}
                                                </span>
                                            </div>

                                            {/* Sub-Items */}
                                            {expandedFolder === item.id && (
                                                <ul className="pl-6 mt-1 space-y-1">
                                                    {item.items.map((issue: any) => (
                                                        <li key={issue.id} className="flex items-center group">
                                                            <LiaFileInvoiceSolid className="text-gray-400 ml-8 group-hover:text-blue-500" size={16} />
                                                            <Link href={issue.href} className="text-sm text-gray-700 hover:text-blue-600">
                                                                {issue.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ) : (
                                        // Flat link (like All Issues / Early View)
                                        <div className="flex items-center hover:bg-gray-100 rounded p-1 group">
                                            <LiaFileInvoiceSolid className="text-gray-400 mr-2 group-hover:text-blue-500" size={16} />
                                            <Link href={item.href} className="text-sm text-gray-700 hover:text-blue-600">
                                                {item.name}
                                            </Link>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ModuleBox>

        </>
    );
};

export default ArchiveTree;