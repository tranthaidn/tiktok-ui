import config from '~/config';

// Layouts
import  HeaderOnly  from '~/layouts/HeaderOnly';

// Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

// Fill này mục đích để sử dụng cho case nhiều route
// public route dùng cho k cần đăng nhập vẫn sử dụng

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly},
    { path: config.routes.search, component: Search, layout: null},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
