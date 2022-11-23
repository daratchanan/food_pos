export const categories = [
   {
      key:'promotion',
      value: 'promotion',
      label: 'โปรโมชั่น'
   },
   {
      key: 'single dish',
      value: 'single dish',
      label: 'จานเดี่ยว'
   },
   {
      key: 'set meal',
      value: 'set meal',
      label: 'ชุดสุดคุ้ม'
   },
   {
      key: 'fresh suki',
      value: 'fresh suki',
      label: 'สุกี้สด'
   },
   {
      key: 'roasted',
      value: 'roasted',
      label: 'เป็ดย่างและอื่นๆ'
   },
   {
      key: 'snack',
      value: 'snack',
      label: 'ของทานเล่น'
   },
   {
      key: 'drink & dessert',
      value: 'drink & dessert',
      label: 'น้ำและขนม'
   },
   {
      key: 'snack box & catering',
      value: 'snack box & catering',
      label: 'สแน็คบ็อกซ์และจัดเลี้ยง'
   },
];

export const products =[
   {
      id: 1,
      name: 'ก๋วยเตี๋ยวหลอดไส้กุ้ง',
      category: 'promotion',
      price: 10,
      img: 'https://www.mk1642.com/getattachment/b8912ac7-2774-4507-b8ef-32c28f2447b9/3640.aspx'
   },
   {
      id: 2,
      name: 'ฮะเก๋า3เซียน',
      category: 'promotion',
      price: 20,
      img: 'https://www.mk1642.com/getattachment/ab016d72-e986-4e7f-a3ff-67fe7812c57e/3639.aspx'
   },
   {
      id: 3,
      name: 'กุ้งทอดทรัฟเฟิล',
      category: 'single dish',
      price: 120,
      img: 'https://www.mk1642.com/getmetafile/5e46bbfe-a3e0-440f-9f16-eb5a2eff530e/%e0%b8%81%e0%b8%b8%e0%b9%89%e0%b8%87%e0%b8%97%e0%b8%ad%e0%b8%94%e0%b8%a8%e0%b8%ad%e0%b8%aa%e0%b8%a1%e0%b8%b2%e0%b9%82%e0%b8%a2%e0%b8%97%e0%b8%a3%e0%b8%b1%e0%b8%9f%e0%b9%80%e0%b8%9f%e0%b8%b4%e0%b8%a5.aspx?maxsidesize=1900'
   },
   {
      id: 4,
      name: 'ไก่กรอบทรัฟเฟิล',
      category: 'single dish',
      price: 100,
      img: 'https://www.mk1642.com/getmetafile/68995a2c-2ec7-49ee-876a-c071d4c73555/%e0%b9%84%e0%b8%81%e0%b9%88%e0%b8%81%e0%b8%a3%e0%b8%ad%e0%b8%9a%e0%b8%8b%e0%b8%ad%e0%b8%aa%e0%b8%a1%e0%b8%b2%e0%b9%82%e0%b8%a2%e0%b8%97%e0%b8%a3%e0%b8%b1%e0%b8%9f%e0%b9%80%e0%b8%9f%e0%b8%b4%e0%b8%a5.aspx?maxsidesize=1900'
   },
   {
      id: 5,
      name: 'ข้าวผัดกระเทียมญี่ปุ่น',
      category: 'single dish',
      price: 30,
      img: 'https://www.mk1642.com/getmetafile/e77b7d27-c22c-4a1a-9001-cbab1d2dcde1/%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%a7%e0%b8%81%e0%b8%a3%e0%b8%b0%e0%b9%80%e0%b8%97%e0%b8%b5%e0%b8%a2%e0%b8%a1.aspx?maxsidesize=1900'
   },
   {
      id: 6,
      name: 'ชุดเลือกได้ท้าหนาว',
      category: 'set meal',
      price: 600,
      img: 'https://www.mk1642.com/getmetafile/9e25bbf4-0dbe-4943-a92a-78d5edfc8716/419-260.aspx?maxsidesize=1900'
   },
   {
      id: 7,
      name: 'ชุดอิ่มอุ่นท้าหนาว',
      category: 'set meal',
      price: 300,
      img: 'https://www.mk1642.com/getmetafile/b619834e-955c-43d6-92a9-10d34745309c/419-260.aspx?maxsidesize=1900'
   },
   {
      id: 8,
      name: 'ชุดข้าวตุ๋นซอสทรัฟเฟิล',
      category: 'fresh suki',
      price: 60,
      img: 'https://www.mk1642.com/getmetafile/61f98129-d2f5-4615-b6b2-e21757c04a10/%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%a7%e0%b8%95%e0%b8%b8%e0%b9%8b%e0%b8%99%e0%b8%97%e0%b8%a3%e0%b8%b1%e0%b8%9f%e0%b9%80%e0%b8%9f%e0%b8%b4%e0%b8%a5.aspx?maxsidesize=1900'
   },
   {
      id: 9,
      name: 'หมูนุ่ม',
      category: 'fresh suki',
      price: 60,
      img: 'https://www.mk1642.com/getmetafile/5b1e38b2-c15a-4677-80e1-a753e4e6c637/K0170.aspx?maxsidesize=1900'
   },
   {
      id: 10,
      name: 'เป็ดย่าง MK (ตัว)',
      category: 'roasted',
      price: 700,
      img: 'https://www.mk1642.com/getmetafile/857ff628-ecab-4d49-8a5b-652022a1a308/E-SourceCode-DEV_MK-12-CMS-PictureforWeb-Roasted-R0010.aspx?maxsidesize=1900'
   },
   {
      id: 11,
      name: 'เป็ดย่าง MK (ใหญ่)',
      category: 'roasted',
      price: 300,
      img: 'https://www.mk1642.com/getmetafile/e2ccb4e4-b78c-4e35-a082-18c433910b0d/E-SourceCode-DEV_MK-12-CMS-PictureforWeb-Roasted-R0030.aspx?maxsidesize=1900'
   },
   {
      id: 12,
      name: 'ขนมจีบกุ้ง',
      category: 'snack',
      price: 60,
      img: 'https://www.mk1642.com/getmetafile/5b10cd0f-2a90-42b7-a3f1-4de972529d22/T0015.aspx?maxsidesize=1900'
   },
   {
      id: 13,
      name: 'ฮะเก๋า',
      category: 'snack',
      price: 60,
      img: 'https://www.mk1642.com/getmetafile/5865aff6-6628-47a4-b26c-01e4609fe901/E-SourceCode-DEV_MK-12-CMS-PictureforWeb-Snack-T0018.aspx?maxsidesize=1900'
   },
   {
      id: 14,
      name: 'บัวลอยจิ (ร้อน)',
      category: 'drink & dessert',
      price: 60,
      img: 'https://www.mk1642.com/getmetafile/6e6d85fa-b83d-419e-9063-6ec508a00561/D0070.aspx?maxsidesize=1900'
   },
   {
      id: 15,
      name: 'เต้าทึง',
      category: 'drink & dessert',
      price: 40,
      img: 'https://www.mk1642.com/getmetafile/e7003816-ab6a-43f5-a778-0c5c2730ef83/E-SourceCode-DEV_MK-12-CMS-PictureforWeb-Dessert-D0030.aspx?maxsidesize=1900'
   },
   {
      id: 16,
      name: 'สแน็คบ็อกซ์',
      category: 'snack box & catering',
      price: 90,
      img: 'https://www.mk1642.com/getmetafile/13545660-37b8-4082-a818-02b51f326e8a/snack-box-update-04.aspx?maxsidesize=1900'
   },
];