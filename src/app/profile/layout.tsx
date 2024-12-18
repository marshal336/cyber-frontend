import { Footer, Header } from "@/components";
import { QueryProvider } from "@/providers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cyber Shop | Profile",
    description: "Generated by create next app",
};


export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col min-h-screen ">
            <QueryProvider >
                <Header isValidProfileIcon={false} />
                {children}
                <Footer />
            </QueryProvider>
        </main>
    );
}
