import client from '../../../blog/contentful';
import styles from './recipe.css';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default async function BlogPostPage({ params }) {
    const response = await client.getEntries({
        content_type: 'recipe',
        'fields.slug': params.slug
      });


    let bodyHTML = documentToHtmlString(response.items[0].fields.body);
    let ingredientsHTML = documentToHtmlString(response.items[0].fields.ingredients);

    return (
        <main className='recipeMain'>
            <div className='recipeContainer'>
                <h1>{response.items[0].fields.title}</h1>
                <img src={response.items[0].fields.image.fields.file.url}></img>
                <div className='leftAlignStuff'>
                    <h2 className='cookTime'>{'🕒 ' + response.items[0].fields.cookTime}</h2>
                    <div className='ingredients' dangerouslySetInnerHTML={ {__html: ingredientsHTML} }/>
                    <hr></hr>
                    <div className='instructions' dangerouslySetInnerHTML={ { __html: bodyHTML } }/>
                </div>
            </div>
        </main>
    )
}

export async function generateStaticParams() {
    const response = await client.getEntries({
        content_type: 'recipe',
    });
    
    const posts = response.items;
    return posts.map((post) => ({
      slug: post.fields.slug,
    }))
}