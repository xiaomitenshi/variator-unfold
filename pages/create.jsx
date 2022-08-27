const { ethers } = require("ethers")

function Create() {
  return (
    <form>
      <label htmlFor="tokenName">Token Name: </label>
      <input type="text" id="tokenName" name="tokenName" /> <br />
      <label htmlFor="tokenCode">Token Code: </label>
      <input type="text" id="tokenCode" name="tokenCode" /> <br />
      <label htmlFor="tokenSupply">Token Supply: </label>
      <input type="number" /> <br />
      <button>Mint Now</button>
    </form>
  )
}

export default Create
