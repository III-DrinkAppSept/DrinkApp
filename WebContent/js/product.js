var titleArray = [
    { "title": "原味茶系列    M  /  L" },
    { "title": "鮮奶茶系列    M  /  L" },
    { "title": "拿鐵系列      M  /  L" },
    { "title": "美味抹茶系列  M  /  L" },
    { "title": "100%鮮果系列  M  /  L" }
];

var menuData0 = [
    { "name": "錫蘭紅茶", "price_large": 35, "price_medium": 30, "unit": "" },
    { "name": "四季春茶", "price_large": 30, "price_medium": 25, "unit": "" },
    { "name": "黃金麥茶", "price_large": 30, "price_medium": 25, "unit": "" },
    { "name": "茉莉綠茶", "price_large": 30, "price_medium": 25, "unit": "" },
    { "name": "阿里山冰茶", "price_large": 30, "price_medium": 25, "unit": "" },
    { "name": "凍頂烏龍", "price_large": 30, "price_medium": 25, "unit": "" }

];

var menuData1 = [
    { "name": "鮮奶茶", "price_large": 40, "price_medium": 35, "unit": "" },
    { "name": "伯爵鮮奶茶", "price_large": 35, "price_medium": 30, "unit": "" },
    { "name": "鮮奶綠", "price_large": 40, "price_medium": 35, "unit": "" },
    { "name": "珍珠鮮奶茶", "price_large": 40, "price_medium": 35, "unit": "" },
    { "name": "布丁鮮奶茶", "price_large": 45, "price_medium": 40, "unit": "" },
    { "name": "焦糖鮮奶茶", "price_large": 50, "price_medium": 45, "unit": "" }
];

var menuData2 = [
    { "name": "紅茶拿鐵", "price_large": 50, "price_medium": 45, "unit": "" },
    { "name": "冬瓜拿鐵", "price_large": 50, "price_medium": 45, "unit": "" },
    { "name": "玄米拿鐵", "price_large": 50, "price_medium": 45, "unit": "" },
    { "name": "焙茶拿鐵", "price_large": 50, "price_medium": 45, "unit": "" },
    { "name": "香草拿鐵", "price_large": 50, "price_medium": 45, "unit": "" },
    { "name": "焦糖拿鐵", "price_large": 50, "price_medium": 45, "unit": "" }
];

var menuData3 = [
    { "name": "抹茶拿鐵", "price_large": 55, "price_medium": 50, "unit": "" },
    { "name": "京都抹茶", "price_large": 55, "price_medium": 50, "unit": "" },
    { "name": "抹茶紅豆", "price_large": 60, "price_medium": 55, "unit": "" },
    { "name": "宇治抹茶", "price_large": 60, "price_medium": 55, "unit": "" },
    { "name": "明治抹茶", "price_large": 60, "price_medium": 55, "unit": "" },
    { "name": "抹茶可可", "price_large": 50, "price_medium": 45, "unit": "" }
];
var menuData4 = [
    { "name": "新鮮水果茶 ", "price_large": 55, "price_medium": 50, "unit": "" },
    { "name": "柚子鮮茶 ", "price_large": 55, "price_medium": 50, "unit": "" },
    { "name": "葡萄柚綠 ", "price_large": 55, "price_medium": 50, "unit": "" },
    { "name": "凍頂檸檬 ", "price_large": 50, "price_medium": 45, "unit": "" },
    { "name": "百香果綠 ", "price_large": 50, "price_medium": 45, "unit": "" },
    { "name": "奇異果多多 ", "price_large": 50, "price_medium": 45, "unit": "" },
];

var menuDataGrop = [menuData0, menuData1, menuData2, menuData3, menuData4];


//id變化用計數物件
var menuDivider = 0;
var menuListView = 0;
//排列list-divider &　listview
function sortDivider(titleArray, menuDataGrop) {
    for (var i = 0; i < titleArray.length; i++) {
        createDivider(titleArray[i].title);
        for (var j = 0; j < menuDataGrop[i].length; j++) {
            createLisView(
                menuDataGrop[i][j].name,
                menuDataGrop[i][j].price_large,
                menuDataGrop[i][j].price_medium,
                menuDataGrop[i][j].unit,
                i,
                j
            );
        }
    }
};
//list-divider欄位產生程式
function createDivider(title) {
    var $li = $("<li>"); //new Control
    $li.attr("data-role", "list-divider"); //Set property
    $li.attr("id", "menu" + menuDivider++); //Set id
    $li.attr("data-theme", "b"); //Set color
    $li.text(title); //Set title word
    $("#searchMenu").append($li);
};

//listview欄位產生程式
function createLisView(menuDataName, menuDataLargePrice, menuDataMediumPrice, menuDataUnit, i, j) {
    var $list = $("<li>"); //new Control
    var $a1 = $("<a>"); //new Control
    $a1.text(menuDataName + " " + menuDataUnit);
    var $span = $("<span>"); //new Control
    $span.addClass('ui-li-count'); //set Count Bubbles 
    $span.text(menuDataLargePrice);
    $a1.append($span);

    var $span2 = $("<span>"); //new Control
    $span2.addClass('ui-li-count count-third'); //set Count Bubbles 
    $span2.text(menuDataMediumPrice);
    $a1.append($span2);

    var $spell = $("<span>");
    $spell.addClass('ui-li-aside count-second');
    $spell.text("/");
    $a1.append($spell);

    var $a2 = $("<a>"); //new Control
    $a2.attr("data-icon", "plus"); //Set property
    var iIndex;
    var jIndex;
    // console.log(i);
    // console.log(j);
    var re0 = /^\d$/; // RegExp [0-9]
    if (re0.test(i)) {
        iIndex = ("0" + i)
    } else {
        iIndex = "" + i;
    }
    if (re0.test(j)) {
        jIndex = "0" + j;
    } else {
        jIndex = "" + j;
    }
    $a2.attr("id", "menu_selector" + iIndex + "_" + jIndex); //Set id record menudata index and order
    $a2.attr("href", "#addPopup"); //Set for Popup
    $a2.attr("data-rel", "popup"); //Set for Popup
    $a2.attr("data-transition", "slide"); //Set for Popup
    $a2.addClass("addOrder"); //Set for check active
    $list.append($a1); //add to parent
    $list.append($a2); //add to parent
    $("#searchMenu").append($list);
    menuListView++;
    // console.log($a1.html());
    // console.log($a2.attr("id"));
};


//產生菜單
sortDivider(titleArray, menuDataGrop);


//popup選單資訊
var poptitle = [
    { "name": "容量", "code": "capacity" },
    { "name": "甜度", "code": "sugar" },
    { "name": "冰塊", "code": "ice" }
];

var popCapacity = [
    { "name": "大杯", "code": "large" },
    { "name": "中杯", "code": "medium" }
];
var popSugar = [
    { "name": "正常", "code": "normal" },
    { "name": "少糖", "code": "less" },
    { "name": "半糖", "code": "half" },
    { "name": "微糖", "code": "micro" },
    { "name": "無糖", "code": "without" },
];
var popIce = [
    { "name": "正常", "code": "normal" },
    { "name": "少冰", "code": "less" },
    { "name": "去冰", "code": "without" },
    { "name": "常溫", "code": "room" },
    { "name": "溫", "code": "hot" },
];
var popCondition = [popCapacity, popSugar, popIce];

function createControlGroup(poptitle, popCondition) {
    var $div = $("<div>");
    // console.log($div);
    $div.attr("data-role", "controlgroup");
    $div.attr("data-type", "horizontal");
    $div.attr("id", "group_" + poptitle.code);
    $div.append("<p>" + poptitle.name + "</p>");
    for (var i = 0; i < popCondition.length; i++) {
        var pop = createPopCondition(poptitle, popCondition[i]);
        $div.append(pop[0]).append(pop[1]);
    }
    // console.log($div.html());
    $("#popCondition").append($div);
}

function createPopCondition(poptitle, popCondition) {
    var $input = $("<input>");
    $input.attr("type", "radio");
    $input.attr("name", "radio-choice-" + poptitle.code);
    $input.attr("id", $input.attr("name") + "-" + popCondition.code);
    $input.attr("value", "on");
    $input.addClass("conditionSelector");
    var $label = $("<label>");
    $label.attr("for", $input.attr("id"));
    $label.text(popCondition.name);
    // console.log($input);
    var div = [$input, $label]
    return div;
}

function setPopCondition(poptitle, popCondition) {
    for (var i = 0; i < poptitle.length; i++) {
        createControlGroup(poptitle[i], popCondition[i]);
    }
}
setPopCondition(poptitle, popCondition);


//popup結束後將表單初始化
$("#addPopup").on("popupafterclose", function(event, ui) {
    $("#popCondition input").removeAttr("checked");
    $("#popCondition input").checkboxradio("refresh"); //要refresh才有效果
    $("#orderNumber").val(1);
    // console.log($("#group_capacity input"));
});




//儲存訂單項目
function order_item(name, quantity, capacity, sugar, ice, price) {
    this.name = name;
    this.quantity = quantity;
    this.capacity = capacity;
    this.sugar = sugar;
    this.ice = ice;
    this.price = price;
}


var order_items = []; //比較用，當有相同產品不同條件時用
var order_item_info;

$("#joinOrder").click(function() {
    var label_capacity = $('label[for="' + $("#group_capacity input:checked").attr('id') + '"]');
    var label_suger = $('label[for="' + $("#group_sugar input:checked").attr('id') + '"]');
    var label_ice = $('label[for="' + $("#group_ice input:checked").attr('id') + '"]');
    // console.log('容量 : ' + label_capacity.text() + ', 甜度 : ' + label_suger.text() + ', 冰塊 : ' + label_ice.text());    
    // console.log('數量 : ' + $("#orderNumber").val());
    //檢查數量欄位
    var re = /^[1-9]\d*/;
    $("#joinOrder").attr("data-rel", "back");
    if (!re.test($("#orderNumber").val())) {
        // console.log('請輸入正確的數量');
        $("#joinOrder").removeAttr("data-rel");
    }
    var labels = [
        { "name": "容量", "value": label_capacity.text() },
        { "name": "甜度", "value": label_suger.text() },
        { "name": "冰塊", "value": label_ice.text() }
    ];
    var isCorrect = true;
    for (var i = 0; i < labels.length; i++) {
        if (labels[i].value == "") {
            console.log('請選擇' + labels[i].name);
            $("#joinOrder").removeAttr("data-rel");
            isCorrect = false;
        }
    }
    //取得中杯或大杯價錢
    var price;
    if (label_capacity.text() == "中杯") { price = order_item_info.price_medium; } else { price = order_item_info.price_large; }

    if (isCorrect) {
        //送出資料
        var order_product =
            new order_item(order_item_info.name, $("#orderNumber").val(), label_capacity.text(), label_suger.text(), label_ice.text(), price);

        order_items.push(order_product);
        createOrderList(order_product);
        // console.log(order_product);
    }
});
//會員，暫時用01
var isMember = false;
var memberNum = '01';


$(".addOrder").click(function() {
	if(loginAccount == ""){
//		$.mobile.changePage("#member");
		$('.addOrder').attr("href", "#popupRedirect"); 
	}else{
		$('.addOrder').attr("href", "#addPopup"); 
	    var category = parseInt(this.id.substr(13, 2));
	    var product = parseInt(this.id.substr(16, 2));
	    // console.log(menuDataGrop[category][product].name);
	    order_item_info = menuDataGrop[category][product];
	    // console.log(order_item_info);
	}
});


//訂單根據order_items show資料

//<div data-role="collapsible"  data-collapsed-icon = "carat-d" data-expanded-icon = "carat-u" data-iconpos = "right">
var ID = 0; //order_item的記數 每add成功一次+1
var total_price = 0;

function createOrderList(order_product) {
    var name = order_product.name;
    var capacity = order_product.capacity;
    var sugar = order_product.sugar;
    var ice = order_product.ice;
    var quantity = order_product.quantity;
    var price = order_product.price;

    var $h3 = $('<h3>');

    var $dh1 = $('<div>');
    var $dh2 = $('<div>');  
    var $dh3 = $('<div>'); 

    var $dhX = $('<div>');
    $dhX.attr("id", "order_title_" + ID);
    $dhX.addClass('ui-grid-b'); 

    $dh1.addClass('ui-block-a');
    $dh2.addClass('ui-block-b');  
    $dh3.addClass('ui-block-c'); 

    $dh1.append(name);
    $dh2.append(quantity + '杯');
    $dh3.append('共' + quantity * price + '元');
    $dhX.append($dh1).append($dh2).append($dh3);
    $h3.append($dhX);

    // $h3.append(name + ' x ' + quantity + '共' + quantity * price + '元');

    var $divX = $('<div>');
    $divX.attr("id", "order_content_" + ID);
    $divX.addClass('ui-grid-b');
    var $div1 = $('<div>');
    var $div2 = $('<div>');

    $div1.addClass('ui-block-a');
    $div2.addClass('ui-block-b');

    var $p1 = $('<p>');
    var $p2 = $('<p>');

    $p1.append(capacity + '&nbsp;&nbsp;' + sugar + '&nbsp;&nbsp;' + ice);
    $p2.append('&nbsp;&nbsp;&nbsp;' + quantity + '杯&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + quantity * price + '元');
    $div1.append($p1);
    $div2.append($p2);
    var $div3 = $('<div>');
    $div3.addClass('ui-block-c');
    //data-rel="popup" data-position-to="window" data-transition="pop"
    var $btn = $('<a>');
    $btn.attr("href", "#popupDialog");
    $btn.attr("data-rel", "popup");
    $btn.attr("data-position-to", "window");
    $btn.attr("data-transition", "pop");
    $btn.attr("id", "btn_del_" + ID);
    $btn.text("刪除訂單");
    $btn.addClass("btnDelete ui-btn ui-corner-all ui-shadow ui-icon-delete ui-btn-icon-left ui-mini ui-btn-c");
    $div3.append($btn);

    $divX.append($div1).append($div2).append($div3);

    var $orderList = $('<div>');
    $orderList.attr("data-role", "collapsible");
    $orderList.attr("data-collapsed-icon", "carat-d");
    $orderList.attr("data-expanded-icon", "carat-u");
    $orderList.attr("data-iconpos", "right");
    $orderList.attr("data-theme", "b");
    $orderList.attr("id", "order_item_" + ID++);
    $orderList.addClass('orderList');

    $orderList.append($h3);
    // $orderList.append($p1);
    $orderList.append($divX);
    $orderList.collapsible();

    $('#orderContent').append($orderList);
    // console.log($('#orderContent').html());
    $("#set0").after($orderList);
    total_price += quantity * price;
    // console.log(total_price);
    set_total();
    detect_dispatch();
    // console.log(order_items);
}

//將相同品名的collapse合起來
//需考慮已刪除的id

var merged_Nums = [];//用來紀錄已被合併訂單號碼
function mergeOrderList() {
    for (var i = 0; i < order_items.length; i++) {
        for (var j = 0; j < i; j++) {
            if (check_deleted(j) && check_merged(j) && check_merged(i)) {
                if (order_items[i].name == order_items[j].name) {
                    //將名稱重複的取出來跟上一筆合併，並刪除
                    var del = $('#order_content_' + i);

                    $('#order_item_' + j + ' .ui-collapsible-content').append(del);
                    $('#order_item_' + j).collapsible();
                    var qty1 = parseInt($('#order_title_' + i + ' div:nth-child(2)').text());
                    var rd1 = $('#order_title_' + i + ' div:nth-child(3)').text();
                    var price1 = parseInt(rd1.substr(1,rd1.indexOf('元')-1));
                    var qty2 = parseInt($('#order_title_' + j + ' div:nth-child(2)').text());
                    var rd2 = $('#order_title_' + j + ' div:nth-child(3)').text();
                    var price2 = parseInt(rd2.substr(1,rd2.indexOf('元')-1));

                    $('#order_item_' + i).remove();
                    merged_Nums.push(i);
                    set_list_header(order_items[j].name,qty1+qty2,price1+price2,j);
                    // console.log('qty1 : ' + qty1 + ',qty2 : ' + qty2);
                    // console.log('price1 : ' + price1 + ',price2 : ' + price2);
                }
            }
        }
    }
}

//collapse標題列
function set_list_header(name,quantity,price,num){

    var $dh1 = $('<div>');
    var $dh2 = $('<div>');  
    var $dh3 = $('<div>'); 

    var $dhX = $("#order_title_" + num);
    $dhX.empty();
    $dhX.addClass('ui-grid-b'); 

    $dh1.addClass('ui-block-a');
    $dh2.addClass('ui-block-b');  
    $dh3.addClass('ui-block-c'); 

    $dh1.append(name);
    $dh2.append(quantity + '杯');
    $dh3.append('共' + price + '元');
    $dhX.append($dh1).append($dh2).append($dh3);
}

function get_root (delnum) {
    for(var i = 0; i < order_items.length ; i++){
        if($('#order_title_' + i).length){
            if($('#order_title_' + i + ' div:first').text() == order_items[delnum].name){
                return i ; 
            }
        }
    }
}

var delete_num; //記錄當前項目的ID(createOrderList方法上的)
var delete_nums = [];
//按下刪除鍵後跳出刪除視窗
$(document).on("click", ".btnDelete", function() {
    delete_num = this.id.substr(8);
    $(".delete-confirm h3").text($("#order_content_" + delete_num + " p").text());
});


$("#delete_order").click(function() {
    var dqty = order_items[delete_num].quantity;
    var dprice = order_items[delete_num].price * dqty;
    $("#order_content_" + delete_num).remove();
    total_price -= order_items[delete_num].quantity * order_items[delete_num].price;
    set_total();
    detect_dispatch();

    delete_nums.push(delete_num);
    for(var i = 0; i < delete_nums.length; i++){
        if ($("#order_item_" + delete_nums[i]).has('p').length < 1) {
            $("#order_item_" + delete_nums[i]).remove();
        }
    }
    var root_num = get_root(delete_num);

    var gqty = parseInt($('#order_title_' + root_num + ' div:nth-child(2)').text());
    var rd3 = $('#order_title_' + root_num + ' div:nth-child(3)').text();
    var gprice = parseInt(rd3.substr(1,rd3.indexOf('元')-1));

    console.log(gprice + ":" + dprice + ":" + (gprice-dprice));
    if(root_num > -1){
        set_list_header(order_items[root_num].name, gqty - dqty,gprice-dprice,root_num);
    }
});


$('#btnConfirm').click(function() {
	if(loginAccount == ""){
//		alert("請登入會員");
		$('#btnConfirm').attr("href", "#popupRedirect"); 
		$('#btnConfirm').attr("data-rel", "popup"); 
		$('#btnConfirm').attr("data-transition", "slide");
	}else{

		 mergeOrderList();
		$('#btnConfirm').removeAttr("data-rel"); 
		$('#btnConfirm').removeAttr("data-transition");
		 $('#btnConfirm').attr("href","#orderPage");
	}
});
$('#redirect_confirm').click(function() {
	$.mobile.changePage("#member");
});
//返回產品頁後將訂單頁重製
$('#btnOrderBack').click(function() {
    $('#orderContent [data-role="collapsible"]').collapsible("collapse");
});
//清空列表
$('#btnClearOrder').click(function() {
    $('#orderContent [data-role="collapsible"]').remove();
    order_items = [];
    delete_nums = [];
    total_price = 0;
    delete_num = 0;
    ID = 0;
    // console.log(order_items);
    set_total();
    detect_dispatch();

});

//外送初始值
$("input[type='radio']").checkboxradio();
$('#group_dispatch input[type="radio"]').checkboxradio('disable');
$('#group_dispatch input[type="radio"]').checkboxradio('refresh');
$('#text_addr').prop('disabled', true);
//金額滿300，可以外送
function detect_dispatch() {
    if (total_price < 300) {
        $('#group_dispatch input[type="radio"]').filter('[value=on]').prop('checked', true);
        $('#text_addr').val('');
        $('#group_dispatch input[type="radio"]').checkboxradio('disable');
        $('#group_dispatch input[type="radio"]').checkboxradio('refresh');
    } else {
        $('#group_dispatch input[type="radio"]').checkboxradio('enable');
        $('#group_dispatch input[type="radio"]').checkboxradio('refresh');
    }
}
$('#group_dispatch input[type="radio"]').click(function (event) {
    event.preventDefault();
    if($('label[for="' + this.id + '"]').text() == "外送"){
        $('#text_addr').val(orderAdress);
        $('#text_addr').textinput('enable');
        console.log(orderAdress);
    }else {
        $('#text_addr').prop('disabled', true);
        $('#text_addr').val('');
    }
});

function set_total() {
    $("#total_price").html("總計 :  " + total_price + " 元");
}

//檢查此ID是否已刪除
function check_deleted(val) {
    for (var i = 0; i < delete_nums.length; i++) {
        if (val == delete_nums[i]) return false;
    }
    return true;
}
//檢查此ID是否已刪除
function check_merged(val) {
    for (var i = 0; i < merged_Nums.length; i++) {
        if (val == merged_Nums[i]) return false;
    }
    return true;
}
//ajax
var url_orderlist = "http://59.127.112.147:8080/DrinkApp/SendOrderList?";
var url_orderitem = "http://59.127.112.147:8080/DrinkApp/SendOrderItem?";


function SendOrderList(orderNum, customerId, orderDate, status, dispatch, note) {
    var url_true = encodeURI(url_orderlist + "orderNum=" + orderNum + "&customerId=" + customerId + "&orderDate=" + orderDate + "&status=新訂單" + "&dispatch=" + dispatch + "&note=" + note);
    $.ajax({
        async: false,
        type: 'POST',
        url: url_true,
        success: function(data) {
//            alert('orderlist insert');
        },
        error: function() {
//            alert('orderlist false');
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });
}

function SendOrderItem(orderNum, order_product) {
    var name;
    if (order_product.capacity == "中杯")
        name = order_product.name + '(M)';
    else
        name = order_product.name + '(L)';
    var note = order_product.sugar + order_product.ice;
    var url_true = encodeURI(url_orderitem + 'orderNum=' + orderNum + '&productName=' + name + '&qty=' + order_product.quantity + '&note=' + note);
    $.ajax({
        async: false,
        type: 'POST',
        url: url_true,
        success: function(data) {
//            alert('orderitem insert');
        },
        error: function() {
//            alert('orderitem false');
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'

    });
}

$('#btnCheckPay').click(function() {
    var mydate = new Date();
    var month = mydate.getMonth() + 1;
    if (month < 10) month = '0' + month;
    //訂單編號
    var listNum = loginAccount + mydate.getFullYear() + month + mydate.getDate() + mydate.getHours() + mydate.getMinutes() + mydate.getSeconds();
    var label_dispatch = $('label[for="' + $("#group_dispatch input:checked").attr('id') + '"]').text();
    var note = orderAdress;//住址
    var orderDate = mydate.getFullYear() + "/" + month + "/" + mydate.getDate() + " " + mydate.getHours() + ":" + mydate.getMinutes() + ":" + mydate.getSeconds();
    SendOrderList(listNum, loginAccount, orderDate, '新訂單', label_dispatch, note);
    for (var i = 0; i < order_items.length; i++) { 
        if(check_deleted(i)){ //須扣除delete_nums中的
            SendOrderItem(listNum, order_items[i]);
        }
    }
    getOrderData(loginAccount);
    $.mobile.changePage("#member");
    console.log('OK');

});
