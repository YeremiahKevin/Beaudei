const products = [
    {
        product_type: 'cleanser',
        product_name: 'Stripped Off Whipped Charcoal Cleanser',
        product_image: '../assets/image/NYX%20Stripped%20Off%20Whipped%20Charcoal%20Cleanser.jpg',
        product_price: 59900
    },
    {
        product_type: 'cleanser',
        product_name: 'Magnet Anti-Pollution Micellar Cleanser',
        product_image: '../assets/image/Revlon%20Magnet%20Anti-Pollution%20Micellar%20Cleanser.jpg',
        product_price: 60900
    },
    {
        product_type: 'cleanser',
        product_name: 'Econature Face Cleanser',
        product_image: '../assets/image/Sariayu%20Econature%20Face%20Cleanser.jpg',
        product_price: 45900
    },
    {
        product_type: 'cleanser',
        product_name: 'Milk Cleanser',
        product_image: '../assets/image/Viva%20Milk%20Cleanser.jpg',
        product_price: 44900
    },
];

function showProduct(products) {
    let html = '';
    for (let i = 0; i < products.length; i++) {
        if (i % 3 === 0) {
            html += '<div class="row">'
        }
        html +=
            '<div class="column">\n' +
            '                <div class="card text-center mx-2 my-2">\n' +
            '                    <div class="font-large">\n' +
            `                        ${products[i].product_name}` +
            '                    </div>\n' +
            '                    <div class="mt-3">\n' +
            `                        <img class="image-mobile" src="${products[i].product_image}" width="150" height="150">\n` +
            '                    </div>\n' +
            '                    <div class="mt-2 font-x-large">\n' +
            `                        ${products[i].product_price}\n` +
            '                    </div>\n' +
            '                </div>\n' +
            '            </div>';

        if (i === products.length - 1) {
            if (i % 3 === 0) {
                html +=
                    '<div class="column"></div>' +
                    '<div class="column"></div>';
            } else if (i % 3 === 1) {
                html +=
                    '<div class="column"></div>';
            }

        }

        if (i % 3 === 2) {
            html += '</div>'
        }
    }
    document.getElementById('product-list').innerHTML = html;
}

function onClickCleanser() {
    const cleanserProducts = products.filter(i => i.product_type === 'cleanser');
    showProduct(cleanserProducts);
}
