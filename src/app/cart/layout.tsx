import { Footer, Header } from "@/components";
import { QueryProvider } from "@/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Profile",
    description: "Generated by create next app",
};


export default function CartLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col min-h-screen ">
            <QueryProvider >
                <Header isValidCartIcon={false} />
                {children}
                <Footer />
            </QueryProvider>
        </main>
    );
}
