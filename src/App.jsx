import Header from './components/header/header';
import Section1 from './components/section1/section1';
import AdvantagesSection from './components/advantagesSection/advantagesSection';
import RatesSection from './components/ratesSection/ratesSection';
import TestServersSection from './components/testServersSection/testServersSection';

import './App.css';


// App component
export default function App() {

    return (<>
        <div className="container">
            <Header />
            <Section1 />
            <AdvantagesSection />
            <RatesSection />
            <TestServersSection />
        </div>
    </>);

}
