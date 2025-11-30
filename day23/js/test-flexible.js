const htmlEl = document.documentElement

    function setRemUnit() {
      const htmlWidth = htmlEl.clientWidth//获取可视区域宽度
      const htmlFontSize = htmlWidth / 10 //获取基准字体大小
      htmlEl.style.fontSize = htmlFontSize + 'px' //设置基准字体大小
    }
    setRemUnit() //初始化设置基准字体大小

    window.addEventListener('resize', setRemUnit) //监听窗口大小变化，重新设置基准字体大小
