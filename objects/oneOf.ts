type ValueOf<T> = T[keyof T];

type OneOnly<T, Key extends keyof T> = {
  [key in Exclude<keyof T, Key>]+?: null | undefined;
} & Pick<T, Key>;

type OneOfByKey<T> = { [key in keyof T]: OneOnly<T, key> };

export type OneOf<T> = ValueOf<OneOfByKey<T>>;
