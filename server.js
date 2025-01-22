const express = require('express');
const cors = require('cors'); // استيراد حزمة CORS
const app = express();
const PORT = 3000;

// تمكين CORS
app.use(cors());

// بيانات وهمية للمشاريع
const projects = [
  { id: 1, title: 'تطبيق دردشة', description: 'تطبيق دردشة باستخدام Flutter وFirebase.', image: 'images/image1.png' },
  { id: 2, title: 'موقع شخصي', description: 'تصميم وتطوير موقع شخصي باستخدام HTML وCSS.', image: 'images/image2.jpg' },
  { id: 3, title: 'تطبيق إدارة المهام', description: 'تطبيق لإدارة المهام باستخدام Flutter.', image: 'images/image3.png' },
];

// نقطة نهاية (Endpoint) لجلب جميع المشاريع
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});