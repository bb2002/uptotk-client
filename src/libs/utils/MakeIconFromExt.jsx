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

export const makeIconFromExt = (ext, style) => {
  ext = ext.replace('.', '')
  ext = ext.toLowerCase()

  switch (ext) {
    case 'png':
    case 'bmp':
      return <FileImageOutlined style={style}/>
    case 'jpg':
    case 'jpeg':
      return <FileJpgOutlined style={style}/>
    case 'gif':
      return <FileGifOutlined style={style} />
    case 'xls':
    case 'xlsx':
    case 'cell':
      return <FileExcelOutlined style={style} />
    case 'md':
      return <FileMarkdownOutlined style={style}/>
    case 'pdf':
      return <FilePdfOutlined style={style}/>
    case 'ppt':
    case 'pptx':
    case 'show':
      return <FilePptOutlined style={style}/>
    case 'txt':
      return <FileTextOutlined style={style}/>
    case 'hwp':
    case 'doc':
    case 'docx':
      return <FileWordOutlined style={style}/>
    case 'zip':
    case 'egg':
    case 'alz':
    case 'rar':
    case 'tar':
    case 'gz':
    case 'iso':
    case '7z':
      return <FileZipOutlined style={style}/>
    case 'mp3':
    case 'wav':
    case 'ogg':
    case 'flac':
    case 'wma':
      return <AudioOutlined style={style}/>
    case 'mp4':
    case 'avi':
    case 'mkv':
    case 'wmv':
    case 'mov':
    case 'ts':
    case 'flv':
    case '3gp':
      return <VideoCameraOutlined style={style}/>
    default:
      return <FileOutlined style={style} />
  }
}