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

const createLoading = () => {
    return `
        <div class="preloader-wrapper big active divCenter">
            <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
    `;
};

const createOrderCards = (content) => {
    return content.map((item) => {
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
                        <h5><b>Order: ${item.order}</b></h5>
                    </div>
                </div>
            </div>
        </div> `;
    });
};
