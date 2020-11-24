export interface BlogPost {
    title: string;
    body: any;
    isPublished: boolean; // is the blog in draft state or publicly viewable?
    updatedOn: any;
    createdOn: any;
    uid: string;
    image:string;
    authorImage:string;
    authorName:string;
    authorTitle:string
  }
  