import { notFound } from "next/navigation";
import { DroneLandingPage } from "@/components/DronePage";
import { allPages, canonicalUrl, findPage, pathFor } from "@/lib/droneData";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = findPage(slug);
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

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = findPage(slug);
  if (!page) notFound();
  return <DroneLandingPage page={page} locale="es" />;
}
