import "./ratesSection.css";


export default function RatesSection() {

    return (
        <div className="ratesSection">
            <div className="heading">
                <div className="title">Тарифы</div>
                <div className="text">Лучшее соотношение цена = качество</div>
            </div>
            <div className="cards">
                <div className="card">
                    <div className="header">
                        <div className="title">MineCraft</div>
                        <div className="price">0.5₽/ слот</div>
                    </div>
                    <div className="setup">💨 Установка за 1 минуту</div>
                    <ul className="abilities">
                        <li>Бесплатный тестовый период</li>
                        <li>Автоустановка модов</li>
                        <li>Стабильный низкий пинг</li>
                        <li>FTP доступ</li>
                        <li>База данных MySQL</li>
                        <li>Игровая защита от DDos</li>
                        <li>24/7 техническая поддержка</li>
                    </ul>
                    <a href="#" className="create-btn">Создать сервер</a>
                </div>
                <div className="card">
                    <div className="header">
                        <div className="title">MineCraft</div>
                        <div className="price"><div className="old-price">6₽/ слот</div>0.8₽/ слот</div>
                    </div>
                    <div className="setup">💨 Установка за 1 минуту</div>
                    <ul className="abilities">
                        <li>Бесплатный тестовый период</li>
                        <li>Автоустановка модов</li>
                        <li>Стабильный низкий пинг</li>
                        <li>FTP доступ</li>
                        <li>База данных MySQL</li>
                        <li>Игровая защита от DDos</li>
                        <li>24/7 техническая поддержка</li>
                    </ul>
                    <a href="#" className="create-btn">Создать сервер</a>
                </div>
                <div className="card">
                    <div className="header">
                        <div className="title">MineCraft</div>
                        <div className="price">0.5₽/ слот</div>
                    </div>
                    <div className="setup">💨 Установка за 1 минуту</div>
                    <ul className="abilities">
                        <li>Бесплатный тестовый период</li>
                        <li>Автоустановка модов</li>
                        <li>Стабильный низкий пинг</li>
                        <li>FTP доступ</li>
                        <li>База данных MySQL</li>
                        <li>Игровая защита от DDos</li>
                        <li>24/7 техническая поддержка</li>
                    </ul>
                    <a href="#" className="create-btn">Создать сервер</a>
                </div>
            </div>
        </div>
    );

}
