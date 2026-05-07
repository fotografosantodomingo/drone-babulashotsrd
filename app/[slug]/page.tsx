import { notFound } from "next/navigation";
import { DroneLandingPage } from "@/components/DronePage";
import { allPages, canonicalUrl, findPage, pathFor } from "@/lib/droneData";

export function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = findPage(params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: canonicalUrl(pathFor(page)),
      languages: { "es-DO": canonicalUrl(pathFor(page)), en: canonicalUrl(pathFor(page, "en")) }
    },
    openGraph: { title: page.title, description: page.description, url: canonicalUrl(pathFor(page)) }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = findPage(params.slug);
  if (!page) notFound();
  return <DroneLandingPage page={page} locale="es" />;
}
