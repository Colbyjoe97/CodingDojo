#pragma checksum "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "25f9cddac2c3235a74bc0ad72c680ae004252d99"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_ViewChefs), @"mvc.1.0.view", @"/Views/Home/ViewChefs.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\_ViewImports.cshtml"
using CRUDelicious;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\_ViewImports.cshtml"
using CRUDelicious.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"25f9cddac2c3235a74bc0ad72c680ae004252d99", @"/Views/Home/ViewChefs.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"815eae4269ab1eac71e8261ccfa9294c33285639", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_ViewChefs : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Chef>>
    {
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25f9cddac2c3235a74bc0ad72c680ae004252d993370", async() => {
                WriteLiteral("\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Document</title>\r\n");
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.HeadTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_HeadTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "25f9cddac2c3235a74bc0ad72c680ae004252d994481", async() => {
                WriteLiteral("\r\n");
#nullable restore
#line 11 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml"
     foreach(Chef c in Model)
    {

#line default
#line hidden
#nullable disable
                WriteLiteral("    <div class=\"card col-4\">\r\n        <div class=\"card-body\">\r\n            <h2 class=\"card-title text-center\">");
#nullable restore
#line 15 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml"
                                          Write(c.FirstName);

#line default
#line hidden
#nullable disable
                WriteLiteral(" ");
#nullable restore
#line 15 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml"
                                                       Write(c.LastName);

#line default
#line hidden
#nullable disable
                WriteLiteral("</h2>\r\n            <h4 class=\"card-subtitle text-muted text-center\">Number of dishes: ");
#nullable restore
#line 16 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml"
                                                                          Write(c.CreatedDishes.Count);

#line default
#line hidden
#nullable disable
                WriteLiteral("</h4>\r\n            <table class=\"table table-hover\">\r\n                <thead>\r\n                    <th>Name</th>\r\n                    <th>Calories</th><br>\r\n                </thead>\r\n                <tbody>\r\n");
#nullable restore
#line 23 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml"
                     foreach(Dish d in c.CreatedDishes)
                    {

#line default
#line hidden
#nullable disable
                WriteLiteral("                        <tr>\r\n                            <td>");
#nullable restore
#line 26 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml"
                           Write(d.Name);

#line default
#line hidden
#nullable disable
                WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 27 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml"
                           Write(d.Calories);

#line default
#line hidden
#nullable disable
                WriteLiteral("</td>\r\n                        </tr>\r\n");
#nullable restore
#line 29 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml"
                    }

#line default
#line hidden
#nullable disable
                WriteLiteral("                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n");
#nullable restore
#line 34 "C:\Users\dumon\OneDrive\Desktop\Coding_Dojo\C#\Assignments\ASP.NET_Core\CRUDelicious\Views\Home\ViewChefs.cshtml"
    }

#line default
#line hidden
#nullable disable
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</html>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Chef>> Html { get; private set; }
    }
}
#pragma warning restore 1591
