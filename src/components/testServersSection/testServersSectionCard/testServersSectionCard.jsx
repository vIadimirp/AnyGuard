import "./testServersSectionCard.css";


export default function TestServersSectionCard({id, title, lowestPing, ips}) {

    let getIpsList = () => {
        let list = [];
        for (let key in ips) {
            list.push(`${key} - ${ips[key]}`)
        }
        return list;
    }


    return (
        <div className={`testServersSectionCard${lowestPing ? " lowestPing" : ""}`}>
            <div className="header">
                <div className="title">{title}</div>
                <div className="copy-text">просто нажмите на IP и он скопируется =)</div>
            </div>
            <ul className="list">
                {
                    getIpsList().map(ip => <li key={id}>{ip}</li>)
                }
            </ul>
        </div>
    );

}
