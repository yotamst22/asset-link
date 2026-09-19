/* ASSET-LINK — AI Chat Simulator */

const AI_RESPONSES = [
  {
    keywords: ['מחיר', 'תמחור', 'כמה לגבות', 'תעריף', 'עלות'],
    response: `📊 **המלצות תמחור לשוק הישראלי (2026):**

• **טרקטור 100–150 כ"ס** — ₪850–₪1,200/יום | ₪4,500–₪6,500/שבוע
• **קומביין / קוצר** — ₪3,500–₪5,000/יום (עונתי בלבד)
• **מרסס שדה** — ₪600–₪900/יום
• **מחפר** — ₪1,500–₪2,500/יום לפי גודל

**פרמיית עונה:** בעונת אפריל–מאי (חיטה) ואוקטובר (כותנה) אפשר להעלות מחיר 15%–25%.

**טיפ:** ציוד עם GPS ותחזוקה מתועדת מגייס 12% יותר בממוצע. הוסף תמונות איכותיות — מגביר פניות ב-40%.`
  },
  {
    keywords: ['עונה', 'ביקוש', 'מתי', 'לוח שנה', 'חודש', 'קציר'],
    response: `📅 **לוח עונות חקלאי ישראל — ביקוש לציוד:**

**ינואר–פברואר:** ציוד זריעה, קרקע • ביקוש בינוני
**מרץ–מאי:** 🔥 **שיא עונת חיטה ושעורה** — ביקוש גבוה מאוד לטרקטורים וקומביינים
**יוני–יולי:** ציוד ריסוס וגינון, קציף חצבה
**אוגוסט–ספטמבר:** ציוד קטיף ענבים, תמרים
**אוקטובר:** 🔥 **קציר כותנה** — ביקוש גבוה לקומביינים
**נובמבר–דצמבר:** זיתים, ציוד קרקע לחורף

**המלצה:** עדכן זמינות לפחות 6 שבועות מראש לפני עונת שיא. שוכרים מזמינים מוקדם.`
  },
  {
    keywords: ['ביטוח', 'ביטחון', 'נזק', 'כיסוי', 'אחריות'],
    response: `🛡️ **מערכת הביטוח של ASSET-LINK:**

**כיסוי בכל השכרה (כלול במחיר):**
✓ נזק לציוד עד ₪500,000
✓ אחריות צד שלישי — עד ₪1M
✓ כיסוי גנבה מלא
✓ תאונות עבודה

**פיקדון בטחון (Escrow):**
השוכר מפקיד 20% מערך הציוד לפני קבלה. הסכום משוחרר לאחר החזרה תקינה.

**תביעה:** במקרה נזק, פנה לתמיכה תוך 24 שעות. זמן טיפול ממוצע: 48 שעות.

**טיפ:** צלם תיעוד וידאו/תמונות לפני מסירה ואחרי קבלת ציוד חזרה.`
  },
  {
    keywords: ['קומביין', 'קוצר', 'חיטה', 'שעורה'],
    response: `🌾 **ייעוץ: קומביינים ישראל**

**חלון קציר חיטה:** אפריל 20 – מאי 31 (≈40 יום)
**ביקוש:** גבוה מאוד — קומביינים מוזמנים לרוב שבועות מראש בעונה

**תמחור מומלץ:**
• 390 כ"ס ומעלה: ₪4,200–₪5,500/יום
• 250–390 כ"ס: ₪3,000–₪4,200/יום
• מתחת 250 כ"ס: ₪1,800–₪3,000/יום

**טיפ קריטי:** פרסם זמינות עונתית עד סוף פברואר. 78% מהשכרות קומביינים מוזמנות לפחות 3 שבועות מראש. אל תאפשר הזמנות רגעיות לעונת קציר.`
  },
  {
    keywords: ['כמה אוכל להרוויח', 'הכנסה', 'רווח', 'כסף', 'כמה'],
    response: `💰 **חישוב פוטנציאל הכנסה שנתי:**

**טרקטור ממוצע (110 כ"ס, ₪900/יום):**
• 60 ימי השכרה/שנה × ₪900 = **₪54,000**
• עונת שיא (15 ימים נוספים, פרמיה 20%) = **₪16,200**
• **סה"כ פוטנציאל: ₪70,200/שנה**

**קומביין (390 כ"ס, ₪4,000/יום):**
• 25 ימי קציר × ₪4,000 = **₪100,000**
• (עונתי בלבד — 6 שבועות מקסימום)

**מרסס (₪720/יום):**
• 40 ימים/שנה × ₪720 = **₪28,800**

**בעלי ציוד מובילים בפלטפורמה מרוויחים ₪80,000–₪200,000/שנה.**

רוצה חישוב מדויק לציוד שלך?`
  },
  {
    keywords: ['תחזוקה', 'שירות', 'תיקון', 'מכוניסט'],
    response: `🔧 **תחזוקה וניהול ציוד:**

**לפני כל השכרה:**
• בדוק שמן מנוע ונוזלים
• צלם תמונות מקיפות לתיעוד
• עדכן ספר שירות

**השפעה על דירוג:**
ציוד עם תיעוד שירות מלא מקבל דירוג 0.3 נקודות גבוה יותר בממוצע.

**שוכרים מדווחים:** ציוד נקי ומוכן = 94% סיכוי לביקורת 5 כוכבים.

**ביטוח מכסה:** תיקונים כתוצאה מתאונה בזמן השכרה — כלולים. בלאי רגיל — לא כלול.`
  },
  {
    keywords: ['הוסף', 'פרסם', 'חדש', 'רשום', 'הצג'],
    response: `📸 **איך לפרסם ציוד חדש ב-ASSET-LINK:**

**תהליך הרשמה (10 דקות):**
1. לחץ "הוסף ציוד חדש" בלוח הבקרה
2. צלם לפחות 6 תמונות — חיצוני, פנים, לוח מחוונים, מנוע
3. מלא מפרט מלא: שנה, שעות, מצב
4. קבע מחיר יומי ושבועי (בדוק המלצות שוק)
5. קבע זמינות בלוח שנה

**טיפים לפרסום מנצח:**
✓ כותרת עם יצרן + דגם + כ"ס
✓ תמונה ראשית — צילום יום, רקע שדה
✓ ציין "תחזוקה מלאה" + שנת שירות אחרון
✓ הפעל "זמין מיידית" להגדלת חשיפה ב-60%`
  }
];

const DEFAULT_RESPONSE = `זו שאלה מצוינת! בהתבסס על הנתונים שלנו מאלפי עסקאות בשוק הישראלי:

**המלצות כלליות לבעלי ציוד:**

1. **תמחור דינמי** — עדכן מחירים לפי עונה ולפי ביקוש. בעונות שיא — העלה 15–25%.

2. **תגובה מהירה** — בעלי ציוד עם זמן תגובה מתחת ל-4 שעות מרוויחים 28% יותר.

3. **תמונות מקצועיות** — לפחות 6 תמונות, ביום, מזוויות שונות. מגביר פניות ב-40%.

4. **זמינות מעודכנת** — שמור על לוח שנה מדויק. ביטולים פוגעים בדירוג.

5. **ביקורות** — בקש ביקורת אחרי כל השכרה. 5 ביקורות ראשונות הכי חשובות.

רצית לשאול משהו ספציפי יותר?`;

function getAIResponse(message) {
  const lower = message.toLowerCase();
  for (const rule of AI_RESPONSES) {
    if (rule.keywords.some(kw => lower.includes(kw))) {
      return rule.response;
    }
  }
  return DEFAULT_RESPONSE;
}

function formatMessage(text) {
  // Convert **bold** to <strong>
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Convert newlines to <br>
  text = text.replace(/\n/g, '<br>');
  return text;
}

function getTimeStr() {
  return new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
}

function addMessage(role, text, container) {
  const isUser = role === 'user';
  const div = document.createElement('div');
  div.className = 'chat-msg ' + (isUser ? 'chat-msg-user' : 'chat-msg-ai');
  div.innerHTML = `
    ${!isUser ? '<div class="chat-avatar">🤖</div>' : ''}
    <div class="chat-bubble">
      <div class="chat-text">${isUser ? escapeHtml(text) : formatMessage(text)}</div>
      <div class="chat-time">${getTimeStr()}</div>
    </div>
    ${isUser ? '<div class="chat-avatar chat-avatar-user">👤</div>' : ''}
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return div;
}

function addTypingIndicator(container) {
  const div = document.createElement('div');
  div.className = 'chat-msg chat-msg-ai';
  div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="chat-avatar">🤖</div>
    <div class="chat-bubble">
      <div class="typing-dots"><span></span><span></span><span></span></div>
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  return div;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])
  );
}

function initChat() {
  const container  = document.getElementById('chat-messages');
  const input      = document.getElementById('chat-input');
  const sendBtn    = document.getElementById('chat-send');
  const chips      = document.querySelectorAll('.quick-chip');

  if (!container || !input || !sendBtn) return;

  function sendMessage(text) {
    const trimmed = (text || input.value).trim();
    if (!trimmed) return;

    // Add user message
    addMessage('user', trimmed, container);
    input.value = '';
    sendBtn.disabled = true;

    // Show typing indicator
    const typing = addTypingIndicator(container);
    const delay = 1200 + Math.random() * 600;

    setTimeout(() => {
      typing.remove();
      const response = getAIResponse(trimmed);
      addMessage('ai', response, container);
      sendBtn.disabled = false;
      input.focus();
    }, delay);
  }

  sendBtn.addEventListener('click', () => sendMessage());
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      sendMessage(chip.dataset.msg);
    });
  });
}

document.addEventListener('DOMContentLoaded', initChat);
