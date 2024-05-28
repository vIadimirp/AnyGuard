import "./advantagesSectionItem.css";


export default function AdvantagesSectionItem({emoji, text1, text2}) {

    return (
        <>
            <div className="advantagesSectionItem">
                <div className="advantage__emoji">{emoji}</div>
                <div className="advantage__text">
                    <div className="bold">{text1}</div>
                    <div className="not-bold">{text2}</div>
                </div>
            </div>
            <div className="split"></div>
        </>
    );

}
