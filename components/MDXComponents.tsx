// components/MDXComponents.tsx
'use client';

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
export async function MDXContent({ source }: { source: string }) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [
        [require('rehype-pretty-code'), { 
          theme: 'github-dark' 
        }]
      ],
    },
  });

  return (
    <MDXRemote
      {...mdxSource}
    />
  );
};