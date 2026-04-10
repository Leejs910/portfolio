const ARR = JSON.stringify(arr);
let prevBt = document.querySelector('.previous-bt');
let homeBt = document.querySelector('.home-back');
let mainContent = document.querySelector('.main-content');
let mainContent2 = document.querySelector('.main-content2');
let rightContent = document.querySelector('.right_content');
let rightContent2 = document.querySelector('.right_content2');
let rightContent3 = document.querySelector('.right_content3');
let rightContent4 = document.querySelector('.right_content4');
let rightContent5 = document.querySelector('.right_content5');
let rightContent6 = document.querySelector('.right_content6');
let modal1 = document.querySelector('#modal_container');
let naviText = document.querySelector('.nav_text');
// 아이텝 배열 목록
const stationCode = JSON.parse(ARR);


// 처음 실행시 함수 
(function () {
    let btnA = document.querySelector('#BTNA');
    btnA.onclick = function () {
        goindex2();
        mainContent.style = 'display:none';
        rightContent2.style = 'display:none';
        rightContent3.style = 'display:none';
        rightContent4.style = 'display:none';
        rightContent5.style = 'display:none';
        rightContent6.style = 'display:none';
    }

})();

// 버튼 클릭시 함수 실행 

function goindex2() {

    prevBt.onclick = function () {
        mainContent.style = 'display:grid';
        mainContent2.style = 'display:none';
        naviText.innerText = '원주 터미널 무인 발매기 입니다';
        deleteStation();
    }
    mainContent2.style = 'display:grid';
    naviText.innerText = '도착터미널을 선택하세요';

    // 왼쪽 초기화
    let startStation = document.querySelectorAll('.start_station');
    function startStationFun() {
        // 왼쪽 출발 터미널 
        startStation[0].innerHTML = stationCode[0].name;
        // 왼쪽 도착지 선택
        startStation[1].innerHTML = '&nbsp;';

        // 왼쪽 출발일  
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var date = d.getDate();
        startStation[2].innerHTML = year + '년 ' + (month + 1) + '월 ' + date + '일';
        // 왼쪽 출발시간 선택 초기화
        startStation[3].innerHTML = '&nbsp;';

    }
    startStationFun();
    deleteStation();

    // 오른쪽 아래 역 처음 실행 
    let rightWrap = document.querySelector('.right_wrap');

    for (var i = 1; i < stationCode.length; i++) {
        let createA = document.createElement('a');
        createA.innerHTML = `${stationCode[i].name}`
        rightWrap.append(createA);
    };
    let rightContentUpChild = document.querySelectorAll('.right_content_up a');
    rightContentUpChild[0].style = 'background-color:#03A6F8; color:#FFFFFF;';
    //오른쪽 아래 초기화
    function deleteStation() {
        let removepart = document.querySelectorAll('.right_wrap a');
        for (i = 0; i < removepart.length; i++) {
            removepart[i].remove();
        }
        let rightContentUpChild = document.querySelectorAll('.right_content_up a');
        for (var i = 0; i < rightContentUpChild.length; i++) {
            rightContentUpChild[i].style = 'background-color:#666666; color:#FFFFFF;';
        };
    }
    // 오른쪽 위 클릭 이벤트 
    let rightContentUp = document.querySelector('.right_content_up');

    rightContentUp.addEventListener('click', function (event) {

        let targetStyle = event.target;
        let target = event.target.textContent;
        if (target.length > 30) {
            console.log('null');
            return;
        }

        deleteStation();
        let rightContentUpChild = document.querySelectorAll('.right_content_up a');
        for (var i = 0; i < rightContentUpChild.length; i++) {
            rightContentUpChild[i].style = 'background-color:#666666; color:#FFFFFF;';
        };
        // console.log(typeof target,target,target.length);
        if (target.length < 30 && target == '전체') {
            for (var i = 1; i < stationCode.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${stationCode[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }
        if (target.length < 30 && target == '서울') {
            const filteredData = stationCode.filter(item => item.province.includes(target));
            for (var i = 0; i < filteredData.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${filteredData[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }
        if (target.length < 30 && target == '인천/경기') {
            const filteredData = stationCode.filter(item => item.province.includes(target));
            for (var i = 0; i < filteredData.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${filteredData[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }
        if (target.length < 30 && target == '강원') {
            const filteredData = stationCode.filter(item => item.province.includes(target));
            for (var i = 1; i < filteredData.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${filteredData[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }
        if (target.length < 30 && target == '대전/충남') {
            const filteredData = stationCode.filter(item => item.province.includes(target));
            for (var i = 0; i < filteredData.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${filteredData[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }
        if (target.length < 30 && target == '충북') {
            const filteredData = stationCode.filter(item => item.province.includes(target));
            for (var i = 0; i < filteredData.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${filteredData[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }
        if (target.length < 30 && target == '광주/전남') {
            const filteredData = stationCode.filter(item => item.province.includes(target));
            for (var i = 0; i < filteredData.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${filteredData[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }
        if (target.length < 30 && target == '전북') {
            const filteredData = stationCode.filter(item => item.province.includes(target));
            for (var i = 0; i < filteredData.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${filteredData[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }
        if (target.length < 30 && target == '부산/경남') {
            const filteredData = stationCode.filter(item => item.province.includes(target));
            for (var i = 0; i < filteredData.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${filteredData[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }
        if (target.length < 30 && target == '대구/경북') {
            const filteredData = stationCode.filter(item => item.province.includes(target));
            for (var i = 0; i < filteredData.length; i++) {
                let createA = document.createElement('a');
                createA.innerHTML = `${filteredData[i].name}`
                rightWrap.append(createA);
                targetStyle.style = 'background-color:#03A6F8; color:#FFFFFF;';
            };
        }


    }, { once: false });

    // 도착지 버튼 클릭 
    let rightDownBt = document.querySelector('.right_wrap');
    rightDownBt.addEventListener('click', function (event) {

        let target = event.target.textContent;
        startStation[1].innerHTML = '&nbsp;';
        if (target.length > 30) {
            console.log('null');
            return;
        }

        if (target.length < 30) {
            startStation[1].innerHTML = target;
            console.log(target);
            let startTerminal = startStation[0].innerHTML;
            gorightContent2(startTerminal, target);
        }
    }, { once: false });
}

// 배차 선택 화면

function gorightContent2(element1, element2) {

    prevBt.onclick = function () {
        mainContent2.style = 'display:grid';
        rightContent2.style = 'display:none';
        rightContent.style = 'display:grid';
        naviText.innerText = '출발일자 시간을 확인하시고 도착터미널을 선택하세요';
        goindex2();
    }
    naviText.innerText = '배차를 선택하세요';
    console.log(element1, element2);
    rightContent.style = 'display:none';
    rightContent2.style = 'display:grid';
    let busInfoFoot = document.querySelector('#buscharge_info_foot');
    busInfoFoot.innerText = element2;


    deleteAll();

    // 배차 화면 실행 
    let timelineDown = document.querySelector('.timeline_wrap');
    function firstView() {
        for (let i = 0; i < 7; i++) {
            let cretediv2 = document.createElement('div');
            cretediv2.classList = 'timeline_down';
            cretediv2.innerHTML = `
            <div>1${i}:00</div>
            <div style="font-size: 13px;">${element2}</div>
            <div>직행</div>
            <div>일반</div>
            <div>경기고속</div>
            <div>01:30</div>
            <div>정기</div>
            <div>25</div>
            <div>28</div>
            <div class="choseBT" >선택</div>
            `;
            timelineDown.append(cretediv2)
        };
    }
    firstView();

    // 배차 화면 삭제
    function deleteAll() {
        let removepart = document.querySelectorAll('.timeline_down');
        for (i = 0; i < removepart.length; i++) {
            removepart[i].remove();
        }
    }
    // 선택 버튼 이후 화면 이동 

    let CHOSEBTN = document.querySelector('.timeline_wrap');
    // console.log(CHOSEBTN);
    // CHOSEBTN.onclick= function(event){
    //     let target = event.target.textContent;
    //     console.log(target);
    // }
    CHOSEBTN.addEventListener('click', function (event) {
        let target = event.target;
        let targetText = target.textContent;
        if (targetText.length < 5 && targetText == '선택') {
            let parent = target.parentNode;
            let TIME = parent.children[0].textContent;
            console.log(TIME);
            gorightContent3(TIME);
        }
        else {
            console.log('null');
            return;
        }
    }, { once: false });


    // 좌석배치도 모달 
    function gorightContent3(element) {

        modal1.style = 'display:flex';
        prevBt.onclick = function () {
            mainContent2.style = 'display:grid';
            rightContent3.style = 'display:none';
            rightContent2.style = 'display:grid';
            naviText.innerText = '도착터미널을 선택하세요';
            gorightContent2(element1, element2);
            zero();
        }

        modal1.onclick = function () {
            modal1.style = 'display:none';
        }
        let startStation = document.querySelectorAll('.start_station');
        startStation[3].innerHTML = element;
        rightContent2.style = 'display:none';
        rightContent3.style = 'display:grid';
        naviText.innerText = '승차권 수량을 +,-로 조정하세요';

        let manNum = document.querySelector('.manNum');
        let manNumber = 0;
        manNum.innerText = manNumber;

        // 초기화
        function zero() {
            manNumber = 0;
            numberSum(manNumber);
            let seatBlank = document.querySelectorAll('.seatBlank');
            for (const seats of seatBlank) {
                seats.style = 'background:#cccccc;';
                seats.removeEventListener('click', paintSeat, { once: false });
            }
            let completeBt = document.querySelector('.busseatBt');
            completeBt.onclick = null;

            startStation[3].innerHTML = '&nbsp;';
        }

        // 클릭시 플러스 버튼 
        let plusBt = document.querySelector('.plusFun');

        plusBt.onclick = function () {
            // selectPeopleRenew(++manNumber);
            if (parseInt(manNum.innerText) < 1) {
                selectPeopleRenew(++manNumber);
            }
        };

        // 클릭시 마이너스 버튼
        let minusBt = document.querySelector('.minusFun');
        minusBt.onclick = function () {
            if (parseInt(manNum.innerText) > 0) {
                selectPeopleRenew(--manNumber);
            }
        };

        //  총수량 
        function selectPeopleRenew(element4) {
            // console.log(manNum.innerText, parseInt(manNum.innerText),manNumber);
            if (element4 > 0) {
                // 의자 색상 함수
                let seatBlank = document.querySelectorAll('.seatBlank');
                for (const seats of seatBlank) {
                    seats.addEventListener('click', paintSeat, { once: false });

                }
            }
            if (element4 < 1) {
                let seatBlank = document.querySelectorAll('.seatBlank');
                for (const seats of seatBlank) {
                    seats.style = 'background:#cccccc;';
                    seats.removeEventListener('click', paintSeat, { once: false });
                    let completeBt = document.querySelector('.busseatBt');
                    completeBt.onclick = null;
                }
            }
            let manNum = document.querySelector('.manNum');
            manNum.innerText = element4;
            numberSum(element4);
        }
        // 총수량/가격 계산 
        function numberSum(element4) {

            let ticketSum = document.querySelector('.ticketSum');
            ticketSum.children[1].innerText = element4;
            let priceSum = document.querySelector('.priceSum');
            let PRICE = element4 * 7700;
            priceSum.children[1].innerText = PRICE.toLocaleString();
        }

        // 의자 칠하기 

        function paintSeat(event) {
            let seatBlank = document.querySelectorAll('.seatBlank');
            for (const seats of seatBlank) {
                seats.style = 'background:#cccccc;';
            }
            let target = event.target;
            target.style = 'background:#03A6F8;';

            let seatNum = target.innerText;
            let completeBt = document.querySelector('.busseatBt');

            completeBt.onclick = function () {
                let seatBlank = document.querySelectorAll('.seatBlank');
                for (const seats of seatBlank) {
                    seats.style = 'background:#cccccc;';
                    seats.removeEventListener('click', paintSeat, { once: false });
                }
                // 좌석 가격 , 매수 
                let fPrice = (manNumber * 7700).toLocaleString();;


                console.log(seatNum, manNumber, fPrice);
                gorightContent4(seatNum, manNumber, fPrice, element);
                completeBt.onclick = null;
            }
        }


        // 선택 내용을 확인하세요
        function gorightContent4(seatNum, manNumber, fPrice, statime) {
            prevBt.onclick = function () {

                rightContent4.style = 'display:none';
                rightContent3.style = 'display:grid';
                naviText.innerText = '승차권 수량을 +,-로 조정하세요';
                manNumber = 0;
                numberSum(manNumber);
                let seatBlank = document.querySelectorAll('.seatBlank');
                for (const seats of seatBlank) {
                    seats.style = 'background:#cccccc;';
                    seats.removeEventListener('click', paintSeat, { once: false });
                }
                let completeBt = document.querySelector('.busseatBt');
                completeBt.onclick = null;
                gorightContent3(statime);
            }

            rightContent3.style = 'display:none';
            rightContent4.style = 'display:grid';
            naviText.innerText = '선택내역을 확인하세요';

            let ticketMid = document.querySelectorAll('.ticketMidIn');
            let startCale = startStation[2].textContent;
            let arrive = startStation[1].textContent;
            console.log(ticketMid[0].children[1].innerText);
            ticketMid[1].children[1].innerText = seatNum;
            ticketMid[2].children[1].innerText = startCale;
            ticketMid[3].children[1].innerText = '없음';
            ticketMid[5].children[1].innerText = arrive;
            ticketMid[6].children[1].innerText = manNumber;
            ticketMid[7].children[1].innerText = statime;
            ticketMid[9].children[1].innerText = fPrice;

            // 카드결제 버튼 클릭 
            let cardInBt = document.querySelector('.ticketDown');
            cardInBt.onclick = function () {
                gorightContent5(seatNum, manNumber, fPrice, statime, startCale, arrive)
            }
        }

    }


    function gorightContent5(seatNum, manNumber, fPrice, statime, startCale, arrive) {

        prevBt.onclick = function () {
            rightContent5.style = 'display:none';
            rightContent4.style = 'display:grid';
            naviText.innerText = '선택내역을 확인하세요';
        }
        rightContent4.style = 'display:none';
        rightContent5.style = 'display:grid';

        let cardBt = document.querySelector('.cardBt');
        cardBt.onclick = function () {
            modal2();
            setTimeout(function () {
                gorightContent6(seatNum, manNumber, fPrice, statime, startCale, arrive);
            }, 1000);
        }

        // 모달 2 함수
        function modal2() {
            let modal2start = document.querySelector('#modal_container2');
            let modal2inner = document.querySelector('.loader');

            modal2start.style = 'display:flex';
            modal2inner.style = 'display:flex';
        }
    }



    // 콘텐츠 6

    function gorightContent6(seatNum, manNumber, fPrice, statime, startCale, arrive)
    {
        naviText.innerText = '카드를 인식시켜주세요';
        let modal2start = document.querySelector('#modal_container2');
        let modal2inner = document.querySelector('.loader');

        modal2start.style = 'display:none';
        modal2inner.style = 'display:none';
        prevBt.onclick = null;
        rightContent5.style = 'display:none';
        rightContent6.style = 'display:grid';
        let outArrive = document.querySelector('.outArrive');
        let outDay = document.querySelector('.outDay');
        outArrive.innerText = arrive;
        outDay.innerText = startCale;



        // 발권 승차권 출력
        let outTable = document.querySelector('.TR');
        let creteTr = document.createElement('tr');
        creteTr.innerHTML = `
        <td>어른</td>
        <td>${fPrice}</td>
        <td>${seatNum}</td>
        <td class="insertLoading">발권중</td>
        `;
        outTable.append(creteTr);

        // 모달 3 출력
        setTimeout(modal3, 1000);

        // 모달 3 함수 
        let insertLoading = document.querySelector('.insertLoading');
        function modal3 (){
        let modal3start = document.querySelector('#modal_container3');
        let modal3Bt = document.querySelector('.modal3_bt');
        modal3start.style = 'display:flex';
        insertLoading.style = 'color:red';
        
        modal3Bt.onclick = function(){
            modal3start.style = 'display:none';
            insertLoading.innerText = '발권완료';
        };
        };
        let outBt = document.querySelector('.outBt');
        outBt.onclick = function(){
            let TEXT = insertLoading.innerText;
            if(TEXT == '발권완료'){
                console.log('yeah');
                printStart(seatNum, manNumber, fPrice, statime, startCale, arrive)
            } 
            else{
                return;
            }
        }
    }

}


function printStart(seatNum, manNumber, fPrice, statime, startCale, arrive) {
    
    // 모달 4 출력 
    let modal4 = document.querySelector('#modal_container4');
    modal4.style.display = 'flex';
    let modal4Inner = document.querySelector('.modal_innerBox4');
    let receiptdiv = document.createElement('div');
    modal4Inner.append(receiptdiv);
    receiptdiv.id = 'Print';
    Print.style.width = '100%';

    // 프린트 전
    window.onbeforeprint = function () {

        // 날짜 붙이기
        // let d = new Date();
        // let y = d.getFullYear();
        // let m = d.getMonth();
        // let date = d.getDate();
        // let datescript = y + "년" + (m+1) + "월" + date + "일";
        

        modal4Inner.style.border = 'none';
        modal4Inner.style.boxShadow = 'none';
        receiptdiv.innerHTML =
        `
        <div style="border-bottom: 2px solid black; font-size:20px;">원주 -> ${arrive}</div>
        <div id="receiptIndex" style="font-size:10px; border-bottom: 1px solid black;">
            <div style="font-size:15px; border-bottom: 2px solid black;">요금 : ${fPrice} 원</div>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; background-color:black; color:white;">
                <div>출발일</div>
                <div>시간</div>
                <div>좌석</div>
            </div>
            <div style="display:grid; grid-template-columns: 1fr 1fr 1fr; border: 2px solid black; ">
                <div>${startCale}</div>
                <div>${statime}</div>
                <div>${seatNum}</div>
            </div>
            <div>자진발급</div>
            <div>승인No:253266</div>
            <div>운수회사:XXXX(455-124-2134)</div>
            <div style="font-size:20px;">버스터미널</div>
        </div>
        `
    };

    window.onafterprint = function () {
        modal4.style.display = 'none';
        let outBt = document.querySelector('.outBt');
        outBt.onclick = null;
        window.location.href = "index.html";
    };
    print();
}

