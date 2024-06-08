import QRCode from 'qrcode'
import { useState } from 'react'




function App() {
  const [url ,seturl]= useState('')
  const [qrcode, setQrcode] =useState('')
  const GenerateQRCode = () =>{
    QRCode.toDataURL(url,(err,url)=>{
      if (err) return console.error(err)
        console.log(url)
      setQrcode(url)

    })
  }
  return (
    <>
      <div classname="app" >
        <h1>QR Code Generator</h1>
        <input type="text" placeholder="e.g. :https//google.com" value={url} onChange={(evt)= seturl(evt.target.value)}/>
        <button onClick={GenerateQRCode}> Generate</button>
        {
          qrcode && <>
          <img src={qrcode}/>
          <a href={qrcode} download="qrCode.png"> download</a>
          </>
        }
        
      </div>
      
    </>
  )
}

export default App
