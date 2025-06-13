// app/api/blogger/route.ts
import { NextResponse } from 'next/server';

type BloggerPost = {
  id: string;
  title: string;
  content: string;
  published: string;
  url: string;
};

export async function GET() {
  const BLOGGER_API_KEY = process.env.BLOGGER_API_KEY;
  const BLOG_ID = process.env.NEXT_PUBLIC_BLOG_ID;

  try {
    const res = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${BLOGGER_API_KEY}`
    );
    
    if (!res.ok) throw new Error('Blogger API failed');
    
    const data = await res.json();

    const formattedPosts = data.items.map((post: BloggerPost) => ({
      id: post.id,
      title: post.title,
      content: post.content,
      date: post.published,
      url: post.url,
    }));

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('API route failed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Blogger posts' },
      { status: 500 }
    );
  }
}
