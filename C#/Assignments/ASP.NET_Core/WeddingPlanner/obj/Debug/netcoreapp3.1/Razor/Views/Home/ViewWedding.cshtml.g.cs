#pragma checksum "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8713c2da1d3584eabb3eea4872246a51ec97ca4c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_ViewWedding), @"mvc.1.0.view", @"/Views/Home/ViewWedding.cshtml")]
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
#line 1 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\_ViewImports.cshtml"
using WeddingPlanner;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\_ViewImports.cshtml"
using WeddingPlanner.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8713c2da1d3584eabb3eea4872246a51ec97ca4c", @"/Views/Home/ViewWedding.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9e9e38482b8beecdb199b7be73dfa5c3d6a2f574", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_ViewWedding : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
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
            WriteLiteral("<!DOCTYPE html>\r\n<html lang=\"en\">\r\n");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("head", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8713c2da1d3584eabb3eea4872246a51ec97ca4c3296", async() => {
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
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "8713c2da1d3584eabb3eea4872246a51ec97ca4c4407", async() => {
                WriteLiteral("\r\n    <h1>");
#nullable restore
#line 9 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml"
   Write(ViewBag.ThisWedding.WedderOne);

#line default
#line hidden
#nullable disable
                WriteLiteral(" and ");
#nullable restore
#line 9 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml"
                                      Write(ViewBag.ThisWedding.WedderTwo);

#line default
#line hidden
#nullable disable
                WriteLiteral("\'s Wedding</h1>\r\n    <h2>");
#nullable restore
#line 10 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml"
   Write(ViewBag.ThisWedding.Date);

#line default
#line hidden
#nullable disable
                WriteLiteral("</h2>\r\n    <p>Guests:</p>\r\n");
#nullable restore
#line 12 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml"
     foreach(var a in Model.weddingLinks)
    {

#line default
#line hidden
#nullable disable
                WriteLiteral("        <p>");
#nullable restore
#line 14 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml"
      Write(a.attendee.FirstName);

#line default
#line hidden
#nullable disable
                WriteLiteral(" ");
#nullable restore
#line 14 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml"
                            Write(a.attendee.LastName);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n        <p>");
#nullable restore
#line 15 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml"
      Write(a.UserId);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n");
#nullable restore
#line 16 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml"
    }

#line default
#line hidden
#nullable disable
                WriteLiteral("    <p>Total guests: ");
#nullable restore
#line 17 "C:\Coding_Dojo\C#\Assignments\ASP.NET_Core\WeddingPlanner\Views\Home\ViewWedding.cshtml"
                Write(Model.weddingLinks.Count);

#line default
#line hidden
#nullable disable
                WriteLiteral("</p>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
