import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import {
  Injectable
} from "@angular/core";
import {
  Platform
} from "ionic-angular";
import { DatePipe } from "@angular/common";
import "rxjs/add/operator/map";
import { CONFIG } from "../constants/config";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/timeout";
import { Subscription } from "rxjs/Subscription";

@Injectable()
export class WebServiceProvider {
  endPointApiUrl: String = "";
  baseCountry: String = "";
  isLogin: boolean = false;
  userInfo: any = {};
  isConnect: boolean = false;
  connected: Subscription;
  disconnected: Subscription;
  dp = new DatePipe("en-US");

  static headers: any = { "Content-Type": "application/json" };
  localCountries: any = "assets/data/countries.json";

  constructor(
    public http: HttpClient,
    public platform: Platform
  ) {

  }

  /**
   * Method to call any API with following parameters
   *
   * @param apiPath - Path of API to call
   * @param body - Body or data to be send to API for processing for POST APIs
   * @param get_params - Query string params for GET APIs
   */
  public callAPI(apiPath: any, body: any, get_params: any) {
    let h = new HttpHeaders(WebServiceProvider.headers);
    let opt: any = {};
    opt.headers = h;
    if (apiPath.METHOD == "GET") {
      let url = apiPath.URL + get_params;
      return this.http.get(url, opt);
    }
    if (apiPath.METHOD == "PUT") {
      let url = apiPath.URL + get_params;
      return this.http.put(url, body, opt);
    }
    if (apiPath.METHOD == "POST") {
      let url = apiPath.URL;
      if (get_params && get_params.length > 0) {
        for (let i = 0; i < get_params.length; i++) {
          url = url.replace("{param" + (i + 1) + "}", get_params[i]);
        }
      }
      return this.http.post(url, body, opt);
    }
    if (apiPath.METHOD == "DELETE") {
      let url = apiPath.URL + get_params;
      return this.http.delete(url, opt);
    }
  }

  login(data) {
    let url: string = CONFIG.API_LOGIN_URL;
    return this.http.post(url, data || {}, {
      headers: WebServiceProvider.headers
    });
  }

  register(data) {
    let url: string = CONFIG.API_REGISTER_URL;
    return this.http.post(url, data || {}, {
      headers: WebServiceProvider.headers
    });
  }

  uploadDocuments(data) {
    let url: string = CONFIG.API_UPLOAD_DOCUMENTS_URL;
    return this.http.post(url, data || {}, {
      headers: WebServiceProvider.headers
    });
  }
}
