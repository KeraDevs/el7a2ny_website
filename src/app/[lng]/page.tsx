// app/[lng]/page.tsx
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { languages } from "../../../i18n/settings";

// Generate static params for all supported languages
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4">
        <Button>Click me</Button>
      </main>
    </>
  );
}
