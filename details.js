var mobilesData = [
    {
        Name : "Nord 2 CE Lite 5G ",
        Brand : "OnePlus",
        OS : "OxygenOS",
        Display : "6.59 Inches",
        Form_factor : "Smartphone",
        RAM : "6GB",
        Storage : "128GB",
        Cost : "₹24,999"
    },
    {
        Name : "Redmi 9 Activ ",
        Brand : "Redmi",
        OS : "Andriod MIUI 20, MIUI 20",
        Display : "6.53 Inches",
        Form_factor : "Smartphone",
        RAM : "4GB",
        Storage : "64GB",
        Cost : "₹9,499"
    },
    {
        Name : "Samsung Galaxy M13 ",
        Brand : "Samsung",
        OS : "Android 12.0",
        Display : "6.6 Inches",
        Form_factor : "Smartphone",
        RAM : "4GB",
        Storage : "64GB",
        Cost : "₹11,999"
    },
    {
        Name : "Apple iPhone 14 ",
        Brand : "Apple",
        OS : "IOS",
        Display : "6.1 Inches",
        Form_factor : "Smartphone",
        
        Storage : "128GB",
        Cost : "₹79,999"
    },
    {
        Name : "Nokia G21 ",
        Brand : "Nokia",
        OS : "Android 11 64bits",
        Display : "6.5 Inches",
        Form_factor : "Smartphone",
        RAM : "4GB",
        Storage : "64GB",
        Cost : "₹12,499"
    },
    {
        Name : "OPPO A74 5G ",
        Brand : "Oppo",
        OS : "Android 11",
        Display : "6.49 Inches",
        Form_factor : "Smartphone",
        RAM : "6GB",
        Storage : "128GB",
        Cost : "₹14,990"
    },
    {
        Name : "Nokia 150 ",
        Brand : "Nokia",
        OS : "Series 30+",
        Display : "2.4 Inches",
        Form_factor : "QWERTY Phone",
       
        Cost : "₹2,599"
    },
    {
        Name : "VIVO Y21 ",
        Brand : "Vivo",
        OS : "Android 11 based Oxygen OS 11.1",
        Display : "6.51 Inches",
        Form_factor : "Smartphone",
        RAM : "4GB",
        Storage : "64GB",
        Cost : "₹24,999"
    },
    {
        Name : "Huawei P50 Pro 4G ",
        Brand : "Huawei",
        OS : "Android v9 1 foot, Android 8 1",
        Display : "6.59 Inches",
        Form_factor : "Smartphone",
        RAM : "8GB",
        Storage : "256GB",
        Cost : "₹65,000"
    },
    {
        Name : "Lenovo Phab 2 ",
        Brand : "Phab 2",
        OS : "Android",
        Display : "5.59 Inches",
        Form_factor : "Touch Screen Phone",
        RAM : "4GB",
        Storage : "32GB",
        Cost : "₹24,999"
    },
    {
        Name : "LG M2501 ",
        Brand : "LG",
        OS : "Android 7.0",
        Display : "5.3 Inches",
        Form_factor : "Smartphone",
        RAM : "2GB",
        Storage : "16GB",
        Cost : "₹5,499"
    },
    {
        Name : "VIVO Y 15C",
        Brand : "Vivo",
        OS : "Funtouch OS 12 (Based on Android 12)",
        Display : "6.51 Inches",
        Form_factor : "Smartphone",
        RAM : "3GB",
        Storage : "64GB",
        Cost : "₹10,499"
    }
];

document.getElementById('mobileDetails').innerHTML = `

${mobilesData.map(function(){
    return `
    
    `
}).join("")}
`
