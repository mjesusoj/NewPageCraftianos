import React from 'react';

import { Switch, Route, Redirect } from 'react-router';

import { AboutScreen } from '../components/AboutScreen/AboutScreen';
import { AttaPollScreen } from '../components/MoneyWinEarn/Surveys/AttaPoll/AttaPollScreen';
import { BanksScreen } from '../components/BanksScreen/BanksScreen';
import { BlogScreen } from '../components/BlogScreen/BlogScreen';
import { CashbackScreen } from '../components/MoneyWinEarn/Cashback/CashbackScreen';
import { CookieVerify } from '../components/Cookies/CookieVerify';
import { CryptosScreen } from '../components/MoneyWinEarn/Cryptos/CryptosScreen';
import { GameeScreen } from '../components/MoneyWinEarn/Playing/Gamee/GameeScreen';
import { Header } from '../components/ui/Header';
import { HomeScreen } from '../components/HomeScreen/HomeScreen';
import { HoneyGainScreen } from '../components/MoneyWinEarn/Nothing/HoneyGain/HoneyGainScreen';
import { IgraalScreen } from '../components/MoneyWinEarn/Cashback/Igraal/IgraalScreen';
import { IpsosIsayScreen } from '../components/MoneyWinEarn/Surveys/Ipsos-isay/IpsosIsayScreen';
import { LetyShopsScreen } from '../components/MoneyWinEarn/Cashback/Letyshops/LetyShopsScreen';
import { LinksScreen } from '../components/LinksScreen/LinksScreen';
import { MarketAgentScreen } from '../components/MoneyWinEarn/Surveys/Marketagent/MarketAgentScreen';
import { NothingScreen } from '../components/MoneyWinEarn/Nothing/NothingScreen';
import { PlayingScreen } from '../components/MoneyWinEarn/Playing/PlayingScreen';
import { PollPayScreen } from '../components/MoneyWinEarn/Surveys/PollPay/PollPayScreen';
import { PrizeRebelScreen } from '../components/MoneyWinEarn/Surveys/PrizeRebel/PrizeRebelScreen';
import { PromosScreen } from '../components/MoneyWinEarn/Tickets/Promos/PromosScreen';
import { SmartmeScreen } from '../components/MoneyWinEarn/Surveys/SmartmeApp/SmartmeScreen';
import { SurveysScreen } from '../components/MoneyWinEarn/Surveys/SurveysScreen';
import { TicketsScreen } from '../components/MoneyWinEarn/Tickets/TicketsScreen';
import { TiendeoScreen } from '../components/MoneyWinEarn/Tickets/Tiendeo/TiendeoScreen';
import { VerseScreen } from '../components/BanksScreen/Verse/VerseScreen';
import { VividScreen } from '../components/BanksScreen/VividMoney/VividScreen';
import { WidiloScreen } from '../components/MoneyWinEarn/Cashback/Widilo/WidiloScreen';
import { YouGovScreen } from '../components/MoneyWinEarn/Surveys/YouGov/YouGovScreen';
import { IpRoyalScreen } from '../components/MoneyWinEarn/Nothing/IpRoyal/IpRoyalScreen';

/* Change Imports - This is embarrassing */
export const HomeRoute = () => {
    return (
        <>
            <div className="p-3 mb-2 text-dark row header">
                <Header />
            </div>
            
            <Switch>
                <Route exact path="/" component={ HomeScreen } />
                <Route exact path="/sobre-mi/" component={ AboutScreen } />
                <Route exact path="/banco-movil-pagos/" component={ BanksScreen } />
                <Route exact path="/blog/" component={ BlogScreen } />
                <Route exact path="/enlaces/" component={ LinksScreen } />

                { /* Routes for DropDown "MoneyWin" */ }
                <Route exact path="/gana-dinero-sin-hacer-nada/" component={ NothingScreen } />
                <Route exact path="/encuestas-renumeradas/" component={ SurveysScreen } />
                <Route exact path="/gana-dinero-jugando/" component={ PlayingScreen } />
                <Route exact path="/gana-cryptos-gratis/" component={ CryptosScreen } />

                { /*  Routes for DropDown "MoneyEarn" */}
                <Route exact path="/compras-cashback/" component={ CashbackScreen } />
                <Route exact path="/apps-dinero-tickets/" component={ TicketsScreen } />

                { /* Routes for DropDown "Banks" */ }
                <Route exact path="/verse-app/" component={ VerseScreen } />
                <Route exact path="/vivid-money/" component={ VividScreen } />

                { /* Routes Cashback */ }
                <Route exact path="/igraal/" component={ IgraalScreen } />
                <Route exact path="/letyshops/" component={ LetyShopsScreen } />
                <Route exact path="/widilo/" component={ WidiloScreen } />

                { /* Routes Cashback Tickets */ }
                <Route exact path="/promos-app/" component={ PromosScreen } />
                <Route exact path="/tiendeo/" component={ TiendeoScreen } />

                { /* Routes Nothing - HoneyGain, IPRoyal Panws */}
                <Route exact path="/honeygain/" component={ HoneyGainScreen } />
                <Route exact path="/iproyal/" component={ IpRoyalScreen } />

                { /* Routes for Surveys */ }
                <Route exact path="/attapoll/" component={ AttaPollScreen } />
                <Route exact path="/ipsos-isay/" component={ IpsosIsayScreen } />
                <Route exact path="/marketagent/" component={ MarketAgentScreen } />
                <Route exact path="/pollpay/" component={ PollPayScreen } />
                <Route exact path="/prize-rebel/" component={ PrizeRebelScreen } />
                <Route exact path="/smartme-app/" component={ SmartmeScreen } />
                <Route exact path="/yougov/" component={ YouGovScreen } />

                { /* Routes Games */ }
                <Route exact path="/gamee/" component={ GameeScreen } />

                {/* Route 404 */}
                <Route path="*" component={ HomeScreen } />

                <Redirect to="/" />
            </Switch>
        
            <div className="p-3 mt-2 text-dark row footer">
                <CookieVerify />
            </div>
        </>
    )
}