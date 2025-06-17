// components/Layout.tsx
import React from 'react';

type LayoutProps = {
    sidebar: React.ReactNode;
    children: React.ReactNode;
};

const Layout = ({ sidebar, children }: LayoutProps) => {
    return (
        <div className="flex w-full">
            <aside className="w-[23%] min-w-[200px] ">
                {sidebar}
            </aside>
            <main className="w-[77%] p-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;
