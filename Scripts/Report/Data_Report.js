﻿function Transaction_No_Checkboxes() {

    if (document.getElementById("transaction_no_checkbox").checked) {
        $('.Transaction_no_tr').show();
    }
    else {
        $('.Transaction_no_tr').hide();
    }
}

function Transaction_Type_Checkboxes() {

    if (document.getElementById("trans_type_checkbox").checked) {
        $('.Trans_type_tr').show();
    }
    else {
        $('.Trans_type_tr').hide();
    }
}

function Buyer_Name_Checkboxes() {

    if (document.getElementById("buyer_name_checkbox").checked) {
        $('.Name_tr').show();
    }
    else {
        $('.Name_tr').hide();
    }
}

function Phone_Checkboxes() {

    if (document.getElementById("phone_checkbox").checked) {
        $('.Phone_tr').show();
    }
    else {
        $('.Phone_tr').hide();
    }
}

function Email_Checkboxes() {

    if (document.getElementById("email_checkbox").checked) {
        $('.Email_tr').show();
    }
    else {
        $('.Email_tr').hide();
    }
}

function Address_Checkboxes() {

    if (document.getElementById("address_checkbox").checked) {
        $('.Address_tr').show();
    }
    else {
        $('.Address_tr').hide();
    }
}

function SKU_Checkboxes() {

    if (document.getElementById("sku_checkbox").checked) {
        $('.SKU_tr').show();
    }
    else {
        $('.SKU_tr').hide();
    }
}

function QTY_Checkboxes() {

    if (document.getElementById("qty_checkbox").checked) {
        $('.QTY_tr').show();
    }
    else {
        $('.QTY_tr').hide();
    }
}

function Prices_Checkboxes() {

    if (document.getElementById("price_checkbox").checked) {
        $('.Price_tr').show();
    }
    else {
        $('.Price_tr').hide();
    }
}

function Dates_Checkboxes() {

    if (document.getElementById("date_checkbox").checked) {
        $('.Sale_date_tr').show();
    }
    else {
        $('.Sale_date_tr').hide();
    }
}

function Payment_Status_Checkboxes() {

    if (document.getElementById("payment_status_checkbox").checked) {
        $('.Status_tr').show();
    }
    else {
        $('.Status_tr').hide();
    }
}

$(document).ready(function () {
    $('#data_report_table').dataTable();
});

function findByDate() {

    var to = document.getElementById('to_date').value;
    var from = document.getElementById('from_date').value;
    $.ajax({

        url: '/Report/DataReportByDate/',
        data: { dateFrom: from, dateTo: to },
        type: 'Get',
        cache: false,
        success: function (data) {
            document.getElementById('updatedDiv').innerHTML = data;
        },
        error: function (response) {

        }

    })
}

function report_dropdown() {
    
    var val = document.getElementById('sku_order_report_select').value;
    //alert(val);

    $.ajax({

        url: '/Report/DataReportBySKUDropdown/',
        data: { id: val },
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("SUCCESS1");
            document.getElementById('updatedDiv_SKU').innerHTML = data;
        },
        error: function (response) {
            //alert("errorresponse");
        }

    })
}

function findBySKU() {
    $("#data_report_table_div").show();
    var sku_input = document.getElementById('SKU').value;
    //alert(sku_input);

    $.ajax({

        url: '/Report/DataReportBySKU/',
        data: { str: sku_input },
        type: 'Get',
        cache: false,
        success: function (data) {

            document.getElementById('updatedDiv').innerHTML = data;
        },
        error: function (response) {

        }

    })
}

function findByDocType(id) {
    //alert(id);
    $("#data_report_table_div").show();

    $.ajax({

        url: '/Report/DataReportByDocType/',
        data: { docTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            document.getElementById('updatedDiv').innerHTML = data;
        },
        error: function (response) {

        }

    })
}

function findByPayType(id) {
    $("#data_report_table_div").show();

    $.ajax({

        url: '/Report/DataReportByPayType/',
        data: { payTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            document.getElementById('updatedDiv').innerHTML = data;
        },
        error: function (response) {
            
        }

    })
}

function sku_order_func(id) {
    //alert("ID" + id);
    if (id == 1) {
        $("#data_report_table_div").show();
        $("#sku_report_table_div").hide();
    }
    else if(id==2){
        $("#data_report_table_div").hide();
        $("#sku_report_table_div").show();
    }

    
}


function findByCustomerDetails() {
    $("#loader_div").show();
    $("#data_report_table_div").hide();
    var customer_id = document.getElementById('customer_details_id').value;
    //alert(sku_input);

    $.ajax({

        url: '/Report/DataReportByCustomerDetails/',
        data: { str: customer_id },
        type: 'Get',
        cache: false,
        success: function (data) {
            $("#loader_div").hide();
            $("#data_report_table_div").show();
            document.getElementById('updatedDiv').innerHTML = data;
        },
        error: function (response) {

        }

    })
}

function loading_gif_hide() {
    alert("adsad");
    $("#loader_div").hide();
}

$('body').on('click', '.abs', function () {
    var idd = $(this).data("id");
    //alert("IDD" + idd);

    //window.open("dd/"+idd);
        
    
    $("#loader_div").show();

    setTimeout(function () {
        //alert("ADASDSDASDASDAD");
        //
        var url = $("#RedirectTo").val();
        location.href = url + "/" + idd;

    }, 500);


   
        
      

    //$.ajax({

    //    url: '/Sale/Ad/',
    //    data: { id: idd },
    //    type: 'Get',
    //    cache: false,
    //    success: function (data) {
    //        alert("success");
    //    },
    //    error: function (response) {
    //        alert("ERROR");
    //    }
    //})

})

function queries_query() {
    $("#print_btn").show();
    //alert("SADS");

    //var order_sku = $("#sku_order_report_select").val();
    //var doc_type = $("#doc_type_id").val();
    //var sku = $("#SKU").val();
    //var customer_details = $("#customer_details_id").val();
    //var paymnet = $("#payment_status_id").val();
    //var start_date = $("#from_date").val();
    //var end_date = $("#to_date").val();


    //alert("Report   " + order_sku + "    DOC_Type    " + doc_type + "     SKU    " + "     Customer Details    " + customer_details + "    Payment    " + paymnet + "    Start Date    " + start_date + "   End Date     " + end_date);

    //$.ajax({

    //    url: '/Report/Search_Filter/',
    //    data: { order_id: order_sku , doc_id : doc_type , sku_id : sku, customer_id: customer_details , payment_id : paymnet , start_date_id : start_date , end_date_id : end_date},
    //    type: 'Get',
    //    cache: false,
    //    success: function (data) {
    //        document.getElementById('updatedDiv').innerHTML = data;
    //    },
    //    error: function (response) {

    //    }

    //})

}