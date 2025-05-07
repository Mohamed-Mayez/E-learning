
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using E_LearningPro.Services.DTOs;
using E_LearningPro.Services.Interfaces;
using Microsoft.Extensions.Options;

namespace E_LearningPro.Services.Services
{
    public class PaymentService : IPaymentService
    {
        private readonly HttpClient _httpClient;
        private readonly PaymobConfig _paymobConfig;
        public PaymentService(IOptions<PaymobConfig> config)
        {
            _paymobConfig = config.Value;
            _httpClient = new HttpClient { BaseAddress = new Uri("https://accept.paymob.com/api/") };
        }

        public async Task<string> InitiatePaymentAsync(decimal amount, string paymentId, string email, string phone)
        {
            // Step 1: Authentication
            var authResponse = await _httpClient.PostAsJsonAsync("auth/tokens", new
            {
                api_key = _paymobConfig.ApiKey
            });

            var authResult = await authResponse.Content.ReadFromJsonAsync<AuthResponse>();

            // Step 2: Order Registration
            var orderResponse = await _httpClient.PostAsJsonAsync("ecommerce/orders", new
            {
                auth_token = authResult?.Token,
                delivery_needed = "false",
                merchant_order_id = paymentId,
                amount_cents = amount * 100,
                currency = "EGP",
                items = new[] { new { name = "Course Payment", amount_cents = amount * 100 } }
            });

            var orderResult = await orderResponse.Content.ReadFromJsonAsync<OrderResponse>();

            // Step 3: Payment Key
            var paymentKeyResponse = await _httpClient.PostAsJsonAsync("acceptance/payment_keys", new
            {
                auth_token = authResult?.Token,
                amount_cents = amount * 100,
                expiration = 3600,
                order_id = orderResult?.Id,
                billing_data = new
                {
                    email,
                    phone_number = phone,
                    first_name = "Course User",
                    last_name = "Payment"
                },
                currency = "EGP",
                integration_id = _paymobConfig.IntegrationId
            });

            var paymentKeyResult = await paymentKeyResponse.Content.ReadFromJsonAsync<PaymentKeyResponse>();

            return $"https://accept.paymob.com/api/acceptance/iframes/{_paymobConfig.IframeId}?payment_token={paymentKeyResult?.Token}";
        }

        public async Task<bool> VerifyPaymentAsync(string transactionId)
        {
            // Verify using Paymob's transaction API
            var response = await _httpClient.GetAsync($"acceptance/transactions/{transactionId}");
            var result = await response.Content.ReadFromJsonAsync<TransactionResponse>();
            return result?.Success ?? false;
        }

    }
}
