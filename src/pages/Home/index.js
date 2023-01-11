import Songs from '../../components/Songs/SongInfo';
import className from 'classnames/bind';
import styles from './Home.module.css';
import TrackItems from '~/components/TrackLists/TrackItems';
import PlayListBanner from '~/components/PlayListBanner/PlayListBanner';

const cx = className.bind(styles);
const ARTIST = [
    {
        name: 'thieu',
        img: 'https://i1.sndcdn.com/avatars-000791238640-qf17sq-t120x120.jpg',
    },
    {
        name: 'D Empty',
        img: 'https://i1.sndcdn.com/avatars-000277189478-i6s270-t120x120.jpg',
    },
    {
        name: 'DuckDaz',
        img: 'https://i1.sndcdn.com/avatars-Amc4ZIdrsLUOHVpG-psSc0A-t120x120.jpg',
    },
];
function Home(handleSetSong) {
    window.scrollTo(0, 0);
    return (
        <div className={cx('container')}>
            <TrackItems handleSetSong={handleSetSong.handleSetSong} Songs={Songs.slice(0, 8)} title="Recently Played" />
            <TrackItems
                handleSetSong={handleSetSong.handleSetSong}
                Songs={Songs.slice(8, 16)}
                title="More of what you like"
            />
            <TrackItems
                handleSetSong={handleSetSong.handleSetSong}
                Songs={Songs.slice(16, 24)}
                title="Charts: Top 50"
                suptitle="The most played tracks on SoundCloud this week"
            />
            <TrackItems
                handleSetSong={handleSetSong.handleSetSong}
                Songs={Songs.slice(20, 27)}
                title="Charts: New & hot "
                suptitle="Up-and-coming tracks on SoundCloud"
            />
            <PlayListBanner
                handleSetSong={handleSetSong.handleSetSong}
                title="Mixed for thieu"
                background_gradient_1
                img="./asset/img/list_banner/list_banner_2.jpg"
                artist={ARTIST}
            />
            <TrackItems handleSetSong={handleSetSong.handleSetSong} Songs={Songs.slice(0, 8)} title="Chill" />
            <PlayListBanner
                handleSetSong={handleSetSong.handleSetSong}
                title="SoundCloud Weekly"
                background_gradient_2
                img="./asset/img/list_banner/list_banner_1.jpg"
                artist={ARTIST}
            />
        </div>
    );
}

export default Home;
