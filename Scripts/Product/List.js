

//---------------Price & VAT Calculations onkeypress ---------------//

function Normal_Price_Calculating_VAT(id) {
    if (id == 1) {
        var price = $("#NormalPrice").val();
        //alert("price" + price);
        var vat_price = (+(price * 0.2) + +price).toFixed(3);
        //alert("vat_price" + vat_price);
        $("#NormalTotal").val(vat_price);
    }
    else {
        var price1 = $("#NormalPriceEdit").val();
        //alert("price" + price1);
        var vat_price1 = (+(price1 * 0.2) + +price1).toFixed(3);
        //alert("vat_price" + vat_price1);
        $("#NormalTotalEdit").val(vat_price1);
    }
}

function Normal_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#NormalTotal").val();
        var price = (vat_price / 1.2).toFixed(3);
        $("#NormalPrice").val(price);
    }
    else {
        var vat_price1 = $("#NormalTotalEdit").val();
        var price1 = (vat_price1 / 1.2).toFixed(3);
        $("#NormalPriceEdit").val(price1);
    }
}

function Trade_Price_Calculating_VAT(id) {
    if (id == 1) {
        var price = $("#TradePrice").val();
        var vat_price = (+(price * 0.2) + +price).toFixed(3);
        $("#TradeTotal").val(vat_price);
    }
    else {
        var price1 = $("#TradePriceEdit").val();
        var vat_price1 = (+(price1 * 0.2) + +price1).toFixed(3);
        $("#TradeTotalEdit").val(vat_price1);
    }
}

function Trade_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#TradeTotal").val();
        var price = (vat_price / 1.2).toFixed(3);
        $("#TradePrice").val(price);
    }
    else {
        var vat_price1 = $("#TradeTotalEdit").val();
        var price1 = (vat_price1 / 1.2).toFixed(3);
        $("#TradePriceEdit").val(price1);
    }
}

function Premium_Price_Calculating_VAT(id) {
    if (id == 1) {
        var price = $("#PremiumPrice").val();
        var vat_price = (+(price * 0.2) + +price).toFixed(3);
        $("#PremiumTotal").val(vat_price);
    }
    else {
        var price1 = $("#PremiumPriceEdit").val();
        var vat_price1 = (+(price1 * 0.2) + +price1).toFixed(3);
        $("#PremiumTotalEdit").val(vat_price1);
    }
}

function Premium_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#PremiumTotal").val();
        var price = (vat_price / 1.2).toFixed(3);
        $("#PremiumPrice").val(price);
    }
    else {
        var vat_price1 = $("#PremiumTotalEdit").val();
        var price1 = (vat_price1 / 1.2).toFixed(3);
        $("#PremiumPriceEdit").val(price1);
    }
}

function Other_Price_Calculating_VAT(id) {
    if (id == 1) {
        var price = $("#OtherPrice").val();
        var vat_price = (+(price * 0.2) + +price).toFixed(3);
        //var vat_price = (vat_price1 - 0).toFixed(3);
        $("#OtherTotal").val(vat_price);
    }
    else {
        var price1 = $("#OtherPriceEdit").val();
        var vat_price1 = (+(price1 * 0.2) + +price1).toFixed(3);
        //var vat_price = (vat_price1 - 0).toFixed(3);
        $("#OtherTotalEdit").val(vat_price1);
    }
}

function Other_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#OtherTotal").val();
        var price = (vat_price / 1.2).toFixed(3);
        $("#OtherPrice").val(price);
    }
    else {
        var vat_price1 = $("#OtherTotalEdit").val();
        var price1 = (vat_price1 / 1.2).toFixed(3);
        $("#OtherPriceEdit").val(price1);
    }
}

function Cost_Price_Calculating_VAT(id) {
    if (id == 1) {
        var price = $("#CostPrice").val();
        var vat_price = (+(price * 0.2) + +price).toFixed(3);
        $("#CostTotal").val(vat_price);
    }
    else {
        var price1 = $("#CostPriceEdit").val();
        var vat_price1 = (+(price1 * 0.2) + +price1).toFixed(3);
        $("#CostTotalEdit").val(vat_price1);
    }
}

function Cost_Price_by_Vat(id) {
    if (id == 1) {
        var vat_price = $("#CostTotal").val();
        var price = (vat_price / 1.2).toFixed(3);
        $("#CostPrice").val(price);
    }
    else {
        var vat_price1 = $("#CostTotalEdit").val();
        var price1 = (vat_price1 / 1.2).toFixed(3);
        $("#CostPriceEdit").val(price1);
    }
}

//---------------Price & VAT Calculations onkeypress ---------------//


//---------------Custom Field Checkboxes ---------------//
function abc() {
    if (document.getElementById("checkbox_normal").checked) {
        $(".normal_total").show('slow');
    }

    else {
        $(".normal_total").hide('slow');
    }
}

function abc1() {
    if (document.getElementById("checkbox_trade").checked) {
        $(".trade_total").show('slow');
    }

    else {
        $(".trade_total").hide('slow');
    }
}

function abc2() {
    if (document.getElementById("checkbox_premium").checked) {
        $(".premium_total").show('slow');
    }

    else {
        $(".premium_total").hide('slow');
    }
}

function abc3() {
    if (document.getElementById("checkbox_other").checked) {
        $(".other_total").show('slow');
    }

    else {
        $(".other_total").hide('slow');
    }
}

function abc4() {
    if (document.getElementById("checkbox_cost").checked) {
        $(".cost_total").show('slow');
    }

    else {
        $(".cost_total").hide('slow');
    }
}
//---------------Custom Field Checkboxes ---------------//

//---------------Data Table ---------------//

$(document).ready(function () {
    $('#product_list_tableeee').dataTable();
});

//---------------Data Table ---------------//