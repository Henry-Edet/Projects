// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import path from 'path';
import fs from 'fs/promises'; // ✅ use promises
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import GiscusComments from '@/components/Giscus';




export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'app/blog/posts');
  try {
    const files = await fs.readdir(postsDir);
    return files.map((file) => ({
      slug: file.replace(/\.mdx?$/, ''),
    }));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

//Proxy Promise — a special kind of async object that looks like an object but needs to be awaited because it's dynamically injected by Next.js in certain scenarios.
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const postPath = path.join(
    process.cwd(),
    'app/blog/posts',
    `${resolvedParams.slug}.mdx`
  );
  console.log('slug:', resolvedParams.slug);

  try {
    const file = await fs.readFile(postPath, 'utf8');
    const { content, data } = matter(file);

    return (
      <article className="w-full py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
        <div className="prose prose-md dark:prose-invert mx-auto px-4">
          <MDXRemote source={content} />
        </div>
        <GiscusComments />
      </article>
    );
  } catch (err) {
    console.log('Error reading post file:', err);
    return notFound();
  }
}
