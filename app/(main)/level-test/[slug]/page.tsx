import TestEngine from "@/components/test/TestEngine";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function AssessmentPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="min-h-screen py-12">
      <TestEngine slug={slug} />
    </main>
  );
}