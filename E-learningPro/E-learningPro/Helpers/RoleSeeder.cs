using Microsoft.AspNetCore.Identity;

namespace E_learningPro.Helpers
{
    public class RoleSeeder
    {
        public static async Task SeedRolesAsync(IServiceProvider serviceProvider)
        {
            try
            {
                var roleManager = serviceProvider.GetService<RoleManager<IdentityRole<int>>>();
                if (roleManager == null)
                {
                    throw new InvalidOperationException("RoleManager<IdentityRole> is not registered in the DI container.");
                }

                string[] roles = { "Admin", "Instructor", "Learner" };

                foreach (var role in roles)
                {
                    if (!await roleManager.RoleExistsAsync(role))
                    {
                        await roleManager.CreateAsync(new IdentityRole<int>(role));
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error in SeedRolesAsync: {ex.Message}");
                throw;
            }
        }

    }
}
