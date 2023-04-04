export interface Product {
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

  // constructor() {
  //   this.name = 'HOW MONEY WORKS - HIỂU HẾT VỀ TIỀN';
  //   this.sortingAlias = 'HOW MONEY WORKS - HIEERU HEEST VEEF TIEEFN';
  //   this.price = 240000;
  //   this.description =
  //     'Cẩm nang giới đơn giản, dễ hình dung nhất từ trước đến nay về tiền tệ và hệ thống tài chính thế giới.   Tiền đến từ đâu? Sự khác biệt giữa giàu có và thu nhập là gì? Các chính phủ kiểm soát tiền tệ như thế nào? Tại sao một khoản nợ lại là tốt?   How money works - Hiểu hết về tiền tìm hiểu cách thức các chính phủ kiểm soát tiền tệ, cách các công ty kiếm ra tiền, cách các thị trường tài chính vận hành, cách các cá nhân tối đa hóa thu nhập thông qua đầu tư…   Đưa ra định nghĩa cho hàng trăm khái niệm, cùng với những kiến thức nền tảng nhất về các hệ thống tài chính, như trái phiếu, cổ phiếu, tiền mã hóa, bitcoin, quản lý nợ, tránh vỡ nợ trực tuyến và gọi vốn cộng đồng, cũng như cách tiền vận hành thế giới.';
  //   this.images = [
  //     'https://firebasestorage.googleapis.com/v0/b/read-your-life.appspot.com/o/How-money-works.jpg?alt=media&token=bd40d0fc-94ba-49b5-8583-00fc85de6b9f',
  //   ];
  //   this.size = '19.5x23';
  //   this.publisher = 'pushlisher_id_ref';
  //   this.publishDate = new Date('2023/04/02 12:45:34');
  //   this.createdDate = new Date('2023/04/02 12:45:34');
  //   this.updatedDate = new Date('2023/04/02 12:45:34');
  //   this.deletedDate = new Date('2023/04/02 12:45:34');
  //   this.isDeleted = false;
  // }
}
