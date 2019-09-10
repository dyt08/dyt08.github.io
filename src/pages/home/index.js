import React from 'react';
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoReddit,
  IoLogoSteam,
  IoLogoTwitter,
  IoLogoGithub,
  IoMdSchool
} from 'react-icons/io';
// import Navbar from 'components/navbar';

import { Content, SocialMedia, IconSocialMedia } from './styles';

const socialMedia = [
  {
    type: 'facebook',
    url: 'https://www.facebook.com/dyt08',
    icons: <IoLogoFacebook />,
  },
  {
    type: 'github',
    url: 'https://github.com/dytid',
    icons: <IoLogoGithub />,
  },
  {
    type: 'instagram',
    url: 'https://www.instagram.com/dyt08',
    icons: <IoLogoInstagram />,
  },
  {
    type: 'twitter',
    url: 'https://twitter.com/ditxyz',
    icons: <IoLogoTwitter />,
  },
  {
    type: 'reddit',
    url: 'https://www.reddit.com/user/dyt08',
    icons: <IoLogoReddit />,
  },
  {
    type: 'steam',
    url: 'https://steamcommunity.com/id/ditxyz',
    icons: <IoLogoSteam />,
  },
  {
    type: 'school',
    url: 'http://50415190.student.gunadarma.ac.id/',
    icons: <IoMdSchool />,
  },
];
const Home = () => {
  return (
    <React.Fragment>
      <Content>
        <h4 className="title">Aditya Nugraha</h4>
        <SocialMedia>
          <br />
          <IconSocialMedia>
            {socialMedia.map((socialAccount, id) => (
              <a
                key={id}
                href={socialAccount.url}
                target="_blank"
                rel="noopener noreferrer">
                {socialAccount.icons}
              </a>
            ))}
          </IconSocialMedia>
        </SocialMedia>
      </Content>

    </React.Fragment >
  );
};

export default Home;
