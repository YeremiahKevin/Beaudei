const products = [
    {
        brand_name: 'NYX',
        product_type: 'cleanser',
        product_name: 'Stripped Off Whipped Charcoal Cleanser',
        product_image: '../assets/image/NYX%20Stripped%20Off%20Whipped%20Charcoal%20Cleanser.jpg',
        product_image_url: 'https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw00d7bf9b/ProductImages/2017/More/Stripped_Off_Cleansers/800897090647_strippedoffwhippedcharcoalcleanser_main.jpg?sw=420&sh=420&sm=fit&q=80',
        product_price: 59900
    },
    {
        brand_name: 'Revlon',
        product_type: 'cleanser',
        product_name: 'Magnet Anti-Pollution Micellar Cleanser',
        product_image: '../assets/image/Revlon%20Magnet%20Anti-Pollution%20Micellar%20Cleanser.jpg',
        product_image_url: 'https://cdn11.bigcommerce.com/s-1b7d5/images/stencil/1280x1000/products/9311/18490/Revlon_Professional_Magnet_Anti-Pollution_Micellar_Cleanser_250ml__57996.1560334277.jpg?c=2&imbypass=on',
        product_price: 60900
    },
    {
        brand_name: 'Sariayu',
        product_type: 'cleanser',
        product_name: 'Econature Face Cleanser',
        product_image: '../assets/image/Sariayu%20Econature%20Face%20Cleanser.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1545502078_Sariayu_Ec_800x800.jpg',
        product_price: 45900
    },
    {
        brand_name: 'Viva',
        product_type: 'cleanser',
        product_name: 'Milk Cleanser',
        product_image: '../assets/image/Viva%20Milk%20Cleanser.jpg',
        product_image_url: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/beauty/Viva_Milk_Cleanser/Viva_Milk_Cleanser_L_1.jpg',
        product_price: 44900
    },
    {
        brand_name: 'MAKE OVER',
        product_type: 'exfoliator',
        product_name: 'Velvet Mattifying Primer',
        product_image: '../assets/image/MAKE%20OVER%20Velvet%20Mattifying%20Primer.jpg',
        product_image_url: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/beauty/MAKE_OVER_Velvet_Mattifying_Primer/MAKE_OVER_Velvet_Mattifying_Primer_L_1.jpg',
        product_price: 75000
    },
    {
        brand_name: 'Wardah',
        product_type: 'exfoliator',
        product_name: 'White Secret Exfoliating Scrub 50 ml',
        product_image: '../assets/image/Wardah%20White%20Secret%20Exfoliating%20Scrub%2050%20ml.jpg',
        product_image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/9/14/32384324/32384324_4a95dde4-08ef-4298-8c21-31daf8c5522d_1400_1400.jpg',
        product_price: 35900
    },
    {
        brand_name: 'NYX',
        product_type: 'treatment',
        product_name: 'Bare With Me Tinted Skin Veil',
        product_image: '../assets/image/NYX%20Bare%20With%20Me%20Tinted%20Skin%20Veil.jpg',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=360,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/8/1/8/9/28189-large_default.jpg',
        product_price: 240900
    },
    {
        brand_name: 'L\'OREAL',
        product_type: 'treatment',
        product_name: 'Total Repair 5 Damage Erasing Balm',
        product_image: '../assets/image/L\'OREAL%20Total%20Repair%205%20Damage%20Erasing%20Balm.jpg',
        product_image_url: 'https://www.lorealparisusa.com/~/media/images/lop/home/products/hair/hair-care/treatments/advanced-haircare-total-repair-5-damage-erasing-balm-85oz/total-repair-5-damage-erasing-balm-85oz/hca9_5_pack-shot.jpg',
        product_price: 350900
    },
    {
        brand_name: 'MAC Cosmetics',
        product_type: 'serum',
        product_name: 'Prep + Prime Moisture Infusion Serum 50ml',
        product_image: '../assets/image/MAC%20Cosmetics%20Prep%20+%20Prime%20Moisture%20Infusion%20Serum%2050ml.png',
        product_image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/5/35568474/35568474_f5530ba2-dbf1-4837-8b23-d3e51726e907_1000_1000.png',
        product_price: 678900
    },
    {
        brand_name: 'Wardah',
        product_type: 'face oil',
        product_name: 'Pure Olive Oil',
        product_image: '../assets/image/Wardah%20Pure%20Olive%20Oil.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/640/images/prod-pics/product_1449134368_Wardah_Pur_800x800.jpg',
        product_price: 39900
    },
    {
        brand_name: 'Wardah',
        product_type: 'sunscreen',
        product_name: 'Sunscreen Gel',
        product_image: '../assets/image/Wardah%20Sunscreen%20Gel.jpg',
        product_image_url: 'https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/beauty/Wardah_Sunscreen_Gel/Wardah_Sunscreen_Gel_L_1.jpg',
        product_price: 20900
    },
    {
        brand_name: 'NYX',
        product_type: 'moisturizer',
        product_name: 'Tinted Moisturizer',
        product_image: '../assets/image/NYX%20Tinted%20Moisturizer.jpg',
        product_image_url: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/6/24/4655985/4655985_ec01e1a2-0254-48af-aad2-5ee9c9dcd14f.jpg',
        product_price: 169900
    },
    {
        brand_name: 'Wardah',
        product_type: 'chemical peel',
        product_name: 'Essential Peeling Cream',
        product_image: '../assets/image/Wardah%20Essential%20Peeling%20Cream.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/500/images/prod-pics/product_1458184508_Wardah_pee_800x800.jpg',
        product_price: 17900
    },
    {
        brand_name: 'MAKE OVER',
        product_type: 'toner',
        product_name: 'Toner',
        product_image: '../assets/image/MAKE%20OVER%20Toner.jpg',
        product_image_url: 'https://image.femaledaily.com/dyn/640/images/prod-pics/a9bbc1a64829994e663f21edb98b8d1a.jpg',
        product_price: 47900
    },
    {
        brand_name: 'Wardah',
        product_type: 'face mask',
        product_name: 'Lightening Face Mask',
        product_image: '../assets/image/Wardah%20Lightening%20Face%20Mask.jpg',
        product_image_url: 'https://static.femaledaily.com/dyn/210/images/prod-pics/product_1441767970_LIGHTENING_800x800.jpg',
        product_price: 14900
    },
    {
        brand_name: 'Viva',
        product_type: 'eye cream',
        product_name: 'Revitalizing Eye Cream',
        product_image: '../assets/image/Viva%20Revitalizing%20Eye%20Cream.png',
        product_image_url: 'https://static.femaledaily.com/dyn/210/images/prod-pics/1445610385_lg.png',
        product_price: 33900
    },
    {
        brand_name: 'COSRX',
        product_type: 'cleanser',
        product_name: 'Salicylic Acid Daily Gentle Cleanser',
        product_image: '../assets/image/COSRX%20Salicylic%20Acid%20Daily%20Gentle%20Cleanser.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/7/8/7/9/17879-large_default.jpg',
        product_price: 119200
    },
    {
        brand_name: 'Cetaphil',
        product_type: 'cleanser',
        product_name: 'Gentle Skin Cleanser',
        product_image: '../assets/image/Cetaphil%20Gentle%20Skin%20Cleanser.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/4/6/7/9/14679-large_default.jpg',
        product_price: 44250
    },
    {
        brand_name: 'Safi',
        product_type: 'exfoliator',
        product_name: 'White Expert Deep Exfoliator',
        product_image: '../assets/image/Safi%20White%20Expert%20Deep%20Exfoliator.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/6/5/4/9/26549-large_default.jpg',
        product_price: 42120
    },
    {
        brand_name: 'Safi',
        product_type: 'exfoliator',
        product_name: 'Age Defy Deep Exfoliator',
        product_image: '../assets/image/Safi%20Age%20Defy%20Deep%20Exfoliator.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/6/5/0/0/26500-large_default.jpg',
        product_price: 44100
    },
    {
        brand_name: 'Secret Key',
        product_type: 'treatment',
        product_name: 'Starting Treatment Essential Mask',
        product_image: '../assets/image/Secret%20Key%20Starting%20Treatment%20Essential%20Mask.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/1/3/1/6/21316-large_default.jpg',
        product_price: 45000
    },
    {
        brand_name: 'Emina',
        product_type: 'treatment',
        product_name: 'Lip Mask',
        product_image: '../assets/image/Emina%20Lip%20Mask.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/8/9/0/6/28906-large_default.jpg',
        product_price: 30400
    },
    {
        brand_name: 'ElsheSkin',
        product_type: 'serum',
        product_name: 'Sebum Reducer Serum',
        product_image: '../assets/image/ElsheSkin%20Sebum%20Reducer%20Serum.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/8/3/2/1/18321-large_default.jpg',
        product_price: 122500
    },
    {
        brand_name: 'ElsheSkin',
        product_type: 'serum',
        product_name: 'Serum Vitamin C',
        product_image: '../assets/image/ElsheSkin%20Serum%20Vitamin%20C.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/8/3/2/3/18323-large_default.jpg',
        product_price: 180000
    },
    {
        brand_name: 'Bhumi',
        product_type: 'face oil',
        product_name: 'Multi Targeted All Natural Adoring Face Oil',
        product_image: '../assets/image/Bhumi%20Multi%20Targeted%20All%20Natural%20Adoring%20Face%20Oil.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/3/4/3/4/6/34346-large_default.jpg',
        product_price: 262000
    },
    {
        brand_name: 'Kleveru',
        product_type: 'face oil',
        product_name: 'Ceramide Calm Facial Oil',
        product_image: '../assets/image/Kleveru%20Ceramide%20Calm%20Facial%20Oil.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/3/4/8/0/2/34802-large_default.jpg',
        product_price: 187000
    },
    {
        brand_name: 'Shangpree',
        product_type: 'sunscreen',
        product_name: 'Phyto UV Sunscreen',
        product_image: '../assets/image/Shangpree%20Phyto%20UV%20Sunscreen.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://images.soco.id/25981625367-1588667310591.png',
        product_price: 405000
    },
    {
        brand_name: 'Sensatia Botanicals',
        product_type: 'sunscreen',
        product_name: 'Surf Naked Sunscreen Lotion',
        product_image: '../assets/image/Sensatia%20Botanicals%20Surf%20Naked%20Sunscreen%20Lotion.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/2/9/6/6/22966-large_default.jpg',
        product_price: 150000
    },
    {
        brand_name: 'Haple',
        product_type: 'moisturizer',
        product_name: 'Blue Moon Moisturizer',
        product_image: '../assets/image/Haple%20Blue%20Moon%20Moisturizer.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/3/5/7/8/2/35782-large_default.jpg',
        product_price: 99000
    },

    {
        brand_name: 'Haple',
        product_type: 'moisturizer',
        product_name: 'Sky Rose Moisturizer',
        product_image: '../assets/image/Haple%20Sky%20Rose%20Moisturizer.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/3/5/7/8/1/35781-large_default.jpg',
        product_price: 99000
    },
    {
        brand_name: 'Neogen Dermalogy',
        product_type: 'chemical peel',
        product_name: 'Bio Peel Wine Class',
        product_image: '../assets/image/Neogen%20Dermalogy%20Bio%20Peel%20Wine%20Class.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/3/3/2/4/8/33248-large_default.jpg',
        product_price: 463000
    },
    {
        brand_name: 'Neogen Dermalogy',
        product_type: 'chemical peel',
        product_name: 'Bio Peel Gauze Peeling',
        product_image: '../assets/image/Neogen%20Dermalogy%20Bio%20Peel%20Gauze%20Peeling.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/1/8/8/4/2/18842-large_default.jpg',
        product_price: 349000
    },
    {
        brand_name: 'Everskin',
        product_type: 'toner',
        product_name: 'Moringa Refresh Toner Essence',
        product_image: '../assets/image/Everskin%20Moringa%20Refresh%20Toner%20Essence.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/3/0/6/5/7/30657-large_default.jpg',
        product_price: 157000
    },

    {
        brand_name: 'Everskin',
        product_type: 'toner',
        product_name: 'Rose Toner Essence With Real Petal Flower',
        product_image: '../assets/image/Everskin%20Rose%20Toner%20Essence%20With%20Real%20Petal%20Flower.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://images.soco.id/24663786807-1587107808419.png',
        product_price: 157000
    },
    {
        brand_name: 'Emina',
        product_type: 'face mask',
        product_name: 'Masquerade Face Mask',
        product_image: '../assets/image/Emina%20Masquerade%20Face%20Mask.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/2/4/3/0/22430-large_default.jpg',
        product_price: 11600
    },
    {
        brand_name: 'Emina',
        product_type: 'face mask',
        product_name: 'Cranberry Juice Face Mask',
        product_image: '../assets/image/Emina%20Cranberry%20Juice%20Face%20Mask.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/0/1/5/0/20150-large_default.jpg',
        product_price: 31600
    },
    {
        brand_name: 'Benton',
        product_type: 'eye cream',
        product_name: 'Fermentation Eye Cream',
        product_image: '../assets/image/Benton%20Fermentation%20Eye%20Cream.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/4/8/4/8/24848-large_default.jpg',
        product_price: 175000
    },
    {
        brand_name: 'SNP',
        product_type: 'eye cream',
        product_name: 'Bird’s Nest W + Eye Cream',
        product_image: '../assets/image/SNP%20Bird’s%20Nest%20W%20+%20Eye%20Cream.webp',
        product_image_url: 'https://www.sociolla.com/cdn-cgi/image/w=325,format=auto,dpr=1.25/https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/p/2/7/3/9/9/27399-large_default.jpg',
        product_price: 248000
    },
];

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

function onClickCleanser() {
    let cleanserProducts = products.filter(i => i.product_type === 'cleanser');
    showProduct(cleanserProducts);
}

function onClickExfoliator() {
    const exfoliatorProducts = products.filter(i => i.product_type === 'exfoliator');
    showProduct(exfoliatorProducts);
}

function onClickTreatment() {
    const treatmentProducts = products.filter(i => i.product_type === 'treatment');
    showProduct(treatmentProducts);
}

function onClickSerum() {
    const serumProducts = products.filter(i => i.product_type === 'serum');
    showProduct(serumProducts);
}

function onClickFaceOil() {
    const faceOilProducts = products.filter(i => i.product_type === 'face oil');
    showProduct(faceOilProducts);
}

function onClickSunscreen() {
    const sunscreenProducts = products.filter(i => i.product_type === 'sunscreen');
    showProduct(sunscreenProducts);
}

function onClickMoisturizer() {
    const moisturizerProducts = products.filter(i => i.product_type === 'moisturizer');
    showProduct(moisturizerProducts);
}

function onClickChemicalPeel() {
    const chemicalPeelProducts = products.filter(i => i.product_type === 'chemical peel');
    showProduct(chemicalPeelProducts);
}

function onClickToner() {
    const tonerProducts = products.filter(i => i.product_type === 'toner');
    showProduct(tonerProducts);
}

function onClickFaceMask() {
    const faceMaskProducts = products.filter(i => i.product_type === 'face mask');
    showProduct(faceMaskProducts);
}

function onClickEyeCream() {
    const eyeCreamProducts = products.filter(i => i.product_type === 'eye cream');
    showProduct(eyeCreamProducts);
}
