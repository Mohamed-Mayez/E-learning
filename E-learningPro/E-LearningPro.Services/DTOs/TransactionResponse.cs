using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace E_LearningPro.Services.DTOs
{
    public class TransactionResponse
    {
        [JsonPropertyName("success")]
        public bool Success { get; set; }

        [JsonPropertyName("id")]
        public string? TransactionId { get; set; }

        [JsonPropertyName("amount_cents")]
        public decimal AmountCents { get; set; }

        [JsonPropertyName("pending")]
        public bool Pending { get; set; }
    }
}
