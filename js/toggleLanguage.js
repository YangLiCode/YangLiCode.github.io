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
