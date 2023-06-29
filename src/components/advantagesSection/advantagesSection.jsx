import "./advantagesSection.css";


export default function AdvantagesSection() {
    return (
        <div className="advantagesSection">
            <div className="advantage">
                <div className="advantage__emoji">🤩</div>
                <div className="advantage__text">
                    <div className="bold">Удобная</div>
                    <div className="not-bold">панель управления</div>
                </div>
            </div>
            <div className="split"></div>
            <div className="advantage">
                <div className="advantage__emoji">🖥️</div>
                <div className="advantage__text">
                    <div className="bold">Надёжные</div>
                    <div className="not-bold">и мощные сервера</div>
                </div>
            </div>
            <div className="split"></div>
            <div className="advantage">
                <div className="advantage__emoji">🧑</div>
                <div className="advantage__text">
                    <div className="bold">24/7</div>
                    <div className="not-bold">тех. поддержка</div>
                </div>
            </div>
        </div>
    );
}
