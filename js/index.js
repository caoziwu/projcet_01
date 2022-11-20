window.addEventListener('load', function () {
    // 声明变量
    var foucs = this.document.querySelector('.foucs')
    var l = this.document.querySelector('.l')
    var r = this.document.querySelector('.r')
    var ul = this.document.querySelector('.img')
    var width = foucs.offsetWidth
    console.log(width);
    var nums = 0
    // 复制第一张,即获取第一个li
    var first = ul.children[0].cloneNode(true)
    // 获得需要生成小圆点的数量
    var num = ul.querySelectorAll('li').length
    var timer_1 = this.setInterval(auto_r, 10000)
    var little = this.document.querySelector('.little')
    // 当鼠标移入时,将按钮显示出来,停止自动轮播
    foucs.addEventListener('mouseenter', function () {
        l.style.display = 'block'
        r.style.display = 'block'
        clearInterval(timer_1)
    })
    // 当鼠标移出时,将按钮显示隐藏,自动轮播开启
    foucs.addEventListener('mouseleave', function () {
        l.style.display = 'none'
        r.style.display = 'none'
        timer_1 = setInterval(auto_r, 3000)
    })
    // 动态生成小圆点
    for (let i = 0; i < num; i++) {
        // 创建li
        let li = this.document.createElement('li')
        // 给小圆点添加索引,便于后面使用
        li.setAttribute('index', i)
        // 将li插入到ul里面
        little.appendChild(li)
        little.children[0].className = 'current'
        // 添加点击事件
        li.addEventListener('click', function () {
            // 让所有小圆点恢复默认状态
            for (let i = 0; i < num; i++) {
                little.children[i].className = ''
            }
            // 给被点击的小圆点添加独有的类,注意该类的权重要大于默认状态的类
            this.className = 'current'
            // 获取当前小圆点的索引
            var index = this.getAttribute('index')
            // 通过当前小圆点的索引,让ul移动到相应位置
            // 此处使用了动画效果,如果不需要动画,可以直接改变ul.style.left让其跳转
            target = -width * index
            animate(ul, target)
            // 将索引值赋给nums,以便于点击按钮时,知道当前位置
            nums = index
        })
    }
    // 点击右侧按钮一次，图片往左播放一张，以此类推，右侧同理。

    // 在ul的第一张复制到最后面,达到无缝衔接
    ul.appendChild(first)
    // 对按钮进行事件监听,调用相应函数,让其左右移动
    l.addEventListener('click', auto_l);
    r.addEventListener('click', auto_r);
    // 向左移动的函数
    function auto_r() {
        // 判断是否为第一张或者最后一张图片,如果符合条件,则将当前位置恢复到第一张图的位置
        // 如果是最后一张图,在current()函数中已经将nums改为0,详细请参考current()函数
        if (nums == 0) {
            ul.style.left = 0
            nums = 0
        }
        // 获取下一张图的索引
        nums++
        // 计算出移动的位置,并调用动画函数
        let step = -nums * width
        animate(ul, step)
        // 调用current()函数,改变小圆点的类名
        current()
    }
    // 向右移动的函数
    // 方法与向左移动函数相似
    function auto_l() {
        if (nums == 0) {
            nums = ul.children.length - 1
            ul.style.left = -nums * width + 'px'
        }
        nums--
        let step = -nums * width
        animate(ul, step)
        current()
    }
    // 改变当前小圆点颜色的方法
    function current() {
        // 排除其他小圆点的颜色
        for (let i = 0; i < little.querySelectorAll('li').length; i++) {
            little.children[i].className = ''
        }
        // !!!这里将最后一张图的
        if (nums == ul.children.length - 1) {
            nums = 0
        }
        little.children[nums].className = 'current'
        // console.log(nums);
    }


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
                // offsetLeft只能读取,不能赋值
                obj.style.left = obj.offsetLeft + step + 'px'
            }
            if (callback) {
                callback()
            }

        }, 100)
    }
}
)