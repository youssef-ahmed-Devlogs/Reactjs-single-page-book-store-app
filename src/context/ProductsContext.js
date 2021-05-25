import React, { useEffect, useState } from "react";

export const ProductsContext = React.createContext();

export const ProductsProvider = (props) => {
  const books = [
    {
      id: 1,
      title: "الأب الغني الأب الفقير",
      description: `حقق كتاب الأب الغنى والأب الفقير انتشاراً كبير على المستوى العالمى وترجم الكتاب الى معظم لغات العالم الأبطال يجعلون المصاعب تبدوا هينة، فإذا كانوا هم قادرين على فعلها، فكذلك أنا وأنت. حين يجعل الكثيرون عملية الاستثمار صعبة وخطيرة بل مستحيلة، ابحث عن أبطال .
      
      لكل من يسعى للتحكم في مستقبله المالي، فهو لا غنى عنه لأصحاب الملايين، وقد أثار ضجة في عالم المال! . فهذا الكتاب يقضي على أسطورة الحاجة إلي دخل مرتفع من أجل تحصيل الثروة، ويتحدى المعتقد السائد بأن منزلك يعد من الأصول. كما يبين للوالدين كيف أنهم لا يستطيعان التعويل على النظام المدرسي في تعليم أبنائهما طبيعة المال. كذلك يحدد بوضوح تام ما هي الأصول وما هي الخصوم؟ ويعلمك ما تلقنه لأبنائك عن المال، حتى يحققوا مستقبلاً ماليًا ناجحًا.

      اقتباسات :

      “كتاب يختصر بالحديث عن الثراء الحقيقي الغير سريع و كيف تصل إليه مع تغير لبعض المفاهيم التي تملأ رؤوسنا ، هذا الكتاب سيغيّر نظرتك نحو المال لنظرة إيجابية و عملية أكثر و تبحث عن غايتك الحقيقية نحو سعيك إليه بأن تسخرّه كما يقول المؤلف ليعمل لديك لا أن تعمل لديه كما يحدث مع أغلبية الناس بسعيهم خلف وظائفهم و الترقيات وهلّم جراً ، وكلنا بحاجة للتعليم كما نحتاج أيضاً لثقافة المال. “

      “الفقراء وأبناء الطبقة الوسطى يعملون من أجل المال، أما الأثرياء فالمال هو الذي يعمل من أجلهم”

      “المعرفة قوة و مع المال تأتي قوة عظيمة تتطلب معرفة صائبة للحفاظ عليه و تنميته فبدون المعرفة ستترك للحياة الزمام لتقودك”   
      `,
      author: "روبرت كيوساكي",
      image: "/images/products/img1.jpg",
      price: 14.98,
      discount: 30,
      amount: 1,
      inCart: false,
      inFav: false,
      pages: 348,
      year: 2018,
      lang: "ar",
    },
    {
      id: 2,
      title: "نظرية الفستق",
      description: `
      وصف الناشر :

      كتاب سيغير طريقة تفكيرك وحكمك على الأشياء.
      
      يحتوي على مجموعة مقالات تتمحور غالبا عن تطوير الذات والبرمجة اللغوية العصبية وطرق التفكير والوعي والسلوك الإنساني.
      
      
      نظرية الفستق .. كتاب سيغير طريقة تفكيرك وحكمك على الأشياء للمؤلف فهد عامر الأحمدي يحتوي على مجموعة مقالات إليك أهمها :
      النجاح لايتعلق بالكمية بل الاستمرارية
      الإنجازات الكبيرة لا تحتاج لأكثر من عادة يومية صغيرة
      حين تستمر على أي عادة ناجحة ستفاجأ بعد عام أو عامين أنك تجازوت أهدافك بأشواط .
      
      تعلم أن تمتلك أفكار من صنع نفسك،لا تقلد الآخرين في أفكارهم،لا تتطبّع بموروثات خاطئة،حاول أن تسأل،استكشف الأشياء الغامضة ،الشطارة ليست أن تجتهد وتتعب دائما حاول أن تتعلم اقصر واسهل الطرق والقواعد التي تساعدك على الوصول الى الهدف،لا تجادل الجهلاء ولا تجالسهم،اصنع قواعدك وعلقها في كل مكان يخصك وحاول أن تطبقها،لا تيأس لا يأتي النجاح بسهولة.
      
      اقتباسات :
      
      الإنجازات الكبيرة لاتحتاج لأكثر من عادة يومية صغيرة.
      ان لم تعرف اين تذهب فجميع الطرق تؤدي للاشيء !
      سر النجاح يكمن في وضوح الهدف' والمرونة في التنفيذ.
      ينشغل الفاشلون بالمشاكل والعقبات في حين ينشغل الناجحون بتحقيق الهدف النهائي.  
      `,
      author: "فهد الأحمدي",
      image: "/images/products/img2.jpg",
      price: 9.33,
      discount: 0,
      amount: 1,
      inCart: false,
      inFav: false,
      pages: 336,
      year: 2018,
      lang: "ar",
    },
    {
      id: 3,
      title: "ابق قوياً",
      description: `
      لقد لخصت ديمي لوفاتو الدروس التي تعلمتها خلال رحلتها في الحياة في هذا الكتاب وهي مجموعة مكونة من 365 يوما من أكثر أفكارها صراحة وشجاعة وتفاؤلاانها كلماتها الخاصة بالاضافة لمقتبسات ألهمتها وأيضا تأملات وأهداف خاصة بها هذا الكتاب يخاطب كل شخص في كل مكان في رحلته الخاصة لكل من يحتاج للراحة والالهام والدافع ليبقى قوياً كل يوم.

      مذكرات كُتبت على مدار سنة أي 365 يوم للمغنّية ديمي لوفاتو ، هذه المذكرات هي مذكرات ديمي، وفيها: اقتباسات من كتب، كلمات خاصة، نصائح، اقتراحات، تأملات، أهداف يومية و خواطر، وحاولت الكاتبة أن تشارك المعجبين مشاعرها و مشاكلها الشخصية، هادفة إلى مساعدتهم وإمدادهم بالقوة، ولقد نجحت في ذلك، ويمكن القول إن هذا الكتاب موجه لجميع الأعمار، إلا أنه يناسب المراهقين والشباب الذين لا يجدون من يفهمهم.
      
      
      اقتباسات :
      
      "الأمس هو التاريخ والغد هو المجهول أما اليوم فهو الهبة."
      "إنَّ الأخطاء جزء لا يتجزأ عن الطبيعة البشرية كما أنها جزء من كوننا أحياء إن أخطاءنا عبارة عن نعم وفرص لمواصلة التعلم والتطور ولكن حتى عندما تتعلم من أخطائك لا تتوقع إلا تركت أخطاء أخرى لأنك سترتكب المزيد منها ولا بأس في هذا.”
      "تذكّر أنَّه لا يوجد على وجه الأرض أحدٌ يملكَ قلبًا مثل قلبك، وهذا الأمر في حدِّ ذاته يستحقّ التقدير”   
      `,
      author: "ديمي لوفاتو",
      image: "/images/products/img3.jpg",
      price: 14.98,
      discount: 5,
      amount: 1,
      inCart: false,
      inFav: false,

      pages: 403,
      year: 2014,
      lang: "ar",
    },
    {
      id: 4,
      title: "فن اللامبالاة",
      description: `
      فنُّ اللاَّمبالاة هو أحد كتب التنمية البشرية التِّي تدعو الأشخاص إلى عيش حياة غير مألوفة، فيعلِّمك الخسارة بدون أن تكون هذه الخسارة مصدر إزعاج وقلق لك.
      
      فن اللامبالاة لعيش حياة تخالف المألوف للكاتب مارك مانسون هو كتاب في التنمية البشرية، يتحدث فيه الكاتب أن الانسان لا يجب بالضرورة أن يكون إيجابياً طوال الوقت وأن المفتاح إلى بشر أكثر قوة وسعادة كامن في التعامل مع الشدائد
      تعاملاً أفضل.
      
      اقتباسات :
      
      *إذا كنت راغبا في تغيير نظرتك إلى مشكلاتك، فإن عليك أن تغير ما تعتبره ذو قيمة كبيرة، أو ما تقيس به نجاحك أو فشلك.
      
      *المشاعر والانفعالات السلبية ما هي إلا نداء إلى الفعل بأن عليك أن تفعل شيئا .
      
      * أنت مسؤول عن سعادتك لأنك أنت الذي يستطيع دائما أن يختار كيف ينظر للأمور وكيف يستجيب لها ويقيمها .   
      `,
      author: "مارك مانسون",
      image: "/images/products/img4.jpg",
      price: 10,
      discount: 0,
      amount: 1,
      inCart: false,
      inFav: false,
      pages: 271,
      year: 2018,
      lang: "ar",
    },
    {
      id: 5,
      title: "40 أربعون",
      description: `
      ﺃﻟﻔﺖ ﻫﺬﺍ ﺍﻟﻜﺘﺎﺏ ﻓﻲ ﺃﺛﻨﺎﺀ ﺧﻠﻮﺓ ﻣﺪﺗﻬﺎ ﺃﺭﺑﻌﻮﻥ ﻳﻮماً، ﺣﻴﺚ ﺍﻋﺘﺰﻟﺖ ﺍﻟﻨﺎﺱ ﻭﺍﻟﺘﻜﻨﻮﻟﻮﺟﻴﺎ، ﻭﺟﻠﺴﺖ ﻓﻲ ﺟﺰﻳﺮﺓ ﻧﺎﺋﻴﺔ ﻣﻊ ﻧﻔﺴﻲ ﺃﺣﺎﻭﻝ ﺃﻥ ﺃﺗﻔﻜﺮ ﻓﻲ ﻣﺎ ﻓﺎﺕ، ﻭﺃﺗﺄﻣﻞ ﻓﻲ ﻣﺎ ﻫﻮ ﺁﺕٍ، ﻓﺎﻧﺘﻬﻴﺖ ﺑﺄﺭﺑﻌﻴﻦ ﺧﺎﻃﺮﺓ ﻓﻲ ﻛﻞ ﻣﺤﻮﺭ ﻣﻦ ﺍﻟﻤﺤﺎﻭﺭ ﺃﺩﻧﺎﻩ:

      -٤٠ يوماً مع حياتي.
      -٤٠ يوماً مع قرآني.
      -٤٠ يوماً مع نفسي.
      -٤٠ يوماً مع تحسيناتي.
      -٤٠ يوماً مع قصصي.
      -٤٠ يوماً مع إلهي.
      -٤٠ يوماً مع كتبي.
      -٤٠ يوماً مع حِكم الناس.
      -٤٠ يوماً مع ذكرياتي.
      -٤٠ يوماً مع حِكمي.
    
      
      كتاب يأخذك في رحله من التفكر والتعقل والإحسان ولكن هذه المره ليس في هذا العالم الفسيح بل في نفسك أيها الانسان.
      
      
      اقتباسات :
      
      “المعاناة هي المسافة بين الواقع وبين ماتريد ،، ولتقضي على الألم غيّر الواقع أو غيّر ماتريد “
      
      “أجد قيمتي في سيطرة عقلي على نفسي وشهواتي، فكلما تغلبت على شهوة معينة، وطردتها من حياتي شعرت بقيمة أكبر، وكلما بدأت عادة حسنة جديدة أشعر أيضًا بقيمة أكبر، والجميل أني أشعر بصدق القيمة، سواء عرف الناس عن هذا الأمر أم لم يعرفوا، المهم أنا أكون عارفًا، وطبعًا الله مطلع من فوق سبع سماوات.”
      
      “الصداقة اعانة وليست فقط وناسة ،،،، الصداقة يقتلها الكذب وتنميها التضحية.”

      `,
      author: "أحمد الشقيري",
      image: "/images/products/img5.jpg",
      price: 16,
      discount: 50,
      amount: 1,
      inCart: false,
      inFav: false,
      pages: 267,
      year: 2018,
      lang: "ar",
    },
    {
      id: 6,
      title: "The Batman Vault",
      description: `
      Part of the "Museum-in-a-Book" titles, this book focuses on the Dark Knight, from the history of the character, the many concurrent variations of his storyline to the development various ancillary products including the TV show, animated series, and two different movie verses.
      `,
      author: "Manning, Matthew",
      image: "/images/products/img6.jpg",
      price: 31.57,
      discount: 10,
      amount: 1,
      inCart: false,
      inFav: false,
      pages: 192,
      year: 2009,
      lang: "en",
    },
    {
      id: 7,
      title: "JavaScript The Definitive Guide",
      description: `
      Offers comprehensive coverage of ECMAScript 5 and also the APIs introduced in HTML5. This book features the chapters on functions and classes. It includes a chapter that covers language extensions and subsets.
      `,
      author: "Flanagan, David",
      image: "/images/products/img7.jpg",
      price: 81.04,
      discount: 0,
      amount: 1,
      inCart: false,
      inFav: false,
      pages: 1100,
      year: 2011,
      lang: "en",
    },
  ];

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // set Products after page reload
  useEffect(() => {
    setProducts(getProducts());
    setCart(getCart());
    setFavorites(getFavorites());
  }, []);

  //update all data in local storage if data updated
  useEffect(() => {
    saveProducts(products);
    saveCart(cart);
    saveFavorites(favorites);
  }, [products, cart, favorites]);

  // Handel add to cart
  const addToCart = (id) => {
    const product = products.filter((book) => book.id === id);
    const fromFav = favorites.filter((book) => book.id === id);

    if (!product[0].inCart) {
      product[0].inCart = true;

      if (fromFav.length) {
        fromFav[0].inCart = true;
      }
      setCart([...cart, ...product]);
    }
  };

  // Handel add to favorites
  const addToFavorites = (id) => {
    const fav = products.find((book) => book.id === id);

    if (!fav.inFav) {
      fav.inFav = true;
      setFavorites([...favorites, fav]);
    } else {
      fav.inFav = false;
      const notFave = favorites.filter((book) => book.id !== id);
      setFavorites([...notFave]);
    }
  };

  // Save all to local storage
  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getCart = () => {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : cart;
  };

  const saveProducts = (products) => {
    localStorage.setItem("products", JSON.stringify(products));
  };

  const getProducts = () => {
    return localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : books;
  };

  const saveFavorites = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const getFavorites = () => {
    return localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : favorites;
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        addToCart,
        setCart,
        favorites,
        addToFavorites,
        searchTerm,
        setSearchTerm,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
