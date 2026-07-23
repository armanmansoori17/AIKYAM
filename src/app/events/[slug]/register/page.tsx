import { notFound } from "next/navigation";
import { events } from "@/lib/events-data";
import RegisterForm from "@/components/RegisterForm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const ev = events.find((e) => e.slug === slug);
  if (!ev) return { title: "Not Found" };
  return { title: `Register for ${ev.name} | AIKYAM 2K26` };
}

export default async function RegisterPage({ params }: Props) {
  const { slug } = await params;
  const ev = events.find((e) => e.slug === slug);
  if (!ev) notFound();

  return <RegisterForm event={ev} />;
}
