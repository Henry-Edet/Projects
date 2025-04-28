import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'app/blog/posts');
  try {
    const files = fs.readdirSync(postsDir);
    return files.map((file) => ({
      slug: file.replace(/\.mdx?$/, ''),
    }));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const postPath = path.join(
    process.cwd(),
    'app/blog/posts',
    `${params.slug}.mdx`
  );

  if (!fs.existsSync(postPath)) {
    return notFound();
  }

  const fileContents = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}