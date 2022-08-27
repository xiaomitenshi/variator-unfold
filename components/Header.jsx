import { ConnectButton } from "@rainbow-me/rainbowkit"
function Header() {
  return (
    <header>
      <h1>XXXXXXX</h1>
      <a href="/create" className="head1">
        Create Token
      </a>
      <a href="" className="head2">
        Market Place
      </a>
      <a href="" className="head2">
        White Paper
      </a>
      {/* <button className="box">Connect Wallet</button> */}
      <div>
        <ConnectButton showBalance={false} />
      </div>
    </header>
  )
}

export default Header
