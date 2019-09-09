import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {EmployeeService} from '../services/employee.service';
import {NotificationService} from '../services/notification.service';
import {DialogService} from '../services/dialog.service';
import {CustomerComponent} from '../customer/customer.component';
import {EmployeeComponent} from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;
  employees: Array<any>;
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['id' , 'fullname' , 'nic' , 'address' , 'mobile' , 'email' , 'companyId', 'actions'];
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  searchKey: string;
  constructor(
    private emplyeeService: EmployeeService,
    private notificationService: NotificationService,
    private dialogService: DialogService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.emplyeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
    });

    this.emplyeeService.getAllEmployees().subscribe( list => {
      this.listData = new MatTableDataSource<any>(list);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  remove(id: string) {
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
      if (res) {
        this.emplyeeService.deleteEmployee(id).subscribe(result => {
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
    this.emplyeeService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(EmployeeComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  onEdit(row) {
    this.emplyeeService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(EmployeeComponent, dialogConfig).afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  refresh() {
    this.emplyeeService.getAllEmployees().subscribe(
      list => {
        this.listData = new MatTableDataSource(list);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }
}
