import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }
 //newsapiurl
  newsApiUrl ="https://newsapi.org/v2/top-headlines?country=in&apiKey=8102724356ba4f7c95a8c2ec6443b827"
  //technewsapiurl
  techApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technologyapiKey=8102724356ba4f7c95a8c2ec6443b827"
  //topheading ()
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }
}
