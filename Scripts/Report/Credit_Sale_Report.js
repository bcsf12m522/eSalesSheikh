function findByDocType(id) {
    //alert(id);

    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/CreditReportByDocType/',
        data: { docTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("Success");
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();
        },
        error: function (response) {
            //alert("Failure");
        }

    })
}

function findByCustomerType(id) {
    //alert(id);

    $("#loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    $.ajax({

        url: '/Report/CreditReportByCustomerType/',
        data: { customerTypeId: id },
        type: 'Get',
        cache: false,
        success: function (data) {
            //alert("Success");
            document.getElementById('updatedDiv').innerHTML = data;
            $("#loader_div").hide();
            $("#date_click_div").show();
        },
        error: function (response) {
            //alert("Failure");
        }

    })
}

function findRecord(date) {

    $(".loader_div").show();
    $("#customer_summary").hide();
    $("#date_click_div").hide();

    var doc = document.getElementById('docType').value;
    var custType = document.getElementById('customerType').value;


    $.ajax({

        url: '/Report/creditSalesRecord/',
        data: { docType: doc, customerType: custType, dateLimit: date },
        type: 'Post',
        cache: false,
        success: function (data) {


            document.getElementById('updatedDiv').innerHTML = data;
            $(".loader_div").hide();
            $("#date_click_div").show();
        },
        error: function () {


        }


    })
}

function showDateDiv() {
    var to = document.getElementById("to_date").value;
    $("#date_click_div").removeClass("none");
    $("#date_click_div").addClass("showDiv");
    $("#customer_summary").addClass("none");
}