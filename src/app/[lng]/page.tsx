import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { languages } from "../../../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function Home({ params }: { params: { lng: string } }) {
  const { lng } = params;

  return (
    <main>
      <Navbar />
      <Button>Click me</Button>
    </main>
  );
}
