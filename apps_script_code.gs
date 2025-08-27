// Google Apps Script (вставь в Code.gs в редакторе таблицы)
function doPost(e) {
  var sheet = SpreadsheetApp.getActive().getSheetByName('Events');
  if (!sheet) sheet = SpreadsheetApp.getActive().insertSheet('Events');
  var data = JSON.parse(e.postData.contents || '{}');
  var ts = new Date(data.ts || new Date());
  var slot = data.slot || '';
  var ua = data.ua || '';
  sheet.appendRow([ts, slot, ua]);
  return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
}
