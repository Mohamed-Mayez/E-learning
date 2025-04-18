// Sample data - In a real application, this would come from a backend API
const sampleData = {
    users: {
        admins: 5,
        instructors: 25,
        learners: 150
    },
    courses: {
        approved: 45,
        pending: 12,
        rejected: 3
    },
    payments: {
        completed: 180,
        refunded: 5
    },
    reviews: {
        total: 320,
        flagged: 8
    },
    // Instructor dashboard data
    instructor: {
        totalCourses: 8,
        totalEnrollments: 245,
        totalEarnings: 12500,
        monthlyEarnings: 3200,
        avgRating: 4.7,
        courses: [
            { id: 1, title: 'Web Development Basics', category: 'Programming', status: 'Approved', enrollments: 45 },
            { id: 2, title: 'Advanced JavaScript', category: 'Programming', status: 'Approved', enrollments: 32 },
            { id: 3, title: 'Python for Beginners', category: 'Programming', status: 'Pending', enrollments: 0 },
            { id: 4, title: 'Data Science Fundamentals', category: 'Data Science', status: 'Approved', enrollments: 78 },
            { id: 5, title: 'Machine Learning Basics', category: 'Data Science', status: 'Approved', enrollments: 56 },
            { id: 6, title: 'Digital Marketing', category: 'Marketing', status: 'Approved', enrollments: 34 }
        ],
        lessons: {
            1: [
                { id: 101, title: 'Introduction to HTML', type: 'Video', duration: '15:30' },
                { id: 102, title: 'CSS Basics', type: 'Video', duration: '20:15' },
                { id: 103, title: 'JavaScript Fundamentals', type: 'Video', duration: '25:45' },
                { id: 104, title: 'Responsive Design', type: 'PDF', duration: '10 pages' },
                { id: 105, title: 'Final Quiz', type: 'Quiz', duration: '30 mins' }
            ],
            2: [
                { id: 201, title: 'ES6 Features', type: 'Video', duration: '18:20' },
                { id: 202, title: 'Promises and Async/Await', type: 'Video', duration: '22:10' },
                { id: 203, title: 'DOM Manipulation', type: 'Video', duration: '19:45' },
                { id: 204, title: 'Advanced Quiz', type: 'Quiz', duration: '45 mins' }
            ]
        },
        chats: [
            { id: 1, user: 'John Smith', lastMessage: 'When will the next lesson be available?', unread: true },
            { id: 2, user: 'Emily Johnson', lastMessage: 'Thank you for the clarification!', unread: false },
            { id: 3, user: 'Michael Brown', lastMessage: 'I have a question about the assignment', unread: true }
        ],
        messages: {
            1: [
                { sender: 'John Smith', message: 'Hi, I have a question about the JavaScript course', time: '10:30 AM' },
                { sender: 'You', message: 'Hello! Sure, what would you like to know?', time: '10:32 AM' },
                { sender: 'John Smith', message: 'When will the next lesson be available?', time: '10:35 AM' }
            ],
            2: [
                { sender: 'Emily Johnson', message: 'I\'m having trouble with the CSS grid layout', time: '09:15 AM' },
                { sender: 'You', message: 'Let me help you with that. What specific issue are you facing?', time: '09:20 AM' },
                { sender: 'Emily Johnson', message: 'I can\'t get the items to align properly', time: '09:25 AM' },
                { sender: 'You', message: 'Try using the grid-template-areas property. Here\'s an example...', time: '09:30 AM' },
                { sender: 'Emily Johnson', message: 'Thank you for the clarification!', time: '09:45 AM' }
            ]
        }
    }
};

// DOM Elements
const adminDashboard = document.getElementById('admin-dashboard');
const instructorDashboard = document.getElementById('instructor-dashboard');
const learnerDashboard = document.getElementById('learner-dashboard');

// Initialize the dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Set up event listeners for navigation
    setupNavigation();
    
    // Load initial data
    updateDashboardStats();
    loadUserTable();
    loadCourseTable();
    
    // Load instructor dashboard data
    loadInstructorDashboard();
    
    // Set up instructor dashboard event listeners
    setupInstructorDashboardEvents();
});

// Navigation setup
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const role = e.target.closest('.nav-link').dataset.role;
            switchDashboard(role);
        });
    });
}

// Switch between dashboards
function switchDashboard(role) {
    // Hide all dashboards
    document.querySelectorAll('.dashboard-section').forEach(dashboard => {
        dashboard.classList.add('d-none');
    });

    // Show selected dashboard
    const selectedDashboard = document.getElementById(`${role}-dashboard`);
    if (selectedDashboard) {
        selectedDashboard.classList.remove('d-none');
        selectedDashboard.classList.add('fade-in');
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.role === role) {
            link.classList.add('active');
        }
    });
}

// Update dashboard statistics
function updateDashboardStats() {
    // Update user counts
    document.getElementById('admin-count').textContent = sampleData.users.admins;
    document.getElementById('instructor-count').textContent = sampleData.users.instructors;
    document.getElementById('learner-count').textContent = sampleData.users.learners;

    // Update course counts
    document.getElementById('approved-courses').textContent = sampleData.courses.approved;
    document.getElementById('pending-courses').textContent = sampleData.courses.pending;
    document.getElementById('rejected-courses').textContent = sampleData.courses.rejected;

    // Update payment counts
    document.getElementById('completed-payments').textContent = sampleData.payments.completed;
    document.getElementById('refunded-payments').textContent = sampleData.payments.refunded;

    // Update review counts
    document.getElementById('total-reviews').textContent = sampleData.reviews.total;
    document.getElementById('flagged-reviews').textContent = sampleData.reviews.flagged;
}

// Load user table with sample data
function loadUserTable() {
    const userTableBody = document.getElementById('user-table-body');
    const sampleUsers = [
        { name: 'John Doe', role: 'Instructor', status: 'Active' },
        { name: 'Jane Smith', role: 'Learner', status: 'Active' },
        { name: 'Bob Wilson', role: 'Instructor', status: 'Blocked' }
    ];

    userTableBody.innerHTML = sampleUsers.map(user => `
        <tr>
            <td>${user.name}</td>
            <td><span class="badge bg-info">${user.role}</span></td>
            <td><span class="badge ${user.status === 'Active' ? 'bg-success' : 'bg-danger'}">${user.status}</span></td>
            <td>
                <button class="btn btn-sm btn-primary btn-action" onclick="editUser('${user.name}')">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm ${user.status === 'Active' ? 'btn-danger' : 'btn-success'} btn-action" 
                        onclick="toggleUserStatus('${user.name}', '${user.status}')">
                    <i class="fas fa-${user.status === 'Active' ? 'ban' : 'check'}"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Load course table with sample data
function loadCourseTable() {
    const courseTableBody = document.getElementById('course-table-body');
    const sampleCourses = [
        { title: 'Web Development Basics', instructor: 'John Doe', status: 'Pending' },
        { title: 'Advanced JavaScript', instructor: 'Jane Smith', status: 'Approved' },
        { title: 'Python for Beginners', instructor: 'Bob Wilson', status: 'Rejected' }
    ];

    courseTableBody.innerHTML = sampleCourses.map(course => `
        <tr>
            <td>${course.title}</td>
            <td>${course.instructor}</td>
            <td><span class="badge ${getStatusBadgeClass(course.status)}">${course.status}</span></td>
            <td>
                <button class="btn btn-sm btn-primary btn-action" onclick="editCourse('${course.title}')">
                    <i class="fas fa-edit"></i>
                </button>
                ${course.status === 'Pending' ? `
                    <button class="btn btn-sm btn-success btn-action" onclick="approveCourse('${course.title}')">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="btn btn-sm btn-danger btn-action" onclick="rejectCourse('${course.title}')">
                        <i class="fas fa-times"></i>
                    </button>
                ` : ''}
            </td>
        </tr>
    `).join('');
}

// Helper function to get badge class based on status
function getStatusBadgeClass(status) {
    switch (status.toLowerCase()) {
        case 'approved':
            return 'bg-success';
        case 'pending':
            return 'bg-warning';
        case 'rejected':
            return 'bg-danger';
        default:
            return 'bg-secondary';
    }
}

// Action functions
function editUser(userName) {
    console.log(`Editing user: ${userName}`);
    // Implement edit user functionality
}

function toggleUserStatus(userName, currentStatus) {
    console.log(`Toggling status for user: ${userName}`);
    // Implement user status toggle functionality
}

function editCourse(courseTitle) {
    console.log(`Editing course: ${courseTitle}`);
    // Implement edit course functionality
}

function approveCourse(courseTitle) {
    console.log(`Approving course: ${courseTitle}`);
    // Implement course approval functionality
}

function rejectCourse(courseTitle) {
    console.log(`Rejecting course: ${courseTitle}`);
    // Implement course rejection functionality
}

// Instructor Dashboard Functions
function loadInstructorDashboard() {
    // Update instructor dashboard stats
    document.getElementById('instructor-total-courses').textContent = sampleData.instructor.totalCourses;
    document.getElementById('instructor-total-enrollments').textContent = sampleData.instructor.totalEnrollments;
    document.getElementById('instructor-total-earnings').textContent = sampleData.instructor.totalEarnings;
    document.getElementById('instructor-monthly-earnings').textContent = sampleData.instructor.monthlyEarnings;
    document.getElementById('instructor-avg-rating').textContent = sampleData.instructor.avgRating;
    
    // Load instructor courses
    loadInstructorCourses();
    
    // Load course list for content management
    loadCourseList();
    
    // Load chat list
    loadChatList();
}

function loadInstructorCourses() {
    const courseTableBody = document.getElementById('instructor-course-table-body');
    
    courseTableBody.innerHTML = sampleData.instructor.courses.map(course => `
        <tr>
            <td>${course.title}</td>
            <td>${course.category}</td>
            <td><span class="badge ${getStatusBadgeClass(course.status)}">${course.status}</span></td>
            <td>${course.enrollments}</td>
            <td>
                <button class="btn btn-sm btn-primary btn-action" onclick="editInstructorCourse(${course.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-info btn-action" onclick="viewInstructorCourse(${course.id})">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="btn btn-sm btn-danger btn-action" onclick="deleteInstructorCourse(${course.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function loadCourseList() {
    const courseList = document.getElementById('course-list');
    
    courseList.innerHTML = sampleData.instructor.courses.map(course => `
        <a href="#" class="list-group-item list-group-item-action" data-course-id="${course.id}">
            ${course.title}
            <span class="badge ${getStatusBadgeClass(course.status)} float-end">${course.status}</span>
        </a>
    `).join('');
    
    // Add event listeners to course list items
    const courseItems = courseList.querySelectorAll('.list-group-item');
    courseItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const courseId = parseInt(item.dataset.courseId);
            selectCourse(courseId);
        });
    });
}

function selectCourse(courseId) {
    // Update selected course title
    const course = sampleData.instructor.courses.find(c => c.id === courseId);
    document.getElementById('selected-course-title').textContent = course.title;
    
    // Enable add lesson button
    document.getElementById('add-lesson-btn').disabled = false;
    
    // Load lessons for the selected course
    loadLessons(courseId);
    
    // Update active course in the list
    document.querySelectorAll('#course-list .list-group-item').forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.courseId) === courseId) {
            item.classList.add('active');
        }
    });
}

function loadLessons(courseId) {
    const lessonTableBody = document.getElementById('lesson-table-body');
    
    if (sampleData.instructor.lessons[courseId]) {
        lessonTableBody.innerHTML = sampleData.instructor.lessons[courseId].map(lesson => `
            <tr>
                <td>${lesson.title}</td>
                <td><span class="badge bg-info">${lesson.type}</span></td>
                <td>${lesson.duration}</td>
                <td>
                    <button class="btn btn-sm btn-primary btn-action" onclick="editLesson(${lesson.id})">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-sm btn-danger btn-action" onclick="deleteLesson(${lesson.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                    <button class="btn btn-sm btn-secondary btn-action" onclick="reorderLesson(${lesson.id}, 'up')">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                    <button class="btn btn-sm btn-secondary btn-action" onclick="reorderLesson(${lesson.id}, 'down')">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    } else {
        lessonTableBody.innerHTML = '<tr><td colspan="4" class="text-center">No lessons available for this course</td></tr>';
    }
}

function loadChatList() {
    const chatList = document.getElementById('chat-list');
    
    chatList.innerHTML = sampleData.instructor.chats.map(chat => `
        <a href="#" class="list-group-item list-group-item-action ${chat.unread ? 'fw-bold' : ''}" data-chat-id="${chat.id}">
            ${chat.user}
            <small class="text-muted d-block">${chat.lastMessage}</small>
        </a>
    `).join('');
    
    // Add event listeners to chat list items
    const chatItems = chatList.querySelectorAll('.list-group-item');
    chatItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const chatId = parseInt(item.dataset.chatId);
            selectChat(chatId);
        });
    });
}

function selectChat(chatId) {
    // Update selected chat title
    const chat = sampleData.instructor.chats.find(c => c.id === chatId);
    document.getElementById('selected-chat-title').textContent = `Chat with ${chat.user}`;
    
    // Load messages for the selected chat
    loadChatMessages(chatId);
    
    // Update active chat in the list
    document.querySelectorAll('#chat-list .list-group-item').forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.chatId) === chatId) {
            item.classList.add('active');
        }
    });
}

function loadChatMessages(chatId) {
    const chatMessages = document.querySelector('.chat-messages');
    
    if (sampleData.instructor.messages[chatId]) {
        chatMessages.innerHTML = sampleData.instructor.messages[chatId].map(message => `
            <div class="mb-2 ${message.sender === 'You' ? 'text-end' : ''}">
                <div class="d-inline-block p-2 rounded ${message.sender === 'You' ? 'bg-primary text-white' : 'bg-light'}">
                    <small class="d-block text-${message.sender === 'You' ? 'light' : 'muted'}">${message.sender} - ${message.time}</small>
                    ${message.message}
                </div>
            </div>
        `).join('');
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    } else {
        chatMessages.innerHTML = '<div class="text-center text-muted">No messages in this chat</div>';
    }
}

function setupInstructorDashboardEvents() {
    // Create course button
    document.getElementById('create-course-btn').addEventListener('click', () => {
        console.log('Create new course clicked');
        // Implement create course functionality
    });
    
    // Add lesson button
    document.getElementById('add-lesson-btn').addEventListener('click', () => {
        console.log('Add lesson clicked');
        // Implement add lesson functionality
    });
    
    // Send message button
    document.getElementById('send-message-btn').addEventListener('click', () => {
        const messageInput = document.getElementById('message-input');
        const message = messageInput.value.trim();
        
        if (message) {
            console.log(`Sending message: ${message}`);
            // Implement send message functionality
            
            // Clear input
            messageInput.value = '';
        }
    });
}

// Instructor action functions
function editInstructorCourse(courseId) {
    console.log(`Editing instructor course: ${courseId}`);
    // Implement edit instructor course functionality
}

function viewInstructorCourse(courseId) {
    console.log(`Viewing instructor course: ${courseId}`);
    // Implement view instructor course functionality
}

function deleteInstructorCourse(courseId) {
    console.log(`Deleting instructor course: ${courseId}`);
    // Implement delete instructor course functionality
}

function editLesson(lessonId) {
    console.log(`Editing lesson: ${lessonId}`);
    // Implement edit lesson functionality
}

function deleteLesson(lessonId) {
    console.log(`Deleting lesson: ${lessonId}`);
    // Implement delete lesson functionality
}

function reorderLesson(lessonId, direction) {
    console.log(`Reordering lesson: ${lessonId}, direction: ${direction}`);
    // Implement reorder lesson functionality
} 