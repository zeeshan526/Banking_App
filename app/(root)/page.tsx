import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '../../components/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn ={ firstName:"Zeeshan",lastName:"Ali",email:"Zeeshanali@gmail.com"}
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
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:323.33},{currentBalance:883.33}]}
      />
    </section>
  )
}

export default Home
