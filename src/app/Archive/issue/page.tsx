import ModuleBox from '@/components/ui/modulebox/modulebox';
import ArchiveTree from '@/components/ui/treatview/treatview';
import { RiInformation2Fill } from 'react-icons/ri';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Perinatal Journal - Archives',
    description: 'Perinatal Journal - Archives',
    icons: {
        icon: '/images/logo-en-US.png',
    },
};
const page = () => {

    return (
        <div className="journal-Container p-4">
            <h1 className="text-2xl font-bold mb-4">Archives for Perinatal Journal</h1>
            <p className="mb-6">Please select the issue you would like to see</p>

            <div className="archive-full-list-container space-y-8">
                {[
                    {
                        year: 2025,
                        volume: 33,
                        issues: [
                            { id: 280, name: "Issue-1", pages: "1-61" }
                        ]
                    },
                    {
                        year: 2024,
                        volume: 32,
                        issues: [
                            { id: 276, name: "Issue-1", pages: "1-98" },
                            { id: 278, name: "Congress Supplement (Perinatal Medicine-2024)", pages: "1-34" },
                            { id: 277, name: "Issue-2", pages: "99-172" },
                            { id: 279, name: "Issue-3", pages: "173-262" }
                        ]
                    },
                    {
                        year: 2023,
                        volume: 31,
                        issues: [
                            { id: 270, name: "Issue-1", pages: "1-85" },
                            { id: 271, name: "Issue-2", pages: "86-163" },
                            { id: 273, name: "Congress Supplement (Perinatal Medicine-2023)", pages: "01-28" },
                            { id: 272, name: "Issue-3", pages: "164-255" }
                        ]
                    },
                    {
                        year: 2022,
                        volume: 30,
                        issues: [
                            { id: 267, name: "Issue-1", pages: "1-86" },
                            { id: 268, name: "Issue-2", pages: "87-230" },
                            { id: 269, name: "Issue-3", pages: "231-330" }
                        ]
                    },
                    {
                        year: 2021,
                        volume: 29,
                        issues: [
                            { id: 264, name: "Issue-1", pages: "1-86" },
                            { id: 265, name: "Issue-2", pages: "87-178" },
                            { id: 266, name: "Issue-3", pages: "179-279" }
                        ]
                    },
                    {
                        year: 2020,
                        volume: 28,
                        issues: [
                            { id: 261, name: "Issue-1", pages: "1-55" },
                            { id: 262, name: "Issue-2", pages: "57–147" },
                            { id: 263, name: "Issue-3", pages: "149-224" }
                        ]
                    },
                    {
                        year: 2019,
                        volume: 27,
                        issues: [
                            { id: 258, name: "Issue-1", pages: "1-48" },
                            { id: 259, name: "Issue-2", pages: "49-124" },
                            { id: 260, name: "Issue-3", pages: "125-197" }
                        ]
                    },
                    {
                        year: 2018,
                        volume: 26,
                        issues: [
                            { id: 254, name: "Issue-1", pages: "1-55" },
                            { id: 255, name: "Issue-2", pages: "57-105" },
                            { id: 256, name: "Issue-3", pages: "107-173" }
                        ]
                    },
                    {
                        year: 2017,
                        volume: 25,
                        issues: [
                            { id: 250, name: "Issue-1", pages: "1-47" },
                            { id: 251, name: "Issue-2", pages: "49-89" },
                            { id: 252, name: "Issue-3", pages: "91-156" }
                        ]
                    },
                    {
                        year: 2016,
                        volume: 24,
                        issues: [
                            { id: 247, name: "Issue-1", pages: "1-60" },
                            { id: 248, name: "Issue-2", pages: "61-127" },
                            { id: 249, name: "Issue-3", pages: "129-182" }
                        ]
                    },
                    {
                        year: 2015,
                        volume: 23,
                        issues: [
                            { id: 243, name: "Issue-1", pages: "1-71" },
                            { id: 244, name: "Issue-2", pages: "73-139" },
                            { id: 245, name: "Issue-3", pages: "141-211" }
                        ]
                    },
                    {
                        year: 2014,
                        volume: 22,
                        issues: [
                            { id: 239, name: "Issue-1", pages: "1-61" },
                            { id: 240, name: "Issue-2", pages: "65-121" },
                            { id: 241, name: "Issue-3", pages: "123-186" }
                        ]
                    },
                    {
                        year: 2013,
                        volume: 21,
                        issues: [
                            { id: 235, name: "Issue-1", pages: "1-45" },
                            { id: 236, name: "Issue-2", pages: "47-99" },
                            { id: 237, name: "Issue-3", pages: "101-154" }
                        ]
                    },
                    {
                        year: 2012,
                        volume: 20,
                        issues: [
                            { id: 232, name: "Issue-1", pages: "1-44" },
                            { id: 233, name: "Issue-2", pages: "45-120" },
                            { id: 234, name: "Issue-3", pages: "121-164" }
                        ]
                    },
                    {
                        year: 2011,
                        volume: 19,
                        issues: [
                            { id: 228, name: "Issue-1", pages: "1-50" },
                            { id: 229, name: "Issue-2", pages: "51-102" },
                            { id: 230, name: "Issue-3", pages: "103-148" }
                        ]
                    },
                    {
                        year: 2010,
                        volume: 18,
                        issues: [
                            { id: 225, name: "Issue-1", pages: "1-31" },
                            { id: 226, name: "Issue-2", pages: "35-64" },
                            { id: 227, name: "Issue-3", pages: "69-113" }
                        ]
                    },
                    {
                        year: 2009,
                        volume: 17,
                        issues: [
                            { id: 222, name: "Issue-1", pages: "1-35" },
                            { id: 223, name: "Issue-2", pages: "59-90" },
                            { id: 224, name: "Issue-3", pages: "97-130" }
                        ]
                    },
                    {
                        year: 2009,
                        volume: 17,
                        issues: [
                            { id: 222, name: "Issue-1", pages: "1-35" },
                            { id: 223, name: "Issue-2", pages: "59-90" },
                            { id: 224, name: "Issue-3", pages: "97-130" }
                        ]
                    },
                    {
                        year: 2008,
                        volume: 16,
                        issues: [
                            { id: 219, name: "Issue-1", pages: "1-41" },
                            { id: 220, name: "Issue-2", pages: "43-72" },
                            { id: 221, name: "Issue-3", pages: "75-104" }
                        ]
                    },
                    {
                        year: 2007,
                        volume: 15,
                        issues: [
                            { id: 216, name: "Issue-1", pages: "1-47" },
                            { id: 217, name: "Issue-2", pages: "51-87" },
                            { id: 218, name: "Issue-3", pages: "93-145" }
                        ]
                    },
                    {
                        year: 2006,
                        volume: 14,
                        issues: [
                            { id: 212, name: "Issue-1", pages: "1-55" },
                            { id: 213, name: "Issue-2", pages: "59-101" },
                            { id: 214, name: "Issue-3", pages: "117-154" },
                            { id: 215, name: "Issue-4", pages: "159-211" }
                        ]
                    },
                    {
                        year: 2005,
                        volume: 13,
                        issues: [
                            { id: 207, name: "Issue-1", pages: "9-63" },
                            { id: 208, name: "Issue-2", pages: "71-125" },
                            { id: 209, name: "Issue-3", pages: "129-183" },
                            { id: 210, name: "Issue-4", pages: "187-247" }
                        ]
                    }
                ].map((yearData, i) => (
                    <div key={i}>
                        <h5 className="text-lg font-semibold mb-2">
                            Year {yearData.year} (Volume {yearData.volume})
                        </h5>
                        <ul className="archive-full-list space-y-2">
                            {yearData.issues.map((issue) => (
                                <li key={issue.id} className="flex items-center">
                                    <Link
                                        href={`/Archive/Issue/${issue.id}`}
                                        className="btn btn-info flex items-center mr-2"
                                    >
                                        <i className="icon-file mr-1"></i> {issue.name}
                                    </Link>
                                    <span className="pages text-gray-600">({issue.pages})</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default page;