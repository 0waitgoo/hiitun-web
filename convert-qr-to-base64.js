const fs = require('fs');
const path = require('path');

// 读取二维码图片并转换为base64
const qrCodePath = path.join(__dirname, 'qrcode.png');

if (fs.existsSync(qrCodePath)) {
  const base64 = fs.readFileSync(qrCodePath, 'base64');
  const base64Url = `data:image/png;base64,${base64}`;
  console.log('二维码base64转换完成：');
  console.log(base64Url);
} else {
  console.error('未找到二维码图片文件');
}