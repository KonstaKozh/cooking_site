import React from 'react';
import { footer, content, footerWrapper } from './Footer.module.css';
import Link from '@material-ui/core/Link';
import { grey } from '@material-ui/core/colors';

const Footer = () => {
    const preventDefault = (event) => event.preventDefault();
    return (
        <div className={footer}>
            <div className={footerWrapper}>
                <div
                    className={content}
                    style={{ display: 'flex', alignItems: 'center' }}
                >
                    <i
                        className='fa fa-youtube fa-2x'
                        style={{ padding: 10 }}
                        href='https://youtube.com'
                        target='_blank'
                    ></i>
                    <i
                        className='fa fa-vk'
                        style={{ padding: 10 }}
                        href='https://vk.com'
                        target='_blank'
                        rel='nofollow'
                    ></i>
                    <i
                        className='fa fa-odnoklassniki'
                        style={{ padding: 10 }}
                        href='https://ok.ru'
                        target='_blank'
                        rel='nofollow'
                    ></i>
                    <i
                        className='fa fa-skype'
                        style={{ padding: 10 }}
                        href='https://skype.ru'
                        target='_blank'
                        rel='nofollow'
                    ></i>
                    <i
                        className='fa fa-paper-plane'
                        style={{ padding: 10 }}
                        href='https://telegram.org'
                        target='_blank'
                        rel='nofollow'
                    ></i>
                </div>
                <Link
                    href='#'
                    onClick={preventDefault}
                    style={{ color: grey[300] }}
                >
                    email@email.com
                </Link>
                <p className={content}>Coolинари © 2021. Все Права Защищены.</p>
            </div>
        </div>
    );
};

export default Footer;
