using E_learningPro.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace E_learningPro.Core.Interfaces
{
    public interface IGenericRepository<T> where T : BaseEntity
    {
        public Task<T>AddAsync(T entity);
        public void Update(T entity);
        public void SoftDelete(T entity);
        public IQueryable<T> GetAll();
        public Task<T> GetByIdAsync(int id);
        public Task<List<T>> GetWithIncludesAsync(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includes);
    }
}
