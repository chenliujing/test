interface UploadUserFile {
    name: string;
    percentage: number;
    raw: File;
    response: {
      isSuccess: boolean;
      result: string;
      msg: string | null;
    };
    size: number;
    status: string;
    uid: number;
  }