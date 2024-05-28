import "./autoInstallSectionCard.css";


export default function AutoInstallSectionCard({image, title, description}) {

    return (
        <div className="autoInstallSectionCard">
            <img src={image} className="image"></img>
                <div className="text">
                    <div className="heading">{title}</div>
                    {description}
                </div>
                <a href="" className="create-btn">Создать сервер</a>
        </div>
    );

}
