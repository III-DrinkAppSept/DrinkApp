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
    { "name": "宙治抹茶", "price_large": 60, "price_medium": 55, "unit": "" },
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

var isMember = false;
var memberNum = '01';


$(".addOrder").click(function() {

    var category = parseInt(this.id.substr(13, 2));
    var product = parseInt(this.id.substr(16, 2));
    // console.log(menuDataGrop[category][product].name);
    order_item_info = menuDataGrop[category][product];
    // console.log(order_item_info);
});


//訂單根據order_items show資料

//<div data-role="collapsible"  data-collapsed-icon = "carat-d" data-expanded-icon = "carat-u" data-iconpos = "right">
var ID = 0; //order_item的記數 每add成功一次+1
function createOrderList(order_product) {
    var name = order_product.name;
    var capacity = order_product.capacity;
    var sugar = order_product.sugar;
    var ice = order_product.ice;
    var quantity = order_product.quantity;
    var price = order_product.price;

    var $h3 = $('<h3>');
    var $div1 = $('<div>');
    var $div2 = $('<div>');

    $div1.addClass('ui-block-b');
    $div2.addClass('ui-block-c');

    $h3.append(name + ' x ' + quantity + '共' + price + '元');

    var $p1 = $('<p>');
    var $p2 = $('<p>');
    $p1.append(capacity + ' ' + sugar + ' ' + ice + '  x ' + quantity + '共' + quantity * price + '元');
    $div1.append($p1);


    var $orderList = $('<div>');    
    $orderList.attr("data-role", "collapsible");
    $orderList.attr("data-collapsed-icon", "carat-d");
    $orderList.attr("data-expanded-icon", "carat-u");
    $orderList.attr("data-iconpos", "right");
    $orderList.attr("data-theme", "b");
    $orderList.attr("id", "order_item_" + ID++);
    $orderList.addClass('orderList');

    $orderList.append($h3);
    $orderList.append($p1);

    $orderList.collapsible();

    $('#orderContent').append($orderList);
    // console.log($('#orderContent').html());
    $("#set0").after($orderList);
}

//將相同品名的collapse合起來<---待做
function mergeOrderList() {
    // for(var i = 0; i < ID; i++){
    //    var str = $('#order_item_' + i + ' p').html();
    //    console.log(str);
    // }
    for (var i = 0; i < order_items.length; i++) {
        for (var j = 0; j < order_items.length; j++) {
            if (i == j) continue;
            if (order_items[i].name == order_items[j].name) {
                //將名稱重複的取出來跟上一筆合併，並刪除
                var $px = $('<p>');
                var str = $('#order_item_' + i + ' p').html();
                $px.append(str);
                $('#order_item_' + j + ' .ui-collapsible-content').append($px);
                console.log($px);
            }
        }
    }
}


$('#btnConfirm').click(function() {
    // mergeOrderList();
});

//ajax
var url_orderlist = "http://59.127.112.147:8080/app/SendOrderList?";
var url_orderitem = "http://59.127.112.147:8080/app/SendOrderItem?";


function SendOrderList(orderNum, customerId, orderDate, status, dispatch,note) {
	var url_true = encodeURI(url_orderlist + "orderNum=" + orderNum + "&customerId=" + customerId + "&orderDate=" + orderDate + "&status=新訂單" + "&dispatch=" + dispatch + "&note=" + note);
    $.ajax({
        async: false,
        type: 'POST',
        url: url_true,
        success: function(data) {
        	alert('orderlist insert');
        },
    	error: function (){
    		alert('orderlist false');
    	},
        contentType:'application/x-www-form-urlencoded; charset=UTF-8'
    });
}

function SendOrderItem(orderNum,order_product) {
    var name;
    if(order_product.capacity == "中杯")
        name = order_product.name+'(M)';
    else
        name = order_product.name+'(L)';
    var note = order_product.sugar + order_product.ice;
    var url_true = encodeURI(url_orderitem + 'orderNum='+ orderNum + '&productName=' + name + '&qty=' + order_product.quantity + '&note=' + note);
    $.ajax({
        async: false,
        type: 'POST',
        url: url_true,
        success: function(data) {
        	alert('orderitem insert');
        },
    	error: function (){
    		alert('orderitem false');
    	},
    	contentType:'application/x-www-form-urlencoded; charset=UTF-8'
    	
    });
}

$('#btnCheckPay').click(function() {
    // mergeOrderList();
    var mydate = new Date();
    var month = mydate.getMonth() + 1;
    if (month < 10) month = '0' + month;
    //訂單編號
    var listNum = memberNum + mydate.getFullYear() + month + mydate.getDate() + mydate.getHours() + mydate.getMinutes() + mydate.getSeconds();
    var label_dispatch = $('label[for="' + $("#group_dispatch input:checked").attr('id') + '"]').text();
    var note = '';
    var orderDate = mydate.getFullYear() + "/" + month + "/" 
    				+ mydate.getDate() + " " + mydate.getHours()+ ":" 
    				+ mydate.getMinutes()+ ":" + mydate.getSeconds();
    SendOrderList(listNum, memberNum, orderDate,'新訂單',label_dispatch,note);
    for(var i = 0 ; i < order_items.length; i++){
        SendOrderItem(listNum,order_items[i]);
    }
     console.log('OK');

});
