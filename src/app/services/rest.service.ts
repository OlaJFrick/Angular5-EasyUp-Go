import { Injectable } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
import { Textcontent } from '../classes/textcontent';
import { PrimaryTextData } from '../data/primary-text-data';
import { SecondaryTextData } from '../data/secondary-text-data';

@Injectable()

export class RestService {

  getAppData(language: string): Promise<Textcontent[]> {
    let languageQuery;

    if (language === 'swe') {
      languageQuery = SecondaryTextData;
    } else {
      languageQuery = PrimaryTextData;
    }
    return Promise.resolve(languageQuery);
  }

}
