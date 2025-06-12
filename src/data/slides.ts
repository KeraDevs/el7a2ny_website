// Helper function to construct relative paths for GitHub Pages
const getRelativePath = (lng: string, path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/el7a2ny_website' : '';
  if (path === "" || path === "/") {
    return `${basePath}/${lng}`;
  }
  return `${basePath}/${lng}${path}`;
};

export const enSlides = [
  {
    id: 1,
    imageUrl: "/car-repair1.jpg",
    title: "Professional Auto Care Services",
    description:
      "Expert mechanics and cutting-edge technology for all your automotive needs. Quality service you can trust.",
    ctaText: "Book Service Now",
    ctaLink: getRelativePath("en", "/services"),
  },
  {
    id: 2,
    imageUrl: "/emergency-car1.jpg",
    title: "24/7 Emergency Assistance",
    description:
      "Stranded on the road? We're here to help. Fast, reliable emergency service whenever you need it most.",
    ctaText: "Get Emergency Help",
    ctaLink: getRelativePath("en", "/emergency"),
  },
  {
    id: 3,
    imageUrl: "/car-parts1.jpg",
    title: "Genuine Parts & Accessories",
    description:
      "Only the finest OEM and quality aftermarket parts for your vehicle. Performance and reliability guaranteed.",
    ctaText: "Shop Parts",
    ctaLink: getRelativePath("en", "/parts"),
  },  {
    id: 4,
    imageUrl: "/car-repair2.jpg",
    title: "Mobile Service at Your Location",
    description:
      "Professional car repair comes to you. Convenient, efficient service at home, work, or anywhere you need us.",
    ctaText: "Schedule Mobile Service",
    ctaLink: getRelativePath("en", "/mobile-services"),
  },
  {
    id: 5,
    imageUrl: "/car-wrapping1.jpg",
    title: "Premium Car Customization",
    description:
      "Transform your vehicle with professional wrapping and customization. Make your car uniquely yours.",
    ctaText: "Explore Options",
    ctaLink: getRelativePath("en", "/customization"),
  },
];

export const arSlides = [
  {
    id: 1,
    imageUrl: "/car-repair1.jpg",
    title: "خدمات العناية بالسيارات الاحترافية",
    description:
      "ميكانيكيون خبراء وتكنولوجيا متطورة لجميع احتياجاتك في عالم السيارات. خدمة عالية الجودة يمكنك الوثوق بها.",    ctaText: "احجز خدمة الآن",
    ctaLink: getRelativePath("ar", "/services"),
  },
  {
    id: 2,
    imageUrl: "/emergency-car1.jpg",
    title: "مساعدة طوارئ 24/7",
    description:
      "عالق على الطريق؟ نحن هنا للمساعدة. خدمة طوارئ سريعة وموثوقة في أي وقت تحتاج إليها.",
    ctaText: "طلب مساعدة طارئة",
    ctaLink: getRelativePath("ar", "/emergency"),
  },
  {
    id: 3,
    imageUrl: "/car-parts1.jpg",
    title: "قطع غيار واكسسوارات أصلية",
    description:
      "فقط أفضل قطع الغيار الأصلية وعالية الجودة لسيارتك. أداء وموثوقية مضمونة.",
    ctaText: "تسوق القطع",
    ctaLink: getRelativePath("ar", "/parts"),
  },
  {
    id: 4,
    imageUrl: "/car-repair2.jpg",
    title: "خدمة متنقلة في موقعك",
    description:
      "إصلاح السيارات الاحترافي يأتي إليك. خدمة مريحة وفعالة في المنزل أو العمل أو أينما تحتاجنا.",
    ctaText: "جدولة خدمة متنقلة",
    ctaLink: getRelativePath("ar", "/mobile-services"),
  },
  {
    id: 5,
    imageUrl: "/car-wrapping1.jpg",
    title: "تخصيص السيارات المتميز",
    description:
      "حوّل سيارتك مع التغليف والتخصيص الاحترافي. اجعل سيارتك فريدة من نوعها.",    ctaText: "استكشف الخيارات",
    ctaLink: getRelativePath("ar", "/customization"),
  },
];
