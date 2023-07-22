import styles from './page.module.css'

export default function Blog({ posts }) {
    return (
        <main className={styles.main}>
         <h1>This is where the blog will go</h1>
         <p>I will display previews of all blog posts as cards. 
            The cards will act as links that take you to josiahscott.dev/blog/postID.
            To write and host blog content I will be using Contentful.
        </p>
         
        </main>
    )
}