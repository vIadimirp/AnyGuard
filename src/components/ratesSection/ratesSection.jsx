import RatesSectionCard from "./ratesSectionCard/ratesSectionCard";

import "./ratesSection.css";


export default function RatesSection() {

    let data = [
        {
            id: 1,
            title: "Minecraft",
            price: 0.5,
            hot: false
        }, {
            id: 2,
            title: "Minecraft",
            price: 0.8,
            oldPrice: 6,
            hot: true
        }, {
            id: 3,
            title: "Minecraft",
            price: 0.5,
            hot: false
        }
    ];


    return (
        <div className="ratesSection">
            <div className="heading">
                <div className="title">Тарифы</div>
                <div className="text">Лучшее соотношение цена = качество</div>
            </div>
            <div className="cards">
                {
                    data.map(item => <RatesSectionCard key={item.id} {...item} />)
                }
            </div>
        </div>
    );

}
