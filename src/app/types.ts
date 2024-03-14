export type Message = {
  title: string;
  lead: string;
  message: string;
}

export type Recruit = {
  message: string;
  recruit: {
    type: string;
    items: {
      key: string;
      value: string;
    }[]
  }[];
}
