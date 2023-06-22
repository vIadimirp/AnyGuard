import "./testServersSection.css";


export default function TestServersSection() {

    return (
        <div className="testServersSection">
            <div className="heading">
                <div className="title">Тестовые сервера</div>
                <div className="text">Проверьте пинг к нашим игровым локациям</div>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="header">
                        <div className="title">Тест сервера Германия 🇩🇪</div>
                        <div className="copy-text">просто нажмите на IP и он скопируется =)</div>
                    </div>
                    <ul className="list">
                        <li>SAMP - 185.17.0.95:4545</li>
                        <li>CRMP - 185.17.0.95:4545</li>
                        <li>MTA - 185.17.0.95:4545</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="header">
                        <div className="title">Тест сервера Москва 🇷🇺</div>
                        <div className="copy-text">просто нажмите на IP и он скопируется =)</div>
                    </div>
                    <ul className="list">
                        <li>SAMP - 185.17.0.95:4545</li>
                        <li>CRMP - 185.17.0.95:4545</li>
                        <li>MTA - 185.17.0.95:4545</li>
                    </ul>
                </div>
                <div className="card">
                    <div className="header">
                        <div className="title">Тест сервера Финляндия 🇫🇮</div>
                        <div className="copy-text">просто нажмите на IP и он скопируется =)</div>
                    </div>
                    <ul className="list">
                        <li>SAMP - 185.17.0.95:4545</li>
                        <li>CRMP - 185.17.0.95:4545</li>
                        <li>MTA - 185.17.0.95:4545</li>
                    </ul>
                </div>
            </div>
        </div>
    );

}
