const createOrderHero = () => {
    return `
        <div class="container displayArea">
            <p class="hero-title">Order List:</p>
            
            <div class="heroDisplay">
                <div class="row">
                    
                </div>
            </div>
        </div>`;
};

const createEmptyOrder = () => {
    return `
        <div class="order_list"> 
            <h3>
                There's no orders yet.
            </h3>
        </div>
    `;
};

const createlist = (list) => {
    return list.map((item, index) => {
        return `
            <div class="order_list">
                <div class="name">${item.name}</div>
                <div class="qty"> X ${item.qty}</div>
                <div class="price"> --- $ ${item.total}</div>
            </div>
        `;
    });
};

const createOrderCards = (content) => {
    return content.map((item) => {
        const orderList = JSON.parse(item.order);
        const JsonContent = createlist(orderList).join("");
        console.log("-=-=-=: ", orderList);
        return `
        <div class="row" key="${item.createdAt}">
            <div class="card horizontal">
                <div class="card-image">
                    <img src="${item.icon}">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <blockquote>
                            <p class="flow-text"><b>${item.name}</b></p>
                            <p class="flow-text">Tel: <i>${item.tel}</i><p>
                            <p class="flow-text">Addr: ${item.addr}<p>
                        </blockquote>
                        <blockquote>
                            <h5>Order: <b>$${checkoutPrice(orderList)}</b></h5>
                            ${JsonContent}
                        </blockquote>
                    </div>
                </div>
            </div>
        </div> `;
    });
};
