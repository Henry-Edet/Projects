import { serialize } from 'next-mdx-remote/serialize';


const mdxSource = await serialize(content, {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          keepBackground: true,
          theme: 'github-dark',
          defaultLang: 'plaintext',
        }
      ]
    ]
  }
});

return (
  <MDXRemote {...mdxSource} components={components} />
);
