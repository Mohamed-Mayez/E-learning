using E_learningPro.Core.Entities;
using E_learningPro.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Data.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext _context;
        public IGenericRepository<Category> Categories { get; private set; }

        public IGenericRepository<Course> Courses { get; private set; }

        public IGenericRepository<Enrollment> Enrollments { get; private set; }

        public IGenericRepository<Lesson> Lessons { get; private set; }

        public IGenericRepository<Message> Messages { get; private set; }

        public IGenericRepository<Payment> Payments  { get; private set; }

        public IGenericRepository<Progress> Progresses { get; private set; }

        public IGenericRepository<Review> Reviews { get; private set; }

        public IGenericRepository<Chat> Chats { get; private set; }

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
            Categories = new GenericRepository<Category>(_context);
            Courses = new GenericRepository<Course>(_context);
            Enrollments = new GenericRepository<Enrollment>(_context);
            Lessons = new GenericRepository<Lesson>(_context);
            Messages = new GenericRepository<Message>(_context);
            Payments = new GenericRepository<Payment>(_context);
            Reviews = new GenericRepository<Review>(_context);
            Chats = new GenericRepository<Chat>(_context);
            Progresses = new GenericRepository<Progress>(_context);
        }

      

        public async Task<int> CompleteAsync() => await _context.SaveChangesAsync();

        public void Dispose()
        {
           _context.Dispose();
        }
    }
}
