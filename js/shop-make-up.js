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
    {
        body_part: ['face'],
        make_up_type: 'foundation',
        brand_name: 'Wardah',
        product_name: 'Exclusive Liquid Foundation',
        product_image: '../assets/image/Wardah%20Exclusive%20Liquid%20Foundation.jpg',
        product_image_url: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/beauty/Wardah_Exclusive_Liquid_Foundation_ID/Wardah_Exclusive_Liquid_Foundation_ID_L_1.jpg',
        product_price: 56900
    },
    {
        body_part: ['eye'],
        make_up_type: 'eyebrow pencils',
        brand_name: 'Moko Moko',
        product_name: 'Eyebrow Pencil',
        product_image: '../assets/image/Moko%20Moko%20Eyebrow%20Pencil.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/3/1/9/6/23196-large_default.jpg',
        product_price: 45000
    },
    {
        body_part: ['eye'],
        make_up_type: 'eyebrow pencils',
        brand_name: 'Rivera',
        product_name: 'Eyebrow Pencil',
        product_image: '../assets/image/Rivera%20Eyebrow%20Pencil.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/1/9/7/1/21971-large_default.jpg',
        product_price: 57600
    },
    {
        body_part: ['eye'],
        make_up_type: 'mascara',
        brand_name: 'Maybelline',
        product_name: 'Mascara Push Up Angel',
        product_image: '../assets/image/Maybelline%20Mascara%20Push%20Up%20Angel.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/0/5/9/1/20591-large_default.jpg',
        product_price: 143100
    },
    {
        body_part: ['eye'],
        make_up_type: 'mascara',
        brand_name: 'Maybelline',
        product_name: 'Total Temptation Waterproof Mascara',
        product_image: '../assets/image/Maybelline%20Total%20Temptation%20Waterproof%20Mascara.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/9/9/4/2/19942-large_default.jpg',
        product_price: 143100
    },
    {
        body_part: ['lip'],
        make_up_type: 'lipgloss',
        brand_name: 'Saint by Sandra',
        product_name: 'Velvet Matte Lipgloss',
        product_image: '../assets/image/Saint%20by%20Sandra%20Velvet%20Matte%20Lipgloss.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/0/6/8/8/20688-large_default.jpg',
        product_price: 129000
    },
    {
        body_part: ['lip'],
        make_up_type: 'lipgloss',
        brand_name: 'LA Girl',
        product_name: 'Glossy Plumping Lipgloss',
        product_image: '../assets/image/LA%20Girl%20Glossy%20Plumping%20Lipgloss.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://images.soco.id/6790890728-1583134334467.png',
        product_price: 169000
    },
    {
        body_part: ['lip'],
        make_up_type: 'lip-balms, liners, primers and sticks',
        brand_name: 'Utama Spice',
        product_name: 'Lip balm Cocoa',
        product_image: '../assets/image/Utama%20Spice%20Lip%20balm%20Cocoa.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/9/7/3/7/19737-large_default.jpg',
        product_price: 21000
    },
    {
        body_part: ['lip'],
        make_up_type: 'lip-balms, liners, primers and sticks',
        brand_name: 'Utama Spice',
        product_name: 'Lip balm Peppermint',
        product_image: '../assets/image/Utama%20Spice%20Lip%20balm%20Peppermint.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/9/7/4/1/19741-large_default.jpg',
        product_price: 21000
    },
    {
        body_part: ['face'],
        make_up_type: 'contour powder or creams',
        brand_name: 'LA Girl',
        product_name: 'Contour powder',
        product_image: '../assets/image/LA%20Girl%20Contour%20powder.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/9/7/3/5/29735-large_default.jpg',
        product_price: 169000
    },
    {
        body_part: ['face'],
        make_up_type: 'contour powder or creams',
        brand_name: 'LA Girl',
        product_name: 'Contour Cream',
        product_image: '../assets/image/LA%20Girl%20Contour%20Cream.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/9/7/3/4/29734-large_default.jpg',
        product_price: 169000
    },
    {
        body_part: ['face'],
        make_up_type: 'face powder',
        brand_name: 'LA Girl',
        product_name: 'Pro Face Powder',
        product_image: '../assets/image/LA%20Girl%20Pro%20Face%20Powder.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/9/7/2/1/29721-large_default.jpg',
        product_price: 179000
    },
    {
        body_part: ['face'],
        make_up_type: 'face powder',
        brand_name: 'Shu Uemura',
        product_name: 'Face Powder',
        product_image: '../assets/image/Shu%20Uemura%20Face%20Powder.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/3/8/1/8/23818-large_default.jpg',
        product_price: 700000
    },
    {
        body_part: ['face'],
        make_up_type: 'foundation',
        brand_name: 'Klara',
        product_name: 'Foundation Stick',
        product_image: '../assets/image/Klara%20Foundation%20Stick.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/9/0/0/2/19002-large_default.jpg',
        product_price: 420000
    },
    {
        body_part: ['face'],
        make_up_type: 'foundation',
        brand_name: 'Rivera',
        product_name: 'Cover Foundation',
        product_image: '../assets/image/Rivera%20Cover%20Foundation.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/2/1/6/4/22164-large_default.jpg',
        product_price: 84000
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
        '<div class="font-x-large fade-in">Make Up Types</div>\n' +
        '<select class="mt-1 fade-in" id="select-make-up-types" onchange="onChangeSkinType()">\n' +
        '<option value="">Select Make Up Types</option>\n';

    filterMakeUpTypes.forEach(i => {
        htmlMakeUpTypes += `<option value="${i.make_up_type}">${i.make_up_type.charAt(0).toUpperCase() + i.make_up_type.slice(1)}</option>>`;
    });

    htmlMakeUpTypes += '</select>';

    document.getElementById('make-up-types').innerHTML = htmlMakeUpTypes;
    document.getElementById('separator').innerHTML = '';
    document.getElementById('product-list').innerHTML = '';
}

function onChangeSkinType() {
    const selectedBodyPart = document.getElementById('select-body-part').value;
    const selectedMakeUpType = document.getElementById('select-make-up-types').value;

    const filterProducts = products.filter(i => {
        return i.body_part.find(i => i === selectedBodyPart) && i.make_up_type === selectedMakeUpType
    });

    showProduct(filterProducts);

    document.getElementById('separator').innerHTML = '<hr>';
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
            '                <div class="card text-center mx-2 my-2 cursor-pointer fade-in">\n' +
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
