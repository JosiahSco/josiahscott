'use client'
import styles from './lastUpdated.css'
import { Octokit } from "@octokit/core";
import { useEffect } from "react";

export default function LastUpdated() {

    useEffect(() => {
        const divWrapper = document.querySelector('#lastUpdatedWrapper');
        const link = document.createElement('a');

        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        })

        async function fetchData() {
            try {
                const commit = await octokit.request(
                    'GET /repos/JosiahSco/josiahscott/commits',
                    {owner: 'JosiahSco', repo: 'josiahscott', per_page: 1}
                );
                console.log(commit);
                const date = new Date(commit.data[0].commit.author.date);
                const dateFormatted = new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                }).format(date);
                link.href = `${commit.data[0].html_url}`;
                link.target = "_blank";
                link.innerHTML = `Last Updated: ${dateFormatted}`;
                divWrapper.appendChild(link);
                
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [])
    
    return (
        <div id="lastUpdatedWrapper"></div>
    )
}