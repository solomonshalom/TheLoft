import * as React from 'react';
import Link from 'next/link';
import { Text } from 'theme-ui';

const Logo: React.FC = () => (
  <Link href="/" passHref>
    <Text
      as="a"
      tabIndex={-1}
      sx={{
        display: 'inline',
        color: 'primary',
        textDecoration: 'none',

        // ordinarily, this would be a big no-no, but since this can't be
        // accessed with a keyboard anyhow, it should be fine.
        '&:focus': {
          outline: 0,
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 281 241"
        width="25"
        height="21"
        preserveAspectRatio="xMinYMid"
      >
        <path style={{ strokeWidth: 0, fill: '#000' }} d="M491.5 249.9C491.5 116.9 383.6 9 250.6 9S10.2 116.4 9.7 249.1c13.2.3 25.4.6 39.5.6 0-53.7 21-104.2 59-142.2s88.6-59 142.4-59 104.4 21 142.4 59 59 88.6 59 142.4-21 104.4-59 142.4-88.6 59-142.4 59h-.3c.9 19.8 1 19.9 1.5 39.5 132.5-.6 239.7-108.2 239.7-240.9"/>
        <path style={{ strokeWidth: 0, fill: 'none' }} d="m9.7 249.2 39.6.2"/>
        <path style={{ strokeWidth: 0, fill: '#000' }} d="M8.5 260.6c.2 13 .1 25.5.1 38.5h193.5l.2 191.9h38.2l.2-230.3H8.5Z"/>
        <path style={{ fill: 'none', stroke: '#000', strokeMiterlimit: 10, strokeWidth: 46 }} d="M217.4 280 38.8 461.2"/>
      </svg>
    </Text>
  </Link>
);

export default Logo;
