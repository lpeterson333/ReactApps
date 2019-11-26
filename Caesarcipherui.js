import React, {useState} from "react"
import caesarCipherEncryptor from "./caesarCipherEncryptor"
import encrypt from "./encrypt"

function Caesarcipherui(){
  const [userStr, setUserStr] = useState("")
  const [shift, setShift] = useState(2)
  const [message, setMessage] = useState("")

  function handleChange(e){
    const {value} = e.target
    setUserStr(value)
  }
  function handleChange2(e){
    const {value} = e.target
    setShift(+value)
  }
  function encryptMessage(){
    const encryptedMessage = "Encrypted Message: " + caesarCipherEncryptor(userStr,shift)
    setMessage(encryptedMessage)
  }
  return(
  <div>
    <h3>Enter a word to encrypt: </h3>
    <textarea
      onChange={handleChange}
      value={userStr}
    />
    <h3>Enter the shift value for encryption: </h3>
    <textarea
      onChange={handleChange2}
      value={shift}
    />
    <button onClick = {encryptMessage}>Encrypt</button>
     <h3>{message}</h3>
  </div>
  )
  
}
export default Caesarcipherui
