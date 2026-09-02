export type Coordinator={id?:string;name:string;phone?:string;email?:string}
export type Event={id:string;slug:string;name:string;category:string;description:string|null;date:string|null;time:string|null;venue:string|null;rules:string[];instructions:string|null;image_url:string|null;status:string;coordinators?:Coordinator[]}
