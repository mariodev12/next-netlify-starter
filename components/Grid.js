import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Grid() {
    return (
        <>
        <section className="app" id="app">
            <ul>
                <li>
                    <img src="https://camo.githubusercontent.com/6bc80efff52c1da7c61cfa89292bb9878877ff95/687474703a2f2f692e696d6775722e636f6d2f45455a435343672e706e67" alt="Several friends doing a toast" />
                    <div className="app-description">
                        <h3>Netflix application.</h3>
                        <ul className="app-icons">
                            <li>
                                <i className="fab fa-github"></i>
                            </li>
                            <li>
                                <i className="fab fa-app-store-ios"></i>
                            </li>
                            <li>
                                <i className="fas fa-external-link-alt"></i>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
        <style jsx>{`
        .app {
          padding: 2rem;
        }
        
        .app > ul {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          grid-gap: 2rem;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        
        .app > ul > li {
          border-radius: .5rem;
        }
        
        .app > ul > li > img {
          width: 100%;

          border-radius: 10px;
        }
        .app .app-description {
            padding: 10px;
            display:flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
        .app .app-description h3 {
            margin: 0;
            font-size: 14px;
        }
        .app .app-icons {
            display: flex;
            justify-content: row;
            list-style: none;
        }
        .app .app-icons li:not(:first-child) {
            margin-left: 10px;
        }
      `}</style>
        </>
    )
}