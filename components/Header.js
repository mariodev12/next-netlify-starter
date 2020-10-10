export default function Header({ title }) {
  return (
    <>
    <h1 className="header-title">{title}</h1>
    <p className="header-description">
      I'm a Front End developer from Barcelona. I love to learn about programing. I develop ReactJS and React Native apps but I have fun trying new things such as Swift or doing voice apps with Alexa API.
    </p>
    <ul className="header-icons">
      <li>
        <i className="fab fa-youtube fa-2x"></i>
      </li>
      <li>
        <i className="fab fa-github fa-2x"></i> 
      </li>
      <li>
        <i className="fab fa-twitter fa-2x"></i>
      </li>
      <li>  
        <i className="fab fa-instagram fa-2x"></i>
      </li>
      <li>
        <i className="fab fa-linkedin fa-2x"></i>
      </li>
    </ul>
    <style jsx>{`
        .header-title {
          font-size: 60px;
        }
        .header-description {
          font-size: 27px;
          max-width: 900px;
          padding: 20px;
        }
        .header-icons {
          display: flex;
          justify-content: row;
          list-style: none;
          margin: 0;
        }
        .header-icons li:not(:first-child) {
          margin-left: 20px;
        }
      `}</style>
    </>
  )
}
