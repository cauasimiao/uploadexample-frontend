import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    }).catch(error => error);
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();
