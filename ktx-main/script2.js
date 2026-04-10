let main2 = document.querySelector('.right-center2'),
    main = document.querySelector('.right-center'),
    main3 = document.querySelector('.right-center3'),
    rightCenter = document.querySelectorAll('.right-center a'),
    rightCenter2 = document.querySelectorAll('.right-center2 a'),
    primaryStation = document.querySelectorAll('.right-navi a'),
    calendarNavi = document.querySelectorAll('.right-navi3 a'),
    prevBt = document.querySelector('.previous-bt'),
    upText = document.querySelector('.up-text'),
    rightContent = document.querySelector('.right-content'),
    rightContent3 = document.querySelector('.right-content3'),
    rightContent4 = document.querySelector('.right-content4'),
    rightContent5 = document.querySelector('.right-content5'),
    rightContent6 = document.querySelector('.right-content6'),
    rightContent7 = document.querySelector('.right-content7'),
    mainContent2 = document.querySelector('.main-content2'),
    mainContent3 = document.querySelector('.main-content3'),
    mainContent4 = document.querySelector('.main-content4'),
    mainContent5 = document.querySelector('.main-content5');

(function () { 
    primaryStation[2].style = 'opacity:40%'

    main2.style = 'display:none';
    // foodData 제목
    const stationArray = JSON.stringify(stationData, ['station']);
    const stationSort = JSON.parse(stationArray);
    console.log(stationSort[0].station);
    console.log(stationSort.length);


    // 역 초기화 
    for (var i = 0; i < rightCenter.length; i++) {
        rightCenter[i].innerHTML = '&nbsp;';
    }
    // 역에 시작부터 차례대로 표시 
    for (var i = 0; i < stationSort.length; i++) {
        rightCenter[i].innerHTML = stationSort[i].station;
    }

    // 주요역 버튼 클릭 
    primaryStation[0].onclick = function () {
        primaryStation[0].style = 'border-bottom: 4px solid #03A6F8; color:#03A6F8;';
        primaryStation[1].style = 'border-bottom: 4px solid #EAEAEA; color:#707070;';
        for (var i = 0; i < rightCenter.length; i++) {
            rightCenter[i].innerHTML = '&nbsp;';
        }
    }

    // KTX 버튼 클릭 

    primaryStation[1].onclick = function () {
        primaryStation[1].style = 'border-bottom: 4px solid #03A6F8; color:#03A6F8;';
        primaryStation[0].style = 'border-bottom: 4px solid #EAEAEA; color:#707070;';
        for (var i = 0; i < rightCenter.length; i++) {
            rightCenter[i].innerHTML = '&nbsp;';
        }
        // 역에 시작부터 차례대로 표시 
        for (var i = 0; i < stationSort.length; i++) {
            rightCenter[i].innerHTML = stationSort[i].station;
        }
    }

    // 역 터치시 화면 전환 함수  
    let rightCenterTouch = document.querySelector('.right-center');
    rightCenterTouch.addEventListener('click', function (event) {
        let target = event.target.textContent;
        // console.log(typeof target,target,target.length);
        if (target.length < 30) {
            let arriveText = document.querySelectorAll('.start-arrive a'),
                arriveTextBelow = document.querySelector('.starting');

            arriveText[0].style = 'color:#707070;';
            arriveText[2].style = 'color:#03A6F8;';
            arriveTextBelow.innerHTML = target;
            next();
        }
        if (target.length === 1) {
            window.location.href = "index2.html";
        }
    }, { once: true });

})();


// 클릭시 도착 /오른쪽 도착화면 
function next() {
    upText.innerText = '도착역을 선택해주세요';
    prevBt.href = "index2.html";
    
    main.style = 'display:none';
    main2.style = 'display:grid';
    const stationArray2 = JSON.stringify(stationData2, ['station']);
    const stationSort2 = JSON.parse(stationArray2);
    // 역 초기화 
    for (var i = 0; i < rightCenter.length; i++) {
        rightCenter2[i].innerHTML = '&nbsp;';
    }
    // 역에 시작부터 차례대로 표시 
    for (var i = 0; i < stationSort2.length; i++) {
        rightCenter2[i].innerHTML = stationSort2[i].station;
    }


    // 주요역 버튼 클릭 
    primaryStation[0].onclick = function () {
        primaryStation[0].style = 'border-bottom: 4px solid #03A6F8; color:#03A6F8;';
        primaryStation[1].style = 'border-bottom: 4px solid #EAEAEA; color:#707070;';
        for (var i = 0; i < rightCenter2.length; i++) {
            rightCenter2[i].innerHTML = '&nbsp;';
        }
    }

    // KTX 버튼 클릭 

    primaryStation[1].onclick = function () {
        primaryStation[1].style = 'border-bottom: 4px solid #03A6F8; color:#03A6F8;';
        primaryStation[0].style = 'border-bottom: 4px solid #EAEAEA; color:#707070;';
        for (var i = 0; i < rightCenter.length; i++) {
            rightCenter2[i].innerHTML = '&nbsp;';
        }
        // 역에 시작부터 차례대로 표시 
        for (var i = 0; i < stationSort2.length; i++) {
            rightCenter2[i].innerHTML = stationSort2[i].station;
        }
    }

    
    main2.addEventListener('click', function (event) {
        let target = event.target.textContent;
        let startTextBelow = document.querySelector('.starting');
        let arriveTextBelow = document.querySelector('.arrive');
        if (target.length < 30 && startTextBelow.textContent !== target && target.length !== 1 ) {
            
            console.log(typeof target,target,target.length);
            arriveTextBelow.innerHTML = target;
            // 달력 네비 
            rightContent.style = 'display:none';
            rightContent3.style = 'display:grid';
            calendar();
            
        }
        if (target.length === 1) {
            next();
        }
        if(startTextBelow.textContent === target){
            window.location.href = "index2.html";
        }
    }, { once: true });
    
}



// 달력 시작 함수
function calendar(){
    prevBt.onclick = function(){
        prevBt.href = "#";
        next();
    }
    var prevMonth = document.getElementById('prev-month'),
    nextMonth = document.getElementById('next-month'),
    year = new Date().getFullYear(),
    month = new Date().getMonth() + 1;
    upText.innerText = '출발일을 선택해주세요';
    calendarRenew(year, month);

            prevMonth.onclick = function(){ 
                calendarRenew(year, --month);
                console.log(month);
            };
            nextMonth.onclick = function(){
                calendarRenew(year, ++month);
                console.log(month);
            };
}

function calendarRenew(new_year, new_month){
    // 
    var d = new Date(new_year, new_month-1,1),
    // 월별 일수 구하기
    d_length =32 - new Date(new_year, new_month-1,32).getDate(),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay();

    // caption 영역 날짜 표시 객체 
    var caption_year =document.querySelector('.year2'),
        caption_month = document.querySelector('.month2');

    var start_day = document.querySelectorAll('.date-sec');

    // 테이블 초기화 
    for(var i =0; i < start_day.length; i++){
        start_day[i].innerHTML ='&nbsp;';
    }

    // 한달 치 날짜를 테이블에 시작 요일부터 순서대로 표시 
    for(var i = day; i < day + d_length; i++){
    start_day[i].innerHTML = date;
    date++;
    }

    // captiion 날짜 표시 
    caption_year.innerHTML = year +'년';
    caption_month.innerHTML = month+1+'월';



    // 터치 이벤트 리스너 등록
    let eventBody = document.querySelector('#calendar')
    eventBody.addEventListener('click', function(event) {
    // 이벤트 발생한 엘리먼트
    var target = event.target.innerHTML;
    
    if (!isNaN(target)) {
        console.log('이벤트 타겟이 숫자입니다.',target);
        let upper2Text = document.querySelector('.upper2-text')
        upper2Text.innerHTML = caption_year.innerHTML + caption_month.innerHTML+target+'일';
        selectTime()
    } else {
        console.log('이벤트 타겟이 숫자가 아닙니다.',target);
    }
    // console.log(typeof target, target, parseInt(target));
    }, false);


} //end calendar()


// 출발일 선택해 주세요 
function selectTime(){
    prevBt.onclick = function(){
        prevBt.href = "#";
        rightContent3.style = 'display:grid';
        rightContent4.style = 'display:none';
        calendar();
    }
    rightContent3.style = 'display:none';
    rightContent4.style = 'display:grid';
    upText.innerText = '열차 시간을 선택해주세요';
    let eventBody = document.querySelector('.am-content')
    eventBody.addEventListener('click', function(event){
        var target = event.target.innerHTML;
        // console.log(target, typeof target, target.length );
        if (target.length < 10 ) {
            console.log('이벤트 타겟이 숫자입니다.',target);
            let upper3Text = document.querySelector('.upper3-text');
            upper3Text.innerHTML = target;
            selectTrain();
        } else {
            console.log('이벤트 타겟이 숫자가 아닙니다.');
        }
    },false );
    
    let eventBody2 = document.querySelector('.pm-content')
    eventBody2.addEventListener('click', function(event){
        var target = event.target.innerHTML;
        // console.log(target, typeof target, target.length );
        if (target.length < 10 ) {
            console.log('이벤트 타겟이 숫자입니다.',target);
            let upper3Text = document.querySelector('.upper3-text')
            upper3Text.innerHTML = target;
            selectTrain();
        } else {
            console.log('이벤트 타겟이 숫자가 아닙니다.');
        }
    },false );
}// 출발일을 선택 end 


// 기차선택 
function selectTrain(){
    let upper4Text = document.querySelector('.upper4-text');
    upper4Text.innerHTML = '미선택';
    rightContent4.style = 'display:none';
    rightContent5.style = 'display:grid';
    upText.innerText = '열차 종류를 선택해주세요';
    prevBt.onclick = function(){
        prevBt.href = "#";
        rightContent4.style = 'display:grid';
        rightContent5.style = 'display:none';
        selectTime();
    }

    rightContent5.addEventListener('click', function(event){
        var target = event.target.innerHTML;
        if (target == 'KTX-산천' ) {
            let upper4Text = document.querySelector('.upper4-text');
            upper4Text.innerHTML = target;
            selectPeople();
        } 
    },false);
}// 기차선택 end

function selectPeople(){
    let upper5Text = document.querySelector('.upper5-text');
    prevBt.onclick = function(){
        prevBt.href = "#";
        rightContent5.style = 'display:grid';
        rightContent6.style = 'display:none';
        selectTrain();
    }
    rightContent5.style = 'display:none';
    rightContent6.style = 'display:grid';
    let allPrice = document.querySelector('.all-price');
    allPrice.innerText = 0;
    upText.innerText = '인원수를 선택해주세요';
    upper5Text.innerText = '미선택';
    let peoplesNum = 0;
    let peoplesNum2 = 0;
    let peoplesNum3 = 0;
    let peoples = document.querySelectorAll('.pep');
    peoples[0].innerText = 0,
    peoples[1].innerText = 0,
    peoples[2].innerText = 0;


    // + 클릭시 숫자 증가 
    let plusBt = document.querySelectorAll('.plusBt')
    
    plusBt[0].onclick = function(){
        selectPeopleRenew(1, ++peoplesNum);
    };
    plusBt[1].onclick = function(){
        selectPeopleRenew(2, ++peoplesNum2);
    };
    plusBt[2].onclick = function(){
        selectPeopleRenew(3, ++peoplesNum3);
    };

    // - 클릭시 숫자 감소 
    let minusBt = document.querySelectorAll('.minusBt')
    
    minusBt[0].onclick = function(){
        if(peoples[0].innerText>0){
            selectPeopleRenew(1,--peoplesNum);
        }
    };
    minusBt[1].onclick = function(){
        if(peoples[1].innerText>0){
            selectPeopleRenew(2,--peoplesNum2);
        }
    };
    minusBt[2].onclick = function(){
        if(peoples[2].innerText>0){
            selectPeopleRenew(3,--peoplesNum3);
        }
    };


    function selectPeopleRenew(btnum,pepnum){

        if(btnum == 1){
            let peoples = document.querySelectorAll('.pep');
            peoples[0].innerText = pepnum;
            
        }
        if(btnum == 2){
            let peoples = document.querySelectorAll('.pep');
            peoples[1].innerText = pepnum;
            
        }
        if(btnum == 3){
            let peoples = document.querySelectorAll('.pep');
            peoples[2].innerText = pepnum;
        }
        priceSum();

      
    }
    
    // 총인원 계산 
    function priceSum(){
        let allSum = allPrice.innerText 
        allSum = parseInt(peoples[0].innerText) + parseInt(peoples[1].innerText) + parseInt(peoples[2].innerText);
        allPrice.innerText = allSum;
        if(allSum > 9){
           selectPeople();
        }
    }

    
    const myButton = document.querySelector('#myButton');
    
        myButton.addEventListener('click', (event) => {
            if( parseInt(allPrice.innerText) > 0){
                upper5Text.innerText = allPrice.innerText + ' 명';
            selectTrainSort();
        }
        // event.preventDefault(); // 이벤트 기본 동작 취소
        });

    
       
    }


function selectTrainSort(){
    rightContent6.style = 'display:none';
    rightContent7.style = 'display:grid';
    prevBt.onclick = function(){
        prevBt.href = "#";
        rightContent7.style = 'display:none';
        rightContent6.style = 'display:grid';
        selectPeople();
        
    }
    
    upText.innerText = '열차 종류를 선택해주세요';
    let upper6Text = document.querySelector('.upper6-text');
    upper6Text.innerText = '미선택';
    
    // let seatWindow = document.querySelector('.seat-window');
    let seatWindowA = document.querySelectorAll('.seat-window a');

    let seatGradeA = document.querySelectorAll('.seat-grade a');
    
    let uniqueNum = 0;
    let uniqueNum2 = 0;
    seatWindowA[0].onclick = function(){
        seatRenew(1);
    };

    seatWindowA[1].onclick = function(){
        seatRenew(2);
    };
    console.log(uniqueNum);
    seatRenew();
    seatGradeRenew();
    
    function seatRenew(btnum){
        seatWindowA.forEach(function (element) {
            element.style.backgroundColor = '#ffffff';
            element.style.color = '#212529';
        });
        if(btnum == 1){
            seatWindowA[0].style = 'background:#005CB7; color:#ffffff';
            
            uniqueNum = uniqueNum+1;
            console.log(uniqueNum);
            
            
        }
        if(btnum == 2){
            seatWindowA[1].style = 'background:#005CB7; color:#ffffff';
            uniqueNum = uniqueNum+1;
            console.log(uniqueNum);
           
        }
        fst();
    };

    
  
        seatGradeA[0].onclick = function(){
            seatGradeRenew(1)
        };
        seatGradeA[1].onclick = function(){
            seatGradeRenew(2)
        };
        seatGradeA[2].onclick = function(){
            seatGradeRenew(3)
        };
        seatGradeA[3].onclick = function(){
            seatGradeRenew(4)
        };      
  
    
   function seatGradeRenew(num){
       seatGradeA.forEach(function(element){
        element.style.backgroundColor = '#ffffff';
        element.style.color = '#212529';
       });    
    if(num == 1){
        seatGradeA[0].style = 'background:#005CB7; color:#ffffff';
        uniqueNum2 = uniqueNum2+1;
        upper6Text.innerText = seatGradeA[0].innerText;
        console.log(uniqueNum2);
    };
    if(num == 2){
        seatGradeA[1].style = 'background:#005CB7; color:#ffffff';
        uniqueNum2 = uniqueNum2+1;
        upper6Text.innerText = seatGradeA[1].innerText;
        console.log(uniqueNum2);
    };
    if(num == 3){
        seatGradeA[2].style = 'background:#005CB7; color:#ffffff';
        uniqueNum2 = uniqueNum2+1;
        upper6Text.innerText = seatGradeA[2].innerText;
        console.log(uniqueNum2);
    };
    if(num == 4){
        seatGradeA[3].style = 'background:#005CB7; color:#ffffff';
        uniqueNum2 = uniqueNum2+1;
        upper6Text.innerText = seatGradeA[3].innerText;
        console.log(uniqueNum2);
    };
    fst();
   }
   let footer2 = document.querySelector('.footer2');
   footer2.textContent = '열차조회하기';
   function fst(){
       let footer2 = document.querySelector('.footer2');
       footer2.onclick = function(){
       if(uniqueNum > 0 && uniqueNum2 > 0){
            choiceTime();
        }
       }

   }
    
    
}







// 시간 선택 

function choiceTime(){
    prevBt.onclick = function(){
        prevBt.href = "#";
        mainContent2.style = 'display:grid';
        mainContent3.style = 'display:none';
        selectTrainSort();
    }
    let startingT = document.querySelector('.starting');
    let endT = document.querySelector('.arrive');

    let start_text = startingT.innerText,
         end_text = endT.innerText;

    let startEndstart = document.querySelector('.startEndstart'),
        startEndend = document.querySelector('.startEndend');
    

    startEndstart.innerText = start_text;
    startEndend.innerText = end_text;

    let footer2 = document.querySelector('.footer2');
    mainContent2.style = 'display:none';
    mainContent3.style = 'display:grid';
    footer2.textContent = '열차예매하기';
    
    upText.innerText = '열차 종류를 선택해주세요';
    
    let upper3Text = document.querySelector('.upper3-text');
    let startTime = upper3Text.innerText;
    let newStr = startTime.slice(0, -3);
    console.log(newStr, Number(newStr));
    let upper4Text = document.querySelector('.upper4-text');
    let startTextBelow = document.querySelector('.starting');
    let arriveTextBelow = document.querySelector('.arrive');
    let trainContent = document.querySelector('.train-content');
    deleteTime();
    // 화면 전환시 기존 시간삭제 
    function deleteTime() {
        let removepart = document.querySelectorAll('.train-content div');
        for (i = 0; i < removepart.length; i++) {
            removepart[i].remove();
        }
    }

    
    for(let i= 0 ; i < 23-Number(newStr); i++){
        let cretediv = document.createElement('div');
        cretediv.innerHTML= ` <a>${upper4Text.textContent}<br>826</a> <a>${Number(newStr)+i}:00<br>${startTextBelow.textContent}</a> <a>${Number(newStr)+i+2}:20<br>${arriveTextBelow.textContent}</a> <a class="normalS" data-mydata="일반">10,000원</a> <a class="classA" data-mydata="특/우등">12,500원</a>`;
        trainContent.append(cretediv)
    };

    let aSeat= document.querySelectorAll('.classA');
    let nomalSeat= document.querySelectorAll('.normalS');
    for(const seats of nomalSeat){
        seats.addEventListener('click',openBelow, { once : false});
    }
    for(const seats of aSeat){
        seats.addEventListener('click',openBelow, { once : false});
    }

    function openBelow(event){
        for(const seats of nomalSeat){
            seats.style = 'background:#ffffff;';
        }
        for(const seats of aSeat){
            seats.style = 'background:#ffffff;';
        }

        let target = event.target;
        target.style = 'background:#03A6F8;';
        let parent = target.parentNode;
        let allPrice = document.querySelector('.all-price');
        // console.log(parent.children[1]);
        // 매개변수들 
        let startStr = parent.children[1].innerText.slice(0,5); //출발시간
        let endStr = parent.children[2].innerText.slice(0,5);   //도착시간
        let gradePrice = target.dataset.mydata; //자리 일반or 우등
        let allPeople = parseInt(allPrice.innerText); // 총인원
        let targetPrice =  parseInt(target.innerText.slice(0,2) + target.innerText.slice(3,6)); // 자리 가격

        
        // let newStr = str.slice(0, 1) + str.slice(3,5); 
        footer2.onclick = function(){
            let moneys = target.innerText; 
            console.log(moneys);

            for(const seats of nomalSeat){
                seats.removeEventListener('click',openBelow, { once : true});
            }
            for(const seats of aSeat){
                seats.removeEventListener('click',openBelow, { once : true});
            }
            howToPay(start_text,end_text,startStr,endStr,gradePrice,allPeople,targetPrice);
            footer2.onclick = null;
       }
    }
}

// 결제 방법을 선택해 주세요
function howToPay(element1 ,element2 ,start3,end4,grade5,peoplesum6,price7){
    prevBt.onclick = function(){
        prevBt.href = "#";
        mainContent3.style = 'display:grid';
        mainContent4.style = 'display:none';
        choiceTime();
    }
    let footer2 = document.querySelector('.footer2');
    footer2.textContent = '';
    mainContent3.style = 'display:none';
    mainContent4.style = 'display:grid';
    upText.textContent = '결제방법을 선택해주세요';

    let startPlace = document.querySelector('.startPlace'),
        roomGrade = document.querySelectorAll('.roomGrade'),
        startTime = document.querySelector('.startTime'),
        endTime = document.querySelector('.endTime'),
        peopleSum = document.querySelector('.peopleSum'),
        moneySum = document.querySelector('.moneySum'),
        endPlace = document.querySelector('.endPlace');

        startPlace.innerText = element1;
        endPlace.innerText = element2;
        startTime.innerText = start3;
        endTime.innerText = end4;
        roomGrade[0].innerText = grade5;
        roomGrade[1].innerText = grade5;    
        peopleSum.innerText = peoplesum6;
    let allmoneySum = price7*peoplesum6
        moneySum.innerText = allmoneySum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


    let creditBtn = document.querySelector('.cardBtn');

    creditBtn.onclick = function(){
       cardInsertA()
    }
    
}

// 카드투입

function cardInsertA(){
    prevBt.onclick = function(){
        prevBt.href = "#";
        mainContent5.style = 'display:none';
        mainContent3.style = 'display:grid';
        choiceTime();
    }
    mainContent5.style = 'display:grid';
    mainContent4.style = 'display:none';

    setTimeout(cardInsertB, 1500);

    function cardInsertB(){
        prevBt.onclick = function(){
            prevBt.href = "#";
        }
        let leftBg = document.querySelector(".left-bg");
        leftBg.style.backgroundImage = "url('./img/cardinsertB.png')";
        let inserCardText = document.querySelector('.insertCard');
        inserCardText.innerText = '카드를 그림과 같이 인식시켜 주십시오';
        setTimeout(cardInsertC, 2000)

        function cardInsertC(){
            prevBt.onclick = function(){
                prevBt.href = "#";
            }
            let leftBg = document.querySelector(".left-bg");
            leftBg.style.backgroundImage = "url('./img/cardinsertC.png')";
            let cardIn = document.querySelector('.cardIn');
            let insertCard = document.querySelector('.insertCard');
            insertCard.style = 'display:none';
            cardIn.style = 'display:flex';
            let printBtn = document.querySelector('.printBtn');
            printBtn.onclick = function(){
                let complete = document.querySelector('.complete');
                let modal3 = document.querySelector('#modal_container3');
                
                cardIn.style = 'display:none';
                modal3.style.display = 'grid';
                complete.style = 'display:inline-flex';
                leftBg.style.backgroundImage = "url('./img/cardinsertD.png')";
                
                printPage();
            }

        }
    }

    



        
        function printPage(){
            var initBody;

            let new_date = document.querySelector('.upper2-text'),
                new_price = document.querySelector('.moneySum');

               
            // 프린트 부모설정
            let modalInnerBox3 = document.querySelector('.modal_innerBox3');

            // 프린트 sprint 설정
            let receiptdiv = document.createElement('div');
            modalInnerBox3.append(receiptdiv);
            receiptdiv.id = 'sprint';
            let sprint = document.querySelector('#sprint');
            // sprint 자식1 설정
            let receiptdiv_1 = document.createElement('div');
            receiptdiv_1.innerHTML =
                `    <div> [ 영수증 ]</div>
                    <div style="border-bottom: 2px solid black;" >KTX</div>
                    <div class="grid justify-content-center align-items-center py-1" 
                    style="-bs-rows: 1; --bs-columns: 12; --bs-gap: 0rem; font-size:1rem; border-bottom: 2px solid black;">
                        <div>카드번호</div>
                        <div>12123*******9</div>
                        <div>승인일자</div>
                        <div>${new_date.textContent}</div>
                        <div>승인번호</div>
                        <div>0912315512</div>
                        <div>결제 금액</div>
                        <div>${new_price.textContent}원</div>
                    </div>`


            sprint.append(receiptdiv_1);

                window.onbeforeprint = function(){
                    sprint =  document.getElementById('sprint');
                    initBody = sprint;
                    let completeDate = document.querySelector('.complete-date');
                    let completeprice = document.querySelector('.priceText');
                    completeDate.innerText = new_date.textContent;
                    completeprice.innerText = new_price.textContent;
                    console.log(initBody);
                    console.log(sprint);
                };
                
                window.onafterprint = function(){
                    let modal3 = document.querySelector('#modal_container3');
                    let completeBt = document.querySelector('.completeBtn');
                    modal3.style.display = 'none';
                    prevBt.onclick = function(){
                        prevBt.href = "#";
                    }
                    completeBt.onclick = function(){
                        window.location.href = "index.html";
                    }
                };
                window.print();
            };
                
            
            



}
    