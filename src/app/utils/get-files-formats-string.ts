import { ElementRef } from "@angular/core";

export function getImageFormatString(fileInput: ElementRef<HTMLInputElement>): string {
    let fileType: string = '';
    if (fileInput.nativeElement.files && fileInput.nativeElement.files[0]) {
        const file = fileInput.nativeElement.files[0];
        switch (file.type) {
            case 'image/jpeg': return "JPEG";
            case 'image/png': return "PNG";
            case 'image/gif': return "GIF";
            case 'image/webp': return "WEBP";
            case 'image/bmp': return "BMP";
            case 'image/tiff': return "TIFF";
            case 'image/svg+xml': return "SVG";
            case 'application/pdf': return "PDF";
            case 'text/plain': return "TXT";
            case 'text/csv': return "CSV";
            case 'application/msword': return "DOC";
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': return "DOCX";
            case 'application/vnd.ms-excel': return "XLS";
            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': return "XLSX";
            case 'application/vnd.ms-powerpoint': return "PPT";
            case 'application/vnd.openxmlformats-officedocument.presentationml.presentation': return "PPTX";
            case 'audio/mpeg': return "MP3";
            case 'audio/wav': return "WAV";
            case 'audio/ogg': return "OGG";
            case 'video/mp4': return "MP4";
            case 'video/webm': return "WEBM";
            case 'video/ogg': return "OGG";
            case 'application/zip': return "ZIP";
            case 'application/x-rar-compressed': return "RAR";
            case 'font/woff': return "WOFF";
            case 'font/woff2': return "WOFF2";
            case 'application/json': return "JSON";
            case 'text/javascript': return "JS";
            case 'text/css': return "CSS";
            case 'application/x-sh': return "SH";
            default: return "UNKNOWN";
        }
    }
    return fileType;
}
