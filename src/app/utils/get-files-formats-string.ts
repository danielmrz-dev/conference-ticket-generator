import { ElementRef } from "@angular/core";

export function getImageFormatString(fileInput: ElementRef<HTMLInputElement>): string {
    let fileType: string = '';
    if (fileInput.nativeElement.files) {
        const file = fileInput.nativeElement.files[0];
        switch (file.type) {
            case 'image/jpeg':
                fileType = "JPEG";
                break;
            case 'image/png':
                fileType = "PNG";
                break;
            case 'image/gif':
                fileType = "GIF";
                break;
            case 'image/webp':
                fileType = "WEBP";
                break;
            case 'image/bmp':
                fileType = "BMP";
                break;
            case 'image/tiff':
                fileType = "TIFF";
                break;
            case 'image/svg+xml':
                fileType = "SVG";
                break;
            case 'application/pdf':
                fileType = "PDF";
                break;
            case 'text/plain':
                fileType = "TXT";
                break;
            case 'text/csv':
                fileType = "CSV";
                break;
            case 'application/msword':
                fileType = "DOC";
                break;
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                fileType = "DOCX";
                break;
            case 'application/vnd.ms-excel':
                fileType = "XLS";
                break;
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
                fileType = "XLSX";
                break;
            case 'application/vnd.ms-powerpoint':
                fileType = "PPT";
                break;
            case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
                fileType = "PPTX";
                break;
            case 'audio/mpeg':
                fileType = "MP3";
                break;
            case 'audio/wav':
                fileType = "WAV";
                break;
            case 'audio/ogg':
                fileType = "OGG";
                break;
            case 'video/mp4':
                fileType = "MP4";
                break;
            case 'video/webm':
                fileType = "WEBM";
                break;
            case 'video/ogg':
                fileType = "OGG";
                break;
            case 'application/zip':
                fileType = "ZIP";
                break;
            case 'application/x-rar-compressed':
                fileType = "RAR";
                break;
            case 'font/woff':
                fileType = "WOFF";
                break;
            case 'font/woff2':
                fileType = "WOFF2";
                break;
            case 'application/font-woff':
                fileType = "WOFF";
                break;
            case 'application/font-woff2':
                fileType = "WOFF2";
                break;
            case 'text/javascript':
                fileType = "JS";
                break;
            case 'application/json':
                fileType = "JSON";
                break;
            case 'text/css':
                fileType = "CSS";
                break;
            case 'application/x-sh':
                fileType = "SH";
                break;
            default:
                fileType = "UNKNOWN";
                break;
        }
    }
    return fileType;
}
