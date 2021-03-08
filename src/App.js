import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import {Paper, Grid} from '@material-ui/core';
import TinderCard from 'react-tinder-card'

function App() {
  const Instruments = [
    {
    "Id": 1,
    "Title":"American Express Company",
    "Description":"Have you ever heard of American Express Company? If not, then here’s what we do in a nutshell! Generally, we help you make your day-to-day purchases at a swipe of a card. Aside from charge and credit card products, we also provide travel-related services that make your trips both very affordable and enjoyable at the same time-- from airfare to hotels and resorts to destination recommendations, we have that for you! Ever since we started our business, we’ve always aimed to improve our customer’s way of life by providing top-notch services and in the process, earn your unwavering loyalty and commitment towards us. We are proud to say that we are part of the Fortune 500 companies, with over 114 million credit cards currently being consumed by our customers. ",
    "MarketCapacity":"Because of this continued trust and support, we are able to boast a $112.178 billion market cap.",
    "InstitionalOwnership":"Institutional ownership of the company is equal to 81%.",
    "DebtToEquityRatio":"In terms of debt-to-equity, AXP achieves a 573.03% figure.",
    "EarningsPerShare":"Currently, we also have $3.76 earnings per share.",
    "NetMargin":"Our return on equity is 13.18% while net margin is 8.47%.",
    "Future":"In the future, we aim towards refining further our business by focusing on other innovative digital products and services such as future payment technologies. Driven by our goals of acquiring more customers and increasing the number of businesses including banks, merchants, and billing institutions working with us, we plan to invest in improving the customer experience-- promising greater personalization, quicker user-authentication and access, and more flexibility in payment.",
    "SocialResponsibility":"More importantly, we are a socially responsible enterprise who considers the impact we have to the world we’re living in. As such, we work hard to contribute to a low-carbon future as well by completely performing our company’s operations and activities with 100% renewable energy and reduced greenhouse gases emissions. Aside from this, we also work towards addressing society’s most complex challenges at the moment. Therefore, we’ve created customer pandemic relief programs to provide support for those financially disrupted amidst the pandemic."
    },
    {
    "Id": 2,
    "Title":"Amgen Inc.",
    "Description":"As one of the world’s biggest biotechnology companies, we here at Amgen Inc. are committed to discover, study, develop, manufacture, and distribute numerous human therapeutics that aim to better the lives of millions all over the world. By using advanced human genetics to understand better human biology, we study numerous diseases and manufacture medicines for these said illnesses. As such, our values are rooted in science and innovation in order to tackle areas of high unmet medical need, therefore transforming mere ideas into reality. Currently, it is indisputable that we are at the forefront of biologic manufacturing, and through our continuous commitment and vigilance in our work, we are able to maintain a fantastic track record of producing high-quality products for the benefit of millions of patients around the world.",
    "MarketCapacity":"Recent financial data show that we are at a $130.352 billion market cap.",
    "InstitionalOwnership":"Institutional ownership of the company is equal to 71%.",
    "DebtToEquityRatio":"We have a 350.58% ratio. ",
    "EarningsPerShare":"Currently, we also have $12.31 earnings per share.",
    "NetMargin":"Our return on equity is 76.13% while net margin is 28.57%.",
    "Future":"The future is bright for our company’s scientific endeavors, and this includes sotorasib, our company’s cancer drug, which has recently shown positive feedback. Thus, we are looking forward to its approval this year from the U.S. Food and Drug Admission. We will also be sponsoring Biolabs LA at The Lundquist Institute life sciences co-working space for the next three years, and hopefully, this encourages startups and budding entrepreneurs in the bioscience community to accelerate new therapies, medical technologies, and devices that will advance human health. ",
    "SocialResponsibility":"We also recognize that our responsibility goes beyond producing medicines, and it is also as important to positively impact the surrounding communities in which we operate. That said, as a company, we are absolutely dedicated to practicing environmentally responsible operations and improving our environmental footprint by reducing the waste we generate and conserving energy, carbon, and water we use. Moreover, in terms of suppliers, we also ensure diversity to make sure that we are open to all kinds of business enterprises regardless of size, race, or gender. "
    },
    {
    "Id": 3,
    "Title":"Apple Inc.",
    "Description":"For sure, you’ve heard about what we do here at Apple Inc. In short, we design and manufacture world-renowned consumer electronics and software products to over 175 countries all over the world. From Mac computers to iPhones and iPads to Apple Watches and Apple TVs, you name it, we definitely got it! Here at Apple, we offer a wide array of products that makes life easier for our customers! Aside from providing cutting-edge technologies and products, we also offer numerous services like iTunes, Apple Music, iCloud, and Apple Pay, and softwares such as iLife (multimedia and creativity), iWork (productivity), and Final Cut Studio (film-industry and professional audio) with the goal of not just producing the best products in the world, but the best products for the world. ",
    "MarketCapacity":"Recent financial statistics show that we have a $2.101 trillion market cap.",
    "InstitionalOwnership":"Institutional ownership of the company is equal to 53%.",
    "DebtToEquityRatio":"We have a 169.19% ratio. ",
    "EarningsPerShare":"Currently, we also have $3.70 earnings per share.",
    "NetMargin":"Our return on equity is 82.09% while net margin is 21.73%.",
    "Future":"In the future, we aim to continuously provide technologies that will aid the lives of many especially with regards to the pandemic, and so, we’d like to focus on developing products and services that boost productivity. As such, we aim to launch refurbished iPads with speedier processors, 5-G capable iPhones, and smartwatches with more health-related features. In terms of brand-new creations, we plan to inject augmented reality, virtual reality tools, home systems, and car-manufacturing into our range of product offerings as well. ",
    "SocialResponsibility":"Our vision as a company entails us not to only offer products that ease the lives of our customers, but more importantly, we also aim to alleviate the problems in the environment as a whole. Although we are already carbon neutral today for our operations worldwide, we still aim to push this a bit further and bring our entire carbon footprint to net zero across all functions including manufacturing, supply chains, product life cycles, etc. As part of our Racial Equity and Justice Initiative, we plan on investing in efforts that address education and stand up for economic equality and justice reform. We also plan on investing in minority-owned enterprises that drive positive change in the world through its day-to-day operations."
    },
    {
    "Id": 4,
    "Title":"Boeing Co. ",
    "Description":"We are proud to say that we are the world’s largest aerospace company. As such, we are leading in terms of manufacturing of various aerospace products such as commercial jetliners, defense, space and security systems. In addition to this, we are also able to provide commercial and military aircraft, satellites, weapons, and unparalleled after sales support for its tailored services to over 150 countries all over the world. In a nutshell, all these offerings can be categorized into three main business functions: Commercial Airplanes; Defense, Space & Security; and Boeing Global Services. Currently, we employ over 140,000 people in more than 65 countries, and we can confidently say that our workforce is composed of the world’s most diverse, innovative, and skilled talents. ",
    "MarketCapacity":"According to industry statistics, we have a $130.091 billion market cap.",
    "InstitionalOwnership":"Institutional ownership of the company is equal to 50%.",
    "DebtToEquityRatio":"We have a -347.14% debt-to-equity ratio. ",
    "EarningsPerShare":"Currently, we have -$20.73 earnings per share.",
    "NetMargin":"Our return on equity is equal to 1,503.49% while net margin is -20.36%.",
    "Future":"Because we have been affected gravely by the pandemic, there are definitely tough times ahead. However, we are still committed to providing the latest and most advanced technologies out there. As such, by 2030, we plan to manufacture and deliver commercial aircrafts that are capable of working on 100% biofuel. Aside from using alternative fuels, we also plan to decrease the weight and drag of our new aircrafts so as to drastically reduce fuel consumption and emissions. ",
    "SocialResponsibility":"We recognize the fact that our activities contribute to the perennial challenge of climate change, and that is why reducing the impact of flying has been one of our major goals as a company. We are currently utilizing innovative solutions and maximizing resources at all costs in order to reduce our carbon emissions across our product life cycles, in our factories, and at our work sites. In fact, our products are designed in a way that 90% of its parts and materials are reusable and recyclable. We also believe in purposeful investments and advocacies, and thus, we support partnerships and programs that aim to bridge the lack of access to quality education, and those that build better communities through skills development and the like. "
    }
  ];   

  const Instruments1= [
    {
    Id: 1,
    Title:"American Express Company",
    Description:"Have you ever heard of American Express Company? If not, then here’s what we do in a nutshell! Generally, we help you make your day-to-day purchases at a swipe of a card. Aside from charge and credit card products, we also provide travel-related services that make your trips both very affordable and enjoyable at the same time-- from airfare to hotels and resorts to destination recommendations, we have that for you! Ever since we started our business, we’ve always aimed to improve our customer’s way of life by providing top-notch services and in the process, earn your unwavering loyalty and commitment towards us. We are proud to say that we are part of the Fortune 500 companies, with over 114 million credit cards currently being consumed by our customers. ",
    MarketCapacity:"Because of this continued trust and support, we are able to boast a $112.178 billion market cap.",
    InstitionalOwnership:"Institutional ownership of the company is equal to 81%.",
    DebtToEquityRatio:"In terms of debt-to-equity, AXP achieves a 573.03% figure.",
    EarningsPerShare:"Currently, we also have $3.76 earnings per share.",
    NetMargin:"Our return on equity is 13.18% while net margin is 8.47%.",
    Future:"In the future, we aim towards refining further our business by focusing on other innovative digital products and services such as future payment technologies. Driven by our goals of acquiring more customers and increasing the number of businesses including banks, merchants, and billing institutions working with us, we plan to invest in improving the customer experience-- promising greater personalization, quicker user-authentication and access, and more flexibility in payment.",
    SocialResponsibility:"More importantly, we are a socially responsible enterprise who considers the impact we have to the world we’re living in. As such, we work hard to contribute to a low-carbon future as well by completely performing our company’s operations and activities with 100% renewable energy and reduced greenhouse gases emissions. Aside from this, we also work towards addressing society’s most complex challenges at the moment. Therefore, we’ve created customer pandemic relief programs to provide support for those financially disrupted amidst the pandemic."
    },
    {
    Id: 2,
    Title:"Amgen Inc.",
    Description:"As one of the world’s biggest biotechnology companies, we here at Amgen Inc. are committed to discover, study, develop, manufacture, and distribute numerous human therapeutics that aim to better the lives of millions all over the world. By using advanced human genetics to understand better human biology, we study numerous diseases and manufacture medicines for these said illnesses. As such, our values are rooted in science and innovation in order to tackle areas of high unmet medical need, therefore transforming mere ideas into reality. Currently, it is indisputable that we are at the forefront of biologic manufacturing, and through our continuous commitment and vigilance in our work, we are able to maintain a fantastic track record of producing high-quality products for the benefit of millions of patients around the world.",
    MarketCapacity:"Recent financial data show that we are at a $130.352 billion market cap.",
    InstitionalOwnership:"Institutional ownership of the company is equal to 71%.",
    DebtToEquityRatio:"We have a 350.58% ratio. ",
    EarningsPerShare:"Currently, we also have $12.31 earnings per share.",
    NetMargin:"Our return on equity is 76.13% while net margin is 28.57%.",
    Future:"The future is bright for our company’s scientific endeavors, and this includes sotorasib, our company’s cancer drug, which has recently shown positive feedback. Thus, we are looking forward to its approval this year from the U.S. Food and Drug Admission. We will also be sponsoring Biolabs LA at The Lundquist Institute life sciences co-working space for the next three years, and hopefully, this encourages startups and budding entrepreneurs in the bioscience community to accelerate new therapies, medical technologies, and devices that will advance human health. ",
    SocialResponsibility:"We also recognize that our responsibility goes beyond producing medicines, and it is also as important to positively impact the surrounding communities in which we operate. That said, as a company, we are absolutely dedicated to practicing environmentally responsible operations and improving our environmental footprint by reducing the waste we generate and conserving energy, carbon, and water we use. Moreover, in terms of suppliers, we also ensure diversity to make sure that we are open to all kinds of business enterprises regardless of size, race, or gender. "
    },
    {
    Id: 3,
    Title:"Apple Inc.",
    Description:"For sure, you’ve heard about what we do here at Apple Inc. In short, we design and manufacture world-renowned consumer electronics and software products to over 175 countries all over the world. From Mac computers to iPhones and iPads to Apple Watches and Apple TVs, you name it, we definitely got it! Here at Apple, we offer a wide array of products that makes life easier for our customers! Aside from providing cutting-edge technologies and products, we also offer numerous services like iTunes, Apple Music, iCloud, and Apple Pay, and softwares such as iLife (multimedia and creativity), iWork (productivity), and Final Cut Studio (film-industry and professional audio) with the goal of not just producing the best products in the world, but the best products for the world. ",
    MarketCapacity:"Recent financial statistics show that we have a $2.101 trillion market cap.",
    InstitionalOwnership:"Institutional ownership of the company is equal to 53%.",
    DebtToEquityRatio:"We have a 169.19% ratio. ",
    EarningsPerShare:"Currently, we also have $3.70 earnings per share.",
    NetMargin:"Our return on equity is 82.09% while net margin is 21.73%.",
    Future:"In the future, we aim to continuously provide technologies that will aid the lives of many especially with regards to the pandemic, and so, we’d like to focus on developing products and services that boost productivity. As such, we aim to launch refurbished iPads with speedier processors, 5-G capable iPhones, and smartwatches with more health-related features. In terms of brand-new creations, we plan to inject augmented reality, virtual reality tools, home systems, and car-manufacturing into our range of product offerings as well. ",
    SocialResponsibility:"Our vision as a company entails us not to only offer products that ease the lives of our customers, but more importantly, we also aim to alleviate the problems in the environment as a whole. Although we are already carbon neutral today for our operations worldwide, we still aim to push this a bit further and bring our entire carbon footprint to net zero across all functions including manufacturing, supply chains, product life cycles, etc. As part of our Racial Equity and Justice Initiative, we plan on investing in efforts that address education and stand up for economic equality and justice reform. We also plan on investing in minority-owned enterprises that drive positive change in the world through its day-to-day operations."
    },
    {
    Id: 4,
    Title:"Boeing Co. ",
    Description:"We are proud to say that we are the world’s largest aerospace company. As such, we are leading in terms of manufacturing of various aerospace products such as commercial jetliners, defense, space and security systems. In addition to this, we are also able to provide commercial and military aircraft, satellites, weapons, and unparalleled after sales support for its tailored services to over 150 countries all over the world. In a nutshell, all these offerings can be categorized into three main business functions: Commercial Airplanes; Defense, Space & Security; and Boeing Global Services. Currently, we employ over 140,000 people in more than 65 countries, and we can confidently say that our workforce is composed of the world’s most diverse, innovative, and skilled talents. ",
    MarketCapacity:"According to industry statistics, we have a $130.091 billion market cap.",
    InstitionalOwnership:"Institutional ownership of the company is equal to 50%.",
    DebtToEquityRatio:"We have a -347.14% debt-to-equity ratio. ",
    EarningsPerShare:"Currently, we have -$20.73 earnings per share.",
    NetMargin:"Our return on equity is equal to 1,503.49% while net margin is -20.36%.",
    Future:"Because we have been affected gravely by the pandemic, there are definitely tough times ahead. However, we are still committed to providing the latest and most advanced technologies out there. As such, by 2030, we plan to manufacture and deliver commercial aircrafts that are capable of working on 100% biofuel. Aside from using alternative fuels, we also plan to decrease the weight and drag of our new aircrafts so as to drastically reduce fuel consumption and emissions. ",
    SocialResponsibility:"We recognize the fact that our activities contribute to the perennial challenge of climate change, and that is why reducing the impact of flying has been one of our major goals as a company. We are currently utilizing innovative solutions and maximizing resources at all costs in order to reduce our carbon emissions across our product life cycles, in our factories, and at our work sites. In fact, our products are designed in a way that 90% of its parts and materials are reusable and recyclable. We also believe in purposeful investments and advocacies, and thus, we support partnerships and programs that aim to bridge the lack of access to quality education, and those that build better communities through skills development and the like. "
    }
  ];
    
  
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  };
   
  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  };
  const divStyle = {
    border: "1px, solid, black",
    height: 10,
    wdith: 10,

  };
  
  const instruments = Instruments;
  const [lastDirection, setLastDirection] = useState();
  const [selected, setSelected] = useState([]);
  const [rejected, setRejected] = useState([]);
  const swiped = (direction, sel,rej, nameToDelete) => {
   
    console.log('removing: ' + nameToDelete)
    //
    //alert(direction);
    if (direction==="left")
    {
      const rejObject=Instruments.filter(a=>a.Title==nameToDelete);
      for (var x=0;x<rejObject.length;x++){
      rej.push(rejObject[x]);
      }
    }
    else
    {
      const selObject=Instruments.filter(a=>a.Title==nameToDelete);
      for (var x=0;x<selObject.length;x++){
        sel.push(selObject[x]);
        }
//      sel.push(JSON.parse(Instruments.filter(a=>a.Title==nameToDelete)));
    }
   // alert(JSON.stringify(selected));
   // alert(JSON.stringify(rejected));

    setLastDirection(direction);
    setSelected(sel);
    setRejected(rej);
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }
  
  return (
    <div className='app'>
      BLUEVILLE CAPITAL SAMPLE APP
    <table>
      <tr>
        <td><div>Rejected Items:<hr/>{rejected.map((rej) => <div>{rej.Title}<br/></div>)}<br/></div></td>
        <td><div>Selected Items:<hr/>{selected.map((sel) => <div>{sel.Title}<br/></div>)}<br/></div></td>
        </tr>
       </table>
    <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
    <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
   <div className='cardContainer'>
      {instruments.map((instrument) =>
        <TinderCard className='swipe' key={instrument.name} onSwipe={(dir) => swiped(dir, selected?selected:[{}], rejected?rejected:[{}], instrument.Title)} onCardLeftScreen={() => outOfFrame(instrument.name)}>
          <div className='card'>
            <p className='instrumentName'>{instrument.Title}</p>
          <p className='isntrumentText'>{instrument.Description}</p>
          </div>
        </TinderCard>
      
      )}
    </div>
    {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
  </div>
      );
}

export default App;
