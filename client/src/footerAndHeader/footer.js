import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { IconButton } from '@material-ui/core'

const Footer = () => {

    return (
        <div >
            <a href='https://www.instagram.com/sapirtaub/?hl=en'>
                <IconButton >
                    <InstagramIcon fontSize='large' />
                </IconButton>
            </a>
            <a href='https://www.facebook.com/sapir.taub'>
                <IconButton>
                    <FacebookIcon fontSize='large' />
                </IconButton>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+972547655011">
                <IconButton>
                    <WhatsAppIcon fontSize='large' />
                </IconButton>
            </a>
        </div>
    )
}
export default Footer