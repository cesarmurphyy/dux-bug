import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class OurWork extends React.Component {
  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page" title="Our Work" />
      </BaseLayout>
    );
  }
}

export default OurWork;
