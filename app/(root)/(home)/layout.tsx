import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="relative">
            Navbar

            <div className="flex"></div>
            {children}
            Footer
        </main>
    );
};

export default HomeLayout;
