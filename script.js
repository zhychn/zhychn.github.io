// 中英文切换功能
document.addEventListener('DOMContentLoaded', function() {
    const introText = document.getElementById('intro-text');
    const languageToggle = document.getElementById('language-toggle');
    
    const translations = {
        'en': "Hello, this is Zhou Hongyu. I am currently focused on learning and exploring fields such as Artificial Intelligence Infrastructure (AI Infra) and Robotics. During my undergraduate studies, I focused on Cognitive Science, which effectively cultivated a holistic mindset for understanding and reshaping the world.",
        'zh': "你好，这里是Zhou Hongyu，目前专注于人工智能基础设施（AI Infra）、机器人科学（Robotics）等领域的学习与探索。在本科阶段，我着重关注认知科学，这很好地为我认识、改造世界构建了全局性思维。"
    };
    
    // 初始状态为中文
    let currentLang = 'zh';
    
    languageToggle.addEventListener('click', function() {
        // 切换语言
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        
        // 更新介绍文本
        introText.textContent = translations[currentLang];
        
        // 设置语言属性，以便CSS可以针对不同语言应用不同字体
        introText.setAttribute('lang', currentLang);
        
        // 更新按钮文本
        this.textContent = currentLang === 'zh' ? 'EN' : '中';
    });

});
