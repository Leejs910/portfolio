// index 시계


let clock = document.querySelector('.footer1');

function wt() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    // 24 시간제 -> 12시간제 변경 
    var h12 = (h > 12) ? (h - 12) : h;
    //  12 시간제 - 오전 오후 판정 
    var ampm = (h < 12) ? "오전" : "오후";

    // 분 2 자릿숫 표시 
    var min_o = (m < 10) ? "0" : "";
    // 초 2자릿수 표시
    var sec_o = (s < 10) ? "0" : "";

    var time = ampm + " " + h12 + ":" + min_o + m + ':' + sec_o + s;

    clock.textContent = (time);

}

setInterval(wt, 1000);

(function(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var year = d.getFullYear();
    var month = d.getMonth();
    var date = d.getDate();
    var day = d.getDay();
    // 24 시간제 -> 12시간제 변경 
    var h12 = (h > 12) ? (h - 12) : h;
    //  12 시간제 - 오전 오후 판정 
    var ampm = (h < 12) ? "오전" : "오후";

    // 분 2 자릿숫 표시 
    var min_o = (m < 10) ? "0" : "";
    // 초 2자릿수 표시
    var sec_o = (s < 10) ? "0" : "";

    var time = ampm + " " + h12 + ":" + min_o + m + ':' + sec_o + s;
    clock.textContent = (time);
})();