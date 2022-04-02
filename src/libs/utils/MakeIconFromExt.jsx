import {
  AudioOutlined,
  FileExcelOutlined,
  FileGifOutlined,
  FileImageOutlined,
  FileJpgOutlined,
  FileMarkdownOutlined, FileOutlined,
  FilePdfOutlined,
  FilePptOutlined,
  FileTextOutlined,
  FileWordOutlined,
  FileZipOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";

export const makeIconFromExt = (ext) => {
  ext = ext.replace('.', '')
  ext = ext.toLowerCase()

  switch (ext) {
    case 'png':
    case 'bmp':
      return <FileImageOutlined />
    case 'jpg':
    case 'jpeg':
      return <FileJpgOutlined />
    case 'gif':
      return <FileGifOutlined />
    case 'xls':
    case 'xlsx':
    case 'cell':
      return <FileExcelOutlined />
    case 'md':
      return <FileMarkdownOutlined />
    case 'pdf':
      return <FilePdfOutlined />
    case 'ppt':
    case 'pptx':
    case 'show':
      return <FilePptOutlined />
    case 'txt':
      return <FileTextOutlined />
    case 'hwp':
    case 'doc':
    case 'docx':
      return <FileWordOutlined />
    case 'zip':
    case 'egg':
    case 'alz':
    case 'rar':
    case 'tar':
    case 'gz':
    case 'iso':
    case '7z':
      return <FileZipOutlined />
    case 'mp3':
    case 'wav':
    case 'ogg':
    case 'flac':
    case 'wma':
      return <AudioOutlined />
    case 'mp4':
    case 'avi':
    case 'mkv':
    case 'wmv':
    case 'mov':
    case 'ts':
    case 'flv':
    case '3gp':
      return <VideoCameraOutlined />
    default:
      return <FileOutlined />
  }
}