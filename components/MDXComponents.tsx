// components/MDXComponents.tsx
'use client';

import NextImage from 'next/image'; // Renamed to avoid conflict
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';
import { useTheme } from 'next-themes';

const components = {
  // Handle markdown images: ![Alt text](path)
  img: (props: any) => (
      <NextImage
        {...props}
        alt={props.alt || ''}
        width={800}
        height={600}
        className="w-full md:w-3/4 mx-auto rounded-lg border"
        unoptimized={props.src?.endsWith('.gif')}
      />
  ),
  // Handle JSX <Image> component
  Image: (props: any) => (
    <NextImage
      {...props}
      alt={props.alt || ''}
      width={800}
      height={600}
      className={`w-full h-auto rounded-lg ${props.className || ''}`}
      unoptimized={props.src?.endsWith('.gif')}
    />
  ),
  Video: ({ src, caption }: { src: string; caption?: string }) => (
    <div className="my-6">
      <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
        <video 
          controls 
          className="w-full h-full object-contain"
          poster={src.replace('.mp4', '.jpg')}
        >
          <source src={src} type="video/mp4" />
          Your browser doesn't support HTML5 video.
        </video>
      </div>
      {caption && (
        <p className="text-center text-sm text-gray-500 mt-2">{caption}</p>
      )}
    </div>
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className="relative">
      {props.children}
    </pre>
  ),
};

export async function MDXContent({ source }: { source: string }) {
  const { resolvedTheme } = useTheme();

  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: resolvedTheme === 'dark' ? 'github-dark' : 'github-light',
            keepBackground: true,
            onVisitLine(node: any) {
              if (node.children.length === 0) {
                node.children = [{ type: 'text', value: ' ' }];
              }
            },
          },
        ],
      ],
    },
  });

  return <MDXRemote {...mdxSource} components={components} />;
}