document.addEventListener('DOMContentLoaded', () => {
    // Navigation logic
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('.section');

    function setActiveSection(targetId) {
        // Update links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === targetId) {
                link.classList.add('active');
            }
        });

        // Update sections
        sections.forEach(section => {
            section.classList.remove('active');
            if('#' + section.id === targetId) {
                section.classList.add('active');
            }
        });
    }

    // Handle clicks on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            setActiveSection(targetId);
            window.location.hash = targetId;
        });
    });

    // Check initial hash
    if(window.location.hash) {
        setActiveSection(window.location.hash);
    } else {
        // Default to active one in HTML if no hash exists, which is '#about'
    }

    // Auto-extract skills from projects
    const allProjectTags = document.querySelectorAll('#projects .tech-tag');
    const autoSkillsContainer = document.getElementById('autoSkills');
    
    if (autoSkillsContainer && allProjectTags.length > 0) {
        const uniqueSkills = new Set();
        
        allProjectTags.forEach(tag => {
            uniqueSkills.add(tag.textContent.trim());
        });
        
        uniqueSkills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'tech-tag';
            span.textContent = skill;
            autoSkillsContainer.appendChild(span);
        });
    }
});
