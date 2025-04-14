using E_learningPro.Core.Entities;
using E_learningPro.Helpers;
using E_LearningPro.Data;
using E_LearningPro.Services.Interfaces;
using E_LearningPro.Services.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace E_learningPro
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllersWithViews();
            // Connection to the database
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
                     options.UseSqlServer(builder.Configuration.GetConnectionString("MohamedlDb"),sql => sql.MigrationsAssembly("E-LearningPro.Data")));
            // Add Identity
            builder.Services.AddIdentity<ApplicationUser, IdentityRole<int>>()
                            .AddEntityFrameworkStores<ApplicationDbContext>()
                            .AddDefaultTokenProviders();
            

            // My Services ///////////////////////////////////////////////////////
            builder.Services.AddScoped<IAccountService, AccountService>();

            //////////////////////////////////////////////////////////////////////
            var app = builder.Build();
            // Seeding Roles
            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                await RoleSeeder.SeedRolesAsync(services);
            }
            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");

            app.Run();
        }
    }
}
