import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
//export const instant = false;

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
