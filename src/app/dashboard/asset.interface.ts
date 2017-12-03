export interface Asset {
  id: number;             // unique id
  assetNo: string;        // asset identification no
  description: string;    // asset description
  checkedInDate?: Date;  // optional property
  checkedOutDate?: Date; // optional property
}
