import {
    faCircleQuestion, faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard, faPlus,
    faSignOut, faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon, } from '~/components/Icon';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vn',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback &Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coin',
            to: '/getcoin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];
 
    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                           <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline>
                                <FontAwesomeIcon icon={faPlus} />
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f87143fa65248a87c0af313671a196ed~c5_100x100.jpeg?x-expires=1667131200&x-signature=lkbPQeArCE6%2BGO6JmFAcate1sh0%3D"
                                className={cx('user-avatar')}
                                alt="Nguyen Van A"
                                fallback = "https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
