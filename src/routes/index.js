import routesConfig from '~/config/routes';

// Layouts
// import HeaderOnly from '~/components/Layouts';

// Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

// Fill này mục đích để sử dụng cho case nhiều route
// public route dùng cho k cần đăng nhập vẫn sử dụng

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout:null},
    { path: routesConfig.search, component: Search },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
