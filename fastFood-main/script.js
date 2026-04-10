// 화면 목록
let mainContent3 = document.querySelector('.main-content3');
let mainContent4 = document.querySelector('.main-content4');

// 네비 버튼 목록 
let prevBt = document.querySelector('.previous-bt');
let homeBt = document.querySelector('.home-back');
// 
// 아이텝 배열 목록
const ARR = JSON.stringify(arr);
const foodCode = JSON.parse(ARR);
let rightMainWrap = document.querySelector('.right_main_wrap');

// 결제하기Lock
let LOCK = 0;
// 처음 실행시 함수 
(function () {
    
    let btnCnavi = document.querySelectorAll('.btnC_navi');
    btnCnavi[0].addEventListener('click', creatRecomand, { once: false })
    btnCnavi[1].addEventListener('click', creatBurger, { once: false })
    btnCnavi[2].addEventListener('click', creatSide1, { once: false })
    btnCnavi[3].addEventListener('click', creatSide2, { once: false })
    deleteCard();
    creatRecomand();
})();


// 추천메뉴 카드 생성 함수 2000원 이상 4200원 이하
function creatRecomand() {
    // 이전 버튼 활성화
    prevBt.onclick = function(){
        window.location.href = "index2.html";
    };
    // 버튼 색 변경
    let btnCnavi = document.querySelectorAll('.btnC_navi');
    for (var i = 0; i < btnCnavi.length; i++) {
        btnCnavi[i].style = 'background-color:#cccccc'
    }
    btnCnavi[0].style = 'background-color:#FFFFFF';

    // 카드 지우기
    deleteCard();
    // 카드생성
    for (var i = 0; i < foodCode.length; i++) {
        if (2000 <= foodCode[i].price && foodCode[i].price <= 4200) {
            let createDiv = document.createElement('div');
            createDiv.innerHTML = `
                <img src="./img/${foodCode[i].imgNum}.png" class="card-img-top" alt="이미지없음">
                <div class="card-body" data="${foodCode[i].sort}" >
                    <p class="card-title">${foodCode[i].foodName}</p>
                    <p class="card-text">${foodCode[i].price.toLocaleString()}</p>
                </div>
            `
            createDiv.className = 'card'
            rightMainWrap.append(createDiv);
            // 클릭 이벤트 생성 
            createDiv.addEventListener('click', addRight, { once: false });
        }
    }
}

// 햄버거 카드 생성 

function creatBurger() {
    // 버튼 색 변경
    let btnCnavi = document.querySelectorAll('.btnC_navi');
    for (var i = 0; i < btnCnavi.length; i++) {
        btnCnavi[i].style = 'background-color:#cccccc'
    }
    btnCnavi[1].style = 'background-color:#FFFFFF';

    // 카드 지우기
    deleteCard();

    // 카드생성
    for (var i = 0; i < foodCode.length; i++) {
        if (foodCode[i].sort == "burger") {
            let createDiv = document.createElement('div');
            createDiv.innerHTML = `
                <img src="./img/${foodCode[i].imgNum}.png" class="card-img-top" alt="이미지없음">
                <div class="card-body" data="${foodCode[i].sort}">
                    <p class="card-title">${foodCode[i].foodName}</p>
                    <p class="card-text">${foodCode[i].price.toLocaleString()}</p>
                </div>
            `
            createDiv.className = 'card'
            rightMainWrap.append(createDiv);
            // 클릭 이벤트 생성 
            createDiv.addEventListener('click', addRight, { once: false });
        }
    }
}

// 디저트/치킨 생성 

function creatSide1() {
    // 버튼 색 변경
    let btnCnavi = document.querySelectorAll('.btnC_navi');
    for (var i = 0; i < btnCnavi.length; i++) {
        btnCnavi[i].style = 'background-color:#cccccc'
    }
    btnCnavi[2].style = 'background-color:#FFFFFF';

    // 카드 지우기
    deleteCard();

    // 카드생성
    for (var i = 0; i < foodCode.length; i++) {
        if (foodCode[i].sort == "side1") {
            let createDiv = document.createElement('div');
            createDiv.innerHTML = `
                <img src="./img/${foodCode[i].imgNum}.png" class="card-img-top" alt="이미지없음">
                <div class="card-body" data="${foodCode[i].sort}">
                    <p class="card-title">${foodCode[i].foodName}</p>
                    <p class="card-text">${foodCode[i].price.toLocaleString()}</p>
                </div>
            `
            createDiv.className = 'card'
            rightMainWrap.append(createDiv);
            // 클릭 이벤트 생성 
            createDiv.addEventListener('click', addRight, { once: false });
        }
    }
}

// 음료/커피

function creatSide2() {
    // 버튼 색 변경
    let btnCnavi = document.querySelectorAll('.btnC_navi');
    for (var i = 0; i < btnCnavi.length; i++) {
        btnCnavi[i].style = 'background-color:#cccccc'
    }
    btnCnavi[3].style = 'background-color:#FFFFFF';
    // 카드 지우기
    deleteCard();
    // 카드생성
    for (var i = 0; i < foodCode.length; i++) {
        if (foodCode[i].sort == "side2") {
            let createDiv = document.createElement('div');
            createDiv.innerHTML = `
                <img src="./img/${foodCode[i].imgNum}.png" class="card-img-top" alt="이미지없음">
                <div class="card-body" data="${foodCode[i].sort}">
                    <p class="card-title">${foodCode[i].foodName}</p>
                    <p class="card-text">${foodCode[i].price.toLocaleString()}</p>
                </div>
            `
            createDiv.className = 'card'
            rightMainWrap.append(createDiv);
            // 클릭 이벤트 생성 
            createDiv.addEventListener('click', addRight, { once: false });
        }
    }
}


// 카드 제거 함수 

function deleteCard() {
    let card = document.querySelectorAll('.card');
    for (var i = 0; i < card.length; i++) {
        card[i].remove();
    }
}

// 모달 카드 제거 함수 
function deleteSideCard() {
    let cardSide = document.querySelectorAll('.card-side');
    for (var i = 0; i < cardSide.length; i++) {
        cardSide[i].remove();
    }
}




// 오른쪽 화면에 제품 추가하기 

function addRight() {
    // 카드 선택시 데이터
    // Number(card_name_price[1].replace(/,/g, ""))
    let cardTitle = this.children[1].children[0].innerText;
    let cardPrice = Number(this.children[1].children[1].innerText.replace(/,/g, ""));
    let cardData = this.children[1].getAttribute("data");
    // console.log(cardTitle);
    // console.log(cardPrice);
    // 만약 카드종류가 버거일 경우 세트 문의 모달 / 버거가 아닐 경우 모달없이 오른쪽 화면에 제품 추가
    let rightContentUp = document.querySelector('#right-up-content');
    let createTr = document.createElement('tr');
    if (cardData == "burger") {
        // x버튼 누르기 
        let modal1Close = document.querySelector('.modal_x');
        modal1Close.onclick = function () {
            modal1.style = 'display:none';
        }

        let modal1 = document.getElementById('modal_container');
        let modal1Btn = document.querySelectorAll('.modal_btn');
        let modal1Price = document.querySelectorAll('.modal_sub');
        modal1.style = 'display:flex';
        modal1Price[0].textContent = cardPrice.toLocaleString();
        modal1Price[1].textContent = (cardPrice + 1000).toLocaleString();
        // 버거만 선택시 오른쪽 화면에 제품 추가 
        modal1Btn[0].onclick = function () {
            modal1.style = 'display:none';
            createTr.innerHTML = `
            <td align="left" width="350" height="50">${cardTitle}</td>
            <td align="center" width="200" height="50">${cardPrice.toLocaleString('ko-KR')}</td>
            <td align="center" width="50" height="50" ><img src="./img/minusB.svg" class="minus"
                    style="height: 30%;" alt="" srcset=""></td>
            <td align="center" width="100" height="50" class="goodNum">1</td>
            <td align="center" width="50" height="50"   ><img src="./img/plusB.svg" class="plus"
                    style="height: 30%;" alt="" srcset=""></td>
            <td width="200" height="50">${cardPrice.toLocaleString('ko-KR')}</td>
            `
            createTr.style = 'background-color:#FFFFFF';
            rightContentUp.append(createTr);
            addPlus_Minus();
            allSums();
        }
        // 세트로 선택시 모달 메뉴선택 
        modal1Btn[1].onclick = function () {
            modal1.style = 'display:none';
            sideOpen(cardTitle, cardPrice);
        }

    }
    else {
        createTr.innerHTML = `
        <td align="left" width="35%" height="50">${cardTitle}</td>
        <td align="center" width="200" height="50">${cardPrice.toLocaleString('ko-KR')}</td>
        <td align="center" width="50" height="50"><img src="./img/minusB.svg" class="minus" 
                style="height: 30%;" alt="" srcset=""></td>
        <td align="center" width="100" height="50" class="goodNum">1</td>
        <td align="center" width="50" height="50"><img src="./img/plusB.svg" class="plus" 
                style="height: 30%;" alt="" srcset=""></td>
        <td width="200" height="50">${cardPrice.toLocaleString('ko-KR')}</td>
        `
        createTr.style = 'background-color:#FFFFFF';
        rightContentUp.append(createTr);
        addPlus_Minus();
        allSums();
    }

}



// 모달 2 사이드메뉴 고를 때 함수 

function sideOpen(cardTitle, cardPrice) {

    let cardPriceSide = 0;
    let cardPriceNum = parseInt(cardPrice);
    console.log(cardPriceSide);
    // 카드화면초기화
    deleteSideCard();
    // 네비 색상 초기화
    let setSide1 = document.querySelector('.set_side1');
    let setSide2 = document.querySelector('.set_side2');
    setSide1.style = "background-color:#808080";
    setSide2.style = "background-color:#808080";
    setSide1.style = "background-color:#FFFFFF";

    // 모달 화면 나타남 
    let modal2 = document.getElementById('modal_container2');
    modal2.style = 'display:flex';
    let modalMid2 = document.querySelector('.modal_mid2');
    // x버튼 누르면 화면 없어짐 
    let modal2Close = document.querySelector('.modal_x2');
    modal2Close.onclick = function () {
        modal2.style = 'display:none';
    }
    // 카드 생성 함수 사이드1 
    for (var i = 0; i < foodCode.length; i++) {
        if (foodCode[i].sort == "side1") {
            let createDiv = document.createElement('div');
            createDiv.innerHTML = `
            <img src="./img/${foodCode[i].imgNum}.png" class="card-img-top" alt="이미지없음">
            <div class="card-body" data="${foodCode[i].sort}" >
                <p class="card-title">${foodCode[i].foodName}</p>
                <p class="card-text1">+ ${(foodCode[i].price - 1500).toLocaleString()}</p>
            </div>
            `
            createDiv.className = 'card-side';
            modalMid2.append(createDiv);
            // 클릭 이벤트 생성 
            createDiv.addEventListener('click', sideOpen2, { once: false });
        }
    }

    // 카드 클릭시 카드 생성 함수 사이드2
    function sideOpen2() {
        deleteSideCard();
        setSide1.style = "background-color:#808080";
        setSide2.style = "background-color:#FFFFFF";
        cardPriceSide += parseInt(this.children[1].children[1].innerText.slice(2).replace(/,/g, ""));
        console.log(cardPriceSide);
        for (var i = 0; i < foodCode.length; i++) {
            if (foodCode[i].sort == "side2") {
                let createDiv = document.createElement('div');
                createDiv.innerHTML = `
                <img src="./img/${foodCode[i].imgNum}.png" class="card-img-top" alt="이미지없음">
                <div class="card-body" data="${foodCode[i].sort}" >
                    <p class="card-title">${foodCode[i].foodName}</p>
                    <p class="card-text2">+ ${(foodCode[i].price - 1700).toLocaleString()}</p>
                </div>
                `
                createDiv.className = 'card-side';
                modalMid2.append(createDiv);
                // 클릭 이벤트 생성 
                createDiv.addEventListener('click', addSet, { once: false });
            }
        }
    }

    // 전달 인자 
    let setText = cardTitle + " 세트";
    function addSet() {
        modal2.style = 'display:none';
        // 카드 선택시 데이터 
        //  세트 선택하면 1000 원추가
        cardPriceSide += Number(this.children[1].children[1].innerText.slice(2).replace(/,/g, "")) + 1000;
        console.log(cardPriceSide);
        console.log(cardPriceNum);
        let cardTitle = setText;

        // let cardData = this.children[1].getAttribute("data");

        // 
        let rightContentUp = document.querySelector('#right-up-content');
        let createTr = document.createElement('tr');
        createTr.innerHTML = `
    <td align="left" width="35%" height="50">${cardTitle}</td>
    <td align="center" width="200" height="50">${(cardPriceNum + cardPriceSide).toLocaleString()}</td>
    <td align="center" width="50" height="50"><img src="./img/minusB.svg" class="minus"
            style="height: 30%;" alt="" srcset=""></td>
    <td align="center" width="100" height="50" class="goodNum">1</td>
    <td align="center" width="50" height="50"><img src="./img/plusB.svg" class="plus" 
            style="height: 30%;" alt="" srcset=""></td>
    <td width="200" height="50">${(cardPriceNum + cardPriceSide).toLocaleString()}</td>
    `
        createTr.style = 'background-color:#FFFFFF';
        rightContentUp.append(createTr);
        addPlus_Minus();
        allSums();
    }
};



// 합계와 총 수량 
function allSums() {
    let allPrice = document.getElementById('allPrice');
    let allSum = document.getElementById('allSum');
    let allPriceNum = 0;
    let allSumNum = 0;
    let rightPrice = document.getElementById('right-up-content');
    let allTr = rightPrice.querySelectorAll('tr');
    for (var i = 0; i < allTr.length; i++) {
        allSumNum += Number(rightPrice.children[i].children[3].innerText);
        allPriceNum += parseInt(rightPrice.children[i].children[5].innerText.replace(/,/g, ""));
    }
    allPrice.value = allPriceNum.toLocaleString();
    allSum.value = allSumNum;
    LOCK = allSumNum;
    goCheck();
};








// 전체취소 버튼 


// 수량 플러스 
function addPlus_Minus() {
    let plusImg = document.querySelectorAll('.plus');
    let minusImg = document.querySelectorAll('.minus');
    for (var i = 0; i < plusImg.length; i++) {
        minusImg[i].addEventListener('click', minusCount);
        plusImg[i].addEventListener('click', plusCount);
    }

};

function minusCount() {
    let countNum = this.parentNode.parentNode.children[3].textContent;
    if (Number(countNum) > 0) {
        console.log(countNum);
        this.parentNode.parentNode.children[3].innerText = Number(countNum) - 1;
        allSums();
    }
    let countNum2 = this.parentNode.parentNode.children[3].textContent;
    if (Number(countNum2) == 0) {
        console.log(countNum2);
        this.parentNode.parentNode.remove();
        allSums();
    }
};


function plusCount() {
    let countNum = this.parentNode.parentNode.children[3].textContent;
    if (1 <= Number(countNum)) {
        this.parentNode.parentNode.children[3].innerText = Number(countNum) + 1;
        let countNum2 = this.parentNode.parentNode.children[3].textContent;
        this.parentNode.parentNode.children[5].innerText = (Number(countNum2) * Number(this.parentNode.parentNode.children[1].innerText.replace(/,/g, ""))).toLocaleString();

        allSums();
    }
    // if(Number(countNum2)==10){

    // }
};



// 결제하기/ 전체취소 버튼 활성화 

function goCheck() {
    let rightBtn = document.querySelector('.rightBtn');
    let rightBtn2 = document.querySelector('.rightBtn2');
    let rightContentUp = document.querySelector('#right-up-content');
    let allTR = rightContentUp.querySelectorAll('tr');
    let allPriceNext = document.getElementById('allPrice');
    // console.log(rightBtn);
    if (LOCK == 0) {
        rightBtn.onclick = function () {
            return;
        }
        rightBtn2.onclick = function () {
            return;
        }
    }
    if (LOCK > 0) {
        rightBtn.onclick = function () {
            // console.log(allTR[0].children[1]);
            // goindex4(allTR);
            let content4Left = document.querySelector('.content4-left-up');
            let tbody = content4Left.querySelector('tbody');
            for (i = 0; i < allTR.length; i++) {
                let createTr = document.createElement('tr');
                createTr.style = 'background-color:#FFFFFF';
                createTr.innerHTML = `
                <td align="center" width="400" height="50">${allTR[i].children[0].textContent}</td>
                <td align="center" width="200" height="50">${allTR[i].children[1].textContent}</td>
                <td align="center" width="400" height="50">${allTR[i].children[5].textContent}</td>
                
                ` 
                tbody.append(createTr);
            }
            goindex4(allPriceNext);
            

        }
        rightBtn2.onclick = function () {
            for (i = 0; i < allTR.length; i++) {
                allTR[i].remove();
                allSums();
            }
        }
    }
}


    

// 메인 콘텐츠 4 화면

function goindex4(allPriceNext) {
    mainContent3.style = 'display:none';
    mainContent4.style = 'display:flex';
    let orderPrice = mainContent4.querySelector('.orderPrice');
    let orderAllPrice = mainContent4.querySelector('.orderAllPrice');
    // 주문금액 결제할 금액 
    orderPrice.innerText = allPriceNext.value;
    orderAllPrice.innerText = allPriceNext.value;

    // 오른쪽메뉴 색상 초기화 
    initialGoindex4();

    function initialGoindex4(){
        let rightContentUpper = mainContent4.querySelectorAll('.right-content-up');
        let rightContentBtn = mainContent4.querySelectorAll('.right-cotent-btn');
        rightContentUpper[0].style = "background-color:#ff4b4b";
        rightContentBtn[0].style = "opacity:100%";
        rightContentBtn[1].style = "opacity:20%";

        for(i = 1; i < rightContentUpper.length; i++){
            rightContentUpper[i].style = "background-color:gray";
        }
        for(i = 2; i < rightContentBtn.length; i++){
            rightContentBtn[i].style = "opacity:20%";
        }
        //  처음 단계 
        let firstStep = false;
        
        rightContentBtn[0].addEventListener('click' ,function(){
            rightContentUpper[0].style = "background-color:gray";
            rightContentUpper[1].style = "background-color:#ff4b4b";
            rightContentBtn[0].style = "opacity:20%";
            rightContentBtn[1].style = "opacity:20%";
            rightContentBtn[2].style = "opacity:20%";
            rightContentBtn[3].style = "opacity:20%";
            rightContentBtn[4].style = "opacity:100%";
            firstStep = true;
            rightContentBtn[4].disabled = false;
        });
        // 두번째 단계
        let secondStep = false;

        rightContentBtn[4].addEventListener('click' ,function(){
            if(firstStep){
                rightContentUpper[1].style = "background-color:gray";
                rightContentUpper[2].style = "background-color:#ff4b4b";
                rightContentBtn[2].style = "opacity:20%";
                rightContentBtn[3].style = "opacity:20%";
                rightContentBtn[4].style = "opacity:20%";
                rightContentBtn[5].style = "opacity:100%";
                rightContentBtn[6].style = "opacity:20%";
                rightContentBtn[7].style = "opacity:20%";
                secondStep = true;
                rightContentBtn[7].disabled = false;

            }
        });
        // 세번째 단계 
        rightContentBtn[5].addEventListener('click', function(){
            if(secondStep){
                // 모달 3과 4 나타남 
                function gomodal3_4(){
                    let modal3 = document.getElementById('modal_container3');
                    let modal3Cancel = document.querySelector('.modal_x3');
                    let modal3ok = document.querySelector('.modal3_down');
                    let modal4 = document.getElementById('modal_container4');
                    let modal4Cancel = document.querySelector('.modal_x4');
                    modal3.style = 'display:flex';
                    modal4.style = 'display:none';
                    modal3Cancel.onclick = function(){
                        modal3.style = 'display:none';
                        initialGoindex4();
                    }
                    modal3ok.onclick = function(){
                        modal3.style = 'display:none';
                        modal4.style = 'display:flex';
                    }
                    modal4Cancel.onclick = function(){
                        modal4.style = 'display:none';
                        initialGoindex4();
                    }
                    // 모달 4 프린트 발행 
                    let moda14YesPrint = modal4.querySelector('.modal4_btn1');
                    moda14YesPrint.onclick = function(){
                        printStart();
                    }
                    // 모달 4 프린트 미발행 
                    let modal4NoPrint = modal4.querySelector('.modal4_btn2');
                    modal4NoPrint.onclick = function(){
                        let modal5 = document.getElementById('modal_container5'); 
                        // 랜덤 숫자 생성
                        let modal5Num = modal5.querySelector('.modal5_num');
                        const randamNum = Math.floor(Math.random() * 100);
                        modal5Num.innerText =randamNum;
                        mainContent4.style.display = 'none';
                        modal4.style = 'display:none';
                        modal5.style = 'display:flex';
                        setTimeout(end,1000);
                    }
                }
                gomodal3_4();



            }
        });

    }

    // 이전버튼 && 추가주문 버튼 클릭시 
    let extraOrderBtn = mainContent4.querySelector('.content4-footer-extraOrder');
    let content4Left = document.querySelector('.content4-left-up');
    let tbody = content4Left.querySelector('tbody');
    let tbodyInnerTr = tbody.querySelectorAll('tr');

    extraOrderBtn.onclick = function(){
        for (i = 0; i < tbodyInnerTr.length; i++) {
            tbodyInnerTr[i].remove();
        }
        mainContent4.style = 'display:none';
        mainContent3.style = 'display:flex';
        prevBt.onclick = function(){
            window.location.href = "index2.html";
        }
    }
    prevBt.onclick = function(){
        for (i = 0; i < tbodyInnerTr.length; i++) {
            tbodyInnerTr[i].remove();
        }
        mainContent4.style = 'display:none';
        mainContent3.style = 'display:flex';
        prevBt.onclick = function(){
            window.location.href = "index2.html";
        }
    }
       
    
    // 취소버튼 클릭시 초기화 
    let cancelBtn = mainContent4.querySelector('.content4-footer-cancel');
    cancelBtn.onclick = function(){
        window.location.href = "index3.html";
    }

}
    


// 프린트 함수 

function printStart() {
    
    // 모달 6 출력 
    let modal6 = document.querySelector('#modal_container6');
    modal6.style.display = 'flex';
    let modal6Inner = document.querySelector('.modal_innerBox6');
    let receiptdiv = document.createElement('div');
    modal6Inner.append(receiptdiv);
    

    let rightContentUp = document.querySelector('#right-up-content');
    let allTR = rightContentUp.querySelectorAll('tr');
    let allPriceNext = document.getElementById('allPrice');


    let modal5 = document.getElementById('modal_container5'); 
    let modal4 = document.getElementById('modal_container4'); 
    let modal5Num = modal5.querySelector('.modal5_num');
    const randamNum = Math.floor(Math.random() * 100);
    modal5Num.innerText =randamNum;

    // 프린트 전
    window.onbeforeprint = function () {

        modal6Inner.style.border = 'none';
        modal6Inner.style.boxShadow = 'none';

      
            let receiptdiv = document.createElement('div');
            receiptdiv.innerHTML =
            `
            <div style="border-bottom: 2px solid black; font-size:20px;">영수증</div>
            <div style="border-bottom: 2px solid black; font-size:20px;">주문번호 : ${randamNum}번</div>
            <div id="receiptIndex" style="font-size:10px; border-bottom: 1px solid black;">
                <div style="display:grid; grid-template-columns: 2fr 1fr 1fr; background-color:black; color:white; border-bottom:1px solid black;">
                    <div >품명</div>
                    <div>단가</div>
                    <div>수량</div>
                </div>

            </div>
            `;
            modal6Inner.append(receiptdiv);
            receiptdiv.id = 'Print';
            Print.style.width = '100%';

            // 품목 단가 수량 
            let modalParent = document.getElementById('receiptIndex');
            
            for( i = 0; i< allTR.length; i++){
                
                let receiptdiv2 = document.createElement('div');
                receiptdiv2.innerHTML =
                `
                <div class="leftChild">${allTR[i].children[0].textContent}</div>
                <div>${allTR[i].children[1].textContent}</div>
                <div>${allTR[i].children[3].textContent}</div>
                    
                `;
                receiptdiv2.classList = 'printChild1'
                    modalParent.append(receiptdiv2);
                    console.log(allTR[i].children[0].textContent);
                    console.log(allTR[i].children[1].textContent);
                    console.log(allTR[i].children[3].textContent);

            }

            // 총가격
            let receiptdiv3 = document.createElement('div');
            receiptdiv3.innerHTML =
            `
            <div class="tleft" >청구금액 :</div>  <div class="tright">${allPriceNext.value} 원</div>
            <div class="tleft">받은금액 :</div>  <div class="tright">${allPriceNext.value} 원</div>
            <div class="tleft">거스름돈 :</div> <div class="tright">0 원</div>
            `
            receiptdiv3.classList = 'printChild2';
            modalParent.append(receiptdiv3);

        
    };

    window.onafterprint = function () {
        
        modal6.style.display = 'none';
        modal5.style.display = 'flex';
        modal4.style.display = 'none';
        mainContent4.style.display = 'none';
        setTimeout(end,1000);
        // let outBt = document.querySelector('.outBt');
        // outBt.onclick = null;
    };
    print();
}


function end(){
    // let modal5 = document.getElementById('modal_container5'); 
    window.location.href = "index.html";
}

