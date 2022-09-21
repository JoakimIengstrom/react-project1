var courseData = [
    {
      id: 1,
      name: "JavaScript",
      price: 1000,
      instructor: "Jahirul Haq",
      image: "https://i.ibb.co/0jHqtM0/javascript.png",
    },
    {
      id: 2,
      name: "React",
      price: 1200,
      instructor: "Jeanette Ljungkvist",
      image: "https://i.ibb.co/m02Kbdd/1-PWe4-Dm-AE78-BLD4-SHp-Xiz-Mw.png",
    },
    {
      id: 3,
      name: "Django",
      price: 1500,
      instructor: "Joakim Engström",
      image:
        "https://mpng.subpng.com/20180711/rtc/kisspng-django-web-development-web-framework-python-softwa-django-5b45d913f29027.4888902515313042119936.jpg",
    },
    {
      id: 4,
      name: "Python",
      price: 800,
      instructor: "Jahirul Haq",
      image: "https://i.ibb.co/RYz7x04/Python-logo.jpg",
    },
    {
      id: 5,
      name: "Java",
      price: 1300,
      instructor: "Joakim Engström",
      image: "https://i.ibb.co/z7VM47t/images.png",
    },
    {
      id: 6,
      name: "Android Devlopment",
      price: 1800,
      instructor: "Jeanette Ljungkvist",
      image:
        "data:image/png;base64,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",
    },
    {
      id: 7,
      name: "Front-end Development",
      price: 1600,
      instructor: "Jahirul Haq",
      image:
        "https://i.ibb.co/fY4ZDzf/must-have-frontend-development-bundle-1-638.jpg",
    },
    {
      id: 8,
      name: "Back-end Development",
      price: 1900,
      instructor: "Joakim Engström",
      image:
        "https://i.ibb.co/DLWzJc9/backenddeveloper-2502825a14ff440eb775dc4244e7ed4d.png",
    },
    {
      id: 9,
      name: "Full-stack Development",
      price: 2200,
      instructor: "Jeanette Ljungkvist",
      image: "https://i.ibb.co/LQj7fgy/front-vs-back-vs-full-650-x-350.png",
    },
    {
      id: 10,
      name: "C programming",
      price: 800,
      instructor: "Jahirul Haq",
      image: "https://i.ibb.co/DYwPF4X/C-programming-1024x530.png",
    },
    {
      id: 11,
      name: "MS Office",
      price: 500,
      instructor: "Joakim Engström",
      image: "https://i.ibb.co/2NjWysx/download.png",
    },
    {
      id: 12,
      name: "TypeScript",
      price: 1100,
      instructor: "Jeanette Ljungkvist",
      image: "https://www.svgrepo.com/show/303600/typescript-logo.svg",
    },
    {
      id: 13,
      name: "C#",
      price: 1300,
      instructor: "Jahirul Haq",
      image: "data:image/png;base64,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",
    },
    {
      id: 14,
      name: "C++",
      price: 400,
      instructor: "Joakim Engström",
      image: "https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png",
    },
    {
      id: 15,
      name: "Digital Marketing",
      price: 300,
      instructor: "Jeanette Ljungkvist",
      image: "https://i.ibb.co/ck7fWNm/Digital-marketing2.jpg",
    },
  ];
  
  export default courseData;