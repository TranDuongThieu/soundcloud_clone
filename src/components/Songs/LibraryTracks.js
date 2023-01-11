import Songs from './SongInfo';
const LIBRARY_TRACKS = [
    {
        title: 'Recently played',
        tracks: Songs.slice(0, 6),
        type: 'none',
    },
    {
        title: 'Likes',
        tracks: Songs.filter((song) => song.isHeart),
    },
    {
        title: 'Playlists',
        tracks: Songs.slice(13, 16),
        playlists: true,
    },
    {
        title: 'Albums',
        tracks: Songs.slice(17, 21),
    },
    {
        title: 'Liked Stations',
        tracks: Songs.slice(17, 21),
    },
    {
        title: 'Following',
        tracks: Songs.slice(17, 21),
    },
];
export default LIBRARY_TRACKS;
