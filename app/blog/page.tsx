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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-10 text-center sm:text-left">Catching up on tech & what's trending!</h1>
      <div className="space-y-8">
        {allPosts.map((post) => (
          <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 sm:pb-8 transition-all">
            <Link 
              href={post.isLocal ? `/blog/${post.slug}` : post.url || '#'}
              target={post.isLocal ? undefined : '_blank'}
            >
              <h2 className="text-xl sm:text-2xl font-semibold hover:text-blue-600 transition-colors">
                {post.title}
                {!post.isLocal && (
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    External
                  </span>
                )}
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base line-clamp-3">
                {post.excerpt || post.content?.substring(0, 150) + '...'}
              </p>
              <time className="text-xs sm:text-sm text-gray-500 block mt-2">
                {new Date(post.date).toLocaleDateString()}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}