function showDashboard(dashboardType) {
    // Hide all dashboards
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Deactivate all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected dashboard
    document.getElementById(`${dashboardType}-dashboard`).classList.add('active');

    // Activate selected tab
    event.currentTarget.classList.add('active');

    // Update sidebar menu
    document.querySelectorAll('#admin-menu, #instructor-menu, #learner-menu').forEach(menu => {
        menu.style.display = 'none';
    });
    document.getElementById(`${dashboardType}-menu`).style.display = 'block';

    // Update header title
    const headerTitle = document.querySelector('.header-title h1');
    const userName = document.querySelector('.user-name');
    
    if (dashboardType === 'admin') {
        headerTitle.textContent = 'Admin Dashboard';
        userName.textContent = 'Admin';
        document.querySelector('.header-title p').textContent = 'Welcome back, Admin!';
    } else if (dashboardType === 'instructor') {
        headerTitle.textContent = 'Instructor Dashboard';
        userName.textContent = 'Dr. Johnson';
        document.querySelector('.header-title p').textContent = 'Welcome back, Dr. Johnson!';
    } else {
        headerTitle.textContent = 'My Learning Dashboard';
        userName.textContent = 'Michael';
        document.querySelector('.header-title p').textContent = 'Welcome back, Michael!';
    }
}

// Initialize with admin dashboard
document.addEventListener('DOMContentLoaded', function() {
    showDashboard('admin');
    
    // Add click handlers for action buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.title;
            const row = this.closest('tr');
            alert(`${action} action clicked for ${row.cells[0].textContent}`);
        });
    });

    // Add click handlers for course cards
    document.querySelectorAll('.course-card .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.course-card');
            const courseTitle = card.querySelector('.course-title').textContent;
            alert(`Action clicked for ${courseTitle}`);
        });
    });

    // Add click handlers for lesson items
    document.querySelectorAll('.lesson-item').forEach(item => {
        item.addEventListener('click', function() {
            const lessonTitle = this.querySelector('.lesson-title').textContent;
            alert(`Lesson selected: ${lessonTitle}`);
        });
    });
});