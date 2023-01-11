import Home from '~/pages/Home';
import Feed from '~/pages/Feed';
import Library from '~/pages/Library';
import Upload from '~/pages/Upload';
import NoSidebar from '~/layouts/components/NoSidebar';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/Feed', component: Feed, layout: NoSidebar },
    { path: '/you', component: Library, layout: NoSidebar },
    { path: '/Upload', component: Upload, layout: NoSidebar },
    { path: '/trynextpro', component: Home },
    { path: '/profile', component: Home },
    { path: '/notification', component: Home },
    { path: '/messages', component: Home },
    { path: '/setting', component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
