import { Timestamp } from 'firebase-admin/firestore';

export interface Product {
  documentID?: string;
  name: string;
  sortingAlias?: string;
  price: number;
  description?: string;
  images?: string[];
  size?: string;
  publisher?: string;
  publishDate?: Timestamp;
  createdDate?: Timestamp;
  updatedDate?: Timestamp;
  deletedDate?: Timestamp;
  isDeleted?: boolean;
}
