using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace E_LearningPro.Services.DTOs
{
    public class PaymobConfig
    {
        public string? ApiKey { get; set; }
        public string? HmacSecret { get; set; }
        public string? IntegrationId { get; set; }
        public string? IframeId { get; set; }
    }
}
