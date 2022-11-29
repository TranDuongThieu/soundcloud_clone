import Songs from './SongInfo';
import className from 'classnames/bind';
import styles from './Home.module.css';
import TrackItems from '~/components/TrackLists/TrackItems';
import PlayListBanner from '~/components/PlayListBanner/PlayListBanner';
const cx = className.bind(styles);
function Home(handleSetSong) {
    return (
        <div className={cx('container')}>
            <TrackItems handleSetSong={handleSetSong} Songs={Songs.slice(0, 8)} title="Recently Played" />
            <TrackItems handleSetSong={handleSetSong} Songs={Songs.slice(8, 16)} title="More of what you like" />
            <TrackItems
                handleSetSong={handleSetSong}
                Songs={Songs.slice(16, 24)}
                title="Charts: Top 50"
                suptitle="The most played tracks on SoundCloud this week"
            />
            <TrackItems
                handleSetSong={handleSetSong}
                Songs={Songs.slice(20, 27)}
                title="Charts: New & hot "
                suptitle="Up-and-coming tracks on SoundCloud"
            />
            <PlayListBanner
                title="Mixed for thieu"
                background_gradient_1
                img="./asset/img/list_banner/list_banner_2.jpg"
            />
        </div>
    );
}

export default Home;
