import { Button } from "@/components/ui/button";

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
//export const instant = false;

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <span>Shadcn button</span>
      <br />
      <Button>I am a shadcn button</Button>
    </>
  );
}
