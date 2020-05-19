window.addEventListener('load', function() {
    // 功能模块start
    const functions = document.querySelector('.functions')
    const ul = functions.querySelector('ul');
    const ol = functions.querySelector('ol');
    // ul
    const tabLi = functions.querySelector('.oneTab');
    const tabLio = functions.querySelector('.twoTab');
    const tabLion = functions.querySelector('.threeTab');
    // ol
    const tabOne = functions.querySelector('.oneTabs');
    const tabTwo = functions.querySelector('.twoTabs');
    const tabThree = functions.querySelector('.threeTabs');
    // who enter? && who leave?
    // 1
    commonenter(tabLi, tabOne);
    commonout(tabLi, tabOne)
    commonleaver(tabLi, tabOne);
    // 2
    commonenter(tabLio, tabTwo);
    commonout(tabLio, tabTwo);
    commonleaver(tabLio, tabTwo);
    // 3
    commonenter(tabLion, tabThree);
    commonout(tabLion, tabThree);
    commonleaver(tabLion, tabThree);


    for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].setAttribute('index', i);

    }

    function commonenter(ulli, olli) {
        ulli.addEventListener('mouseenter', () => {
            olli.style.display = 'block';
            ulli.className = 'bgc';
            ul.style.boxShadow = '2px 2px 20px aqua'
        })

    };

    function commonout(ulli, olli) {
        ulli.addEventListener('mouseleave', () => {

            ul.style.boxShadow = '0 0 0'


        })

    };

    function commonleaver(ulli, olli) {
        ulli.addEventListener('click', () => {
            olli.style.display = 'none';
            ulli.className = '';


        })

    };
    // 功能模块end







})