import {Component, OnDestroy, OnInit} from '@angular/core';
import {Asset} from './asset.interface';
import {AssetService} from '../../services/asset.service';

@Component({
  selector: 'qs-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

  // numeric/integer
  recordCount: number;

  // numeric/decimal
  timeLoaded: number;

  // date
  approvedDate: Date;

  // string
  officerName: string;

  // boolean
  loaned: boolean;

  // declare array of asset
  records: Asset[] = [
    {id: 10001, assetNo: 'ASSET-10001', description: 'Computer - Desktop HP2011'},
    {id: 10002, assetNo: 'ASSET-10002', description: 'Computer - Laptop HP12GX'},
    {id: 10003, assetNo: 'ASSET-10003', description: 'Computer - Server HP4551 XEON'},
    {id: 10004, assetNo: 'ASSET-10004', description: 'Computer - IPAD'},
    {id: 10005, assetNo: 'ASSET-10005', description: 'Communication Device - Samsung Galaxy '},
  ];

  fromServiceRecords: Asset[];

  // constructor
  constructor(private assetService: AssetService) {
    // no op

    this.recordCount = 10;
    this.timeLoaded = 10.01012;
    this.approvedDate = new Date();
    this.officerName = 'ZAKI ZUBAHIR';
    this.loaned = true;
    this.loadAssets();

    // print asset
    this.log({id: 1010, assetNo: 'ASSET-1212', description: 'Set top box - KODI'});
  }

  loadAssets(): void {
    this.fromServiceRecords = this.assetService.findAssets();

    // loop thru assets
    this.fromServiceRecords.forEach((asset: Asset) => this.log(asset));
  }

  ngOnInit(): void {
    // no op
  }

  ngOnDestroy(): void {
    // no op
  }

  log(asset: Asset): void {
    console.log(JSON.stringify(asset));
  }
}
