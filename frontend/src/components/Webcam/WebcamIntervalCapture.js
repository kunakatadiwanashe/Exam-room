import React, { useEffect, useRef } from 'react'
import Webcam from 'react-webcam';


const WebcamIntervalCapture = () => {

 const webcamRef = useRef(null);
  
 useEffect (() => {
    const interval = setInterval (() => {
        captureFrame();
    }, 5000);

    return () => {
        clearInterval (interval);
    };
 }, []);

 const captureFrame = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
// send to captured dat to backend
    const response = await fetch('https://lh0seoyr60.execute-api.us-east-1.amazonaws.com/Prod/process', {
        method: 'POST',
        url: 'https://lh0seoyr60.execute-api.us-east-1.amazonaws.com/Prod/process',
        headers: {
            Authorization: 'Bearer eyJraWQiOiJ4QkxFWXFqSmJpN1d1M3o2V0MrQVVwNFN4WGFzcmhyNlVtcGhYelNKc29JPSIsImFsZyI6IlJTMjU2In0.eyJvcmlnaW5fanRpIjoiMDgyYWY1MzctZWYxMi00YzY5LWFmMzYtODk2ZTIxNTIxYjEyIiwic3ViIjoiM2YxMjk0ZjMtMTliZS00MzlhLTgwZTUtMGU5ODNhNzRlMzk2IiwiYXVkIjoiNXFtanZ2YWRsMXY1MGxlN3NjM3ZsYjM4djUiLCJldmVudF9pZCI6IjM4N2RjNzM4LWZjYTgtNGIxMS1iYzNkLTI1ZWFjZmEzYjc3YSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjg0MzA3OTEzLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV95RWpybE9rMWoiLCJjb2duaXRvOnVzZXJuYW1lIjoidXNlckBxd2lja3Rha2UuY29tIiwiZXhwIjoxNjg0MzExNTEzLCJpYXQiOjE2ODQzMDc5MTMsImp0aSI6IjdkYjI2ODU3LWE2Y2MtNDk5OC04NmNmLTYzNzVlNjVjMzE4MSJ9.KRhCmP1393trjpMPIKtZJB9voYCHchyZgp8tIax6yWlZwifJOUZINsB9F4T5UHm0v0x6r7OFgtu9WgzAph75iJQTpdWJKB3bYvZp_8IJFTNuFrZFcZDF0mAc-Qr6V_6PsTiocMYTw0DEgg3riEPzdd2dzg0uvV818l0wlntdGowrefYplzquPZn32etm-Kggx4OckWgiPDOYdmFTZdA3wUoPGfNYe45ntyG2OHB7AR9jcWQuHFQFowJsfZOyx4A9aUzDKLm2dtvVVdCHu9IZF1k6yZhfIzxdeWotPiLVMPAyYXOo-jaTXwHLIcjLvzkPuXV0lvTwZWlW3eyRJXO4cA',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: imageSrc})
    });

    if (!response.ok) {
        console.error('failed to send data captured')
    }
    console.log(imageSrc);
 };






  return (
    <div className='h-25 w-13'>
        <Webcam ref={webcamRef} mirrored={true} imageSmoothing={true} className='object-contain h-full w-full' />
    </div>
  )
}

export default WebcamIntervalCapture