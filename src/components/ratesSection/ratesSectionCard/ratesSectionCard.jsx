import "./ratesSectionCard.css";


export default function RatesSectionCard({title, price, hot, oldPrice}) {

    return (
        <>
        {hot ? 
        <div className="ratesSectionCard ratesSectionCardGold">
            <div className="header">
                <div className="title">{title}</div>
                <div className="price"><div className="old-price">{oldPrice}₽/ слот</div>{price}₽/ слот</div>
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
            :
            <div className="ratesSectionCard">
                <div className="header">
                    <div className="title">{title}</div>
                    <div className="price">{price}₽/ слот</div>
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
            </div>}
        </>
    )

}
