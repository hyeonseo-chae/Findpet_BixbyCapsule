//DatePicker를 이용하여 날짜를 불러오면 API서버에서 인식할 수 없음
//DatePicker에서 불러온 날짜를 API서버에서 인식할 수 있게 형식을 변환해줌

module.exports.function = function date_Convert (myDate_Start, myDate_End){
  if (myDate_Start['month'] < 10) {
    myDate_Start['month'] = '0'+ String(myDate_Start['month'])
  }
  if (myDate_End['month'] < 10) {
    myDate_End['month'] = '0'+ String(myDate_End['month'])
  }
  if (myDate_Start['day'] < 10) {
    myDate_Start['day'] = '0'+ String(myDate_Start['day'])
  }
  if (myDate_End['day'] < 10) {
    myDate_End['day'] = '0'+ String(myDate_End['day'])
  }
  //var bgnde_convert = InputDate['bgnde_convert']
  //var endde_convert = InputDate['endde_convert']
  var Bgnde_Convert = String(myDate_Start['year']) + String(myDate_Start['month']) + String(myDate_Start['day'])
  var Endde_Convert = String(myDate_End['year']) + String(myDate_End['month']) + String(myDate_End['day'])
  
  return {bgnde_Convert: Bgnde_Convert,
          endde_Convert: Endde_Convert
         };
}