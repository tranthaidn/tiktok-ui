import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';



const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div  tabIndex = "-1" {...props}>
                <PopperWrapper>
                    <div className = {cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        )
    };

    return (
        <div>
            <Tippy
            interactive
            // visible
            offset={[-20, 0]}
            delay={[800, 0]}
            placement = 'bottom'
            render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/90b5aa925bb074aee22cc27c763f931b~c5_100x100.jpeg?x-expires=1668261600&x-signature=AQJlRssMp50izATq51Kwt2Aee40%3D"
                        alt="avt"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>quocnguye</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Nguyễn Quốc</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
