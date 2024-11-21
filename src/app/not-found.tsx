import { Container, Footer, Header } from "@/components";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col flex-1">
      <Header />
      <div className="">
        <Container className="flex text-center lg:my-[100px] px-6 my-[50px] justify-center items-center flex-col gap-4">
            <h1 className="lg:text-7xl xs:text-4xl text-lg font-bold">No Found Page :(</h1>
          <Link href="/">Return Home</Link>
        </Container>
      </div>
      <Footer />
    </div>
  );
}
