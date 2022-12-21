// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Card(props) {
    console.log(props)
    return (
        <div className="card--body">
            <div className="big--card">
                <div className="card">
                    <img src={props.img} alt="" height={168} width={125}></img>
                    <div className="card--text">
                        <h4 className="state"><i class="bi bi-geo-alt-fill location"></i>{props.state} &nbsp; <a href={props.map} className="maps">View on Google Maps</a></h4>
                        <h1 className="site">{props.site}</h1>
                        <p className="date">{props.date}</p>
                        <p className="para">{props.para}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}