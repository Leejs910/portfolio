// 페이드 인 애니메이션

function startContent(element, duration, delay) {
    const keyframes = [
        { opacity: 0 },
        { opacity: 1 }
    ];

    const options = {
        duration: duration,
        easing: 'ease-in-out',
        delay: delay
    }

    const animation = element.animate(keyframes, options);
    return animation;
}

// 페이드 아웃 애니메이션

function endContent(element, duration, delay) {
    const keyframes = [
        { opacity: 1 },
        { opacity: 0 }
    ];

    const options = {
        duration: duration,
        easing: 'ease-in-out',
        delay: delay
    }

    const animation = element.animate(keyframes, options);
    return animation;
}



// 진동 효과 애니메이션 함수
function shakeAnimation(element, duration, distance) {
    const keyframes = [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${distance}px)` },
        { transform: 'translateX(0)' },
        { transform: `translateX(${distance}px)` },
        { transform: 'translateX(0)' },
    ];

    const options = {
        duration: duration,
        iterations: Infinity,
    };

    const animation = element.animate(keyframes, options);
    return animation;
}

// 초기 화면


// 네비 자료들 
let fuelChoice = document.querySelector('.fuel-choice');
let howPay = document.querySelector('.how-pay');
let howMuch = document.querySelector('.how-much');
let point = document.querySelector('.point');
let pay = document.querySelector('.pay');
let charge = document.querySelector('.charge');
// 가스 가격
const priceSort = JSON.stringify(gasData, ['price']);
const priceObject = JSON.parse(priceSort);

let gasPrice = 0;
let money = 0;
// 가스 이름
const gasSort = JSON.stringify(gasData, ['title']);
const titleObject = JSON.parse(gasSort);

// 안쪽 내용
const article1 = document.querySelector('.article1');
const article2 = document.querySelector('.article2');
const article3 = document.querySelector('.article3');
const article4 = document.querySelector('.article4');
const article5 = document.querySelector('.article5');
const article6 = document.querySelector('.article6');
const article7 = document.querySelector('.article7');
const article8 = document.querySelector('.article8');
const article9 = document.querySelector('.article9');
const article10 = document.querySelector('.article10');
const article11 = document.querySelector('.article11');
const bt2 = document.querySelectorAll('.bt-2::before');
const modal1 = document.querySelector('#modal_container');
const modal2 = document.querySelector('#modal_container2');
const modal3 = document.querySelector('#modal_container3');

// 초기화면 

modal1.style.display = 'none';
modal2.style.display = 'none';
modal3.style.display = 'none';

article1.style.display = 'flex'
article2.style.display = 'none'
article3.style.display = 'none'
article4.style.display = 'none'
article5.style.display = 'none'
article6.style.display = 'none'
article7.style.display = 'none'
article8.style.display = 'none'
article9.style.display = 'none'
article10.style.display = 'none'
article11.style.display = 'none'







// 이전 버튼
const previousBt = document.querySelector('.previous-bt')
// index4 초기 이전버튼 클릭시 나타나는 화면 
let previousNum = 0;






// 경유 고급 휘발유 휘발유 버튼 함수 
function gasChoice(element, element2) {
    startContent(article2, 500, 0);
    article1.style.display = 'none'
    article2.style.display = 'flex'
    gasPrice = priceObject[element].price;
    fuelChoice.style = ('background:#044B51;');
    fuelChoice.innerHTML = titleObject[element2].title;
    previousNum = 1;
}


let gasBt = document.querySelector('.in-pic1');
let gasBt2 = document.querySelector('.in-pic2');
let gasBt3 = document.querySelector('.in-pic3');


gasBt.addEventListener("click", function () {
    gasChoice(1, 1);
});
gasBt2.addEventListener("click", function () {
    gasChoice(2, 2);
});
gasBt3.addEventListener("click", function () {
    gasChoice(0, 0);
});


// 신용카드 버튼 
const creditCardBt = document.querySelector('.credit')
// 신용카드 버튼 함수 
function creditCardFun() {
    article2.style.display = 'none'
    startContent(article3, 500, 0);
    article3.style.display = 'flex'
    howPay.style = ('background:#044B51;');
    howPay.innerHTML = ('신용카드');
    previousNum = 2;
}

// 신용카드 애드 이벤트 리스너 
creditCardBt.addEventListener('click', creditCardFun)

// 금액 선택 함수 

function howCost(element) {
    article3.style.display = 'none'
    startContent(article4, 500, 0);
    article4.style.display = 'flex'
    howMuch.style = ('background:#044B51;');
    let cost = element
    let costPrice = cost.toLocaleString();
    howMuch.innerHTML = (`${costPrice}원`);
    previousNum = 3;
    money = cost;

    // 포인트 이벤트 리스너

    article4BtA.addEventListener('click', function () {
        pointModal(1);
    }, { once: true })
    article4BtB.addEventListener('click', function () {
        pointModal(2);
    })
}

// 포인트 카드 화면

let article4BtA = document.querySelector('.bt-4-in-pic');
let article4BtB = document.querySelector('.bt-4-in-bt');

let img = document.querySelector('.gif_box')

// 모달 사라짐 함수 
function eraseModal() {
    modal1.style.display = ('none');
}

// 포인트 카드 함수
function pointModal(element) {
    previousNum = 3;
    if (element == 1) {


        pointModalAfter();
        img.src = "./img/cardReder_3.gif";
        startContent(modal1, 500, 0);
        modal1.style.display = 'grid';
        setTimeout(() => {
            eraseModal();
        }, 2000);
    } if (element == 2) {
        creditCardInsert(2);
    }
}



// 포인트 사용 이후 화면 신용카드 
let article5BtA = document.querySelector('.bt-5-in-pic')


// 포인트 카드 이후 함수 
function pointModalAfter() {
    previousNum = 10;
    let pointText = document.querySelector('.bt-4-in-text')
    pointText.innerHTML = ('카드를<br>조회 중입니다.<br>잠시만 기다려 주세요')
    article4BtB.style.display = 'none';
    let load = document.querySelector('.loader')
    load.style.display = 'flex';
    setTimeout(() => {
        creditCardInsert(1)
    }, 4000);

}

// ic카드를 위로 향하도록 신용카드를 넣어주세요 

function creditCardInsert(element) {
    article5BtA.addEventListener('click', creditCardAfter);
    previousNum = 4;
    article4.style.display = 'none'
    startContent(article5, 500, 0);
    article5.style.display = 'flex'
    point.style = ('background:#044B51;');
    if (element == 1) {
        point.innerHTML = ('Point사용');
    }
    if (element == 2) {
        point.innerHTML = ('Point');
    }
}




function creditCardAfter() {
    article5BtA.removeEventListener('click', creditCardAfter);
    img.src = "./img/cardInsert.gif";
    startContent(modal1, 500, 0);
    modal1.style.display = 'grid';
    let load2 = document.querySelector('.loader2')
    load2.style.display = 'flex';
    previousNum = 10;

    payArticle()
    setTimeout(() => {
        eraseModal();

    }, 1200);
}

let pp = document.querySelector('.pp');

function payArticle() {
    pp.innerHTML = money.toLocaleString()
    setTimeout(() => {
        article5.style.display = 'none'
        startContent(article6, 500, 0);
        article6.style.display = 'flex'
        previousNum = 6;
    }, 3200);
}

// 결제될 금액은 /// 입니다. 
let article6Btn = document.querySelector('.bt-6-btn');
// 결제 확인 창 
function article6Content() {

    article6.style.display = 'none'
    startContent(article7, 500, 0);
    article7.style.display = 'flex'
    previousNum = 7;
}

article6Btn.addEventListener('click', article6Content);

// 결제 계월 수 확인 
let article7Btn = document.querySelectorAll('.bt-7-in');

function article7Content(element) {
    pay.style = ('background:#044B51;');
    pay.innerHTML = article7Btn[element].innerText;
    article7.style.display = 'none';
    startContent(article8, 500, 0);
    article8.style.display = 'flex';
    previousNum = 8;
    let gasSort = document.querySelector('.gas-sort');
    gasSort.innerHTML = fuelChoice.innerHTML;

    let nozelColor = document.querySelector('.nozel-color');

    if (fuelChoice.innerHTML == '휘발유') {
        nozelColor.innerHTML = '노란'
        nozelColor.style = ('color:#eebe22;')
        gasSort.style = ('color:#eebe22;')
    }
    if (fuelChoice.innerHTML == '경유') {
        nozelColor.innerHTML = '파란'
        nozelColor.style = ('color:#00788B;')
        gasSort.style = ('color:#00788B;')
    }
    if (fuelChoice.innerHTML == '고급휘발유') {
        nozelColor.innerHTML = '빨간'
        nozelColor.style = ('color:#f06588;')
        gasSort.style = ('color:#f06588;')
    }

}
// 개월수 버튼

article7Btn[0].addEventListener('click', () => {
    article7Content(0)
});
article7Btn[1].addEventListener('click', () => {
    article7Content(1)
});
article7Btn[2].addEventListener('click', () => {
    article7Content(2)
});
article7Btn[3].addEventListener('click', () => {
    article7Content(3)
});


// 주유 버튼
const article8Btn = document.querySelector('.bt-8-in-pic');


let home = document.querySelector('.home-back')
const modal2Inner = document.querySelector('.modal_innerBox2')
let won = document.querySelector('#won');
let liter = document.querySelector('#liter');
let notice = document.querySelector('.notice');
let img2 = document.querySelector('.gif_box2')

function countTo() {
    startContent(modal2, 500, 0);
    modal2.style.display = 'grid';
    img2.src = "./img/fuelInsert.gif";
    let from = 0;
    let to = money;
    let step = to > from ? 10 : -10;
    let interval = 1;
    shakeAnimation(modal2, 1, 2)
    // 가격창

    if (from == to) {
        won.textContent = from;
        return;
    }

    let counter = setInterval(function () {
        from += step;
        won.textContent = from.toLocaleString();
        let literPrice = (from / gasPrice).toFixed(3)
        liter.textContent = literPrice.toLocaleString();


        if (from == to) {
            clearInterval(counter);
            shakeAnimation(modal2, 1, 0)
            notice.innerText = ('주유가 완료되었습니다.');
            previousNum = 10;
            previousBt.style = ('opacity:30%;');
            home.style = ('opacity:30%;');
            setTimeout(() => {
                modal2.style.display = ('none');
                // 다음페이지 이동
                article8.style.display = ('none');
                startContent(article9, 500, 0);
                article9.style.display = ('flex');
                charge.style = ('background:#044B51;');
                charge.textContent = ('결제완료');
            }, 3000)
        };
    }, interval);
}

// 주유 버튼 
article8Btn.addEventListener('click', countTo);

// 영수증을 발급받으시겠습니까?
let article9Btn = document.querySelectorAll('.btn-9');


function goToNext(element) {
    if (element == 1) {
        article9.style.display = ('none');
        startContent(article10, 500, 0);
        article10.style.display = ('flex');

        modal3.style.display = 'grid';

        // print    
        function printPage() {
            var initBody;

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
                    <div style="border-bottom: 2px solid black;" >매장명: Gs 주유소</div>
                    <div class="grid justify-content-center align-items-center py-1" 
                    style="-bs-rows: 1; --bs-columns: 12; --bs-gap: 0rem; font-size:1rem; border-bottom: 2px solid black;">
                        <div class="g-col-6">유종 : ${fuelChoice.textContent}</div>
                        <div class="g-col-4">가격 : ${howMuch.textContent}</div>
                    </div>`


            sprint.append(receiptdiv_1);


            window.onbeforeprint = function () {
                initBody = sprint;
                sprint = document.getElementById('sprint');
                // console.log(initBody);
                // console.log(sprint);
            };

            window.onafterprint = function () {
                sprint = initBody;
                // console.log(initBody);
                modalInnerBox3.style.display = "none";
                // 프린트 다음화면 동작 
                setTimeout(() => {
                    modal3.style.display =('none');
                    article10.style.display = ('none');
                    startContent(article11, 100, 0);
                    article11.style.display = ('flex');
                }, 500)

            };
            window.print();
        };
        // 프린트 함수 실행 
        printPage();
   
        // print end
    };
    if (element == 2) {
        article9.style.display = ('none');
        startContent(article11, 500, 0);
        article11.style.display = ('flex');

    };
}

// 영수증 애드 이벤트 리스너
article9Btn[0].addEventListener('click', () => {
    goToNext(1);
});

article9Btn[1].addEventListener('click', () => {
    goToNext(2)

});


// 마지막 화면 전환 

function finalPage() {
    let link = 'index.html';
    location.replace(link);

}





// 이전으로 버튼 함수 
function previous() {

    if (previousNum == 1) {
        previousBt.href = '#';
        article1.style.display = 'flex'
        article2.style.display = 'none'
        fuelChoice.style = ('background:#00788B;');
        fuelChoice.innerHTML = '유종선택';
        return previousNum = 0;

    }

    if (previousNum == 2) {
        previousBt.href = '#';
        article2.style.display = 'flex'
        article3.style.display = 'none'
        howPay.style = ('background:#00788B;');
        howPay.innerHTML = '결제수단';
        return previousNum = 1;
    }

    if (previousNum == 3) {
        previousBt.href = '#';
        article3.style.display = 'flex'
        article4.style.display = 'none'
        howMuch.style = ('background:#00788B;');
        howMuch.innerHTML = '주유금액량';
        return previousNum = 2;
    }

    if (previousNum == 4) {
        previousBt.href = '#';
        article3.style.display = 'flex'
        article4.style.display = 'none'
        article5.style.display = 'none'
        point.style = ('background:#00788B;');
        point.innerHTML = 'Point';
        let pointText = document.querySelector('.bt-4-in-text')
        pointText.innerHTML = ('GS& POINT 카드를<br>읽혀 주세요. 없으시면<br>없음 버튼을 눌러 주세요.')
        article4BtB.style.display = 'grid';
        let load = document.querySelector('.loader')
        load.style.display = 'none';
        howMuch.style = ('background:#00788B;');
        howMuch.innerHTML = '주유금액량';

        return previousNum = 3;
    }
    if (previousNum == 5) {
        previousBt.href = '#';
        article6.style.display = 'none';

        let load2 = document.querySelector('.loader2')
        load2.style.display = 'none';
        article5.style.display = 'flex';

        return previousNum = 4;
    }
    if (previousNum == 6) {
        previousBt.href = '#';
        article6.style.display = 'none';
        article5.style.display = 'flex';
        // point.style = ('background:#00788B;');
        // point.innerHTML = 'Point';
        let load2 = document.querySelector('.loader2')
        load2.style.display = 'none';
        article5BtA.addEventListener('click', creditCardAfter);
        // article5.style.display = 'flex';

        return previousNum = 5;
    }
    if (previousNum == 7) {
        previousBt.href = '#';
        article7.style.display = 'none';
        article6.style.display = 'flex';
        pay.style = ('background:#00788B;');
        pay.innerHTML = '결제';
        // article5.style.display = 'flex';
        return previousNum = 6;
    }

    if (previousNum == 8) {
        previousBt.href = '#';
        article8.style.display = 'none';
        article7.style.display = 'flex';
        pay.style = ('background:#00788B;');
        pay.innerHTML = '결제';
        // article5.style.display = 'flex';
        return previousNum = 7;
    }

    if (previousNum == 10) {
        previousBt.href = '#';

    }







    if (previousNum == 0) {
        previousBt.href = 'index2.html';
    }
}

// 이전 버튼 실행
previousBt.addEventListener('click', previous)
