document.getElementById('generate-btn').addEventListener('click', function() {
    const numbersContainer = document.getElementById('lotto-numbers');
    const balls = numbersContainer.getElementsByClassName('ball');
    
    // 로또 번호 생성 (1~45 중 6개)
    const lottoNumbers = [];
    while(lottoNumbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if(!lottoNumbers.includes(num)) {
            lottoNumbers.push(num);
        }
    }
    
    // 오름차순 정렬
    lottoNumbers.sort((a, b) => a - b);
    
    // 화면에 표시
    for(let i = 0; i < balls.length; i++) {
        balls[i].textContent = lottoNumbers[i];
        balls[i].classList.add('active');
        
        // 공 색상 다양화 (선택 사항)
        const num = lottoNumbers[i];
        if (num <= 10) balls[i].style.backgroundColor = '#fbc400'; // 노랑
        else if (num <= 20) balls[i].style.backgroundColor = '#69c8f2'; // 파랑
        else if (num <= 30) balls[i].style.backgroundColor = '#ff7272'; // 빨강
        else if (num <= 40) balls[i].style.backgroundColor = '#aaaaaa'; // 회색
        else balls[i].style.backgroundColor = '#b0d840'; // 초록
    }
});