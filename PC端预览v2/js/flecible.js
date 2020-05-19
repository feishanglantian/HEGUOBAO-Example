//立即执行函数
(function flexible(window, document) {
    var docEl = document.documentElement
        // dpr物理像素比
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize() {
        // 有body就设置字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            // 如果页面中没有body，我们页面主要的DOM元素加载完毕再去执行body
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit() {
        // 划分成了十等分 设置html的字体大小
        // 划分成自己喜欢的等分
        var rem = docEl.clientWidth / 24
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize 尺寸发生变化，会重新设置rem的大小
    window.addEventListener('resize', setRemUnit)
        //pageshow 是我们重新加载页面触发的事件（能解决load的问题）
    window.addEventListener('pageshow', function(e) {
        // e.persisted返回的是true 说明就是页面缓存过来的，也许重新计算
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports 让移动端的浏览器支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))