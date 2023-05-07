$(function(){
    // 修改店铺装修
    $('#qqq').click(function(){
    $('.bindcard').css('display','block')
      $('#cover1').css('display', 'block')
    })
    $('#shut2').click(function(){
        $('#cover1').css('display', 'none')
        $('.bindcard').css('display','none')

    })
    $('#bind2').click(function(){
        alert('修改成功！');
        $('#shop-decorate').val('清新');
        $('#shut2').click();
    })
    // 隐藏所有子标题
    $(".left-li").each(function(){
        $(this).hide();
    })

    // 给所有主标题添加点击事件
    $(".left-title").each(function(){
        $(this).click(function(){
            // 查找当前主标题下的副标题
            var li = $(this).nextAll();
            if(li.css("display")!="none"){
                li.slideUp(300)
            }else{
                li.slideDown(300)
            }
        })
    })
// 悬浮下拉框
    var cont = document.getElementById("contentqqq")
    var img = document.getElementById("headimg")
    cont.style.display="none"
    
    img.onmouseout == function(){
        cont.style.display="none"
    }
    cont.onmouseout == function(){
        cont.style.display="none"
    }

    // 页面显示，获取按钮
    var listm = document.getElementById('list-manager')
    var plist = document.getElementById("protect-list")  

    var stable = document.getElementById('shop-table')
    var sclass = document.getElementById('shop-class')
    var sinfo = document.getElementById('shop-info')
    var splus = document.getElementById('plus-shop')

    var cinfo = document.getElementById('customer-info')

    var binfo = document.getElementById('basic-info')
    var pmanager = document.getElementById('power-manager')

    var snotice = document.getElementById('shop-notice')
    var sact = document.getElementById('shop-activity')

    var saleA = document.getElementById('sale-all')
    var moneyA = document.getElementById('money-all')


    // 订单管理
    // $('.all-order').hide();
    listm.onclick=function(){
        $(".goods-list").hide();
        $('.pro-list').hide();
        $('.goods-class').hide();
        $('.all-order').show();
        $('.goods-info').hide();
        $('.new-plus').hide();
        $('.custome-info').hide();
        $('.basic-info').hide();
        $('.power-manege').hide();
        $('.shop-notice').hide();
        $('.shop-activity').hide();
        $('.sale-all').hide();
        $('.money-all').hide();
        
        plist.style.color="white"
        stable.style.color="white"
        sclass.style.color="white"
        sinfo.style.color="white"
        splus.style.color="white"
        cinfo.style.color="white"
        binfo.style.color="white"
        pmanager.style.color="white"
        snotice.style.color="white"
        sact.style.color="white"
        saleA.style.color="white"
        moneyA.style.color="white"
 
        listm.style.color="rgb(237, 171, 100)"
        
    }

    // 维权订单
    $('.pro-list').hide();
    plist.onclick = function(){
        $(".goods-list").hide();
        $('.all-order').hide();
        $('.goods-class').hide();
        $('.pro-list').show();
        $('.goods-info').hide();
        $('.new-plus').hide();
        $('.custome-info').hide();
        $('.basic-info').hide();
        $('.power-manege').hide();
        $('.power-manege').hide();
        $('.shop-notice').hide();
        $('.shop-activity').hide();
        $('.sale-all').hide();
        $('.money-all').hide();

        listm.style.color="white"
        stable.style.color="white"
        sclass.style.color="white"
        sinfo.style.color="white"
        splus.style.color="white"
        cinfo.style.color="white"
        binfo.style.color="white"
        pmanager.style.color="white"
        snotice.style.color="white"
        sact.style.color="white"
        saleA.style.color="white"
        moneyA.style.color="white"

        plist.style.color="rgb(237, 171, 100)"
    }

    // 商品列表
    $(".goods-list").hide();
    stable.onclick = function(){
    $('.all-order').hide();
    $('.pro-list').hide();
    $('.goods-class').hide();
    $('.goods-info').hide();
    $('.new-plus').hide();
    $('.custome-info').hide();
    $('.basic-info').hide();
    $('.power-manege').hide();
    $('.power-manege').hide();
    $('.shop-notice').hide();
    $('.shop-activity').hide();
    $('.sale-all').hide();
    $('.money-all').hide();  

    listm.style.color="white"
    plist.style.color="white"
    // stable.style.color="white"
    sclass.style.color="white"
    sinfo.style.color="white"
    splus.style.color="white"
    cinfo.style.color="white"
    binfo.style.color="white"
    pmanager.style.color="white"
    snotice.style.color="white"
    sact.style.color="white"
    saleA.style.color="white"
    moneyA.style.color="white"

    $(".goods-list").show();
    $(".allimg").children().hide();
    $(".released").show()
    stable.style.color="rgb(237, 171, 100)"
    }

    

    // 商品分类
    $('.goods-class').hide();
    sclass.onclick = function(){
    $('.all-order').hide();
    $('.pro-list').hide();
    $('.goods-list').hide();
    $('.goods-info').hide();
    $('.new-plus').hide();
    $('.custome-info').hide();
    $('.basic-info').hide();
    $('.power-manege').hide();
    $('.power-manege').hide();
        $('.shop-notice').hide();
        $('.shop-activity').hide();
        $('.sale-all').hide();
        $('.money-all').hide();

    listm.style.color="white"
    plist.style.color="white"
    stable.style.color="white"
    // sclass.style.color="white"
    sinfo.style.color="white"
    splus.style.color="white"
    cinfo.style.color="white"
    binfo.style.color="white"
    pmanager.style.color="white"
    snotice.style.color="white"
    sact.style.color="white"
    saleA.style.color="white"
    moneyA.style.color="white"
    $(".goods-class").show();
       
    sclass.style.color="rgb(237, 171, 100)"
    }
    // 页面切换
    $('.table-div2').css('display','none')
    $('#one').css('background-color','#b1d9e5')
    $('#two').click(function(){
        $('.table-div').css('display','none')
        $('.table-div2').css('display','')
        $('#one').css('background-color','white')
        $('#two').css('background-color','#b1d9e5')
    })
    $('#one').click(function(){
        $('.table-div').css('display','')
        $('.table-div2').css('display','none')
        $('#one').css('background-color','#b1d9e5')
        $('#two').css('background-color','white')
    })
    $('#btn01').click(function(){
        myFunction3();
    })
    function myFunction3() { //如果有搜索按钮，定义一个onclick即可
        // 声明变量
        var input, filter, table, tr, td, i;
        
        input = document.getElementById("type");
        var options = $('#list-state option:selected');
        filter = options.text();
        // console.log(options.text())
        // filter = input.innerHTML.toUpperCase(); //toUpperCase()是不区分大小写
        console.log(filter)
        table = document.getElementsByClassName("goods-table");
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
    // 查看商品详情1
    $('#check-info').click(function(){
        sinfo.onclick();
        $(".picture img").attr('src','../IMG/21.png')
        var l1 = $('.goods-intro').children().eq(0);
        var l2 = $('.goods-intro').children().eq(1);
        var l3 = $('.goods-intro').children().eq(2);
        var l4 = $('.goods-intro').children().eq(3);
        
        l1.text("商品名称：Nuneon美式高街麂皮绒宽松加绒连帽卫衣")
        l2.text('领型: 连帽  颜色: 杏色 黑色 粉色 风格: 潮基础风格: 青春流行')
        l3.text('价格：￥99')
        var btn = $('<button>S</button>'+'<button>M</button>'+'<button>L</button>'+'<button>XL</button>')
        l4.append(btn)
        var img1 = $('.picture-show ').children().eq(1).children();
        var img2 = $('.picture-show ').children().eq(2).children();

        img1.attr('src','../IMG/211.jpg');
        img2.attr('src','../IMG/212.jpg');

        $('#text').text('品牌: 其他/other\n'+'尺码: S M L XL\n'+'领型: 连帽颜色: 杏色 黑色 粉色 杏色加绒 黑色加绒 粉色加绒 \n'+'袖型: 常规细分风格: 潮基础风格: 青春流行适用季节: 秋季上市年份季节: 2022年秋季厚薄: 常规适用场景: 休闲版型: 宽松型\n'+'适用对象: 青少年 款式: 套头  上市时间: 2022')
        console.log(img1);

    })
        // 查看商品详情2
        $('#check-info2').click(function(){
            sinfo.onclick();
            $(".picture img").attr('src','../IMG/14.png')
            var l1 = $('.goods-intro').children().eq(0);
            var l2 = $('.goods-intro').children().eq(1);
            var l3 = $('.goods-intro').children().eq(2);
            var l4 = $('.goods-intro').children().eq(3);
            
            l1.text("商品名称：三只松鼠水果干零食大礼包混合装充饥小吃")
            l2.text('')
            l3.text('价格：￥99')
            var btn = $('<button>大包</button>'+'<button>中包</button>'+'<button>小包</button>')
            $('.goods-intro').children().eq(3).children().remove();
            l4.append(btn)
            var img1 = $('.picture-show ').children().eq(1).children();
            var img2 = $('.picture-show ').children().eq(2).children();
    
            img1.attr('src','../IMG/221.png');
            img2.attr('src','../IMG/222.png');
    
            $('#text').text('产许可证编号: SC12432012400284\n厂家联系方式: 400-800-4900 配料表: 详情见包装储藏方法: 详情见包装 \n 保质期: 300食品添加剂: 详情见包装品牌: Three Squirrels/三只松鼠系列: 果干大礼包产地: 中国大陆省份: 安徽省包装方式: 包装食品口味: 纯三只松鼠10款果干礼包. 18款果干（三只松鼠+品牌果干）.净含量: 1631g')
            console.log(img1);
    
        })
     // 上传图片
	//选择图片随后同步显示
//     $(document).ready(function(){
//         $('#my-img').click(function(){
//             $('#file').click();
//         })
//     })
//     let inp = document.getElementById('file');
//     let fileImg = document.getElementById('my-img');
//     inp.onchange = function() {
//     let inpObj = inp.files[0]; // 拿到上传文件的属性
//     // inpObj.size 上传文件的大小（字节数）
//     // inpObj.type 上传文件的类型   例如：image/png
//     if (inpObj.type !== "image/png") {
//         alert('上传的不是png/jpg类型的图片')
//     } else if (inpObj.size / 1024 / 1024 > 2) {
//         alert('上传的图片超过2MB')
//     } else {
//         let windowURL = window.URL || window.webkitURL;
//         let img = document.getElementById('preview');
//         if (inp && inpObj) {
//             // createObjectURL(inpObj)  创建一个文件的临时地址
//             let dataURL = windowURL.createObjectURL(inpObj);
//             fileImg.setAttribute('src', dataURL);
//             fileImg.style.opacity = 1
//          }
//     }
// }



    // 商品详情
    $('.goods-info').hide();
    sinfo.onclick = function(){
    $('.all-order').hide();
    $('.pro-list').hide();
    $('.goods-list').hide();
    $('.goods-class').hide();
    $('.new-plus').hide();
    $('.custome-info').hide();
    $('.basic-info').hide();
    $('.power-manege').hide();
    $('.power-manege').hide();
        $('.shop-notice').hide();
        $('.shop-activity').hide();
        $('.sale-all').hide();
        $('.money-all').hide();
    listm.style.color="white"
    plist.style.color="white"
    stable.style.color="white"
    sclass.style.color="white"
    // sinfo.style.color="white"
    splus.style.color="white"
    cinfo.style.color="white"
    binfo.style.color="white"
    pmanager.style.color="white"
    snotice.style.color="white"
    sact.style.color="white"
    saleA.style.color="white"
    moneyA.style.color="white"
    $(".goods-info").show();
       
    sinfo.style.color="rgb(237, 171, 100)"
    }
    

    // 新增商品
    $('.new-plus').hide();
    splus.onclick = function(){
        $('.all-order').hide();
        $('.pro-list').hide();
        $('.goods-list').hide();
        $('.goods-class').hide();
        $(".goods-info").hide();
        $('.custome-info').hide();
        $('.basic-info').hide();
        $('.power-manege').hide();
        $('.power-manege').hide();
        $('.shop-notice').hide();
        $('.shop-activity').hide();
        $('.sale-all').hide();
        $('.money-all').hide();
    
        listm.style.color="white"
        plist.style.color="white"
        stable.style.color="white"
        sclass.style.color="white"
        sinfo.style.color="white"
        // splus.style.color="white"
        cinfo.style.color="white"
        binfo.style.color="white"
        pmanager.style.color="white"
        snotice.style.color="white"
        sact.style.color="white"
        saleA.style.color="white"
        moneyA.style.color="white"
         
        $('.new-plus').show();
        splus.style.color="rgb(237, 171, 100)"
        }
    
    // 客户详情
    $('.custome-info').hide();
    cinfo.onclick = function(){
        $('.all-order').hide();
        $('.pro-list').hide();
        $('.goods-list').hide();
        $('.goods-class').hide();
        $(".goods-info").hide();
        $('.new-plus').hide();
        $('.basic-info').hide();
        $('.power-manege').hide();
        $('.power-manege').hide();
        $('.shop-notice').hide();
        $('.shop-activity').hide();
        $('.sale-all').hide();
        $('.money-all').hide();

        listm.style.color="white"
        plist.style.color="white"
        stable.style.color="white"
        sclass.style.color="white"
        sinfo.style.color="white"
        splus.style.color="white"
        // cinfo.style.color="white"
        binfo.style.color="white"
        pmanager.style.color="white"
        snotice.style.color="white"
        sact.style.color="white"
        saleA.style.color="white"
        moneyA.style.color="white"
        $('.custome-info').show();
         
        cinfo.style.color="rgb(237, 171, 100)"
        }  

    // 基本信息
    $('.basic-info').hide();
    binfo.onclick = function(){
        $('.all-order').hide();
        $('.pro-list').hide();
        $('.goods-list').hide();
        $('.goods-class').hide();
        $(".goods-info").hide();
        $('.new-plus').hide();
        $('.custome-info').hide();
        $('.power-manege').hide();
    $('.power-manege').hide();
        $('.shop-notice').hide();
        $('.shop-activity').hide();
        $('.sale-all').hide();
        $('.money-all').hide();

        listm.style.color="white"
        plist.style.color="white"
        stable.style.color="white"
        sclass.style.color="white"
        sinfo.style.color="white"
        splus.style.color="white"
        cinfo.style.color="white"
        // binfo.style.color="white"
        pmanager.style.color="white"
        snotice.style.color="white"
        sact.style.color="white"
        saleA.style.color="white"
        moneyA.style.color="white"
        $('.basic-info').show();
         
        binfo.style.color="rgb(237, 171, 100)"
        } 

        // 发票管理
        $('.power-manege').hide();
        pmanager.onclick = function(){
            $('.all-order').hide();
            $('.pro-list').hide();
            $('.goods-list').hide();
            $('.goods-class').hide();
            $(".goods-info").hide();
            $('.new-plus').hide();
            $('.custome-info').hide();
            $('.basic-info').hide();
            $('.power-manege').hide();
            $('.shop-notice').hide();
            $('.shop-activity').hide();
            $('.sale-all').hide();
            $('.money-all').hide();

            listm.style.color="white"
            plist.style.color="white"
            stable.style.color="white"
            sclass.style.color="white"
            sinfo.style.color="white"
            splus.style.color="white"
            cinfo.style.color="white"
            binfo.style.color="white"
            // pmanager.style.color="white"
            snotice.style.color="white"
            sact.style.color="white"
            saleA.style.color="white"
            moneyA.style.color="white"

            $('.power-manege').show();
             
            pmanager.style.color="rgb(237, 171, 100)"
            } 

            // 店铺公告
            $('.shop-notice').hide();
            snotice.onclick = function(){
                $('.all-order').hide();
                $('.pro-list').hide();
                $('.goods-list').hide();
                $('.goods-class').hide();
                $(".goods-info").hide();
                $('.new-plus').hide();
                $('.custome-info').hide();
                $('.basic-info').hide();
                $('.power-manege').hide();
                // $('.shop-notice').hide();
                $('.shop-activity').hide();
                $('.sale-all').hide();
                $('.money-all').hide();
    
                listm.style.color="white"
                plist.style.color="white"
                stable.style.color="white"
                sclass.style.color="white"
                sinfo.style.color="white"
                splus.style.color="white"
                cinfo.style.color="white"
                binfo.style.color="white"
                pmanager.style.color="white"
                // snotice.style.color="white"
                sact.style.color="white"
                saleA.style.color="white"
                moneyA.style.color="white"
    
                $('.shop-notice').show();
                 
                snotice.style.color="rgb(237, 171, 100)"
                } 

        // 店铺活动
        $('.shop-activity').hide();
        sact.onclick = function(){
            $('.all-order').hide();
            $('.pro-list').hide();
            $('.goods-list').hide();
            $('.goods-class').hide();
            $(".goods-info").hide();
            $('.new-plus').hide();
            $('.custome-info').hide();
            $('.basic-info').hide();
            $('.power-manege').hide();
            $('.shop-notice').hide();
            // $('.shop-activity').hide();
            $('.sale-all').hide();
            $('.money-all').hide();

            listm.style.color="white"
            plist.style.color="white"
            stable.style.color="white"
            sclass.style.color="white"
            sinfo.style.color="white"
            splus.style.color="white"
            cinfo.style.color="white"
            binfo.style.color="white"
            pmanager.style.color="white"
            snotice.style.color="white"
            // sact.style.color="white"
            saleA.style.color="white"
            moneyA.style.color="white"

            $('.shop-activity').show();
             
            sact.style.color="rgb(237, 171, 100)"
            } 
    
            // 销售统计
        $('.sale-all').hide();
        saleA.onclick = function(){
            $('.all-order').hide();
            $('.pro-list').hide();
            $('.goods-list').hide();
            $('.goods-class').hide();
            $(".goods-info").hide();
            $('.new-plus').hide();
            $('.custome-info').hide();
            $('.basic-info').hide();
            $('.power-manege').hide();
            $('.shop-notice').hide();
            $('.shop-activity').hide();
            // $('sale-all').hide();
            $('.money-all').hide();

            listm.style.color="white"
            plist.style.color="white"
            stable.style.color="white"
            sclass.style.color="white"
            sinfo.style.color="white"
            splus.style.color="white"
            cinfo.style.color="white"
            binfo.style.color="white"
            pmanager.style.color="white"
            snotice.style.color="white"
            sact.style.color="white"
            // saleA.style.color="white"
            moneyA.style.color="white"

            $('.sale-all').show();
             
            saleA.style.color="rgb(237, 171, 100)"
            } 

            // 资金统计
        $('.money-all').hide();
        moneyA.onclick = function(){
            $('.all-order').hide();
            $('.pro-list').hide();
            $('.goods-list').hide();
            $('.goods-class').hide();
            $(".goods-info").hide();
            $('.new-plus').hide();
            $('.custome-info').hide();
            $('.basic-info').hide();
            $('.power-manege').hide();
            $('.shop-notice').hide();
            $('.shop-activity').hide();
            $('.sale-all').hide();
            // $('money-all').hide();

            listm.style.color="white"
            plist.style.color="white"
            stable.style.color="white"
            sclass.style.color="white"
            sinfo.style.color="white"
            splus.style.color="white"
            cinfo.style.color="white"
            binfo.style.color="white"
            pmanager.style.color="white"
            snotice.style.color="white"
            sact.style.color="white"
            saleA.style.color="white"
            // moneyA.style.color="white"

            $('.money-all').show();
             
            moneyA.style.color="rgb(237, 171, 100)"
            } 
})