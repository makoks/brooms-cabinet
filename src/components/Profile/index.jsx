import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import { WorkProfile } from './WorkProfile';
import { HomeProfile } from './HomeProfile';
import './styles.css';

export const Profile = () => {
  const theme = useContext(ThemeContext);
  return (
    <div className="cabinet__profile">
      {theme === 'work' ? <WorkProfile /> : <HomeProfile />}
    </div>
  );
};
