using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Services.Interfaces
{
    public interface IPaymentService
    {
        Task<string> InitiatePaymentAsync(decimal amount, string paymentId, string email, string phone);
        Task<bool> VerifyPaymentAsync(string transactionId);
    }
}
