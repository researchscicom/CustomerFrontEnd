import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CustomerService} from '../services/customer.service';
import {NotificationService} from '../services/notification.service';
import {DialogService} from '../services/dialog.service';
import {CustomerComponent} from '../customer/customer.component';
import {ProductComponent} from '../product/product.component';
import {CustomerProductComponent} from '../customer-product/customer-product.component';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  customers: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'age', 'email', 'city', 'gender', 'proId', 'actions'];

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;

  constructor(
    private customerService: CustomerService ,
    private dialog: MatDialog,
    private productService: ProductService,
    private notificationService: NotificationService,
    private dialogService: DialogService) { }
  ngOnInit() {
    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
    });

    this.customerService.getCustomers().subscribe(
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
        this.customerService.deleteCustomer(id).subscribe(result => {
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
    this.customerService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CustomerComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(row) {
    this.customerService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CustomerComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  refresh() {
    this.customerService.getCustomers().subscribe(
      list => {
        this.listData = new MatTableDataSource(list);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

  viewProduct(row) {
    this.customerService.getProduct(row).subscribe( data => {
      if ( data != null ) {
        this.customerService.ProductSave(data);
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '40%';
        this.dialog.open(CustomerProductComponent, dialogConfig).afterClosed().subscribe(result => {
        });
      } else {
        this.notificationService.success('Product Not Found!');
      }
    });
  }


}
