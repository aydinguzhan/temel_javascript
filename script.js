// varible :  Değişkenler
var number_varible = 10;
var string_varible = "Hello World!"
var Blooean_varible = true // or false
var tanimsiz = undefined
var bos = null


let number2_varible = 20;
let string2_varible = "This varible is STRİNG";
let Blooean2_varible = false;

//Global 
const number3_varible = 30;
const string3_varible = "This varible is Global Str varible";
const Blooean3_varible = true

// console.log() : Geliştirici konsoluna yazdırmak

console.log(number_varible);
console.log(string_varible);
console.log(Blooean_varible);

console.log(number2_varible);
console.log(string2_varible);
console.log(Blooean_varible);

console.log(number3_varible);
console.log(string3_varible);
console.log(Blooean3_varible);


//str işlemleri ve örnekler

let str = "Javascript"
let example = str + 4;



console.log(str, "------------------------------");
console.log(example)


//str method

console.log(str.charAt(0));// index numarasındaki karakteri geriye döner.
console.log(str.indexOf("J"));// Yazılan karakterin hangi indexte olduğunu gösterir. Yoksa -1 değeri döner.
console.log(str.charCodeAt(2)); // UTF-16 da temsil edilen charCode değerini verir

let new_str = str.concat(" is wonderful programing lang") // yeni bir dize oluşturarak mevcudun sonuna ekleme yapar.

console.log("Old Str   : ", str);
console.log("New Str   :", new_str);

console.log(new_str.endsWith("lang"));  // Dizinin , stringin sonunun verilen değerde bittip bitmediğini kontrol eder.
console.log(new_str.startsWith("Ja")); // Dizinin , stringin başlangıç değeri verilen değerde bittip bitmediğini kontrol eder.


console.log(typeof (str));
console.log(typeof (new_str));  // aldığı parametrenin ntip değerini geri dönderir

console.log(str.split("")); // split verilern parametreye gçöre ifadeyi elemanlarına ayırarak bir array döndirür.
console.log(str.split("a"));

console.log(str.slice(0, 3)); // başlangıç ve bitiş değeri arasındaki yapıyı bölerek geri döndürür.
console.log(new_str.slice(0, 15))

let splice_method = new_str.slice(0, 15)
/* Bu metotlar ilkel değişkeni değiştirmez ondan bir kopya oluşturarak , kopya üzerinden gerekli işlemleri yapar ve bize kopya ifade ile bir sonuç döndürmektedir. 
    Yeni veri yapsuını yakalamak için onu bir değişkene atoıyarak konsola bastırdık.
*/
console.log(splice_method)

console.log(str)
console.log(str.lastIndexOf("a")) //bir dizgede belirtilen bir değerin son geçtiği yerin dizinini (konumunu) döndürür.

console.log(str.includes("a"))// verilen parametre içerisinde bulunuyor mu sonucunu döndürür. true || false

// date yapısı

let date = new Date()
// Full gün ay yıl saat saat dilimi vsvs
console.log(date)
//Ay
console.log(date.getMonth() + 1)
//Yıl
console.log(date.getFullYear())
//Gün
console.log(date.getDate())
//Hafatanın kaçıncı günü PAZAR = 0 
console.log(date.getDay())


// saat : dakika : saniye : millisaniye
console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + ":" + date.getMilliseconds())



/* Consola saniyeyi takip edebilerceğimiz bir zamanlayıcı yapalım.
    Bunun için fonksiyon ve Timeout yapılarından yardım alacağız.
*/
//-------------------------------------------------------------
function real_time() {
    let date1 = new Date();
    let hour = date1.getHours();
    let minute = date1.getMinutes();
    let second = date1.getSeconds();

    console.log(hour + ":" + minute + ":" + second)
}

// Çalışması için yorum satırlarından kurtul !! 
/*
Tek satırım yorum "//"
//Çoklu satır yoru /**/

/* 
setInterval(real_time,1000)
setTimeout(()=>{console.log("-----------BU BİR SANİYE SONRA ÇALIŞIR VE SADECE BİR DEFA ÇALIŞIR-------------------------"),1000})

*/

//diziler - Array
const array_varible = [1, 2, 3, "a", "b", "c"]
const array_varible1 = [4, 5, 6, "d", "f", "g"]

const new_concant_array = array_varible.concat(array_varible1)

console.log(new_concant_array);

let pop_method = new_concant_array.pop();

console.log(pop_method); //  SON ELEMAN ÇIKARTILIR

let pop_method1 = new_concant_array.pop(0)


let new_method_array = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 0]

const isBigger = (currentValue) => currentValue > -1;
console.log(new_method_array.every(isBigger))  // dizideki bütün elemanlar için verilen fonksiyon denenir. Total sonuç hepsine uygunsa true döner


/* fonksyonlar 
    - fonksiyonların amacı süreklilik ve tekrar gerektiren işlemlerin kolaylaştırılmasıdır.
    2 tip fonsiyon tanımlaması yapılabilir.
*/

function yazdir(parametre) {
    console.log(parametre)
}

yazdir("Bu fonsiyon consola girilen parametreyi yazdırır")

// parntez içine yazılan ifade fonksiyon içerinde kullanılacak olan parametreyi alır

const yazdir_arrowFunction = (parametre) => {
    console.log("Arrow fonksiyon biçimindeki bu fonsiyon consola grilen parametreyi yazdrır.")


}

// Değer döndüren fonksiyonlar ve return ifadesi
// fonksiyonun gerçekleştirdiği işlem sonucunda yakaladığımız değeri kullnamak veya başka bir yapıda kullanmak isteyebiliriz

const toplam = (a, b) => {
    return a + b;
}

const result = toplam(3, 2) + 2;

console.log("Toplam fonsiyonu sonucunu ile 2 rakamının toplamını = ", result)

const fish_func = (fish_name, kg, size) => {
    let res = `${fish_name} kilosu ${kg}, boyutu ${size}`
    return res // döndürülecek değer
}


//console.log("Furkanın yakaladığı balık",fish_func("sazan",20,70))

//Obje yapıları
// javascriptte obje tanımlama

const fish = {
    fish_name: "Albalık",
    fish_kg: 3,
    fish_size: "40 cm",
    fish_prototype: "Abi somon olmuş bu somon !"
}

//Bir paket halinde değişkenimizin özelliklerini nitelendirdik.

const total_fish = {
    fish_name: ["Alabalık", "Somon", "Sazan"],
    fish_count: {
        "Alabalık": 2,
        "Somon": 3,
        "Sazan": 0
    },
    fish_area: "Keban"
}

console.log("Balık adı :", fish.fish_name, "balık ağırlığı", fish.fish_kg, "balık boyu :", fish.fish_size, "Balık tasviri : ", fish.fish_prototype)

console.log("---------------------------------------------------------------------")

console.log("Toplam yakalanan balıklar : ",
    total_fish.fish_name[0], ":", total_fish.fish_name[0],
    total_fish.fish_name[1], ":", total_fish.fish_name[1],
    total_fish.fish_name[2], ":", total_fish.fish_name[2],
    "---------",
    "Yakalanan alan : ", ":", total_fish.fish_area
);

// javascripte türler number, string , boolean , symbol, null ,undefine -> ilkel
// array , object ve bazı kaynaklara göre function  gelişmiş veri türleridir.
// ilkel veri tiplerinde tür dönüşümü ise oldukça basittir. Hazır metotlar ile bunları sağlayabiliriz.

let number_ = 1

console.log(number_, typeof (number_))
console.log(typeof (String(number_))) // String ile number veri türünü çevirdik.

//Döngüler

for (let i = 0; i <= 5; i++) {
    console.log(i)
}

console.log("-------------------")

// 0'dan 5' kadar olan sayıların karesini almak
let i = 0;
while (i < 5) {
    console.log(i * i);
    i += 1
}

//koşul durumları if else if else
// 0'dan 100'e kadar tek ve çift sayıları bulan döngü
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log("Çift : ", i)
    }
    else {
        console.log("Tek : ", i)
    }
}


// javascript ile DOM manipülasyonu
// Dom üzerine hard write olarak yazdırmak için ;
//document.write("merhaba");

//html sayfası üzerinde body parent elementi içerisine html tagı eklemek.
document.body.innerHTML = `<>Bu bir h1 tag'idir.</h1>`;


// forEach kullnarak DOM üzerine eleman yaratmak
const person = [
    {
        "Name": "Sunay",
        "Surname": "Ay",
        "Age": 62
    },
    {
        "Name": "Oğuzhan",
        "Surname": "Aydınlık",
        "Age": 28
    },
    {
        "Name": "İrem",
        "Surname": "Aydemir",
        "Age": 32
    }, {
        "Name": "Ali",
        "Surname": "Aysen",
        "Age": 25
    }
]

let unorder_list = document.createElement("ul");

// forEach döngüsü
person.forEach((item) => {
    let li_childelment = document.createElement("li");
    li_childelment.innerText = `${item.Name}`
    unorder_list.appendChild(li_childelment);

})

document.body.appendChild(unorder_list)

console.log(unorder_list)

// loop kullarak tablo oluşturalım

const table = document.createElement("table")
const table_row = document.createElement("tr")


let row_count = 0

person.forEach(item => {
    row_count++
    const table_column = document.createElement("td")
    table_column.innerText = `${item.Age}`
    table_row.appendChild(table_column)
})

console.log(row_count)
table.appendChild(table_row)
document.body.appendChild(table)

// body elemetinin içeriğini consola yazdıralım
console.log(document.body)


// javascript ile style eklmek

let paragraf = document.createElement("p")
paragraf.innerText = "apendChild ile eklenen bir paragraf"

paragraf.style.color = "red"
paragraf.style.fontSize = "3rem"
paragraf.style.fontWeight = "600"
document.body.appendChild(paragraf)


// Class yapısı

class Person {
    constructor(ad, soyad, yas, egitim) {
        this.name = ad;
        this.surname = soyad;
        this.age = yas;
        this.education = egitim // this sınıfın kendisini ifade eder. Yani sınıftaki değişkenleri işaret ediyoruz.
    }
    ekrana_yazdir() {
        console.log(this.name, this.surname, this.age, this.education)
    }
}

let personel1 = new Person("furkan", "öztürk", "28", "mühendis") //new ile yeni bir instance yani görüntü oluşturduk
let personel2 = new Person("Oğuzhan", "Ay", "28", "Mühendis")

personel1.ekrana_yazdir()
personel2.ekrana_yazdir()

//miras almak

class Family extends Person {
    constructor(ad, soyad, yas, egitim) {
        super(ad, soyad, yas, egitim)

    }
}

let family_person = new Family("Ali", "Ay", "63", "Mühendis")

family_person.ekrana_yazdir()

document.write(personel1.name.toUpperCase(), " ", personel1.surname.toUpperCase()) //toUpperCase tüm harfleri büyük harflere çevirir.


// javascript kullanrak card elementi oluşturarak bunu sayfamızda gösterelim
//Aşağıdaki il yöntem ile daha önce oluşturduğumuz elementler son oluşturduğuz ile yok olur. İkinci yöntem daha sağlıklı

// const card = `
// <div id="card">
//     <img src="https://hips.hearstapps.com/hmg-prod/images/interior-christmas-magic-glowing-tree-fireplace-royalty-free-image-1628537941.jpg">
//     <p>Merry Cristmas</p>
//     <p><small>25 Aralık</small></p>
// </div>
// `


// document.body.innerHTML= card

// yöntem 2
const container = document.createElement("div");
const card_img = document.createElement("img");
card_img.setAttribute("src", "https://hips.hearstapps.com/hmg-prod/images/interior-christmas-magic-glowing-tree-fireplace-royalty-free-image-1628537941.jpg");
card_img.setAttribute("width", "500px");
const card_text = document.createElement("p")
card_text.innerText = "Merry Cristmas"

container.appendChild(card_img);
container.appendChild(card_text)


container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.border = " thick solid #ececec"
container.style.padding = "1rem"
container.style.marginTop = "5rem"
document.body.style.display = "flex"
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

for (let i = 0; i < 10; i++) {
    document.body.appendChild(container)
}


// Görüldüğü üzerine html ve css yapılarını neden kullandığımız gayet aşikardır :D


//Callback : .ağırıldığında belirli bir görevi yerine getiren kod bloğudur.

function selamla(name) {
    console.log('Merhaba' + ' ' + name);
}
// konsola merhaba ve girilen ismi birleştirerek yazan bir fonksiyon oluşturduk.
// selamla("oguz") => output : Merhaba oguz

// Javascript'te bir fonksiyonnu başka bir fonksiyona atgüman olarak verebiliriz.

function selamla_1(name, callback) {
    console.log("Merhaba" + " " + name);
    callback();
}

//callback olarak tanımladığımız fonsiyonu yazalım

function call_me() {
    console.log("Ben callback fonksiyonum !");
}

selamla_1("oguz", call_me); // parantez ile kullanmadığımıza dikkat


// öRNEK 2 setTimeout ile yapımızı oluşturalım

console.log("---------------------------------------------");

function selamla_2(name, callback) {
    console.log("Merhaba Javascript")

    //callback fonksiyonumuz konsol işlemi sonrası çalışsın
    callback(name)
}

function say_my_name(name) {
    console.log('Merhaba ' + name);
}

setTimeout(selamla_2, 4000, 'Oguzhan', say_my_name);


// Promise : Hem kod üreten hemde tüketen koda sahip bir yapı, sana mutlaka bir sonuç sözü veriyorum !

let myPromise = new Promise(function(sonuc, hata){
    /* işlemlerimiz belkide fetch işlemleri artık ne işine yarıyorsa yaz buraya sonucun başarılı olup olmamasına göre işlem değerlerini döndürecek:)
    */
    sonuc();
    hata();
});
// işlem başarılıysa => sonuc 
// işlem basarısız ise => hata



myPromise.then(
    function (value) {
        console.log("basarılı iş")
    },
    function (eror) {
        console.warn("Hata")
    }
)

// Daha açıklayıcı bir örenek verelim

function control_value(some){
    promise_element = some
    document.body.append(promise_element)
}

let new_promise = new Promise(function(relsove, reject){
    let varible = 0;

    //gerekli işlemler yaparak x'in değerini manüpile ettiğimizi hayal edelim :)

    if( varible == 0){
        relsove("200 OK Başarılı işlem");
    }
    else{
        reject("Hatalı dostum !");
    }
});

new_promise.then(
    function(value){
        control_value(value);
    },
    function(error){
        control_value(error);
    }
);

/* Callbac yapsısı ile bir işlem gerçekleştirirken işlem sonucuna göre diğer işlemimizi devam ettireceğimiz durumlar ile karşılaşabilkiriz
Bu tür durumlarda callback yapısı ile javascriptin asecron yapısından kurtulup işlemlerimizi birbirine bağımlı hale getiririz.
Öreneğin bir butona bastığımızda dowland işlemi gerçekleştirirken dosyanın indirilmesini beklemeden sayfada özgürce dolaşabiliriz.
Peki dosyayı indirdikten sonra bu işleme bağımlı bir alert göstermek istersek?
Bu olayı callback ile mükemmel bir yapıda organize edebiliriz.
https://www.webcebir.com/273-javascript-callback-fonksiyon-dersi.html buraya bir göz gezdir! */


function first(Callback){
    console.log("ilk işlem");
    Callback();
};

first(()=>{console.log("ikinci işlem")})



//promisse örneği için sayfamızı yönlendirelim ve yönlendirdiğimiz ( google) ekran için konsola buradayım yazdıralım.


let href_promise = new Promise(function(sonuc, hata){
     
    sonuc();
    hata();
});
// işlem başarılıysa => sonuc 
// işlem basarısız ise => hata



href_promise.then(
    function (value) {
        console.log("*****BURADAYI*****")
    },
    function (eror) {
        console.warn("Hata")
    }
)


