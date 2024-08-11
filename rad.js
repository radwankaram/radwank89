





document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const counter = document.getElementById('counter');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'flex' : 'none';
        });
        counter.textContent = `${index + 1} / ${slides.length}`;
    }

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});














document.addEventListener('DOMContentLoaded', function() {
    const prayerTimes = {
        Fajr: '04:30 AM',
        Dhuhr: '12:15 PM',
        Asr: '03:45 PM',
        Maghrib: '07:20 PM',
        Isha: '08:50 PM'
    };

    const prayerTimesContainer = document.getElementById('prayer-times');

    for (const [prayer, time] of Object.entries(prayerTimes)) {
        const row = document.createElement('tr');
        const prayerCell = document.createElement('td');
        const timeCell = document.createElement('td');

        prayerCell.textContent = prayer;
        timeCell.textContent = time;

        row.appendChild(prayerCell);
        row.appendChild(timeCell);
        prayerTimesContainer.appendChild(row);
    }
});







document.getElementById('displayButton').addEventListener('click', function() {
    var content = document.getElementById('content');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});


































document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // يمكنك هنا إضافة الكود اللازم لإرسال البيانات إلى الخادم (Server) باستخدام AJAX مثلًا
    // لكن سنقوم بعرض رسالة تأكيد فقط لأغراض هذا المثال
    
    document.getElementById('responseMessage').innerText = 'تم إرسال رسالتك بنجاح، شكرًا لتواصلك معنا.';
    
    // إعادة تعيين النموذج
    document.getElementById('contactForm').reset();
});




document.getElementById('toggleMode').addEventListener('click', function() {
    if (document.body.classList.contains('day')) {
        document.body.classList.remove('day');
        document.body.classList.add('night');
    } else {
        document.body.classList.remove('night');
        document.body.classList.add('day');
    }
});

// تعيين الوضع الافتراضي ليكون النهار
document.body.classList.add('day');














// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('day-mode')) {
            body.classList.remove('day-mode');
            body.classList.add('night-mode');
        } else {
            body.classList.remove('night-mode');
            body.classList.add('day-mode');
        }
    });

    // تحديد الوضع الافتراضي ليكون النهاري
    body.classList.add('day-mode');
});





















function submitQuiz() {
    const answers = {
        q1: 'C', // الإجابة الصحيحة للسؤال الأول
       
        q3: 'C',
        q4: 'B',
        q5: 'C', // الإجابة الصحيحة للسؤال الثاني
    };

    let score = 0;

    // التحقق من الإجابات
    for (let question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    }

    // عرض النتيجة
    const result = document.getElementById('result');
    result.innerHTML = `لقد أجبت بشكل صحيح على ${score} من أصل ${Object.keys(answers).length} أسئلة.`;
}








// إظهار الزر عند التمرير لأسفل
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// التمرير إلى أعلى الصفحة عند الضغط على الزر
document.getElementById("scrollToTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};















function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }