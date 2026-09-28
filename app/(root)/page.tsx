import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
    <>
        <Navbar/>

        <h1 className="font-poppins">Home page</h1>
        <span className="font-unbounded">Shadcn button</span>
        <br />
        <Button>I am a shadcn button</Button>
        <main></main>
        <Footer/>
    </>
  );
}
