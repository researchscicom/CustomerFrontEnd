import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProductService} from '../services/product.service';
import {NotificationService} from '../services/notification.service';
import {DialogService} from '../services/dialog.service';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  products: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'cost', 'quantity', 'description', 'actions'];

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;

  constructor(
    private productService: ProductService ,
    private dialog: MatDialog,
    private notificationService: NotificationService,
    private dialogService: DialogService) { }
  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });

    this.productService.getAllProducts().subscribe(
      list => {
        this.listData = new MatTableDataSource(list);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  remove(id: string) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
      if (res) {
        this.productService.deleteProduct(id).subscribe(result => {
        }, error => console.error(error));
        this.ngOnInit();
        this.notificationService.warn('Successfully Deleted!');
      }
      this.refresh();

    });
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.productService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ProductComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(row) {
    this.productService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(ProductComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  refresh() {
    this.productService.getAllProducts().subscribe(
      list => {
        this.listData = new MatTableDataSource(list);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

}
