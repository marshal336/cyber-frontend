
import { Footer, Header } from "@/components";

export default function BaseLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    );
}
