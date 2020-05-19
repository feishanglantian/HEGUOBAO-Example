window.addEventListener('load', function() {
    const code = document.querySelector('.codeQuantityStyle');
    const codeTimeOut = code.querySelector('ol').querySelector('li');
    const allOlLi = code.querySelector('ul').querySelectorAll('li');
    const h = code.querySelector('.h');
    const c = code.querySelector('.c');
    const j = code.querySelector('.j');
    const html = code.querySelector('.html');
    const css = code.querySelector('.css');
    const javascript = code.querySelector('.javascript');
    const days = code.querySelector('.d');
    const hours = code.querySelector('.hs');
    const minutes = code.querySelector('.m');
    const seconds = code.querySelector('.s');
    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    let time = 100;
    // codeTimeOut.onclick = function() {
    //     codeTimeOut.innerHTML = `总计639行代码`;
    //     // var timeOut = setInterval(() => {

    //     //     console.log(time);
    //     //     codeTimeOut.innerHTML = time;

    //     //     time++;
    //     //     if (time === 200) {
    //     //         clearInterval(timeOut);
    //     //     } else if (time === 300) {
    //     //         clearInterval(timeout);
    //     //         codeTimeOut.innerHTML = time + `<div>阿斯顿发送到发</div>`;
    //     //     } else if (time === 108) {
    //     //         codeTimeOut.innerHTML = time + `<div>到发</div>`;
    //     //     }


    //     // }, 100)

    // }


    for (var i = 1; i <= 3; i++) {
        allOlLi[i - 1].onclick =
            (function() {
                return codeTimeOut.onclick = function() {
                    var timeOut = setInterval(() => {

                        console.log(time);
                        html.innerHTML = time;
                        css.innerHTML = time;
                        javascript.innerHTML = time;

                        time++;
                        if (time === 2200) {
                            html.style.display = 'block';
                            html.innerHTML = time + `行`;
                            clearInterval(timeOut);


                        } else if (time === 2209) {
                            css.style.display = 'block';
                            css.innerHTML = time + `<div></div>`;
                            html.innerHTML = time - 9 + ``;
                            clearInterval(timeOut)
                        } else if (time === 3230) {
                            javascript.innerHTML = time + `<div></div>`;
                            clearInterval(timeOut);
                            html.innerHTML = time - 30 + ``;
                            css.innerHTML = time - 21 + ``;
                        } else if (time >= 4300) {
                            clearInterval(timeOut);
                            html.style.display = 'none';
                            css.style.display = 'none';
                            javascript.style.display = 'none'
                        }


                    }, 10)

                }


            })()
            // (function(index) {
            //     return function() {
            //         // console.log(index);
            //         console.log(index + 10);


        //     }
        // })(i)
    };
    Click(h, html);
    Click(c, css);
    Click(j, javascript);

    function Click(whoClick, show) {
        whoClick.addEventListener('click', function() {
            show.style.display = 'block';
        })
    }

    // time
    const inputTime = +new Date('2020-5-9 9:00:00');

    function countDown() {
        let nowTime = +new Date();
        // 倒计时
        // let cd = (inputTime - nowTime) / 1000;
        // 运行时长
        let cd = (nowTime - inputTime) / 1000;

        let day = parseInt(cd / 60 / 60 / 24);
        day = day < 10 ? '0' + day : day;
        days.innerHTML = day + '天 ';

        let hour = parseInt(cd / 60 / 60 % 24);
        hour = hour < 10 ? '0' + hour : hour;
        hours.innerHTML = hour + '时 ';

        let minute = parseInt(cd / 60 % 60);
        minute = minute < 10 ? '0' + minute : minute;
        minutes.innerHTML = minute + '分 ';

        let second = parseInt(cd % 60);
        second = second < 10 ? '0' + second : second;
        seconds.innerHTML = second + '秒';


        // console.log(day + '天' + hour + '小时' + minute + '分' + second + '秒');
    }
    countDown();


    window.setInterval(countDown, 1000);
























})