export interface ResponseProduct {
    documentID: string;
    name?: string;
    sortingAlias?: string;
    price?: number;
    description?: string;
    images?: string[];
    size?: string;
    publisher?: string;
    publishDate?: Date;
    createdDate?: Date;
    updatedDate?: Date;
    deletedDate?: Date;
    isDeleted?: boolean;
}
