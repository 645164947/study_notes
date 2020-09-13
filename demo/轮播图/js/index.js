window.addEventListener('load', function() {
    // alert('1')
    // 获取元素
    var leftBtn = document.querySelector('.left-btn');
    var rightBtn = document.querySelector('.right-btn');
    // console.log(rightBtn);
    var slideshow = document.querySelector('.slideshow');
    //获取图片部分宽度
    var showWidth = slideshow.offsetWidth;
    //监听鼠标移动显示左右按钮 经过显示
    slideshow.addEventListener('mouseenter', function() {
        // alert("1");
        leftBtn.style.display = 'block';
        rightBtn.style.display = 'block';
        //清除计时器
        clearInterval(timer);
        timer = null;
    });
    //鼠标离开隐藏
    slideshow.addEventListener('mouseleave', function() {
        // alert("1");
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
        //重启计时器
        timer = setInterval(function() {
            rightBtn.click();
        }, 2000);
    });
    //动态生成小按钮
    var ul_ = slideshow.querySelector('ul');
    var ol_ = slideshow.querySelector('ol');
    for (var i = 0; i < ul_.children.length; i++) {
        //创建按钮li节点
        var li_ = document.createElement('li');
        //自定义属性 记录索引号
        li_.setAttribute('index', i);
        //添加节点到ol后面
        ol_.appendChild(li_);
        //点击小圆圈
        li_.addEventListener('click', function() {
            // alert('1');
            // 干掉所有人 把所有的小li 清除 circle-c 类名
            for (var i = 0; i < ol_.children.length; i++) {
                ol_.children[i].className = '';
            }
            //留下自己
            this.className = 'circle-c';
            //获取当前索引号
            var index_ = this.getAttribute('index');
            //索引号与左右、小圆点按钮联动
            circle = index_;
            num = index_;
            // console.log(showWidth);
            // console.log(index_);
            //执行动画
            animate(ul_, -index_ * showWidth);
        });
    }
    //设置默认第一个样式
    ol_.children[0].className = 'circle-c';
    //无缝衔接处理 克隆一个li
    var duble = ul_.children[0].cloneNode(true);
    //添加进ul
    ul_.append(duble);
    //右边按钮点击事件 图片滚动一张
    var num = 0;
    //小圆点播放
    var circle = 0;
    //节流阀
    var flag = true;
    rightBtn.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            // 如果走到了最后复制的一张图片，此时 我们的ul 要快速复原 left 改为 0
            if (num == ul_.children.length - 1) {
                ul_.style.left = 0;
                num = 0;
            }
            num++;
            // console.log(num);
            animate(ul_, -num * showWidth, function() {
                flag = true; //打开节流阀
            });
            circle++;
            // 如果circle == 4 说明走到最后我们克隆的这张图片了 我们就复原
            if (circle == ol_.children.length) {
                circle = 0;
            }
            // 先清除其余小圆圈的current类名
            for (var i = 0; i < ol_.children.length; i++) {
                ol_.children[i].className = '';
            }
            // 留下当前的小圆圈的current类名
            ol_.children[circle].className = 'circle-c';

        }
    });
    //左按钮
    leftBtn.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            if (num == 0) {
                num = ul_.children.length - 1;
                ul_.style.left = -num * showWidth + 'px';
            }
            num--;
            // console.log(num);
            animate(ul_, -num * showWidth, function() {
                flag = true; //打开节流阀
            });
            circle--;
            // 如果circle < 0  说明第一张图片，则小圆圈要改为第4个小圆圈
            if (circle < 0) {
                circle = ol_.children.length - 1
            }
            // 先清除其余小圆圈的current类名
            for (var i = 0; i < ol_.children.length; i++) {
                ol_.children[i].className = '';
            }
            // 留下当前的小圆圈的current类名
            ol_.children[circle].className = 'circle-c';
        }
    })
    var timer = setInterval(function() {
        //手动调用点击事件
        rightBtn.click();
    }, 2000);
})