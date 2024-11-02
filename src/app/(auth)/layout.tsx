import { QueryProvider } from "@/providers";
import { Toaster } from "sonner";



export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className="bg-stone-500/50 min-h-screen flex flex-col items-center justify-center m-auto">
            <QueryProvider>
                {children}
                <Toaster expand />
            </QueryProvider>
        </main>
    );
}
