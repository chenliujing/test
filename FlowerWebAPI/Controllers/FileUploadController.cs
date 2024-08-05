using FlowerWebAPI.Config;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Logging;
using Microsoft.Net.Http.Headers;
using Model.Other;
using System.IO;
using System.Threading.Tasks;

namespace FlowerWebAPI.Controllers
{
    /// <summary>
    /// controller for upload large file
    /// </summary>
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class FileUploadController : ControllerBase
    {
        private readonly ILogger<FileUploadController> _logger;

        public FileUploadController(ILogger<FileUploadController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Action for upload large file
        /// </summary>
        /// <remarks>
        /// Request to this action will not trigger any model binding or model validation,
        /// because this is a no-argument action
        /// </remarks>
        /// <returns></returns>
        [HttpPost]
        [Route(nameof(UploadLargeFile))]
        public async Task<ApiResult> UploadLargeFile()
        {
            var request = HttpContext.Request;

            // 验证 Content-Type
            if (!request.HasFormContentType ||
                !MediaTypeHeaderValue.TryParse(request.ContentType, out var mediaTypeHeader) ||
                string.IsNullOrEmpty(mediaTypeHeader.Boundary.Value))
            {
                return ResultHelper.Error("不支持的文件类型");
            }

            var boundary = HeaderUtilities.RemoveQuotes(mediaTypeHeader.Boundary.Value).Value;
            var reader = new MultipartReader(boundary, request.Body);
            var section = await reader.ReadNextSectionAsync();

            // 处理每个表单部分
            while (section != null)
            {
                var hasContentDispositionHeader = ContentDispositionHeaderValue.TryParse(section.ContentDisposition,
                    out var contentDisposition);

                if (hasContentDispositionHeader && contentDisposition.DispositionType.Equals("form-data") &&
                    !string.IsNullOrEmpty(contentDisposition.FileName.Value))
                {
                    // 可选: 验证文件类型和大小
                    var fileName = contentDisposition.FileName.Value;
                    var fileExtension = Path.GetExtension(fileName).ToLowerInvariant();

                    if (!IsValidFileType(fileExtension) || section.Body.Length > MaxFileSize)
                    {
                        return ResultHelper.Error("不支持的文件类型或文件过大");
                    }

                    // 生成服务器上的保存路径
                    var uploadPath = Path.Combine(@"D:\vscodeprojects\FlowerUI\vue-FlowerUI\public\Img\Flower", fileName); // 指定保存路径
                    var directoryPath = Path.GetDirectoryName(uploadPath);

                    // 确保目录存在
                    if (!Directory.Exists(directoryPath))
                    {
                        Directory.CreateDirectory(directoryPath);
                    }

                    // 保存文件
                    using (var targetStream = System.IO.File.Create(uploadPath))
                    {
                        await section.Body.CopyToAsync(targetStream);
                    }
                    var virtualPath = $"/Img/Flower/{fileName}";
                    return ResultHelper.Success(virtualPath);
                }

                section = await reader.ReadNextSectionAsync();
            }

            return ResultHelper.Error("No files data in the request.");
        }
   
        // 验证文件类型
        private bool IsValidFileType(string fileExtension)
        {
            var allowedExtensions = new[] { ".jpg", ".png", ".pdf" }; // 添加你允许的文件扩展名
            return allowedExtensions.Contains(fileExtension);
        }

        // 最大允许文件大小（字节）
        private const long MaxFileSize = 10 * 1024 * 1024; // 10 MB
    }
}