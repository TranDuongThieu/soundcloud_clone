import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { HeartIcon, UsersIcon2 } from '~/components/Icons/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LIBRARY_TRACKS from '~/components/Songs/LibraryTracks';
export const SIDEBAR_MENU = [
    {
        title: {
            icon: <UsersIcon2 />,
            content: 'Artists you should follow',
        },
        button: {
            icon: <FontAwesomeIcon icon={faRotateRight} />,
            content: 'Refesh list',
        },
    },
    {
        title: {
            icon: <HeartIcon />,
            content: 'likes',
        },
        button: {
            content: 'View all',
        },
    },
    {
        title: {
            icon: <FontAwesomeIcon icon={faCalendar} />,
            content: 'Listening History',
        },
        button: {
            content: 'View all',
        },
    },
];

export const SIDEBAR_ARTISTS = [
    {
        img: './asset/img/artists/hieuthu2.jpg',
        name: 'HIEUTHUHAI',
        followers: '53.4K',
        tracks: 16,
    },
    {
        img: './asset/img/artists/hustlangwino.jpg',
        name: 'Hustlang Winno',
        followers: '19.9K',
        tracks: 32,
    },
    {
        img: './asset/img/artists/tlinh.jpg',
        name: 'tlinh',
        followers: '66.4K',
        tracks: 22,
    },
];
