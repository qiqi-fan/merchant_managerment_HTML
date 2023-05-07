$(function () {

    $('.order-list-div1').hide();
    $('.list-operate-div').hide();
    // var btn101 = $('td').children('a:first-child')
    // var btn102 = $('.title').children('i')
    var btn103 = $('.list-operate');

    // 发送请求，获取订单详情
    $('#btn101').click(function () {
        $('#cover').css('display', 'block')
        $('.order-list-div1').show();

    })
    $('.order-list-div2').hide();

    $('#btn12').click(function () {
      $('#cover').css('display', 'block')
      $('.order-list-div2').show();

  })
    $('#times1').click(function () {
        $('.order-list-div1').hide();
        $('#cover').css('display', 'none');
        $('.list-operate-div').hide();

    })
    $('#times2').click(function () {
      $('.order-list-div2').hide();
      $('#cover').css('display', 'none');
      $('.list-operate-div').hide();

  })

    btn103.click(function () {
        deltr(this);
    })
    // 筛选功能
    $('#put1').click(function(){
        myFunction2();
    })

    // 搜索功能
    $('#put2').click(function(){
        myFunction();
    })
})

// 删除订单
function deltr(obj) {
    var table = $(obj).parent().parent().parent();
    var tr = $(obj).parent().parent();
    // console.log(tr);
    // console.log(table)
    // console.log(tr)
    if (confirm('你确定删除这条订单信息？')) {
        tr.remove();
    }
}
// 获取表格中的值
function getTdValue() {
    var tableId = document.getElementById("list-table");
    var str = "";
    for (var i = 1; i < tableId.rows.length; i++) {
        console.log(tableId.rows[i].cells[0].innerHTML);
    }
}


// 搜索引擎
function myFunction() { //如果有搜索按钮，定义一个onclick即可
    // 声明变量
    var input, filter, table, tr, td, i;
    input = document.getElementById("list-num");
    filter = input.value.toUpperCase(); //toUpperCase()是不区分大小写
    table = document.getElementById("list-table");
    tr = table.getElementsByTagName("tr");
   
    // 循环表格每一行，查找匹配项
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0]; //这个0时要搜索第1列的内容，以此类推
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {  //如果要区分大小写就去掉这个toUpperCase()
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
}

// 筛选
function myFunction2() { //如果有搜索按钮，定义一个onclick即可
    // 声明变量
    var input, filter, table, tr, td, i;
    
    input = document.getElementById("list-state");
    var options = $('#list-state option:selected');
    filter = options.text();
    // console.log(options.text())
    // filter = input.innerHTML.toUpperCase(); //toUpperCase()是不区分大小写
    console.log(filter)
    table = document.getElementById("list-table");
    tr = table.getElementsByTagName("tr");
   
    // 循环表格每一行，查找匹配项
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2]; 
      if(filter == "全部订单"){
        tr[i].style.display = "";
        
        return true;
      }else if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {  
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
}