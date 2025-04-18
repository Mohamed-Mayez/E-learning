using E_learningPro.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_learningPro.Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepository<Category> Categories { get; }
        IGenericRepository<Course> Courses { get; }
        IGenericRepository<Enrollment> Enrollments { get; }
        IGenericRepository<Lesson> Lessons { get; }
        IGenericRepository<Message> Messages { get; }
        IGenericRepository<Payment> Payments { get; }
        IGenericRepository<Progress> Progresses { get; }
        IGenericRepository<Review> Reviews { get; }
        public IGenericRepository<Chat> Chats {  get; }
        Task<int> CompleteAsync();
    }
}
