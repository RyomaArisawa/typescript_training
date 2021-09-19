export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;

type NullableTypes = string | null | undefined;
type NonNullableTyeps = NonNullable<NullableTypes>;
