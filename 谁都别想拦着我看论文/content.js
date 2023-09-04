// 在页面加载完成后执行
window.addEventListener('load', function() {
    // 查找谷歌翻译页面上的文本框上方的按钮
    const buttons = document.getElementsByClassName('hgbeOc')[0].childNodes[0];

    const textArea=this.document.querySelector('textarea');


    
    if (buttons) {
      // 复制一个按钮元素
      const button=buttons.childNodes[3];
      const newButtonDiv=button.cloneNode(true);
    
      const newButton=newButtonDiv.querySelector('button');
      newButton.querySelector('span').textContent="将文本框中的换行替换成空格";
      
        // console.log(textArea);
      // 添加按钮的点击事件
      newButton.addEventListener('click', function() {
        // 将文本框中的换行替换为空格
        textArea.value = textArea.value.replace(/\n/g, ' ');
        textArea.focus();
        // 创建一个模拟的keypress事件对象，模拟按下'A'键
        // const keypressEvent = new KeyboardEvent('keypress', {
        //     key: 'a', // 模拟按下的键
        //     code: 'KeyA', // 键码
        //     keyCode: 65, // 键码
        //     which: 65, // 键码
        //     bubbles: true
        // });
    
        // // 在<textarea>元素上触发模拟的keypress事件
        // textArea.dispatchEvent(keypressEvent);
    
      });
  
      // 将按钮添加按钮组的后方
      buttons.appendChild(newButtonDiv);
    }
  });
  