import cv from '../../data/nora-cv.jpg';
import giftBox from '../../data/online-shop-product3.jpg';
import mirror from '../../data/online-shop-product4.jpg';
import videoOne from '../../data/online-shop-product1.mp4';
import videoThree from '../../data/online-shop-product5.mp4';

// Transcribed from data/nora-cv.jpg and data/profile.jpg~.
// answers.txt is empty; no dates were supplied for Marketing Capsule.
export const portfolio = {
  name: 'Pyae Pyae Naing',
  role: 'Junior Accountant',
  company: 'Marketing Capsule',
  location: 'Yangon, Myanmar',
  email: 'rannnora@gmail.com',
  cv,
  introduction: 'Bringing care, organisation, and a practical business mindset to everyday work.',
  about: 'My experience began with running a small business. From managing daily shop operations to sourcing products and keeping financial records, I learned to take ownership, communicate clearly, and solve problems as they arise.',
  outlook: 'With a background in international business management, I am keen to keep learning and contribute to a growing organisation.',
  responsibilities: [
    'Managed daily shop operations and developed business strategies.',
    'Supervised and motivated staff, and sourced quality products.',
    'Monitored inventory, stock levels, budgeting, and financial records.',
  ],
  education: [
    { years: '2024 – 2026', title: 'Bachelor of Art with Honours', institution: 'MIBA · Princeton Management College' },
    { years: '2025', title: 'DBIS', institution: 'KMD College Institute' },
    { years: '2023 – 2024', title: 'Advanced in International Business Management', institution: 'School of Hospitality and Resort Management, Singapore' },
    { years: '2022 – 2023', title: 'Diploma in International Business Management', institution: 'School of Hospitality and Resort Management, Singapore' },
    { years: '2019 – 2020', title: 'Matriculation', institution: 'No. 6 B.E.H.S., Mawlamyine' },
    { years: 'Level 1 completed', title: 'Chinese Language', institution: 'Ys Chinese Language School' },
  ],
  skills: [
    { title: 'Business operations', description: 'Daily shop management, product sourcing, and inventory coordination.' },
    { title: 'Financial organisation', description: 'Practical experience with budgeting and maintaining financial records.' },
    { title: 'Communication & teamwork', description: 'Active listening, staff coordination, and team leadership.' },
    { title: 'Planning & problem-solving', description: 'Time management, multitasking, and an analytical approach to everyday challenges.' },
  ],
  photos: [
    { src: giftBox, title: 'Gift box arrangement', category: 'Handmade gifts', alt: 'Gift box with red roses and carefully arranged rolled banknotes' },
    { src: mirror, title: 'Decorative mirror', category: 'Handmade accessories', alt: 'Hand-decorated blue mirror with pastel embellishments' },
  ],
  videos: [videoOne, videoThree],
};
