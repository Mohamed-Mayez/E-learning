// Sample course data
const courses = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        description: "Learn HTML, CSS, and JavaScript from scratch",
        price: 99.99,
        rating: 4.5,
        image: "https://via.placeholder.com/300x200",
        category: "Web Development"
    },
    {
        id: 2,
        title: "Data Science Essentials",
        description: "Master data analysis and visualization",
        price: 129.99,
        rating: 4.8,
        image: "https://via.placeholder.com/300x200",
        category: "Data Science"
    },
    {
        id: 3,
        title: "Digital Marketing Mastery",
        description: "Learn modern digital marketing strategies",
        price: 79.99,
        rating: 4.3,
        image: "https://via.placeholder.com/300x200",
        category: "Marketing"
    },
    {
        id: 4,
        title: "Mobile App Development",
        description: "Create iOS and Android apps",
        price: 149.99,
        rating: 4.7,
        image: "https://via.placeholder.com/300x200",
        category: "Mobile Development"
    },
    {
        id: 5,
        title: "UI/UX Design Principles",
        description: "Learn modern design principles",
        price: 89.99,
        rating: 4.6,
        image: "https://via.placeholder.com/300x200",
        category: "Design"
    },
    {
        id: 6,
        title: "Python Programming",
        description: "Master Python programming language",
        price: 109.99,
        rating: 4.9,
        image: "https://via.placeholder.com/300x200",
        category: "Programming"
    }
];

// Function to create course cards
function createCourseCard(course) {
    return `
        <div class="col-md-4 col-lg-4">
            <div class="card course-card">
                <img src="${course.image}" class="card-img-top" alt="${course.title}">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <div class="rating">
                        ${createStarRating(course.rating)}
                        <span class="ms-2">(${course.rating})</span>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="price">$${course.price}</span>
                        <button class="btn btn-primary" onclick="enrollCourse(${course.id})">Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to create star rating
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }

    return stars;
}

// Function to display courses
function displayCourses(coursesToShow = courses) {
    const container = document.getElementById('coursesContainer');
    container.innerHTML = coursesToShow.map(course => createCourseCard(course)).join('');
}

// Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm)
    );
    displayCourses(filteredCourses);
});

// Enroll course function
function enrollCourse(courseId) {
    // This would typically connect to a backend
    alert(`Enrolling in course ${courseId}`);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayCourses();
}); 