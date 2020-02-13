import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BeerServiceService {
     filter;
     perpage;
     constructor(private httpclient: HttpClient) {}
     getPosts(page?) {
      if (!page) { // Specifies the initial page number.
        page = 1;
      }
      // Preparing the URL with parameters.
      let url = "https://api.punkapi.com/v2/beers?page=" + page + "&per_page=" + this.perpage;
      
      // Updating URL with filter parameter
      if (this.filter != null) {
       url = url + "&" + this.filter.join('&');
     }
      console.log(url);
      return this.httpclient.get(url);

  }
}
