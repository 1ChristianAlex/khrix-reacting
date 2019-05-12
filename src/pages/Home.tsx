import React from 'react';
import { Banners } from '../components/home-components/banner-home';
import { FrameworksUsed } from '../components/home-components/FrameworksHome';
import { WhyBholder } from '../components/home-components/WhyBholder';
import { LastProject } from '../components/home-components/LastProject';
import { ComercialService } from '../components/home-components/ComercialService';
import { ContactUs } from '../components/home-components/ContactUs';

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
          <LastProject />
          <ComercialService />
          <ContactUs />
        </main>
      </>
    );
  }
}
