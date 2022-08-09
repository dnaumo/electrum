interface IExpiration {
  value: number;
  title: string;
}

export const expirations: IExpiration[] = [
  {
    value: 0,
    title: "Never",
  },
  {
    value: 600,
    title: "10 minute",
  },
  {
    value: 86400,
    title: "1 day",
  },
];
