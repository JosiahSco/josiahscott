import styles from './recipes.css'
import client from '../../blog/contentful'

async function getPosts() {
    const contClient = client;
    const resp = await contClient.getEntries({ content_type: 'recipe' });
    // console.log(process.env.CONTENTFUL_ACCESS_TOKEN);
    return resp.items
}

export default async function Recipes() {
    const posts = await getPosts();

    const getFontSize = (text) => {
        let length = text.length;
        return (1 / length) * 500 + 20
    }

    return (
        <div className='recipesMain'>
            {/* <h1>Recipe Book (work in progress)</h1> */}
            {posts.map(post => (
                <a href={'/projects/recipes/' + post.fields.slug}>
                    <div className='recipeCard'>
                        <div className='imageContainer'> 
                            <img className='image' src={post.fields.image.fields.file.url}></img>
                        </div>
                        <div className='cardBottom'>
                            <h2 style={{fontSize: getFontSize(post.fields.title)}}>{post.fields.title}</h2>
                            <p>🕒{post.fields.cookTime}</p>
                        </div>
                    </div>
                </a>
            )
            )}
        </div>
    )
}