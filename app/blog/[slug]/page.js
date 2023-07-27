import client from '../contentful'
import styles from './page.module.css'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default async function BlogPostPage({ params }) {
    const response = await client.getEntries({
        content_type: 'blogPage',
        'fields.slug': params.slug
      });

    console.log(documentToHtmlString(response.items[0].fields.body))

    return (
        <main className={styles.main}>
            <div>
                <div>
                    {response.items[0].fields.title}
                </div>
                <div dangerouslySetInnerHTML={ { __html: documentToHtmlString(response.items[0].fields.body) } }/>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    const response = await client.getEntries({
        content_type: 'blogPage',
    });
    
    const posts = response.items;
    return posts.map((post) => ({
      slug: post.fields.slug,
    }))
}

// export async function getStaticPaths() {
//     const response = await client.getEntries({
//       content_type: 'blogPage'
//     });
  
//     const paths = response.items.map((post) => ({
//       params: { slug: post.fields.slug }, 
//     }));
  
//     return {
//       paths,
//       fallback: false,
//     };
//   }