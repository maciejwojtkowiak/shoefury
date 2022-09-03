import { Fragment } from 'react';
import { HiLightningBolt } from 'react-icons/hi';

const LogoIcon = () => {
  return (
    <Fragment>
      <svg width="0" height="0">
        <linearGradient
          id="orange-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#fdba74" offset="0%" />
          <stop stopColor="#f97316" offset="100%" />
        </linearGradient>
      </svg>
      <HiLightningBolt style={{ fill: 'url(#orange-gradient)' }} size={48} />
    </Fragment>
  );
};

export default LogoIcon;
