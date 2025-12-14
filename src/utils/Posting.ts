export type Tag = "모집중" | "모집완료";

export interface Posting{
    id:string;
    region:string;
    title:string;
    date:string;

    //게시글 내용
    tag?: Tag;
    company?:string;
    link?:string;
    manager?:string;
    location?:string;
    locationDetail?:string;
    phone?:string;
    email?:string;
    description?:string;
    images?:string[];
    warnings?:string[];
    likes?:number;
    comments?:number;
    shares?:number;
};

export interface Volunteer extends Posting{
    recruit?:string;
    activity?:string;
}

export interface Donation extends Posting{
    share?:string;
}