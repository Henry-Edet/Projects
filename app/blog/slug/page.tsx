import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'app/blog/posts');
  const files = fs.readdirSync(postsDir);
  return files.map((file) => ({
    slug: file.replace(/\.mdx?$/, ''),
  }));
}
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postPath = path.join(process.cwd(), `app/blog/posts/${params.slug}.mdx`);
  
  if (!fs.existsSync(postPath)) {
    return notFound();
  }

  const fileContents = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(fileContents);
  const mdxSource = await serialize(content);

  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <div className="prose dark:prose-invert">
        <MDXRemote {...mdxSource} />
      </div>
    </article>
  );
};