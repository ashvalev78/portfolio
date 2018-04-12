export default function filledSkills() {
    const skills = document.querySelectorAll('.circles');
    const topArrow = document.querySelector('.arrow__down-href');
    const skillsArray = Array.from(skills)

    function fillSkills() {
        skillsArray.forEach((skill) => {
            skill.classList.add('active');
        });
    }

    function filledSkills() {
        if (document.documentElement.scrollTop > window.innerHeight) {
            fillSkills();
        } 
        if (document.documentElement.scrollTop < (window.innerHeight - 200)) {
            skillsArray.forEach((skill) => {
                skill.classList.remove('active');
            });
        }
    }

    topArrow.addEventListener('click', () => {
        setTimeout(fillSkills, 650);
    });
    window.onscroll = filledSkills;
    
}