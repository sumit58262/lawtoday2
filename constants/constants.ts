export class DeviceInfo {
  name: string;
  token: string;
  constructor(token: string, name: string) {
    this.token = token;
    this.name = name;
  }
}

export class userDetails {
  email: string;
  name: string;
  id:string;
  phone: number;
  get_start: number;
  constructor(
    email?: string,
    name?: string,
    id?:string,
    phone?:number,
    get_start?: number
  ) {
    this.email = email;
    this.name = name;
    this.id = id;
    this.phone = phone;
    this.get_start = get_start;
  }
}
export class Categories {
  id: number;
  title: string;
  arb_title: string;
  slug: string;
  parent: number;
  leval: number;
  description: string;
  image: string;
  image2: string;
  image2_status: number ;
  status: number;
  Count: number;
  PCount: number;
}
  