export const enServices = [
  {
    id: 1,
    image: "/car-repair1.jpg",
    title: "Car Tuning & Performance",
    description:
      "Professional tuning services to enhance your vehicle's performance and efficiency.",
    ctaText: "Book Tuning",
    ctaLink: "/en/services",
    isVerified: true,
    isEmergency: false,
    features: [
      "ECU Remapping & Tuning",
      "Performance Upgrades",
      "Exhaust System Optimization",
      "Suspension Tuning",
      "Power & Torque Enhancement",
    ],
  },
  {
    id: 2,
    image: "/car-repair2.jpg",
    title: "Regular Maintenance Services",
    description:
      "Comprehensive maintenance to keep your vehicle running smoothly and safely.",
    ctaText: "Schedule Maintenance",
    ctaLink: "/en/maintenance",
    isVerified: true,
    isEmergency: false,
    features: [
      "Oil Change & Filter Replacement",
      "Brake System Inspection",
      "Engine Diagnostics",
      "Tire Rotation & Alignment",
      "Preventive Care Services",
    ],
  },
  {
    id: 3,
    image: "/emergency-car1.jpg",
    title: "Emergency Roadside Assistance",
    description:
      "24/7 emergency assistance and towing services when you need help on the road.",
    ctaText: "Get Emergency Help",
    ctaLink: "/en/emergency",
    isVerified: true,
    isEmergency: true,
    features: [
      "24/7 Emergency Response",
      "Professional Tow Trucks",
      "Roadside Repair Services",
      "GPS Tracking & Updates",
      "Insurance Coverage Assistance",
    ],
  },
  {
    id: 4,
    image: "/car-parts1.jpg",
    title: "Premium Service Network",
    description:
      "Access to our network of certified and verified automotive workshops.",
    ctaText: "Find Workshops",
    ctaLink: "/en/workshops",
    isVerified: true,
    isEmergency: false,
    features: [
      "Certified Technicians",
      "Quality Guarantee",
      "Transparent Pricing",
      "Customer Reviews",
      "Professional Standards",
    ],
  },
];

export const arServices = [
  {
    id: 1,
    image: "/car-repair1.jpg",
    title: "تطوير أداء السيارات والتيونينغ",
    description: "خدمات تطوير احترافية لتحسين أداء وكفاءة سيارتك.",
    ctaText: "احجز تطوير",
    ctaLink: "/ar/services",
    isVerified: true,
    isEmergency: false,
    features: [
      "برمجة وحدة التحكم وتطوير الأداء",
      "ترقيات الأداء المتخصصة",
      "تحسين نظام العادم",
      "ضبط نظام التعليق",
      "تعزيز القوة والعزم",
    ],
  },
  {
    id: 2,
    image: "/car-repair2.jpg",
    title: "خدمات الصيانة الدورية",
    description: "صيانة شاملة للحفاظ على سيارتك تعمل بسلاسة وأمان.",
    ctaText: "جدولة صيانة",
    ctaLink: "/ar/maintenance",
    isVerified: true,
    isEmergency: false,
    features: [
      "تغيير الزيت والفلاتر",
      "فحص نظام المكابح",
      "تشخيص المحرك",
      "دوران الإطارات والمحاذاة",
      "خدمات الرعاية الوقائية",
    ],
  },
  {
    id: 3,
    image: "/emergency-car1.jpg",
    title: "مساعدة الطوارئ على الطريق",
    description:
      "مساعدة طوارئ وخدمات سحب 24/7 عندما تحتاج المساعدة على الطريق.",
    ctaText: "طلب مساعدة طارئة",
    ctaLink: "/ar/emergency",
    isVerified: true,
    isEmergency: true,
    features: [
      "استجابة طوارئ 24/7",
      "شاحنات ونش احترافية",
      "خدمات إصلاح على الطريق",
      "تتبع GPS وتحديثات مستمرة",
      "مساعدة في التأمين",
    ],
  },
  {
    id: 4,
    image: "/car-parts1.jpg",
    title: "شبكة الخدمة المميزة",
    description: "الوصول إلى شبكتنا من الورش المعتمدة والموثقة للسيارات.",
    ctaText: "العثور على الورش",
    ctaLink: "/ar/workshops",
    isVerified: true,
    isEmergency: false,
    features: [
      "فنيون معتمدون",
      "ضمان الجودة",
      "أسعار شفافة",
      "مراجعات العملاء",
      "معايير مهنية",
    ],
  },
];

export const getServices = (language: string) => {
  return language === "ar" ? arServices : enServices;
};
