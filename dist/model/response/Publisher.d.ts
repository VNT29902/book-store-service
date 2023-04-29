export interface Publisher {
    name: string;
    phone: string;
    address?: string;
    email?: string;
    sortingAlias?: string;
    isDelete?: boolean;
    createdDate?: Date;
    updatedDate?: Date;
    deletedDate?: Date;
}
