import React from 'react';
import { Banners } from '../components/home-components/banner-home';
import { FrameworksUsed } from '../components/home-components/FrameworksHome';
import { WhyBholder } from '../components/home-components/WhyBholder';

export class Home extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <Banners />
        <main className="main-section">
          <FrameworksUsed />
          <WhyBholder />
        </main>
      </>
    );
  }
}
