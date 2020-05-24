const makeUpTypes = [
    {
        body_part: ['face', 'eye'],
        make_up_type: 'concealer'
    },
    {
        body_part: ['face'],
        make_up_type: 'contour powder or creams'
    },
    {
        body_part: ['eye'],
        make_up_type: 'eyelash glue'
    },
    {
        body_part: ['eye'],
        make_up_type: 'eyebrow pencils'
    },
    {
        body_part: ['face'],
        make_up_type: 'face powder'
    },
    {
        body_part: ['face'],
        make_up_type: 'foundation'
    },
    {
        body_part: ['face'],
        make_up_type: 'highlight'
    },
    {
        body_part: ['lip'],
        make_up_type: 'lipgloss'
    },
    {
        body_part: ['lip'],
        make_up_type: 'lip-balms, liners, primers and sticks'
    },
    {
        body_part: ['eye'],
        make_up_type: 'mascara',
    }
];

const products = [
    {
        body_part: ['face', 'eye'],
        make_up_type: 'concealer',
        brand_name: 'NYX',
        product_name: 'HD Photogenic Concealer Wand',
        product_image: '../assets/image/NYX%20HD%20Photogenic%20Concealer%20Wand.jpg',
        product_image_url: 'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwab0ca9c1/ProductImages/2016/Face/HD_Photogenic_Concealer_Wand/800897123284_concealerwand_fair_main.jpg?sw=420&sh=420&sm=fit&q=80',
        product_price: 99900
    },
];

function onChangeBodyPart() {
    const selectedBodyPart = document.getElementById('select-body-part').value;

    if (selectedBodyPart === '' || selectedBodyPart === null) {
        document.getElementById('make-up-types').innerHTML = '';
        console.log(document.getElementById('make-up-types'));
    }

    const filterMakeUpTypes = makeUpTypes.filter(i => {
        return i.body_part.find(i => i === selectedBodyPart);
    });

    let htmlMakeUpTypes =
        '<div class="font-x-large">Make Up Types</div>\n' +
        '<select class="mt-1" id="select-make-up-types" onchange="onChangeSkinType()">\n' +
        '<option value="">Select Make Up Types</option>\n';

    filterMakeUpTypes.forEach(i => {
        htmlMakeUpTypes += `<option value="${i.make_up_type}">${i.make_up_type.charAt(0).toUpperCase() + i.make_up_type.slice(1)}</option>>`;
    });

    htmlMakeUpTypes += '</select>';

    document.getElementById('make-up-types').innerHTML = htmlMakeUpTypes;
}

function onChangeSkinType() {
    const selectedBodyPart = document.getElementById('select-body-part').value;
    const selectedMakeUpType = document.getElementById('select-make-up-types').value;

    const filterProducts = products.filter(i => {
        return i.body_part.find(i => i === selectedBodyPart) && i.make_up_type === selectedMakeUpType
    });

    showProduct(filterProducts);
}

function showProduct(products) {
    let html = '';
    for (let i = 0; i < products.length; i++) {
        products[i].product_price_display = products[i].product_price.toLocaleString('id-ID');
        if (i % 3 === 0) {
            html += '<div class="row">'
        }
        html +=
            '<div class="column">\n' +
            '                <div class="card text-center mx-2 my-2">\n' +
            '                    <div class="font-large">\n' +
            `                        ${products[i].brand_name}` +
            '                    </div>\n' +
            '                    <div class="font-large mt-1">\n' +
            `                        ${products[i].product_name}` +
            '                    </div>\n' +
            '                    <div class="mt-3">\n' +
            `                        <img class="image-mobile" src="${products[i].product_image}" width="150" height="150">\n` +
            '                    </div>\n' +
            '                    <div class="mt-2 font-x-large">\n' +
            `                        Rp ${products[i].product_price_display}\n` +
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
    document.getElementById('product-list').scrollIntoView({behavior: "smooth"});
}
