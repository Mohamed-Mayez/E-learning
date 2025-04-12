using E_learningPro.Core.Enums;

namespace E_learningPro.Core.Entities
{
    public class Message
    {
        public int MessageID { get; set; }
        public int ChatID { get; set; }
        public int SenderID { get; set; }
        public string MessageContent { get; set; } = string.Empty;
        public MessageType MessageType { get; set; } = MessageType.Text;
        public DateTime? SentAt { get; set; } = DateTime.UtcNow;
        public Chat Chat { get; set; } = null!;
        public ApplicationUser Sender { get; set; } = null!;
    }
}