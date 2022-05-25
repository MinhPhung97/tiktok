import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faLanguage, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import AccountsItem from '~/components/AccountsItem';
import Menu from '~/components/Popper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';

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
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    //Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-tittle')}>Accounts</h4>
                                <AccountsItem />
                                <AccountsItem />
                                <AccountsItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button text plusIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
