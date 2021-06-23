using Microsoft.EntityFrameworkCore.Migrations;

namespace ProductsAndCategories.Migrations
{
    public partial class updatedMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_associations_CategoryId",
                table: "associations",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_associations_ProductId",
                table: "associations",
                column: "ProductId");

            migrationBuilder.AddForeignKey(
                name: "FK_associations_categories_CategoryId",
                table: "associations",
                column: "CategoryId",
                principalTable: "categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_associations_products_ProductId",
                table: "associations",
                column: "ProductId",
                principalTable: "products",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_associations_categories_CategoryId",
                table: "associations");

            migrationBuilder.DropForeignKey(
                name: "FK_associations_products_ProductId",
                table: "associations");

            migrationBuilder.DropIndex(
                name: "IX_associations_CategoryId",
                table: "associations");

            migrationBuilder.DropIndex(
                name: "IX_associations_ProductId",
                table: "associations");
        }
    }
}
