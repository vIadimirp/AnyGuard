import TestServersSectionCard from "./testServersSectionCard/testServersSectionCard";

import "./testServersSection.css";


export default function TestServersSection() {

    let data = [
        {
            id: 1,
            title: "Тест сервера Германия 🇩🇪",
            lowestPing: false,
            ips: {
                SAMP: "185.17.0.95:4545",
                CRMP: "185.17.0.95:4545",
                MTA: "185.17.0.95:4545"
            }
        }, {
            id: 2,
            title: "Тест сервера Москва 🇷🇺",
            lowestPing: true,
            ips: {
                SAMP: "185.17.0.95:4545",
                CRMP: "185.17.0.95:4545",
                MTA: "185.17.0.95:4545"
            }
        }, {
            id: 3,
            title: "Тест сервера Финляндия 🇫🇮",
            lowestPing: false,
            ips: {
                SAMP: "185.17.0.95:4545",
                CRMP: "185.17.0.95:4545",
                MTA: "185.17.0.95:4545"
            }
        }
    ];


    return (
        <div className="testServersSection">
            <div className="heading">
                <div className="title">Тестовые сервера</div>
                <div className="text">Проверьте пинг к нашим игровым локациям</div>
            </div>
            <div className="cards">
                {
                    data.map(item => <TestServersSectionCard key={item.id} {...item} />)
                }
            </div>
        </div>
    );

}
