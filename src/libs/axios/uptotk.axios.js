import {generateAxios} from "./index";
import FormData from 'form-data';

export const uptotkUploadPostAxios = ({ form, files }) => {
  const formData = new FormData();
  formData.append('authMethod', form.authMethod);
  formData.append('password', form.password);
  formData.append('expiredDate', form.expiredDate);
  formData.append('downloadLimit', form.downloadLimit);
  files.forEach(file => {
    formData.append('files', file.originFileObj);
  })

  return generateAxios().post('/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}