// app/[lng]/page.tsx
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { languages } from "../../../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <main>
      <Navbar />
      <Button>Click me</Button>
    </main>
  );
}
