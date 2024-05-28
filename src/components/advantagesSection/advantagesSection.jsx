import AdvantagesSectionItem from "./advantagesSectionItem/advantagesSectionItem";

import "./advantagesSection.css";


export default function AdvantagesSection() {

    let data = [
        {
            id: 1,
            emoji: "🤩",
            text1: "Удобная",
            text2: "панель управления"
        }, {
            id: 2,
            emoji: "🖥️",
            text1: "Надёжные",
            text2: "и мощные сервера"
        }, {
            id: 3,
            emoji: "🧑",
            text1: "24/7",
            text2: "тех. поддержка"
        }
    ];


    return (
        <div className="advantagesSection">
            {
                data.map(item => <AdvantagesSectionItem key={item.id} {...item} />)
            }
        </div>
    );

}
