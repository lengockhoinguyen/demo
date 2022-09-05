import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any [],Search:string ): any[] {
    // kiểm tra input nhập vào nếu rỗng sẽ trả về lại mãng sản phẩm
    if(!Search) return array;
    //dùng hàm filter lọc mảng sản phẩm , mỗi lần hàm chạy sẽ trả về 1 item đc gán = tên sản phẩm trong mảng
    return array.filter((item)=>{
      return item.name.toLowerCase().includes(Search.toLowerCase())
    })
  }

}
