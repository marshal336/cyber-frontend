import { QueryProvider } from "@/providers";
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
    title: 'Cyber Shop | Auth'
}

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="min-h-screen flex flex-col items-center justify-center m-auto">
            <QueryProvider>
                {children}
            </QueryProvider>
        </main>
    );
}
