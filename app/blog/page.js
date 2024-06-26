import styles from './page.module.css'
import client from './contentful';
import Link from 'next/link';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

async function getPosts() {
    const contClient = client;
    const resp = await contClient.getEntries({ content_type: 'blogPage' });
    return resp.items
}

export default async function Blog() {
    const posts = await getPosts();
    return (
        <main className={styles.main}>
            {/* <h1>Blog Posts</h1> */}
            <div className={styles.postPreviews}>
                {posts.map(post => (
                    // <Link key={post.fields.slug} href={'blog/' + post.fields.slug}>
                    <div className={styles.post} key={post.sys.id}>
                        <div className={styles.postLeft}>
                            <h2>
                                {post.fields.title}
                            </h2>
                            <p>{post.fields.date}</p>
                            <p>{ }</p>
                        </div>
                        <div className={styles.postRight}>
                            <div className={styles.previewText}>
                                {post.fields.preview}...
                            </div>
                            <Link className={styles.readMore} href={'blog/' + post.fields.slug}>
                                Read More
                            </Link>
                        </div>

                    </div>
                    //</Link>
                ))}
            </div>
        </main>
    )
}