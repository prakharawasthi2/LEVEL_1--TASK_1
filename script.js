let temp1=document.querySelector(".konark");
let temp2=document.querySelector(".meenakshi");
let temp3=document.querySelector(".kedarnath");
let image=document.querySelector("#articles");
let contenth2=document.querySelector(".content-temple h2 ");
let contenth1=document.querySelector(".content-temple h1 ");
temp1.addEventListener('click',()=>{
contenth2.innerHTML="The Konark Sun Temple, located in Odisha, is one of India's most amazing and unique temples. Built in the 13th century, it is designed like a giant chariot for the Sun God, Surya. The temple has 12 huge stone wheels and 7 horses, which seem to be pulling the chariot across the sky. When you visit the temple, you don't just see a structure made of stones—you feel like you are stepping into history. Every wall and pillar is carved with beautiful and detailed sculptures that tell stories of daily life, dances, and the power of nature. Even though time and weather have worn some parts, the temple still stands tall, showing the skill and passion of ancient builders. It is a place where people come to feel connected to the Sun, nature, and the spirit of India's ancient culture. Visiting Konark is like watching a beautiful story from the past come alive, reminding us of the magic that art, devotion, and hard work can create."
contenth1.innerHTML='Konark Temple'
contenth2.style.color="white"
image.style.backgroundImage='url("https://images.unsplash.com/photo-1695692928722-8120423aabe8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
image.style.backgroundPosition="center"
});
temp2.addEventListener('click',()=>{
contenth1.innerHTML="Meenakshi Amman Temple"
contenth2.style.color="black"
contenth1.style.width=25+'vw'
contenth1.style.left=35+'%'
contenth2.innerHTML="The Meenakshi Amman Temple is one of the most famous and beautiful temples in India, located in the city of Madurai, Tamil Nadu. It is dedicated to Goddess Meenakshi (a form of Goddess Parvati) and Lord Sundareswarar (a form of Lord Shiva). What makes this temple so special is its colorful and tall towers (called gopurams), covered with thousands of tiny, bright sculptures of gods, goddesses, animals, and stories from ancient times. Each tower looks like a huge, colorful painting made of stone. When you visit, you don't just see a place of worship—you feel the energy and history that comes alive. People from all over come to pray, take blessings, and enjoy the peaceful atmosphere. The temple is always buzzing with life, prayers, and festivals, especially during the grand Meenakshi Tirukalyanam festival, which celebrates the divine marriage of Meenakshi and Sundareswarar. Visiting the Meenakshi Temple feels like stepping into a world where tradition, art, and devotion come together in the most beautiful way."
image.style.backgroundImage='url("https://plus.unsplash.com/premium_photo-1697729444936-8c6a6f643312?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
image.style.backgroundPosition="center"
});
temp3.addEventListener('click',()=>{
    contenth1.innerHTML="Kedarnath Temple"
    contenth2.innerHTML="The Kedarnath Temple is one of the most sacred and ancient temples in India, located high up in the mountains of Uttarakhand. It is dedicated to Lord Shiva, and thousands of people visit it every year to seek his blessings. What makes Kedarnath special is its remote and beautiful location — surrounded by snow-capped mountains and flowing rivers. The journey to reach the temple is not easy, but people feel it is worth every step because of the peace and spirituality they experience there. The temple is very old, made of huge stone blocks, and stands strong against the harsh weather of the Himalayas. Visiting Kedarnath feels like connecting with nature and something greater than ourselves. The cold breeze, the sound of chants, and the view of majestic mountains make you feel calm and humble. People visit Kedarnath not just to pray, but to experience a sense of devotion, simplicity, and the power of faith in a place where earth touches the sky."
    image.style.backgroundImage='url("https://images.unsplash.com/photo-1649147313351-c86537fda0eb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
    contenth2.style.color="white"
})