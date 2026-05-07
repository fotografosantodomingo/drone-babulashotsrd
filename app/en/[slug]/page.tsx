import { notFound } from "next/navigation";
import { DroneLandingPage } from "@/components/DronePage";
import { allPages, canonicalUrl, findPage, pathFor } from "@/lib/droneData";

export function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.enSlug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const page = findPage(params.slug, "en");
  if (!page) return {};
  return {
    title: page.enTitle,
    description: page.enDescription,
    alternates: {
      canonical: canonicalUrl(pathFor(page, "en")),
      languages: { "es-DO": canonicalUrl(pathFor(page)), en: canonicalUrl(pathFor(page, "en")) }
    },
    openGraph: { title: page.enTitle, description: page.enDescription, url: canonicalUrl(pathFor(page, "en")) }
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = findPage(params.slug, "en");
  if (!page) notFound();
  return <DroneLandingPage page={page} locale="en" />;
}
