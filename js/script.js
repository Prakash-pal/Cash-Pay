var isNotEnter = false
var weeksForYear = 48
var weeksForYearTab2 = 48
var element = $("#pdf"); // global variable
var getCanvas; // global variable
var annualProfit1 = 54780;
var annualProfit2 = 863820;
var annualSubscription1 = 4500;
var annualSubscription2 = 4500;
var monthlySFC = 375
$("#tab1").click(function() {

  $("#tab2").removeClass("tab_unselect")
  $("#tab2").addClass("tab_select")
  $("#Cash_Pay_Model_Container").show()
  $("#conversion_asp_model").hide()


});
$("#tab2").click(function() {

  $("#tab2").removeClass("tab_select")
  $("#tab2").addClass("tab_unselect")
  $("#conversion_asp_model").show()
  $("#Cash_Pay_Model_Container").hide()


});

function calculateRoi(){

    var newhearing = $("#hearingAW").val()
    var hearingAssessments = $("#hearingAAC").val()
    var incremental1 = $("#incrementalRFPCA").val().replace(/[^\d]/g,'')

     var checkcleanWeek = $("#cheeckCAW1").val()
     var checkagreeingcognivue = $("#checkCleanAAC").val()
      var incremental2 = $("#incrementalRFPCA2").val().replace(/[^\d]/g,'')

var avaWk1 = newhearing*hearingAssessments/100 //Cognivue Assessments / Week new

var avawK2 = checkcleanWeek*checkagreeingcognivue/100 //Cognivue Assessments / Week clean

var newIncremental = incremental1*avaWk1 //Incremental Revenue Fee for Cognivue / Week new

var cleanIncremental = incremental2*avawK2 //Incremental Revenue Fee for Cognivue / Week clean

var increFromcog = cleanIncremental+newIncremental //Incremental Revenue from Cognivue / Week


var increFM = increFromcog*weeksForYear/12
var increFY = increFromcog*weeksForYear
var montlyNet = increFM-monthlySFC
var yearlyNet = increFY-annualSubscription1

$("#row_3_5").text("$"+Math.round(increFM))

$("#roi_total").text("$"+Math.round(increFY))
//   $("#row_3_5").digits();
$("#tab2_row_3_5_2").text("$"+Math.round(montlyNet))
$("#tab2_roi_total_2").text("$"+Math.round(yearlyNet))

}



$( "#hearingAW" ).keyup(function() {

  isNotEnter=true
  calculateRoi()
});
$( "#hearingAAC" ).keyup(function() {
  isNotEnter=true
  calculateRoi()
});


$( "#cheeckCAW1" ).keyup(function() {
  isNotEnter=true
  calculateRoi()
});
$( "#checkCleanAAC" ).keyup(function() {
  isNotEnter=true
  calculateRoi()
});
$( "#incrementalRFPCA" ).keyup(function() {
  isNotEnter=true

  calculateRoi()
});
$( "#incrementalRFPCA2" ).keyup(function() {
  isNotEnter=true

  calculateRoi()
});

$( "#weeksForYear" ).keyup(function() {
  weeksForYear = $(this).val()
  calculateRoi()
});
function isEmpty(property) {
  return (property === null || property === "" || typeof property === "undefined");
}
