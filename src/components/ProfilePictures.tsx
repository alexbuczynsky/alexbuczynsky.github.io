import React from 'react';
import headShot from '../assets/head-shot.jpg';

export const ProfilePicture: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <img alt='ProfilePicture' {...props} src={headShot} />
  )
}