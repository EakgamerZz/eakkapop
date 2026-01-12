
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
        correct: 1
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
    },
    {
        question: "11. 'ChatGPT' พัฒนาโดยบริษัทใด?",
        options: [
            "Google",
            "Microsoft",
            "OpenAI",
            "Apple"
        ],
        correct: 2
    },
    {
        question: "12. 'Hallucination' ในบริบทของ AI หมายถึงอะไร?",
        options: [
            "AI ทำงานช้าลง",
            "AI สร้างข้อมูลที่ผิดพลาดหรือไม่จริงขึ้นมา",
            "AI พังเสียหาย",
            "AI มีความรู้สึกนึกคิด"
        ],
        correct: 1
    },
    {
        question: "13. 'Prompt Engineering' คือทักษะเกี่ยวกับอะไร?",
        options: [
            "การซ่อมคอมพิวเตอร์",
            "การเขียนคำสั่งเพื่อสื่อสารกับ AI ให้ได้ผลลัพธ์ที่ดีที่สุด",
            "การออกแบบวงจรไฟฟ้า",
            "การเขียนโปรแกรมภาษา C++"
        ],
        correct: 1
    },
    {
        question: "14. โปรแกรม 'ELIZA' (1966) ถูกสร้างขึ้นเพื่อจำลองบทบาทของใคร?",
        options: [
            "นักจิตบำบัด",
            "ครูสอนภาษา",
            "หมอดู",
            "นักกฎหมาย"
        ],
        correct: 0
    },
    {
        question: "15. 'AlphaGo' สร้างความฮือฮาด้วยการเอาชนะมนุษย์ในเกมอะไร?",
        options: [
            "หมากฮอส",
            "หมากล้อม (Go)",
            "Scrabble",
            "ROV"
        ],
        correct: 1
    },
    {
        question: "16. ข้อใด *ไม่ใช่* ประเภทของ Machine Learning?",
        options: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Reinforcement Learning",
            "Dream Learning"
        ],
        correct: 3
    },
    {
        question: "17. โครงข่ายประสาทเทียม (Neural Network) เลียนแบบการทำงานของสิ่งใด?",
        options: [
            "ระบบสุริยะ",
            "สมองและเซลล์ประสาทของมนุษย์",
            "โครงสร้างต้นไม้",
            "ระบบไหลเวียนเลือด"
        ],
        correct: 1
    },
    {
        question: "18. 'Deepfake' คือเทคโนโลยีที่ใช้ AI ทำอะไร?",
        options: [
            "สร้างเสียงและวิดีโอปลอมที่สมจริง",
            "ตรวจสอบความถูกต้องของข่าว",
            "ดำน้ำลึก",
            "ค้นหาข้อมูลใต้ดิน"
        ],
        correct: 0
    },
    {
        question: "19. เครื่องมือใดของ Google ที่เป็นคู่แข่งโดยตรงของ ChatGPT?",
        options: [
            "Gemini (Bard)",
            "Chrome",
            "Android",
            "Maps"
        ],
        correct: 0
    },
    {
        question: "20. ข้อใดคือความเสี่ยงในการใช้ Generative AI ในการเรียน?",
        options: [
            "ประหยัดเวลามากเกินไป",
            "การคัดลอกงานโดยไม่ตรวจสอบ (Plagiarism)",
            "ทำให้คอมพิวเตอร์ร้อน",
            "ทำให้เน็ตช้าลง"
        ],
        correct: 1
    },
    {
        question: "21. 'Canva Magic Studio' ใช้ AI ช่วยทำอะไรเป็นหลัก?",
        options: [
            "เขียนโค้ดโปรแกรม",
            "ออกแบบกราฟิกและสไลด์นำเสนอ",
            "คำนวณภาษี",
            "เล่นเกม"
        ],
        correct: 1
    },
    {
        question: "22. เว็บไซต์ใดที่ช่วยสร้าง 'Quiz' หรือแบบทดสอบด้วย AI ได้อย่างรวดเร็ว?",
        options: [
            "Quizizz AI",
            "Youtube",
            "Facebook",
            "Netflix"
        ],
        correct: 0
    },
    {
        question: "23. ในการใช้ AI วาดภาพ หากเราต้องการภาพ 'แมวใส่แว่นกันแดด' เราต้องทำอย่างไร?",
        options: [
            "วาดรูปแมวให้ AI ดู",
            "พิมพ์ Prompt ว่า 'แมวใส่แว่นกันแดด'",
            "ถ่ายรูปแมวอัปโหลดลงไป",
            "รอให้ AI เดาใจเรา"
        ],
        correct: 1
    },
    {
        question: "24. 'Copilot' เป็นผู้ช่วย AI ที่พัฒนาโดยบริษัทใด?",
        options: [
            "Microsoft",
            "Apple",
            "Amazon",
            "Tesla"
        ],
        correct: 0
    },
    {
        question: "25. เทคโนโลยีที่ทำให้ AI เข้าใจบริบทของภาษาได้ดีขึ้นในปัจจุบันเรียกว่าอะไร?",
        options: [
            "Transformer Architecture",
            "Transistor",
            "Translator",
            "Transport"
        ],
        correct: 0
    },
    {
        question: "26. ข้อใด *ไม่ใช่* ประโยชน์ของ AI ในห้องเรียน?",
        options: [
            "ช่วยตอบคำถามนักเรียนทันที",
            "ช่วยครูเตรียมแผนการสอน",
            "ช่วยนักเรียนโกงข้อสอบ",
            "ช่วยสร้างสื่อการสอนให้น่าสนใจ"
        ],
        correct: 2
    },
    {
        question: "27. 'Big Data' มีความสำคัญต่อ AI อย่างไร?",
        options: [
            "เป็นแหล่งข้อมูลให้ AI เรียนรู้",
            "ทำให้ AI ราคาแพงขึ้น",
            "ทำให้เครื่องคอมพิวเตอร์หนักขึ้น",
            "ไม่เกี่ยวข้องกัน"
        ],
        correct: 0
    },
    {
        question: "28. หาก AI แสดงผลลัพธ์ที่มีอคติทางเพศหรือเชื้อชาติ สาเหตุหลักมักมาจากอะไร?",
        options: [
            "AI นิสัยไม่ดี",
            "ข้อมูล (Data) ที่ใช้สอนมีอคติปนอยู่",
            "อินเทอร์เน็ตไม่เสถียร",
            "โปรแกรมเมอร์ลืมใส่โค้ด"
        ],
        correct: 1
    },
    {
        question: "29. แพลตฟอร์มใดที่ผู้ใช้งานมักใช้ Midjourney ในการสร้างภาพ?",
        options: [
            "Discord",
            "Line",
            "Zoom",
            "Skype"
        ],
        correct: 0
    },
    {
        question: "30. 'Turing Test' ใช้ทดสอบเรื่องอะไร?",
        options: [
            "ความเร็วของคอมพิวเตอร์",
            "ความสามารถของเครื่องจักรในการแสดงพฤติกรรมฉลาดเทียบเท่ามนุษย์",
            "ความทนทานของฮาร์ดแวร์",
            "ความจุของหน่วยความจำ"
        ],
        correct: 1
    },
    {
        question: "31. 'IoT' (Internet of Things) เกี่ยวข้องกับ AI อย่างไร?",
        options: [
            "อุปกรณ์ต่างๆ ส่งข้อมูลให้ AI วิเคราะห์",
            "IoT คือชื่อเล่นของ AI",
            "IoT ใช้สำหรับเล่นเกมเท่านั้น",
            "ไม่เกี่ยวข้องกันเลย"
        ],
        correct: 0
    },
    {
        question: "32. ข้อใดคือตัวอย่างของ 'Weak AI' (Artificial Narrow Intelligence)?",
        options: [
            "หุ่นยนต์ที่มีความรู้สึกเหมือนมนุษย์",
            "ระบบแนะนำหนังใน Netflix",
            "Skynet ในหนัง Terminator",
            "Doraemon"
        ],
        correct: 1
    },
    {
        question: "33. การใช้ AI ช่วย 'สรุปบทความยาวๆ' เรียกว่าอะไร?",
        options: [
            "Summarization",
            "Translation",
            "Generation",
            "Classification"
        ],
        correct: 0
    },
    {
        question: "34. 'Curipod' เป็นเครื่องมือ AI สำหรับทำอะไร?",
        options: [
            "แต่งเพลง",
            "สร้างสไลด์การสอนแบบ Interactive",
            "ตัดต่อวิดีโอ",
            "เขียนโค้ดเว็บไซต์"
        ],
        correct: 1
    },
    {
        question: "35. สิ่งที่ AI ยังทำได้ *ไม่ดีเท่า* มนุษย์ในปัจจุบันคืออะไร?",
        options: [
            "การคำนวณตัวเลข",
            "การเข้าใจอารมณ์และความรู้สึกที่ซับซ้อน (Empathy)",
            "การจดจำใบหน้า",
            "การเล่นหมากรุก"
        ],
        correct: 1
    },
    {
        question: "36. แนวคิด 'Active Learning' เมื่อใช้ร่วมกับ AI ควรเป็นอย่างไร?",
        options: [
            "ให้นักเรียนนั่งฟัง AI บรรยายอย่างเดียว",
            "ให้นักเรียนใช้ AI เป็นเครื่องมือในการสร้างสรรค์และแก้ปัญหา",
            "ให้ครูใช้ AI ทำงานแทนนักเรียน",
            "ไม่มีข้อถูก"
        ],
        correct: 1
    },
    {
        question: "37. Python เป็นภาษาโปรแกรมที่นิยมใช้ในงาน AI เพราะอะไร?",
        options: [
            "มีไลบรารีสนับสนุนงาน AI เยอะและเขียนง่าย",
            "เป็นภาษาเดียวที่คอมพิวเตอร์เข้าใจ",
            "ทำงานได้เร็วกว่าทุกภาษา",
            "ราคาแพงที่สุด"
        ],
        correct: 0
    },
    {
        question: "38. GPU (Graphics Processing Unit) สำคัญต่อการฝึก AI อย่างไร?",
        options: [
            "ทำให้หน้าจอสวยขึ้น",
            "ช่วยประมวลผลคำนวณจำนวนมหาศาลพร้อมกันได้เร็ว (Parallel Processing)",
            "ช่วยเก็บข้อมูลได้เยอะขึ้น",
            "ช่วยให้เสียงชัดขึ้น"
        ],
        correct: 1
    },
    {
        question: "39. บทบาทของครูในยุค AI ควรเปลี่ยนไปในทิศทางใด?",
        options: [
            "ผู้ป้อนข้อมูล (Lecturer)",
            "ผู้อำนวยความสะดวกและแนะนำ (Facilitator & Coach)",
            "ผู้คุมสอบ (Invigilator)",
            "ผู้ดูแลระบบคอมพิวเตอร์"
        ],
        correct: 1
    },
    {
        question: "40. ในอนาคต ทักษะใดสำคัญที่สุดในการทำงานร่วมกับ AI?",
        options: [
            "การท่องจำข้อมูล",
            "การคิดวิเคราะห์และแก้ปัญหา (Critical Thinking & Problem Solving)",
            "การคัดลายมือ",
            "การพิมพ์ดีดเร็ว"
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

    // Page Transition Logic
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            // Check if it's an internal link (not hash, not blank, not mailto, not javascript)
            if (href &&
                !href.startsWith('#') &&
                link.target !== '_blank' &&
                !href.startsWith('mailto:') &&
                !href.startsWith('javascript:')) {

                e.preventDefault();
                document.body.classList.add('fade-out');

                setTimeout(() => {
                    window.location.href = href;
                }, 400); // 400ms match CSS animation duration
            }
        });
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
    document.getElementById('final-score').innerText = `${score}/${quizQuestions.length}`;

    const msg = document.getElementById('result-message');
    if (score >= 32) msg.innerText = "ยอดเยี่ยม! คุณคือผู้เชี่ยวชาญ AI";
    else if (score >= 20) msg.innerText = "ทำได้ดี! เรียนรู้อีกนิดคุณจะเก่งขึ้นแน่นอน";
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
