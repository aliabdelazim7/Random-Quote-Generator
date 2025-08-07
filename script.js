// قائمة تحتوي على مجموعة من الاقتباسات
const quotes = [
  "النجاح هو القدرة على الانتقال من فشل إلى آخر دون أن تفقد حماسك.",
  "الطريقة الوحيدة لتحقيق المستحيل هي الإيمان بأنه ممكن.",
  "لا تستسلم أبدًا، لأن الفشل هو مجرد خطوة نحو النجاح.",
  "كل ما نفكر فيه هو قابل للتحقيق إذا آمنا به بصدق.",
  "الحياة مليئة بالتحديات، لكنها أيضًا مليئة بالفرص.",
  "الفشل ليس عدو النجاح، بل جزء منه.",
];

// تحديد العناصر الرئيسية في الصفحة
const quoteText = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn");

// دالة لاختيار اقتباس عشوائي
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// دالة لتحديث الاقتباس المعروض
function updateQuote() {
  const randomQuote = getRandomQuote();
  quoteText.textContent = `"${randomQuote}"`;
}

// إضافة حدث النقر على زر "New Quote"
newQuoteBtn.addEventListener("click", updateQuote);

// عند بدء تشغيل الصفحة، يتم عرض اقتباس عشوائي
updateQuote();
