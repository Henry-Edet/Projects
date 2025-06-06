//this code is used to integrate Giscus comments into a React component
'use client';

import { useEffect } from 'react';

export default function GiscusComments() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.setAttribute('data-repo', 'Henry-Edet/Projects');
    script.setAttribute('data-repo-id', 'R_kgDOOSWOjg');
    script.setAttribute('data-category', 'Announcements');
    script.setAttribute('data-category-id', 'DIC_kwDOOSWOjs4Cq50F');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'preferred_color_scheme');
    script.setAttribute('data-lang', 'en');

    const commentBox = document.getElementById('giscus-comments');
    if (commentBox && !commentBox.hasChildNodes()) {
      commentBox.appendChild(script);
    }
  }, []);

  return <div id="giscus-comments" className="mt-10" />;
}
