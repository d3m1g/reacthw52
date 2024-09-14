
import React from 'react';
import './App.css';
import Ad from './components/Ad';
import NewsList from './components/NewsList';
import Recomendations from './components/Recomendation';
import SearchPanel from './components/SearchPanel';
import CardsList from './components/CardsList';
import Card from './components/Card';
import ExchangeRatesList from './components/ExchangeRatesList';

function App() {

  const newsList = [
    {
      image: '/news1.png',
      alt: 'Риа-Новости',
      href: '#',
      text: 'Случайнай новость 1'
    },
    {
      image: '/news2.png',
      alt: 'Коммерсант',
      href: '#',
      text: 'Случайнай новость 2'
    },
    {
      image: '/news3.png',
      alt: 'РБК',
      href: '#',
      text: 'Случайнай новость 3'
    }
  ];

  const exchangeRates = [{
    currency: 'USD',
    rate: 90,
    rateChange: 1,
    href: '/'
  },
  {
    currency: 'EUR',
    rate: 100,
    rateChange: 2,
    href: '/'
  },
  {
    currency: 'НЕФТЬ',
    rate: 72,
    rateChange: -3,
    href: '/'
  }
  ];

  const recomendation = {
    image: '/Recomendation.png',
    alt: 'On-Line English school',
    href: '#',
    text: 'Обучение английскому языку',
    age: '5+'
  };

  const ad = {
    image: '/Ad.png',
    alt: 'Рекламма',
    href: '/'
  };

  return (
    <div className="App">
      <div className="app__title">
        <NewsList items={newsList}>
          <ExchangeRatesList items={exchangeRates} />
        </NewsList>
        <Recomendations {...recomendation} />
      </div>
      <div className="app__content">
        <SearchPanel exampleText={'гороскоп на неделю'} />
      </div>
      <div className="app__footer">
        <Ad {...ad} />
        <CardsList>
          <Card title={'Погода'} href={'/'}>
            <div>+10 днем</div>
          </Card>
          <Card title={'Посещаемое'} href={'/'}>
            <ul>
              <li>Недвижимость</li>
              <li>Маркет</li>
              <li>Авто.ру</li>
            </ul>
          </Card>
          <Card title={'Карта России'} href={'/'}>
            <a href="/">Расписания</a>
          </Card>
        </CardsList>
      </div>
    </div>
  );
}

export default App;

