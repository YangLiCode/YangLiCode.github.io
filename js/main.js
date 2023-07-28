// Function to set the language and redirect to the appropriate index page
function setLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const isSimplifiedChinese = userLang.toLowerCase() === "zh-cn";

    if (isSimplifiedChinese) {
        // Redirect to the Chinese version
        window.location.href = "index_zh.html";
    } else {
        // Redirect to the English version (default)
        window.location.href = "index_en.html";
    }
}

// Call the function to set the language and redirect when the page loads
document.addEventListener("DOMContentLoaded", setLanguage);


// Function to set the language based on the user's selection
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const isEnglish = currentLang === "en";

    if (isEnglish) {
        // Redirect to the Chinese version
        window.location.href = "index_zh.html";
    } else {
        // Redirect to the English version (default)
        window.location.href = "index_en.html";
    }
}
