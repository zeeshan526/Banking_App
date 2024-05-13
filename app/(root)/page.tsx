import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '../../components/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn ={ firstName:"Zeeshan"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
           account={[]}
           totalBanks={1}
           totalCurrentBalance={3232.32}
          />
        </header>
      </div>
    </section>
  )
}

export default Home
