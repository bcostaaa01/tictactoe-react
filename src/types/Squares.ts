export type Squares = {
  [index: number]: string | null;
};

export type SquareProps = {
  value: string | null;
  onClick: () => void;
};
