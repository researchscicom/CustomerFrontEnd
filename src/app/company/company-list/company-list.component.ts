import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ProductService} from '../../services/product.service';
import {NotificationService} from '../../services/notification.service';
import {DialogService} from '../../services/dialog.service';
import {CustomerComponent} from '../../customer/customer.component';
import {CompanyService} from '../../services/company.service';
import {CompanyComponent} from '../company/company.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  customers: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'address', 'phone', 'email', 'actions'];

  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;

  constructor(
    private companyService: CompanyService ,
    private dialog: MatDialog,
    private productService: ProductService,
    private notificationService: NotificationService,
    private dialogService: DialogService) { }
  ngOnInit() {
    this.companyService.getAllCompanies().subscribe(data => {
      this.customers = data;
    });

    this.companyService.getAllCompanies().subscribe(
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
        this.companyService.deleteCompany(id).subscribe(result => {
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
    this.companyService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CompanyComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(row) {
    this.companyService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(CompanyComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  refresh() {
    this.companyService.getAllCompanies().subscribe(
      list => {
        this.listData = new MatTableDataSource(list);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }

}
