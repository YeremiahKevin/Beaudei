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
    {
        body_part: ['face', 'eye'],
        make_up_type: 'concealer',
        brand_name: 'MAKE OVER',
        product_name: 'Powerstay Total Cover Liquid Concealer',
        product_image: '../assets/image/MAKE%20OVER%20Powerstay%20Total%20Cover%20Liquid%20Concealer.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1561171342058jpg',
        product_price: 99900
    },
    {
        body_part: ['face', 'eye'],
        make_up_type: 'concealer',
        brand_name: 'Maybelline',
        product_name: 'Instant Age Rewind Dark Spot Concealer + Treatment',
        product_image: '../assets/image/Maybelline%20Instant%20Age%20Rewind%20Dark%20Spot%20Concealer%20+%20Treatment.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/500/images/prod-pics/product_1432301179_Maybelline_800x800.jpg',
        product_price: 149900
    },
    {
        body_part: ['eye'],
        make_up_type: 'eyebrow pencils',
        brand_name: 'Viva',
        product_name: 'Viva Eye Brow Pencil',
        product_image: '../assets/image/Viva%20Eye%20Brow%20Pencil.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1449042182_winner_mak_800x800.jpg',
        product_price: 23900
    },
    {
        body_part: ['eye'],
        make_up_type: 'mascara',
        brand_name: 'Sariayu',
        product_name: 'Duo Eye MakeUp Mascara + Eyeliner',
        product_image: '../assets/image/Sariayu%20Duo%20Eye%20MakeUp%20Mascara%20+%20Eyeliner.jpg',
        product_image_url: 'https://cf.shopee.co.id/file/f601581a9bc70dd75b5aa0a3c05f906d',
        product_price: 68900
    },
    {
        body_part: ['lip'],
        make_up_type: 'lipgloss',
        brand_name: 'Wardah',
        product_name: 'Wondershine Lip Gloss',
        product_image: '../assets/image/Wardah%20Wondershine%20Lip%20Gloss.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/500/images/prod-pics/1443494645_lg.jpg',
        product_price: 33900
    },
    {
        body_part: ['lip'],
        make_up_type: 'lip-balms, liners, primers and sticks',
        brand_name: 'Revlon',
        product_name: 'ColorBurst Matte Balm',
        product_image: '../assets/image/Revlon%20ColorBurst%20Matte%20Balm.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/500/images/prod-pics/product_1432363344_Revlon_col_800x800.jpg',
        product_price: 100000
    },
    {
        body_part: ['face'],
        make_up_type: 'contour powder or creams',
        brand_name: 'MAKE OVER',
        product_name: 'Face Contour Kit',
        product_image: '../assets/image/MAKE%20OVER%20Face%20Contour%20Kit.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/500/images/prod-pics/product_1545192782_Make_Over__800x800.jpg',
        product_price: 104900
    },
    {
        body_part: ['face'],
        make_up_type: 'face powder',
        brand_name: 'NYX',
        product_name: 'Stay Matte Not Flat Powder Foundation',
        product_image: '../assets/image/NYX%20Stay%20Matte%20Not%20Flat%20Powder%20Foundation.jpg',
        product_image_url: 'https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/2/7/2/0/12720-large_default.jpg',
        product_price: 169000
    },
];

function onChangeBodyPart() {
    const selectedBodyPart = document.getElementById('select-body-part').value;

    if (selectedBodyPart === '' || selectedBodyPart === null) {
        document.getElementById('make-up-types').innerHTML = '';
        return;
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
            '                <div class="card text-center mx-2 my-2 cursor-pointer">\n' +
            '                    <div class="font-large">\n' +
            `                        ${products[i].brand_name}` +
            '                    </div>\n' +
            '                    <div class="font-medium mt-1">\n' +
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
