// 注意!!!!调用本函数要求移动对象必须是绝对定位
// 本函数是一个移动效果的封装，需要传递三个参数：移动对象，移动位置(距离浏览器左边框的距离)，回调函数（移动结束后需要执行的操作）
function animate(obj, target, callback) {
    // 未避免重复点击，需要清除定时器
    clearInterval(obj.timer)
    // 获取当前位置
    obj.left = obj.offsetLeft

    // 设置定时器

    obj.timer = setInterval(function () {
        // 设置定时器结束条件
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
        } else {
            // 设置移动速度：（目标位置-当前位置）/10
            let step = (target - obj.offsetLeft) / 5
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            obj.style.left = obj.offsetLeft + step + 'px'

        }
        if (callback) {
            callback()
        }

    }, 100)
}