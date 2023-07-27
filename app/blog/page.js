import styles from './page.module.css'
import client from './contentful';
import Link from 'next/link';

async function getPosts() {
    const contClient = client;
    const resp = await contClient.getEntries({ content_type: 'blogPage' });
    return resp.items
}

export default async function Blog() {
    const posts = await getPosts();
    //console.log(posts)
    return (
        <main className={styles.main}>
         {/* <h1>Blog Posts</h1> */}
         <div className={styles.postPreviews}>
         {posts.map(post => (
            <Link key={post.fields.slug} href={'blog/' + post.fields.slug}>
            <div className={styles.post} key={post.sys.id}>
                <h2>
                {post.fields.title}
                </h2>
                
            </div>
            </Link>
         ))}
         </div>
        </main>
    )
}