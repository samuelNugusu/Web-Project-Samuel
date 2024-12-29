document.addEventListener('DOMContentLoaded', () => {
    // Login form validation
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            alert('Login successful!');
            window.location.href = 'index.html'; // Redirect to the main page after login
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Advisor list filtering
    const advisors = [
        { name: 'Dr. John Doe', expertise: 'Machine Learning', image: 'images/john.jpg' },
        { name: 'Dr. Jane Smith', expertise: 'Data Science', image: 'images/jane.jpg' },
        { name: 'Dr. Emily Johnson', expertise: 'Artificial Intelligence', image: 'images/emily.jpg' },
        { name: 'Dr. Michael Brown', expertise: 'Cybersecurity', image: 'images/michael.jpg' }
    ];

    const advisorList = document.getElementById('advisor-list');
    const searchInput = document.getElementById('search');

    function displayAdvisors(advisors) {
        advisorList.innerHTML = '';
        advisors.forEach(advisor => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${advisor.image}" alt="${advisor.name}" class="advisor-image">
                <div class="advisor-info">
                    <h3>${advisor.name}</h3>
                    <p>${advisor.expertise}</p>
                </div>
            `;
            advisorList.appendChild(li);
        });
    }

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredAdvisors = advisors.filter(advisor =>
            advisor.expertise.toLowerCase().includes(searchTerm)
        );
        displayAdvisors(filteredAdvisors);
    });

    displayAdvisors(advisors);

    // Project cards
    const projects = [
        {
            title: 'Project 1',
            description: 'Research on advanced machine learning techniques for natural language processing.',
            image: 'images/project1.jpg'
        },
        {
            title: 'Project 2',
            description: 'Development of cybersecurity protocols to protect sensitive data.',
            image: 'images/project2.jpg'
        },
        {
            title: 'Project 3',
            description: 'Innovative approaches to artificial intelligence in healthcare.',
            image: 'images/project3.jpg'
        },
        {
            title: 'Project 4',
            description: 'Exploration of renewable energy sources and their applications.',
            image: 'images/project4.jpg'
        }
    ];

    const projectGrid = document.querySelector('.project-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;

        projectGrid.appendChild(projectCard);
    });

    // Back to Top button functionality
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
