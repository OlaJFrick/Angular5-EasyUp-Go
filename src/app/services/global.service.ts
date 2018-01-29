import { Injectable } from '@angular/core';

@Injectable()

export class GlobalService {
  defaultLanguage = 'eng';
  company = {
    name: 'refreshed',
    email: 'info@refreshed.se'
  };
}
