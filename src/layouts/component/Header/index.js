import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowRightFromBracket,
    faCoins,
    faEllipsisVertical,
    faGear,
    faLanguage,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import images from '~/assets/images';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon } from '~/components/Icon';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '../Search';
import styles from './Header.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        titile: 'English',
        children: {
            titile: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    titile: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    titile: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        titile: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        titile: 'Keyboard shortcuts',
    },
];

function Header() {
    const userCurrent = true;

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            titile: 'View profile',
            to: '/@melody',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            titile: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            titile: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            titile: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </Link>

                <Search />

                <div className={cx('action')}>
                    <Button text plusIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {userCurrent ? (
                        <>
                            <Tippy content="Message">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox">
                                <button className={cx('actions-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={userCurrent ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {userCurrent ? (
                            <Image
                                className={cx('user-avarta')}
                                src="https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1662345059033093~c5_100x100.jpeg?x-expires=1653717600&x-signature=pfRKYgkTCM3w57%2BKjjiL6SWiexw%3D"
                                alt="meloddymarks"
                                fallback="https://genk.mediacdn.vn/2020/1/7/photo-1-1578368300431366420427.jpg"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
