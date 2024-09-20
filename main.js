const ProductsData1 = [
    {
        img:"img/card-1.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },
    {
        img:"img/card-2.png",
        title:"The mystery of the black square",
        user:"🤬 Esther Howard",
        price:"0.24 ETH"
    },
    {
        img:"img/card-3.png",
        title:"Pink Cloud 🌥",
        user:"🙂‍↔️ Esther Howard",
        price:"0.3 ETH"
    },
    {
        img:"img/card-4.png",
        title:"3D Ethereum",
        user:"🦸 Esther Howard",
        price:"0.12 ETH"
    },

]



const wrapper = document.querySelector('.live__wrapper1')
const cards1 = ProductsData1.map(card => {
    return `
               <div class="live__card">
                    <img src=${card.img} alt="" class="live__card-img">
                    <div class="live__card-box">
                        <h3>${card.title}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>Current Bid <br>
                                <b>${card.price}</b>
                            </p>
                        </div>
                    </div>

                </div>
    `
}).join('')
wrapper.innerHTML = cards1

const  ProductsData2 =[
    {
        img:"img/card-5.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-6.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-1.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-7.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-8.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-9.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-10.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-11.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-12.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-13.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-14.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },  {
        img:"img/card-1.png",
        title:"3D Soft Curves",
        user:"😊 Esther Howard",
        price:"0.85 ETH"
    },
]

const wrapper2 = document.querySelector('.live__wrapper2')
const cards2 = ProductsData2.map(card => {
    return `
               <div class="live__card">
                    <img src=${card.img} alt="" class="live__card-img">
                    <div class="live__card-box">
                        <h3>${card.title}</h3>
                        <div>
                            <p>${card.user}</p>
                            <p>Current Bid <br>
                                <b>${card.price}</b>
                            </p>
                        </div>
                    </div>

                </div>
    `
}).join('')
wrapper2.innerHTML = cards2