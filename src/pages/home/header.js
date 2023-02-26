import "../../styles/header.css"

export default function header() {

  let randomNo = Math.floor(Math.random() * 10) + 1;

  return (
    <div className="header" >
        <div className="header__titles">
            <span className="header__titles--first">TRAVEL</span>
            <span className="header__titles--second">LIFE</span>
        </div>
        <img className="header__image" src={`/images/cover/img${randomNo}.jpg`} alt="header"/>
    </div>      
  )
}
