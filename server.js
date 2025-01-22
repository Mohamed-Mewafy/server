const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// تمكين CORS للسماح بالاتصال من الموقع
app.use(cors());

// Middleware لتحليل JSON
app.use(express.json());

// بيانات المشاريع (يمكن استبدالها بقاعدة بيانات حقيقية)
let projects = [
  {
    id: 1,
    title: "مشروع 1",
    description: "وصف مختصر للمشروع الأول.",
    image: "project1.jpg"
  },
  {
    id: 2,
    title: "مشروع 2",
    description: "وصف مختصر للمشروع الثاني.",
    image: "project2.jpg"
  },
  {
    id: 3,
    title: "مشروع 3",
    description: "وصف مختصر للمشروع الثالث.",
    image: "project3.jpg"
  },
  {
    id: 4,
    title: "مشروع 4",
    description: "وصف مختصر للمشروع الرابع.",
    image: "project4.jpg"
  }
];

// GET /api/projects - استرجاع جميع المشاريع
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// POST /api/projects - إضافة مشروع جديد
app.post('/api/projects', (req, res) => {
  const newProject = {
    id: projects.length + 1,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// تشغيل الخادم
app.listen(port, () => {
  console.log(`الخادم يعمل على http://localhost:${port}`);
});