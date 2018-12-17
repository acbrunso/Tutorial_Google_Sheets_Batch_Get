function read_data() {
  var params = {
    // The ID of the spreadsheet to retrieve data from.
    spreadsheetId: 'xxx',  // TODO: Update placeholder value.

    // The A1 notation of the values to retrieve.
    ranges: ["Sheet1!A1:B1", "Sheet1!A3:B3"],  // TODO: Update placeholder value.

    // How values should be represented in the output.
    // The default render option is ValueRenderOption.FORMATTED_VALUE.
    //valueRenderOption: '',  // TODO: Update placeholder value.

    // How dates, times, and durations should be represented in the output.
    // This is ignored if value_render_option is
    // FORMATTED_VALUE.
    // The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
    //dateTimeRenderOption: '',  // TODO: Update placeholder value.
  };

  var request = gapi.client.sheets.spreadsheets.values.batchGet(params);
  request.then(function(response) {
    // TODO: Change code below to process the `response` object:
    console.log(response.result);
    populateSheet(response.result);
  }, function(reason) {
    console.error('error: ' + reason.result.error.message);
  });
}



function populateSheet(result) {
  var i=0, j=0;
  for(var range = 0; range < result.valueRanges.length; range++) {
      for(var row=0; row<result.valueRanges[range].values.length; row++, i++) {
          for(var col=0, j=0; col<result.valueRanges[range].values[row].length; col++, j++) {
              document.getElementById(i+":"+j).value = result.valueRanges[range].values[row][col];

          }
      }
  }
}
/*
function populateSheet(result) {
  for(var row=0; row<8; row++) {
    for(var col=0; col<3; col++) {
    document.getElementById(row+":"+col).value = result.values[row][col];
    }

  }

}
*/
