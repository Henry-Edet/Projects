// components/MDXComponents.tsx
'use client';

import NextImage, { ImageProps } from 'next/image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrettyCode from 'rehype-pretty-code';
import { useTheme } from 'next-themes';
import { useMemo } from 'react';
import * as React from 'react';

type CustomImageProps = ImageProps & { alt?: string };

const components = {
  img: (props: CustomImageProps) => (
    <NextImage
      {...props}
      alt={props.alt || ''}
      width={800}
      height={600}
      className="w-full md:w-3/4 mx-auto rounded-lg border"
      unoptimized={props.src?.toString().endsWith('.gif')}
    />
  ),
  Image: (props: CustomImageProps) => (
    <NextImage
      {...props}
      alt={props.alt || ''}
      width={800}
      height={600}
      className={`w-full h-auto rounded-lg ${props.className || ''}`}
      unoptimized={props.src?.toString().endsWith('.gif')}
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
          Your browser doesn’t support HTML5 video.
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

export function MDXContent({ source }: { source: string }) {
  const { resolvedTheme } = useTheme();

  const mdxSource = useMemo(() => {
    return serialize(source, {
      mdxOptions: {
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: resolvedTheme === 'dark' ? 'github-dark' : 'github-light',
              keepBackground: true,
              onVisitLine(node: { children: unknown[] }) {
                if (node.children.length === 0) {
                  node.children = [{ type: 'text', value: ' ' }];
                }
              },
            },
          ],
        ],
      },
    });
  }, [source, resolvedTheme]);

  const [rendered, setRendered] = React.useState<MDXRemoteSerializeResult<Record<string, unknown>> | null>(null);

  React.useEffect(() => {
    mdxSource.then(setRendered);
  }, [mdxSource]);

  if (!rendered) return <p className="text-center py-6">Loading content...</p>;

  return <MDXRemote {...rendered} components={components} />;
}
