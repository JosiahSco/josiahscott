import styles from './page.module.css'

// export async function getStaticProps() {
//     const contClient = client;
//     const resp = await contClient.getEntries({ content_type: 'blogPage' });
//     console.log(resp)

//     return {
//         props: {
//             posts: resp.items
//         }
//     }
// }

export default function Blog() {
    return (
        <main className={styles.main}>
         <h1>This is where the blog post previews will go</h1>
        </main>
    )
}