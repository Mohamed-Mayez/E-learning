namespace E_learningPro.Core.Entities
{
    public class Chat
    {
        public int ChatID { get; set; }
        public int SenderID { get; set; }
        public int ReceiverID { get; set; }
        public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;
        public ApplicationUser Sender { get; set; } = null!;
        public ApplicationUser Receiver { get; set; } = null!;
    }
}