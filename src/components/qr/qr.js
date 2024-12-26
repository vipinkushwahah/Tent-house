import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodeComponent = () => {
  const url = "https://maa-bhawani-tent-house.netlify.app";

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Scan the QR Code to Visit the Website</h2>
      <QRCodeCanvas value={url} size={200} />
      <p>{url}</p>
    </div>
  );
};

export default QRCodeComponent;
