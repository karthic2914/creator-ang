//Injectable is a decroator
import { Injectable } from '@angular/core';
//import invention class
import { Maker } from './creator/marker.class';

@Injectable()
  export class MakerService {
//raw data for servie
  rawMakers : Maker[] = [
   {
     id:1,
     name : 'Telephone',
     inventor : 'Alexander Graham Bell',
     year : '1885',
     description :'Alexander Graham Bell has a patent granted for the telephone.'
   } ,
   {
     id:2,
     name : 'Light',
     inventor : 'Thomas Edison',
     year: '1879',
     description:'Thomas Edison invents the first working phonograph.'
   } ,
   {
     id:3,
     name : 'Four - Stroke Cycle',
     inventor : 'Nikolaus August Otto',
     year : '1876',
     description:'Nikolaus August Otto invents the Four-stroke cycle.'
   }
 ]
constructor() { }
// define a getMakers() method to get the default makers
getMakers() : Maker[]{
  return this.rawMakers;
}

makerDetail(id) : Maker{
  for (let i = 0; i < this.rawMakers.length; i++) {
      if (this.rawMakers[i].id == id) {
          return this.rawMakers[i];
      }
  }
  return null
}
}
