import {Injectable} from '@angular/core';
import {Asset} from '../app/dashboard/asset.interface';

@Injectable()
export class AssetService {

  RECORDS: Asset[] = [
    {id: 10001, assetNo: 'ASSET-10001', description: 'Computer'},
    {id: 10002, assetNo: 'ASSET-10002', description: 'Computer - Laptop'},
  ];

  constructor() {
    // no op
  }

  findAssets(): Asset[] {
    return this.RECORDS;
  }
}
