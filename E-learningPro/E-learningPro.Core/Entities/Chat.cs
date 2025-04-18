namespace E_learningPro.Core.Entities
{
    public class Chat : BaseEntity
    {
        public int ChatID { get; set; }
        public int SenderID { get; set; }
        public int ReceiverID { get; set; }
        public ApplicationUser Sender { get; set; } = null!;
        public ApplicationUser Receiver { get; set; } = null!;
    }
}