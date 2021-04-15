
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','e0a'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','d4f'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','21b'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','b20'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','537'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','2fd'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','6fa'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','b94'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','c4a'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','eeb'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','227'),
  exact: true,
},
{
  path: '/docs/create-a-blog-post',
  component: ComponentCreator('/docs/create-a-blog-post','12e'),
  exact: true,
},
{
  path: '/docs/create-a-document',
  component: ComponentCreator('/docs/create-a-document','3f4'),
  exact: true,
},
{
  path: '/docs/create-a-page',
  component: ComponentCreator('/docs/create-a-page','486'),
  exact: true,
},
{
  path: '/docs/getting-started',
  component: ComponentCreator('/docs/getting-started','ef6'),
  exact: true,
},
{
  path: '/docs/markdown-features',
  component: ComponentCreator('/docs/markdown-features','f04'),
  exact: true,
},
{
  path: '/docs/thank-you',
  component: ComponentCreator('/docs/thank-you','3bd'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
