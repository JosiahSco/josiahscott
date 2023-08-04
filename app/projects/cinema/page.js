import VideoPlayer from '../../../components/VideoPlayer';
import { fetchPlaylistData } from '../cinema/youtubeAPI'
import styles from './page.module.css'
import Image from 'next/image';

export default async function Cinema() {
    const PLAYLIST_ID = 'PL521-9iVx7x1uUoM5dyT59KMJCfmRhGfg'; // Replace with the ID of your public domain movies playlist

    async function getVideoIds() {
        const playlistItems = await fetchPlaylistData(PLAYLIST_ID);
        //console.log(playlistItems.map((item) => item.snippet.resourceId.videoId))
        return playlistItems.map((item) => item.snippet.resourceId.videoId);
    }

    return (
        <main className={styles.main}>
            <Image
                className={styles.curtains}
                src={"/curtain.png"}
                width={1920}
                height={1080}
                alt="curtain"
            />
            <VideoPlayer className={styles.videoPlayer} videoIds={await getVideoIds()} />
        </main>
    );
}
