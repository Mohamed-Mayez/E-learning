// Sample data for enrolled courses
const enrolledCourses = [
    {
        id: 1,
        title: "Web Development Fundamentals",
        progress: 65,
        lastAccessed: "2024-03-15",
        image: "https://via.placeholder.com/300x200",
        instructor: "John Doe",
        totalLessons: 24,
        completedLessons: 16
    },
    {
        id: 2,
        title: "Data Science Essentials",
        progress: 30,
        lastAccessed: "2024-03-14",
        image: "https://via.placeholder.com/300x200",
        instructor: "Jane Smith",
        totalLessons: 18,
        completedLessons: 5
    },
    {
        id: 3,
        title: "Digital Marketing Mastery",
        progress: 45,
        lastAccessed: "2024-03-13",
        image: "https://via.placeholder.com/300x200",
        instructor: "Mike Johnson",
        totalLessons: 20,
        completedLessons: 9
    }
];

// Sample data for completed courses
const completedCourses = [
    {
        id: 4,
        title: "Python Programming",
        completionDate: "2024-02-28",
        image: "https://via.placeholder.com/300x200",
        instructor: "Sarah Wilson",
        grade: "A",
        certificateId: "CERT-2024-001"
    },
    {
        id: 5,
        title: "UI/UX Design Principles",
        completionDate: "2024-03-01",
        image: "https://via.placeholder.com/300x200",
        instructor: "David Brown",
        grade: "A+",
        certificateId: "CERT-2024-002"
    }
];

// Function to create progress card
function createProgressCard(course) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card course-progress-card">
                <img src="${course.image}" class="card-img-top" alt="${course.title}">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">
                        <small class="text-muted">Instructor: ${course.instructor}</small>
                    </p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${course.progress}%"
                            aria-valuenow="${course.progress}" aria-valuemin="0" aria-valuemax="100">
                            ${course.progress}%
                        </div>
                    </div>
                    <p class="card-text">
                        <small class="text-muted">
                            ${course.completedLessons} of ${course.totalLessons} lessons completed
                        </small>
                    </p>
                    <button class="btn btn-primary continue-learning-btn w-100" 
                            onclick="continueLearning(${course.id})">
                        Continue Learning
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to create completed course card
function createCompletedCard(course) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="card completed-course-card">
                <img src="${course.image}" class="card-img-top" alt="${course.title}">
                <div class="certificate-badge">
                    <i class="fas fa-certificate"></i> Certificate Earned
                </div>
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">
                        <small class="text-muted">Instructor: ${course.instructor}</small>
                    </p>
                    <p class="card-text">
                        <strong>Grade:</strong> ${course.grade}<br>
                        <strong>Completed:</strong> ${new Date(course.completionDate).toLocaleDateString()}<br>
                        <strong>Certificate ID:</strong> ${course.certificateId}
                    </p>
                    <button class="btn btn-success w-100" onclick="viewCertificate('${course.certificateId}')">
                        View Certificate
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to continue learning
function continueLearning(courseId) {
    // This would typically redirect to the course content
    alert(`Continuing course ${courseId}`);
}

// Function to view certificate
function viewCertificate(certificateId) {
    // This would typically open a modal or redirect to certificate view
    alert(`Viewing certificate ${certificateId}`);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Display in-progress courses
    const inProgressContainer = document.getElementById('inProgressCourses');
    inProgressContainer.innerHTML = enrolledCourses.map(course => createProgressCard(course)).join('');

    // Display completed courses
    const completedContainer = document.getElementById('completedCourses');
    completedContainer.innerHTML = completedCourses.map(course => createCompletedCard(course)).join('');
}); 