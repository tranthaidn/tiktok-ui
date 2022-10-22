import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from '~/components/AccountItem/AccountItem.module.scss';

const cx =classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/68539fa0a7334eba095bcd494efa88be~c5_100x100.jpeg?x-expires=1666533600&x-signature=2Rm6%2BEpSaqrI2UzyUBbyo7ht03g%3D" alt='Hoaa' />
            <div className= {cx('info')}>
                <h4 className = {cx('name')}> 
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} /> 
                </h4>
                <span className={cx('username')}> nguyenvana</span>
            </div>
        </div>
      );
}

export default AccountItem;