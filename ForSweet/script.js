function startHearts() {
    setInterval(createHeart, 320);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.top = '10px';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = '13s';
    heart.style.fontSize = Math.floor(Math.random() * 25 + 18) + 'px';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 13000);
}

document.addEventListener('DOMContentLoaded', function() {
    startHearts();

    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const step4 = document.getElementById('step4');
    const step5 = document.getElementById('step5');

    const nextFromEnvelope = document.getElementById('nextFromEnvelope');
    const wantOpenYes = document.getElementById('wantOpenYes');
    const wantOpenNo = document.getElementById('wantOpenNo');
    const tryAgainBtn = document.getElementById('tryAgainBtn');
    const nextToFinal = document.getElementById('nextToFinal');

    nextFromEnvelope.addEventListener('click', function() {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
    });

    wantOpenYes.addEventListener('click', function() {
        step2.classList.add('hidden');
        step4.classList.remove('hidden');
    });

    wantOpenNo.addEventListener('click', function() {
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
    });

    tryAgainBtn.addEventListener('click', function() {
        step3.classList.add('hidden');
        step2.classList.remove('hidden');
    });

    nextToFinal.addEventListener('click', function() {
        step4.classList.add('hidden');
        step5.classList.remove('hidden');
    });
});