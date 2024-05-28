import { footerLogo, vkLogo, tgLogo } from "../../assets";

import "./footerSection.css";


export default function FooterSection() {

    return (
        <div className="footerSection">
            <div className="copyright">
                <img src={footerLogo} alt="" className="logo" />
                <div className="description">Мощный игровой хостинг серверов SAMP, CRMP,<br />
                                             MTA, MINECRAFT, CS:GO</div>
                <div className="copyrightText">© 2022 anyguard.ru</div>
            </div>
            <div className="contacts">
                <div className="title">Контакты</div>
                <div className="description">Круглосуточная техническая поддержка<br />
                                             осуществляется через систему тикетов в панели<br />
                                             управления</div>
                <div className="mail">support@anyguard.ru</div>
            </div>
            <div className="socialNetworks">
                <img src={vkLogo} alt="" className="vk" />
                <img src={tgLogo} alt="" className="tg" />
            </div>
        </div>
    );

}
