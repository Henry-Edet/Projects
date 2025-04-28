import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// Fetch Blogger posts
async function getBloggerPosts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogger`);
    if (!res.ok) throw new Error('Failed to fetch Blogger posts');
    return await res.json();
  } catch (error) {
    console.error('Error fetching Blogger posts:', error);
    return [];
  }
}

// Get local MDX posts
function getLocalPosts() {
  const postsDir = path.join(process.cwd(), 'app/blog/posts');
  if (!fs.existsSync(postsDir)) return [];
  
  const files = fs.readdirSync(postsDir);
  return files.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      id: filename, // Use filename as ID for local posts
      slug: filename.replace(/\.mdx?$/, ''),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      isLocal: true // Flag to identify local posts
    };
  });
}

export default async function BlogPage() {
  const [bloggerPosts, localPosts] = await Promise.all([
    getBloggerPosts(),
    getLocalPosts()
  ]);

  // Combine and sort all posts by date (newest first)
  const allPosts = [...bloggerPosts, ...localPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Catching up on tech & what's trending!</h1>
      <div className="space-y-8">
        {allPosts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <Link 
              href={post.isLocal ? `/blog/${post.slug}` : post.url || '#'}
              target={post.isLocal ? undefined : '_blank'}
            >
              <h2 className="text-2xl font-bold hover:text-blue-600">
                {post.title}
                {!post.isLocal && (
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    External
                  </span>
                )}
              </h2>
              <p className="text-gray-600 mt-2">
                {post.excerpt || post.content?.substring(0, 150) + '...'}
              </p>
              <time className="text-sm text-gray-500">
                {new Date(post.date).toLocaleDateString()}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}