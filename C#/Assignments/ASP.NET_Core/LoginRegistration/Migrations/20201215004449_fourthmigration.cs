using Microsoft.EntityFrameworkCore.Migrations;

namespace LoginRegistration.Migrations
{
    public partial class fourthmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UserTransactions_Users_UserId",
                table: "UserTransactions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserTransactions",
                table: "UserTransactions");

            migrationBuilder.DropColumn(
                name: "Balance",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "UserTransactions",
                newName: "UsersTransactions");

            migrationBuilder.RenameIndex(
                name: "IX_UserTransactions_UserId",
                table: "UsersTransactions",
                newName: "IX_UsersTransactions_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UsersTransactions",
                table: "UsersTransactions",
                column: "TransactionId");

            migrationBuilder.AddForeignKey(
                name: "FK_UsersTransactions_Users_UserId",
                table: "UsersTransactions",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UsersTransactions_Users_UserId",
                table: "UsersTransactions");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UsersTransactions",
                table: "UsersTransactions");

            migrationBuilder.RenameTable(
                name: "UsersTransactions",
                newName: "UserTransactions");

            migrationBuilder.RenameIndex(
                name: "IX_UsersTransactions_UserId",
                table: "UserTransactions",
                newName: "IX_UserTransactions_UserId");

            migrationBuilder.AddColumn<double>(
                name: "Balance",
                table: "Users",
                type: "double",
                nullable: false,
                defaultValue: 0.0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserTransactions",
                table: "UserTransactions",
                column: "TransactionId");

            migrationBuilder.AddForeignKey(
                name: "FK_UserTransactions_Users_UserId",
                table: "UserTransactions",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
