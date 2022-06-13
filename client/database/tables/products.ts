import { PRODUCT_IMAGES } from "@/constants/paths";
import { Category, Currency, Product } from "@/shared/types/products";

export const templateProducts: Array<Product> = [
    {
        id: 1,
        title: "iPhone 13 Pro Max",
        description: "Описание iPhone 13 Pro Max",
        price: { value: 105999, currency: Currency.rouble },
        category: Category.phone,
        photos: [
            PRODUCT_IMAGES + "/phone/iphone13.webp",
            PRODUCT_IMAGES + "/phone/iphone13(1).webp",
            PRODUCT_IMAGES + "/phone/iphone13(2).webp",
        ],
        colors: [
            { label: "Alpine Green", colorCode: "#576856" },
            { label: "Silver", colorCode: "#F2F3EE" },
            { label: "Gold", colorCode: "#FBEAD6" },
            { label: "Graphite", colorCode: "#62605D" },
            { label: "Sierra Blue", colorCode: "#ADC6DC" },
        ],
        features: [
            { label: "Внутренняя память", value: ["128Гб", "256Гб", "512Гб", "1Тб"] },
            { label: "Вес", value: "238г" },
            { label: "Дисплей", value: "OLED, диагональ 6,7 дюйма, 2778×1284 пикселя, 458 пикселей на дюйм" },
        ]
    },
    {
        id: 2,
        title: "Sony PlayStation 5",
        description: "Описание Sony PlayStation 5",
        price: { value: 49999, currency: Currency.rouble },
        category: Category.gamestation,
        photos: [
            PRODUCT_IMAGES + "/gamestation/40078212b.webp"
        ],
        colors: [
            { label: "Белый", colorCode: "#ffffff" }
        ],
        features: [
            { label: "Центральный процессор", value: "x86-64-AMD Ryzen™ “Zen 2”; 8 ядер, 16 потоков; Переменная частота до 3,5 ГГц" },
            { label: "Графический процессор", value: "Графический процессор на базе AMD Radeon™ RDNA 2; Ускорение трассировки лучей; Переменная частота, до 2,23 ГГц (10,3 терафлопс)" },
            { label: "Системная память", value: "GDDR6 16 ГБ; Пропускная способность 448 ГБ" }
        ]
    },
    {
        id: 3,
        title: "AirPods 3",
        description: "Описание AirPods 3",
        price: { value: 17999, currency: Currency.rouble },
        category: Category.headphones,
        photos: [
            PRODUCT_IMAGES + "/headphones/50163928bb.webp",
            PRODUCT_IMAGES + "/headphones/50163928bb1.webp",
        ],
        colors: [
            { label: "Белый", colorCode: "#ffffff" }
        ],
        features: [
            { label: "Гарантия", value: "1 год" },
            { label: "Страна", value: "Китай" },
            { label: "Версия Bluetooth", value: "5.0" },
        ]
    },
    {
        id: 4,
        title: "PlayStation DualSense Wireless Controller для PS5",
        description: "Описание PlayStation DualSense Wireless Controller для PS5",
        price: { value: 5999, currency: Currency.rouble },
        category: Category.joystick,
        photos: [
            PRODUCT_IMAGES + "/joystick/dualsense_ps5.webp",
            PRODUCT_IMAGES + "/joystick/dualsense_ps5(1).webp",
            PRODUCT_IMAGES + "/joystick/dualsense_ps5(2).webp",
        ],
        colors: [
            { label: "Белый", colorCode: "#ffffff" }
        ],
        features: [
            { label: "Гарантия", value: "1 год" },
            { label: "Страна", value: "Китай" },
            { label: "Интерфейс", value: "USB Type-C, mini-jack" },
        ]
    },
    {
        id: 5,
        title: "Клавиатура Logitech G413 Mechanical Gaming Keyboard",
        description: "Описание клавиатуры Logitech G413 Mechanical Gaming Keyboard",
        price: { value: 6899, currency: Currency.rouble },
        category: Category.keyboard,
        photos: [
            PRODUCT_IMAGES + "/keyboard/50049867b.webp",
            PRODUCT_IMAGES + "/keyboard/50049867b1.webp",
            PRODUCT_IMAGES + "/keyboard/50049867b2.webp"
        ],
        colors: [
            { label: "Чёрный", colorCode: "#000000" }
        ],
        features: [
            { label: "Интерфейс связи с ПК", value: "USB 2.0" },
            { label: "Тип клавиш", value: "механические" },
            { label: "Подсветка кнопок", value: "красная" },
        ]
    },
    {
        id: 6,
        title: "Монитор HUAWEI Display 23.8'' 75Hz AD80HW",
        description: "Описание монитора HUAWEI Display 23.8 75Hz AD80HW",
        price: { value: 13499, currency: Currency.rouble },
        category: Category.monitor,
        photos: [
            PRODUCT_IMAGES + "/monitor/30059510bb.webp",
            PRODUCT_IMAGES + "/monitor/30059510bb1.webp",
            PRODUCT_IMAGES + "/monitor/30059510bb2.webp"
        ],
        colors: [
            { label: "Чёрный", colorCode: "#000000" }
        ],
        features: [
            { label: "Экран", value: '23.8"/1920x1080 Пикс' },
            { label: "Яркость", value: "250 кд/кв.м" },
            { label: "Частота обновления", value: "75 Гц" },
        ]
    },
    {
        id: 7,
        title: "Планшет Apple iPad Air 10.9 Wi-Fi 256GB Silver (MYFW2RU/A)",
        description: "Описание планшет Apple iPad Air 10.9 Wi-Fi 256GB Silver (MYFW2RU/A)",
        price: { value: 80999, currency: Currency.rouble },
        category: Category.tablet,
        photos: [
            PRODUCT_IMAGES + "/tablet/30053003bb.webp",
            PRODUCT_IMAGES + "/tablet/30053003bb1.webp",
            PRODUCT_IMAGES + "/tablet/30053003bb7.webp"
        ],
        colors: [
            { label: "Голубое небо", colorCode: "#65C8FF" },
            { label: "Зелёный", colorCode: "#2DA085" },
            { label: "Розовое золото", colorCode: "#FF8681" },
            { label: "Серебристый", colorCode: "#D0D0D1" },
        ],
        features: [
            { label: "Экран", value: '10.9"/2360x1640 Пикс' },
            { label: "Встроенная память (ROM)", value: "256 ГБ" },
            { label: "Тип процессора", value: "A14 Bionic" },
        ]
    },
]