using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BeltTest.Migrations
{
    public partial class RSVPId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RSVPS_Users_WatcherUserId",
                table: "RSVPS");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RSVPS",
                table: "RSVPS");

            migrationBuilder.DropIndex(
                name: "IX_RSVPS_WatcherUserId",
                table: "RSVPS");

            migrationBuilder.DropColumn(
                name: "WatcherId",
                table: "RSVPS");

            migrationBuilder.DropColumn(
                name: "WatcherUserId",
                table: "RSVPS");

            migrationBuilder.AddColumn<int>(
                name: "RSVPId",
                table: "RSVPS",
                nullable: false,
                defaultValue: 0)
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RSVPS",
                table: "RSVPS",
                column: "RSVPId");

            migrationBuilder.CreateIndex(
                name: "IX_RSVPS_UserId",
                table: "RSVPS",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_RSVPS_Users_UserId",
                table: "RSVPS",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RSVPS_Users_UserId",
                table: "RSVPS");

            migrationBuilder.DropPrimaryKey(
                name: "PK_RSVPS",
                table: "RSVPS");

            migrationBuilder.DropIndex(
                name: "IX_RSVPS_UserId",
                table: "RSVPS");

            migrationBuilder.DropColumn(
                name: "RSVPId",
                table: "RSVPS");

            migrationBuilder.AddColumn<int>(
                name: "WatcherId",
                table: "RSVPS",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

            migrationBuilder.AddColumn<int>(
                name: "WatcherUserId",
                table: "RSVPS",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_RSVPS",
                table: "RSVPS",
                column: "WatcherId");

            migrationBuilder.CreateIndex(
                name: "IX_RSVPS_WatcherUserId",
                table: "RSVPS",
                column: "WatcherUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_RSVPS_Users_WatcherUserId",
                table: "RSVPS",
                column: "WatcherUserId",
                principalTable: "Users",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
