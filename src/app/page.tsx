import Image from "next/image";
import { useEffect } from "react";
import venom from "venom-bot";


export default function Home() {

  const QRCodeCheck = async () => {
    const client = await venom.create('sales',  (base64Qrimg, asciiQR, attempts, urlCode) => {
      console.log('Number of attempts to read the qrcode: ', attempts);
      console.log('Terminal qrcode: ', asciiQR);
      console.log('base64 image string qrcode: ', base64Qrimg);
      console.log('urlCode (data-ref): ', urlCode);
    },);
  }

  useEffect(() => {
    QRCodeCheck();
  }, [])

  return (
    <div>

    </div>
  );
}
