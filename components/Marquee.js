import Ticker from "react-ticker"

const Marquee = ({children}) => {
  return (
    // wrap it to controll css better
    <div>
      <Ticker offset={80}>
        { () =>
          <div >
            {children}
          </div>
        }
      </Ticker>
    </div>
  )
}
export default Marquee;