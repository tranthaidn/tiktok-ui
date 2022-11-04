import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

// Fill này mục đích để sử dụng cho case nhiều route
// public route dùng cho k cần đăng nhập vẫn sử dụng

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/@:nickname', component: Profile },
    { path: '/upload', component: Upload, layout:null},
    { path: '/search', component: Search },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
