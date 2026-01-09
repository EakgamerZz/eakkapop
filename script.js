
// Quiz Data
const quizQuestions = [
    {
        question: "1. Machine Learning คืออะไร?",
        options: [
            "การเขียนโปรแกรมด้วยกฎที่ตายตัว",
            "การเรียนรู้ของเครื่องจากข้อมูลแบบอัตโนมัติ",
            "การสร้างหุ่นยนต์เพื่อทำงานแทนมนุษย์",
            "การซ่อมแซมคอมพิวเตอร์"
        ],
        correct: 1 // Index of correct answer
    },
    {
        question: "2. NLP (Natural Language Processing) เกี่ยวข้องกับอะไร?",
        options: [
            "การประมวลผลวิดีโอ",
            "การคำนวณทางคณิตศาสตร์",
            "การเข้าใจและประมวลผลภาษามนุษย์",
            "การเชื่อมต่อเครือข่ายไร้สาย"
        ],
        correct: 2
    },
    {
        question: "3. Computer Vision ทำหน้าที่อะไร?",
        options: [
            "วิเคราะห์ภาพและวิดีโอ",
            "วิเคราะห์เสียงพูด",
            "สร้างข้อความอัตโนมัติ",
            "จัดการฐานข้อมูล"
        ],
        correct: 0
    },
    {
        question: "4. เครื่องมือใดต่อไปนี้เหมาะสำหรับการสร้างภาพจากข้อความ (Text-to-Image)?",
        options: [
            "ChatGPT",
            "Midjourney",
            "Excel",
            "Google Translate"
        ],
        correct: 1
    },
    {
        question: "5. 'Generative AI' มีจุดเด่นคืออะไร?",
        options: [
            "วิเคราะห์ข้อมูลเก่าเท่านั้น",
            "สร้างเนื้อหาใหม่ได้ (ภาพ, ข้อความ, เสียง)",
            "ทำงานได้เร็วกว่ามนุษย์ 100 เท่า",
            "ใช้พลังงานน้อยกว่า AI ทั่วไป"
        ],
        correct: 1
    },
    {
        question: "6. ใครเป็นผู้ตั้งคำถามว่า 'Can machines think?'",
        options: [
            "Elon Musk",
            "Bill Gates",
            "Alan Turing",
            "Steve Jobs"
        ],
        correct: 2
    },
    {
        question: "7. AI 'Deep Blue' ชนะแชมป์โลกในเกมอะไร?",
        options: [
            "หมากรุก (Chess)",
            "โกะ (Go)",
            "โป๊กเกอร์",
            "วิดีโอเกม"
        ],
        correct: 0
    },
    {
        question: "8. Personalized Learning ช่วยผู้เรียนอย่างไร?",
        options: [
            "บังคับให้เรียนเหมือนกันทุกคน",
            "ออกแบบบทเรียนที่เหมาะกับแต่ละบุคคล",
            "ลดเวลาเรียนเหลือ 10 นาที",
            "แจกเกรด 4 ทุกคน"
        ],
        correct: 1
    },
    {
        question: "9. Intelligent Tutoring System เปรียบเสมือนอะไร?",
        options: [
            "ห้องสมุด",
            "ติวเตอร์ส่วนตัวที่พร้อมช่วย 24 ชม.",
            "เครื่องคิดเลข",
            "สมุดจดบันทึก"
        ],
        correct: 1
    },
    {
        question: "10. ข้อใดคือประโยชน์ของ Smart Administration สำหรับครู?",
        options: [
            "ช่วยเพิ่มงานเอกสาร",
            "ช่วยลดภาระงานตรวจข้อสอบและจัดตาราง",
            "ช่วยสอนแทนครูทั้งหมด",
            "ช่วยให้นักเรียนไม่ต้องมาโรงเรียน"
        ],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let isAnswered = false;



// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    updateToggleIcon();
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateToggleIcon();
}

function updateToggleIcon() {
    const btn = document.getElementById('themeToggle');
    if (btn) {
        const isDark = document.body.classList.contains('dark-mode');
        btn.innerHTML = isDark ? '🌙' : '☀️';
        // Add minimal animation
        btn.style.transform = 'rotate(360deg)';
        setTimeout(() => btn.style.transform = '', 300);
    }
}

function replaceAppleEmojis() {
    // Regex to match emojis (Broad match for single codepoints and some sequences)
    const emojiRegex = /\p{Emoji_Presentation}|\p{Extended_Pictographic}/gu;

    // Function to traverse text nodes
    function traverse(node) {
        if (node.nodeType === 3) { // Text node
            const text = node.data;
            if (text.match(emojiRegex)) {
                const fragment = document.createDocumentFragment();
                let lastIdx = 0;
                let match;
                while ((match = emojiRegex.exec(text)) !== null) {
                    // Add text before emoji
                    fragment.appendChild(document.createTextNode(text.substring(lastIdx, match.index)));

                    // Create emoji image
                    const emoji = match[0];
                    const hex = emoji.codePointAt(0).toString(16); // Simple hex conversion

                    const img = document.createElement('img');
                    img.src = `https://cdnjs.cloudflare.com/ajax/libs/emoji-datasource-apple/14.0.0/img/apple/64/${hex}.png`;
                    img.classList.add('emoji');
                    img.alt = emoji;
                    img.onerror = () => { img.replaceWith(document.createTextNode(emoji)); }; // Fallback

                    fragment.appendChild(img);
                    lastIdx = match.index + emoji.length;
                }
                // Add remaining text
                fragment.appendChild(document.createTextNode(text.substring(lastIdx)));

                node.parentNode.replaceChild(fragment, node);
            }
        } else if (node.nodeType === 1 && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') { // Element node
            node.childNodes.forEach(child => traverse(child));
        }
    }

    traverse(document.body);
}

// Initialize when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    replaceAppleEmojis(); // Run replacement

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.onclick = toggleTheme;
    }

    // Observer Logic (Existing)
    const observerOptions = { threshold: 0.2 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.timeline-item, .info-section, .edu-card');
    elementsToAnimate.forEach(item => {
        observer.observe(item);
    });
});

// Quiz Functions
function startQuiz() {
    document.getElementById('quiz-start-screen').style.display = 'none';
    document.getElementById('quiz-question-screen').style.display = 'block';
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    isAnswered = false;
    const questionData = quizQuestions[currentQuestion];

    document.getElementById('question-count').innerText = `ข้อที่ ${currentQuestion + 1}/${quizQuestions.length}`;
    document.getElementById('score-display').innerText = `คะแนน: ${score}`;
    document.getElementById('question-text').innerText = questionData.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    questionData.options.forEach((option, index) => {
        const btn = document.createElement('div');
        btn.classList.add('option-btn');
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    if (isAnswered) return;
    isAnswered = true;

    const correctIndex = quizQuestions[currentQuestion].correct;
    const allOptions = document.querySelectorAll('.option-btn');

    if (selectedIndex === correctIndex) {
        score++;
        btnElement.classList.add('correct');
    } else {
        btnElement.classList.add('wrong');
        allOptions[correctIndex].classList.add('correct');
    }

    document.getElementById('score-display').innerText = `คะแนน: ${score}`;

    // Wait and go to next question
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

function showResult() {
    document.getElementById('quiz-question-screen').style.display = 'none';
    document.getElementById('quiz-result-screen').style.display = 'block';
    document.getElementById('final-score').innerText = `${score}/10`;

    const msg = document.getElementById('result-message');
    if (score >= 8) msg.innerText = "ยอดเยี่ยม! คุณคือผู้เชี่ยวชาญ AI";
    else if (score >= 5) msg.innerText = "ทำได้ดี! เรียนรู้อีกนิดคุณจะเก่งขึ้นแน่นอน";
    else msg.innerText = "พยายามอีกนิด! ลองทบทวนเนื้อหาแล้วมาเล่นใหม่นะ";

    // Prepare answer key
    const list = document.getElementById('answer-list');
    list.innerHTML = '';
    quizQuestions.forEach((q, i) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>ข้อ ${i + 1}:</strong> ${q.options[q.correct]}`;
        list.appendChild(li);
    });
}

function resetQuiz() {
    document.getElementById('quiz-result-screen').style.display = 'none';
    document.getElementById('answer-key').style.display = 'none';
    document.getElementById('show-answer-btn').style.display = 'inline-block';
    startQuiz();
}

function showAnswers() {
    document.getElementById('answer-key').style.display = 'block';
    document.getElementById('show-answer-btn').style.display = 'none';
}
