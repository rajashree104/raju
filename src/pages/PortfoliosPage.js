import React, { useState } from 'react'
import Title from '../components/Title'
import { MainLayout, InnerLayout } from "../style/Layouts"
import portfolios from '../data/portfolios';
import Menu from '../components/Menu';
import Button from '../components/Button';

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]
function PortfoliosPage() {

  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === 'All') {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter(item => item.category === button);
    setMenuItems(filteredData)
  }


  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />
      <InnerLayout>
        <Button filter={filter} buttons={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
    </MainLayout>

  )
}

export default PortfoliosPage