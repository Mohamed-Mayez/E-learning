using E_learningPro.Core.Entities;
using E_learningPro.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Data.Repositories
{
    public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<T> _dbSet;

        public GenericRepository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        // Add entity
        public async Task<T> AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
            return entity;
        }

        // Update entity
        public void Update(T entity)
        {
            _dbSet.Update(entity);
        }

        // Delete entity (soft delete)
        public void SoftDelete(T entity)
        {
            entity.IsDeleted = true;
            Update(entity);
        }

        // Get all entities (with global soft delete filter)
        public IQueryable<T> GetAll() => _dbSet.AsQueryable();

        // Get entity by ID
        public async Task<T> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        // Get entity with include relations
        public async Task<List<T>> GetWithIncludesAsync(Expression<Func<T, bool>> predicate, params Expression<Func<T, object>>[] includes)
        {
            IQueryable<T> query = _dbSet.Where(predicate);

            foreach (var include in includes)
            {
                query = query.Include(include);
            }

            return await query.ToListAsync();
        }
    }

}
