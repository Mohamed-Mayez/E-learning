using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_learningPro.Core.Entities
{
    public class AuditLog
    {
        public int AuditLogID { get; set; }
        public string? EntityName { get; set; }
        public string? ActionType { get; set; }
        public string? Data { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
        public string? ChangedBy { get; set; }
    }
}
