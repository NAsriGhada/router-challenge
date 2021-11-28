import React from 'react'
import Navigation from './Navigation'

const Header = () => {
    return (
        <div className="header">
                    <Navigation />
          <div className="containers">
          <img className="logo" src="https://occ-0-784-778.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABf30nqtOUIDUuKWaOWcNSIn7iMn3PVVc7damzgaLgr4A5qLXpTkoF7Cp47T7fQgxc0Y7tvgGwX2vtJoJBy4twESjmAWtsk1aN-xWNBI39kF8cIZbvlVkNxJJdEhbMuvrjpLqfsYqw46NOYIP6H_URb1oEmH42pzF-BKNAEPpjRVpPg.png?r=43f" alt="witcher"/>
          <h1>The Witcher</h1>
          <br/>
          <h2>2019 | 18+ | 1 Season | US TV Shows</h2>
          <h1>Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his <br/> destiny in a turbulent world where people often prove more wicked <br/>than beasts.</h1>
          <br/>
          <h1><span>Starring:</span> Henry Cavill, Anya Chalotra, Freya Allan</h1>
          <h1><span>Creators:</span> Lauren Schmidt Hissrich</h1>
          </div>
        </div>
    )
}

export default Header
